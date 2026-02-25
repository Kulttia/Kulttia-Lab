/**
 * Kulttia Lab — WordPress REST API Integration
 * Conecta el frontend estático con el backend WordPress en cms.kulttia.com
 */

// =============================================
// CONFIGURACIÓN GLOBAL
// =============================================
const KULTTIA_CONFIG = {
    WP_API_URL: 'https://cms.kulttia.com/wp-json/wp/v2',
    WPFORMS_URL: 'https://cms.kulttia.com/wp-json/wpforms/v1',
    POSTS_PER_PAGE: 6,
    FEATURED_POSTS: 3,
    SITE_URL: 'https://kulttia.com',
    // Tiempo de caché en milisegundos (5 minutos)
    CACHE_TTL: 5 * 60 * 1000,
};

// =============================================
// CACHÉ EN MEMORIA
// =============================================
const _cache = new Map();

function cacheGet(key) {
    const item = _cache.get(key);
    if (!item) return null;
    if (Date.now() - item.ts > KULTTIA_CONFIG.CACHE_TTL) {
        _cache.delete(key);
        return null;
    }
    return item.data;
}

function cacheSet(key, data) {
    _cache.set(key, { data, ts: Date.now() });
}

/**
 * Fetch con AbortController timeout para no quedarse colgado en mobile.
 * Mobile tiene timeout más generoso porque la red es más lenta.
 * @param {string} url
 * @param {number} [timeoutMs] - ms antes de abortar (default: auto por conexión)
 */
async function fetchWithTimeout(url, timeoutMs) {
    // Detectar tipo de conexión si el API está disponible
    const isSlow = navigator.connection
        ? ['2g', 'slow-2g'].includes(navigator.connection.effectiveType)
        : false;
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);

    const timeout = timeoutMs || (isSlow ? 20000 : isMobile ? 12000 : 8000);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            signal: controller.signal,
            headers: { 'Accept': 'application/json' },
        });
        clearTimeout(timer);
        return response;
    } catch (err) {
        clearTimeout(timer);
        if (err.name === 'AbortError') {
            throw new Error('TIMEOUT: La solicitud tardó demasiado. Verifica tu conexión.');
        }
        throw err;
    }
}

/**
 * Wrapper de fetch con caché automática + timeout + 1 reintento
 */
async function cachedFetch(url) {
    const cached = cacheGet(url);
    if (cached) return cached;

    let response;
    try {
        response = await fetchWithTimeout(url);
    } catch (err) {
        // 1 reintento automático en caso de fallo de red
        console.warn('Primer intento fallido, reintentando...', err.message);
        response = await fetchWithTimeout(url);
    }

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
    const result = { data, totalPages };

    cacheSet(url, result);
    return result;
}

// Estado global
let currentPage = 1;
let currentCategory = null;

// =============================================
// MÓDULO: CARGAR ARTÍCULOS DEL BLOG
// =============================================

/**
 * Obtiene los posts de WordPress y los renderiza
 * @param {string} containerId - ID del contenedor donde se renderizan
 * @param {number} limit - Número de posts a mostrar
 * @param {number} page - Página de resultados
 * @param {number|null} category - ID de categoría (null = todos)
 */
async function loadWordPressPosts(containerId, limit = 6, page = 1, category = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    currentCategory = category;

    // Skeleton loading state
    container.innerHTML = `
        <div style="grid-column: 1 / -1; display: grid; gap: 2rem; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));">
            ${Array(limit).fill(0).map(() => `
            <div style="border-radius: var(--border-radius); overflow: hidden; border: 1px solid var(--border-color); display: flex; flex-direction: column; background: var(--bg-card);">
                <div class="skeleton" style="height: 200px; border-radius: 0;"></div>
                <div style="padding: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; flex-grow: 1;">
                    <div class="skeleton" style="height: 14px; width: 60%; border-radius: 4px;"></div>
                    <div class="skeleton" style="height: 20px; width: 90%; border-radius: 4px;"></div>
                    <div class="skeleton" style="height: 20px; width: 75%; border-radius: 4px; margin-bottom: 1rem;"></div>
                    <div class="skeleton" style="height: 14px; width: 100%; border-radius: 4px;"></div>
                    <div class="skeleton" style="height: 14px; width: 85%; border-radius: 4px;"></div>
                </div>
            </div>`).join('')}
        </div>`;

    try {
        let url = `${KULTTIA_CONFIG.WP_API_URL}/posts?per_page=${limit}&page=${page}&_embed=true&status=publish&orderby=date&order=desc`;
        if (category) url += `&categories=${category}`;

        const { data: posts, totalPages } = await cachedFetch(url);

        if (posts.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 0; color: var(--text-muted);">
                    <i class="fa-regular fa-newspaper" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
                    No hay artículos publicados todavía.
                </div>`;
            return;
        }

        container.innerHTML = posts.map(post => renderPostCard(post)).join('');
        updatePagination(page, totalPages);

    } catch (error) {
        console.error('Error al cargar posts de WordPress:', error);
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 0; color: var(--text-muted);">
                <i class="fa-solid fa-triangle-exclamation" style="font-size: 2rem; color: var(--acid-blue); margin-bottom: 1rem; display: block;"></i>
                No se pudieron cargar los artículos. Por favor intenta de nuevo en unos momentos.
            </div>`;
    }
}

/**
 * Genera el HTML de una tarjeta de artículo
 */
function renderPostCard(post) {
    const title = post.title?.rendered || 'Sin título';
    const plainExcerpt = stripHTML(post.excerpt?.rendered);
    const excerpt = plainExcerpt.length > 120 ? plainExcerpt.substring(0, 120) + '...' : plainExcerpt;
    const date = formatDate(post.date);
    const slug = post.slug;
    const link = `/articulo?slug=${encodeURIComponent(slug)}`;

    // Imagen destacada — prioriza medium_large para velocidad, fallback a source_url
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    const imageUrl = featuredMedia?.media_details?.sizes?.medium_large?.source_url
        || featuredMedia?.media_details?.sizes?.large?.source_url
        || featuredMedia?.source_url
        || `https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&q=80&auto=format&fit=crop`;

    // Categoría
    const categories = post._embedded?.['wp:term']?.[0];
    const category = categories?.[0]?.name || 'Artículo';

    // Tiempo de lectura estimado
    const wordCount = stripHTML(post.content?.rendered || '').split(/\s+/).length;
    const readTime = Math.max(1, Math.round(wordCount / 200));

    return `
        <article class="article-card">
            <a href="${link}" class="article-img-wrapper" style="display:block; height: 200px; overflow: hidden; border-radius: var(--border-radius) var(--border-radius) 0 0; border-bottom: 1px solid var(--border-color);">
                <img src="${imageUrl}" alt="${stripHTML(title)}" loading="lazy"
                    width="800" height="450"
                    style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;"
                    onmouseover="this.style.transform='scale(1.05)'"
                    onmouseout="this.style.transform='scale(1)'">
            </a>
            <div class="article-content">
                <div class="article-meta">
                    <span class="article-category">${category}</span>
                    <span class="article-date">${date}</span>
                </div>
                <h3 class="article-title"><a href="${link}">${title}</a></h3>
                <p class="article-excerpt">${excerpt}</p>
                <div style="display:flex; align-items:center; justify-content:space-between; margin-top: auto;">
                    <a href="${link}" class="article-link">Leer más <i class="fa-solid fa-arrow-right"></i></a>
                    <span style="font-size: 0.82rem; color: var(--text-muted);"><i class="fa-regular fa-clock" style="margin-right:4px;"></i>${readTime} min</span>
                </div>
            </div>
        </article>`;
}

/**
 * Carga los posts destacados para la sección del home
 */
async function loadFeaturedPosts(containerId) {
    await loadWordPressPosts(containerId, KULTTIA_CONFIG.FEATURED_POSTS);
}

// =============================================
// MÓDULO: ARTÍCULO INDIVIDUAL
// =============================================

/**
 * Carga un artículo completo a partir del slug o ID en la URL.
 * Compatible con:
 *   - /blog/mi-slug  (via .htaccess rewrite → ?slug=mi-slug)
 *   - ?slug=mi-slug
 *   - ?id=123
 */
async function loadSinglePost() {
    const params = new URLSearchParams(window.location.search);

    // El .htaccess mapea /blog/mi-slug → articulo.html?slug=mi-slug
    // Pero también soportamos el path directo por si el servidor lo sirve así
    const pathParts = window.location.pathname.replace(/\/$/, '').split('/');
    const slugFromPath = pathParts[pathParts.length - 1];

    const INVALID_SLUGS = new Set(['articulo', 'articulo.html', 'blog', '']);
    let slug = params.get('slug');
    if (!slug && !INVALID_SLUGS.has(slugFromPath)) {
        slug = slugFromPath;
    }
    const postId = params.get('id');

    const skeleton = document.getElementById('article-skeleton');
    const contentEl = document.getElementById('article-content');

    if (!slug && !postId) {
        _showArticleError('not-found');
        return;
    }

    try {
        let url;
        if (slug) {
            url = `${KULTTIA_CONFIG.WP_API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed=true&status=publish`;
        } else {
            url = `${KULTTIA_CONFIG.WP_API_URL}/posts/${postId}?_embed=true`;
        }

        let response;
        try {
            response = await fetchWithTimeout(url);
        } catch (netErr) {
            // 1 reintento automático en mobile si falla por red
            console.warn('Reintentando artículo...', netErr.message);
            response = await fetchWithTimeout(url);
        }
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        let post = await response.json();
        if (Array.isArray(post)) post = post[0]; // por slug devuelve array
        if (!post || !post.id) throw new Error('Post vacío o no encontrado');

        // Renderizar el artículo
        _renderSinglePost(post);

        // Mostrar contenido y ocultar skeleton con transición suave
        if (skeleton) {
            skeleton.style.transition = 'opacity 0.3s ease';
            skeleton.style.opacity = '0';
            setTimeout(() => {
                skeleton.style.display = 'none';
                if (contentEl) {
                    contentEl.style.display = 'block';
                    contentEl.style.animation = 'fadeInUp 0.4s ease forwards';
                }
            }, 300);
        } else if (contentEl) {
            contentEl.style.display = 'block';
        }

        // Agregar animación fadeInUp global si no existe
        if (!document.getElementById('article-fade-anim')) {
            const s = document.createElement('style');
            s.id = 'article-fade-anim';
            s.textContent = `
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }`;
            document.head.appendChild(s);
        }

    } catch (error) {
        console.error('Error al cargar el artículo:', error);
        _showArticleError('load-error');
    }
}

/**
 * Renderiza el HTML del artículo individual usando los elementos del DOM
 */
function _renderSinglePost(post) {
    // Título
    const titleEl = document.getElementById('article-title');
    if (titleEl) titleEl.innerHTML = post.title?.rendered || 'Sin título';

    // Cuerpo
    const bodyEl = document.getElementById('article-body');
    if (bodyEl) bodyEl.innerHTML = post.content?.rendered || '';

    // Fecha
    const dateEl = document.getElementById('article-date');
    if (dateEl) dateEl.innerHTML = `<i class="fa-regular fa-calendar" style="margin-right:5px;"></i> ${formatDate(post.date)}`;

    // Categoría
    const catEl = document.getElementById('article-category');
    const categories = post._embedded?.['wp:term']?.[0];
    const categoryName = categories?.[0]?.name || 'Artículo';
    if (catEl) catEl.textContent = categoryName;

    // Tiempo de lectura
    const wordCount = stripHTML(post.content?.rendered || '').split(/\s+/).length;
    const readTime = Math.max(1, Math.round(wordCount / 200));
    const readTimeEl = document.getElementById('article-read-time');
    if (readTimeEl) readTimeEl.innerHTML = `<i class="fa-regular fa-clock" style="margin-right:5px;"></i> ${readTime} min de lectura`;

    // Imagen principal
    const heroImg = document.getElementById('article-hero-img');
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    if (heroImg) {
        const imgUrl = featuredMedia?.media_details?.sizes?.large?.source_url
            || featuredMedia?.source_url
            || '';
        if (imgUrl) {
            heroImg.src = imgUrl;
            heroImg.alt = stripHTML(post.title?.rendered || 'Artículo');
        } else {
            // Sin imagen destacada: ocultar para no mostrar imagen rota
            heroImg.style.display = 'none';
        }
    }

    // Autor
    const author = post._embedded?.['author']?.[0];
    const authorNameEl = document.getElementById('author-name');
    const authorDescEl = document.getElementById('author-desc');
    const authorAvatarEl = document.getElementById('author-avatar');

    const authorName = author?.name || 'Kulttia Lab';
    const authorDesc = author?.description || 'Explorando la intersección entre tecnología, cultura e inteligencia artificial.';
    const authorAvatar = author?.avatar_urls?.['96'] || '';

    if (authorNameEl) authorNameEl.textContent = authorName;
    if (authorDescEl) authorDescEl.textContent = authorDesc;
    if (authorAvatarEl) {
        if (authorAvatar) {
            authorAvatarEl.src = authorAvatar;
        } else {
            // Avatar genérico si no tiene foto
            authorAvatarEl.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(authorName)}&background=0066ff&color=fff&size=96`;
        }
        authorAvatarEl.alt = authorName;
    }

    // ---- Actualizar SEO dinámicamente ----
    document.title = `${stripHTML(post.title?.rendered || 'Artículo')} | Kulttia Lab`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', stripHTML(post.excerpt?.rendered).substring(0, 160));

    // Quitar noindex ahora que tenemos artículo real
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) robotsMeta.setAttribute('content', 'index, follow');

    // Actualizar canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `${KULTTIA_CONFIG.SITE_URL}/blog/${post.slug}`);

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogTitle) ogTitle.setAttribute('content', stripHTML(post.title?.rendered || 'Artículo'));
    if (ogDesc) ogDesc.setAttribute('content', stripHTML(post.excerpt?.rendered).substring(0, 160));
    if (ogImg && featuredMedia?.source_url) ogImg.setAttribute('content', featuredMedia.source_url);
}

/**
 * Muestra un mensaje de error en la página de artículo
 */
function _showArticleError(type) {
    const skeleton = document.getElementById('article-skeleton');
    const articleMain = document.getElementById('article-main');
    if (skeleton) skeleton.style.display = 'none';

    const msg = type === 'not-found'
        ? 'No encontramos el artículo que buscas. Puede haber sido movido o eliminado.'
        : 'Tuvimos un problema al cargar este artículo. Por favor intenta de nuevo.';

    if (articleMain) {
        // Preservar el botón back-to-blog
        const backBtn = articleMain.querySelector('.back-to-blog');
        articleMain.innerHTML = '';
        if (backBtn) articleMain.appendChild(backBtn);

        const errDiv = document.createElement('div');
        errDiv.className = 'article-not-found';
        errDiv.innerHTML = `
            <i class="fa-solid fa-${type === 'not-found' ? 'file-circle-question' : 'triangle-exclamation'}"></i>
            <h2>${type === 'not-found' ? 'Artículo no encontrado' : 'Error al cargar'}</h2>
            <p>${msg}</p>
            <a href="/blog" class="btn btn-primary">Ver todos los artículos</a>`;
        articleMain.appendChild(errDiv);
    }
}

// =============================================
// MÓDULO: FORMULARIO DE CONTACTO
// =============================================

async function sendContactForm(event) {
    event.preventDefault();

    const form = event.target;
    const btn = form.querySelector('[type="submit"]');
    const FORM_ID = form.dataset.wpformsId || '1';

    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => { data[key] = value; });

    const originalBtnText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Enviando...';
    btn.disabled = true;

    try {
        const response = await fetch(`${KULTTIA_CONFIG.WP_API_URL}/contact-form/${FORM_ID}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        showFormMessage(form, 'success', '¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
        form.reset();

    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        showFormMessage(form, 'error', 'Hubo un problema al enviar tu mensaje. Por favor escríbenos directamente a hola@kulttia.com');
    } finally {
        btn.innerHTML = originalBtnText;
        btn.disabled = false;
    }
}

function showFormMessage(form, type, message) {
    let msgEl = form.querySelector('.form-message');
    if (!msgEl) {
        msgEl = document.createElement('div');
        msgEl.className = 'form-message';
        form.appendChild(msgEl);
    }

    const color = type === 'success' ? 'var(--acid-blue)' : '#e74c3c';
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';

    msgEl.style.cssText = `
        margin-top: 1.5rem;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        border: 1px solid ${color};
        color: ${color};
        font-size: 0.95rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        background: ${type === 'success' ? 'var(--bg-element)' : 'rgba(231,76,60,0.05)'};
    `;
    msgEl.innerHTML = `<i class="fa-solid ${icon}"></i> ${message}`;

    setTimeout(() => { if (msgEl) msgEl.remove(); }, 8000);
}

// =============================================
// MÓDULO: PAGINACIÓN Y FILTROS
// =============================================

function updatePagination(page, totalPages) {
    const paginationEl = document.getElementById('blog-pagination');
    if (!paginationEl || totalPages <= 1) {
        if (paginationEl) paginationEl.innerHTML = '';
        return;
    }

    currentPage = page;

    // Generar números de página
    const pages = [];
    const delta = 2;
    for (let i = Math.max(1, page - delta); i <= Math.min(totalPages, page + delta); i++) {
        pages.push(i);
    }

    const prevBtn = page > 1
        ? `<button class="btn btn-outline" onclick="changePage(${page - 1})"><i class="fa-solid fa-arrow-left"></i> Anteriores</button>`
        : `<button class="btn btn-outline" disabled style="opacity:0.4;cursor:not-allowed"><i class="fa-solid fa-arrow-left"></i> Anteriores</button>`;

    const nextBtn = page < totalPages
        ? `<button class="btn btn-outline" onclick="changePage(${page + 1})">Siguientes <i class="fa-solid fa-arrow-right"></i></button>`
        : `<button class="btn btn-outline" disabled style="opacity:0.4;cursor:not-allowed">Siguientes <i class="fa-solid fa-arrow-right"></i></button>`;

    const pageNums = pages.map(p =>
        `<button class="btn ${p === page ? 'btn-primary' : 'btn-outline'}" onclick="changePage(${p})" ${p === page ? 'disabled' : ''}>${p}</button>`
    ).join('');

    paginationEl.innerHTML = `${prevBtn} ${pageNums} ${nextBtn}`;
}

function changePage(page) {
    if (page < 1) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    loadWordPressPosts('blog-posts-container', KULTTIA_CONFIG.POSTS_PER_PAGE, page, currentCategory);
}

function setupCategoryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!filterBtns.length) return;

    // Map de nombres de categoría a IDs de WordPress
    // IMPORTANTE: actualiza estos IDs según los que tengas en tu WordPress
    const categoryMap = {
        'todos': null,
        'arte': 34,
        'ia y machine learning': 15,
        'cybercultura': 28,
        'web': 29
    };

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const catName = e.target.textContent.trim().toLowerCase();
            const catId = categoryMap[catName] !== undefined ? categoryMap[catName] : null;

            loadWordPressPosts('blog-posts-container', KULTTIA_CONFIG.POSTS_PER_PAGE, 1, catId);
        });
    });
}

// =============================================
// UTILIDADES
// =============================================

function stripHTML(html) {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
}
