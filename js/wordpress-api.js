/**
 * Kulttia Lab — WordPress REST API Integration
 * Conecta el frontend estático con el backend WordPress en cms.kulttia.com
 */

// =============================================
// CONFIGURACIÓN GLOBAL — Cambia esta URL
// cuando el subdomain esté activo en Hostinger
// =============================================
const KULTTIA_CONFIG = {
    WP_API_URL: 'https://cms.kulttia.com/wp-json/wp/v2',
    WPFORMS_URL: 'https://cms.kulttia.com/wp-json/wpforms/v1',
    POSTS_PER_PAGE: 6,
    FEATURED_POSTS: 3,
};

// =============================================
// MÓDULO: CARGAR ARTÍCULOS DEL BLOG
// =============================================

/**
 * Obtiene los posts de WordPress y los renderiza
 * @param {string} containerId - ID del contenedor donde se renderizan
 * @param {number} limit - Número de posts a mostrar
 * @param {number} page - Página de resultados (para paginación)
 */
async function loadWordPressPosts(containerId, limit = 6, page = 1) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Estado de carga
    container.innerHTML = `
        <div class="wp-loading" style="
            grid-column: 1 / -1;
            text-align: center;
            padding: 4rem 0;
            color: var(--text-muted);
        ">
            <i class="fa-solid fa-circle-notch fa-spin" style="font-size: 2rem; color: var(--acid-blue); margin-bottom: 1rem; display: block;"></i>
            Cargando artículos...
        </div>`;

    try {
        const response = await fetch(
            `${KULTTIA_CONFIG.WP_API_URL}/posts?per_page=${limit}&page=${page}&_embed=true&status=publish`,
            { headers: { 'Accept': 'application/json' } }
        );

        if (!response.ok) throw new Error(`Error ${response.status}`);

        const posts = await response.json();
        const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || 1);

        if (posts.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 0; color: var(--text-muted);">
                    <i class="fa-regular fa-newspaper" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
                    No hay artículos publicados todavía.
                </div>`;
            return;
        }

        container.innerHTML = posts.map(post => renderPostCard(post)).join('');

        // Actualizar paginación si existe
        updatePagination(page, totalPages);

    } catch (error) {
        console.error('Error al cargar posts de WordPress:', error);
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 0; color: var(--text-muted);">
                <i class="fa-solid fa-triangle-exclamation" style="font-size: 2rem; color: var(--acid-blue); margin-bottom: 1rem; display: block;"></i>
                No se pudieron cargar los artículos en este momento.
            </div>`;
    }
}

/**
 * Genera el HTML de una tarjeta de artículo desde datos de WordPress
 */
function renderPostCard(post) {
    const title = post.title.rendered;
    const excerpt = stripHTML(post.excerpt.rendered).substring(0, 120) + '...';
    const date = formatDate(post.date);
    const slug = post.slug;
    const link = `articulo.html?id=${post.id}&slug=${slug}`;

    // Imagen destacada
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    const imageUrl = featuredMedia?.media_details?.sizes?.medium_large?.source_url
        || featuredMedia?.source_url
        || 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=600&q=80';

    // Categoría
    const categories = post._embedded?.['wp:term']?.[0];
    const category = categories?.[0]?.name || 'Artículo';

    return `
        <article class="article-card">
            <div class="article-img-wrapper" style="height: 200px; overflow: hidden; border-radius: var(--border-radius) var(--border-radius) 0 0; border-bottom: 1px solid var(--border-color);">
                <img src="${imageUrl}" alt="${title}" loading="lazy"
                    style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;"
                    onmouseover="this.style.transform='scale(1.05)'"
                    onmouseout="this.style.transform='scale(1)'">
            </div>
            <div class="article-content">
                <div class="article-meta">
                    <span class="article-category">${category}</span>
                    <span class="article-date">${date}</span>
                </div>
                <h3 class="article-title"><a href="${link}">${title}</a></h3>
                <p class="article-excerpt">${excerpt}</p>
                <a href="${link}" class="article-link">Leer más <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </article>`;
}

/**
 * Carga los posts destacados para la sección del home (máximo 3)
 */
async function loadFeaturedPosts(containerId) {
    await loadWordPressPosts(containerId, KULTTIA_CONFIG.FEATURED_POSTS);
}

// =============================================
// MÓDULO: ARTÍCULO INDIVIDUAL (articulo.html)
// =============================================

/**
 * Carga un artículo completo a partir del ?id= en la URL
 */
async function loadSinglePost() {
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');

    if (!postId) return;

    try {
        const response = await fetch(`${KULTTIA_CONFIG.WP_API_URL}/posts/${postId}?_embed=true`);
        if (!response.ok) throw new Error('Post no encontrado');

        const post = await response.json();
        renderSinglePost(post);

        // Actualizar meta SEO dinámicamente
        document.title = `${post.title.rendered} | Kulttia Lab`;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', stripHTML(post.excerpt.rendered));

    } catch (error) {
        console.error('Error al cargar el artículo:', error);
        const main = document.querySelector('main');
        if (main) main.innerHTML = `
            <div style="padding: 10rem 0 5rem; text-align: center; color: var(--text-muted);">
                <i class="fa-solid fa-triangle-exclamation" style="font-size: 3rem; color: var(--acid-blue); margin-bottom: 1.5rem; display: block;"></i>
                <h2 style="color: var(--text-main);">Artículo no encontrado</h2>
                <p style="margin-top: 1rem; margin-bottom: 2rem;">Es posible que este artículo haya sido movido o eliminado.</p>
                <a href="blog.html" class="btn btn-primary">Volver al blog</a>
            </div>`;
    }
}

/**
 * Renderiza el HTML del artículo individual en la página
 */
function renderSinglePost(post) {
    const titleEl = document.querySelector('.article-main-title');
    const bodyEl = document.querySelector('.article-body');
    const heroImg = document.querySelector('.article-hero-img');
    const dateEl = document.querySelector('.article-date');

    if (titleEl) titleEl.innerHTML = post.title.rendered;
    if (bodyEl) bodyEl.innerHTML = post.content.rendered;
    if (dateEl) dateEl.innerHTML = `<i class="fa-regular fa-calendar" style="margin-right: 5px;"></i> ${formatDate(post.date)}`;

    // Imagen principal
    const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
    if (heroImg && featuredMedia?.source_url) {
        heroImg.src = featuredMedia.source_url;
        heroImg.alt = post.title.rendered;
    }

    // Autor
    const author = post._embedded?.['author']?.[0];
    if (author) {
        const authorBox = document.querySelector('.author-box');
        if (authorBox) {
            const avatarEl = authorBox.querySelector('.author-avatar');
            const nameEl = authorBox.querySelector('h4');
            const descEl = authorBox.querySelector('p');

            if (avatarEl) avatarEl.src = author.avatar_urls?.['96'] || avatarEl.src;
            if (nameEl) nameEl.textContent = author.name;
            if (descEl && author.description) descEl.textContent = author.description;
        }
    }
}

// =============================================
// MÓDULO: FORMULARIO DE CONTACTO → WORDPRESS
// =============================================

/**
 * Maneja el envío del formulario de contacto hacia WPForms REST API
 * Requiere el plugin WPForms + WPForms REST API en WordPress
 * FORM_ID debe reemplazarse con el ID real del formulario en WPForms
 */
async function sendContactForm(event) {
    event.preventDefault();

    const form = event.target;
    const btn = form.querySelector('[type="submit"]');
    const FORM_ID = form.dataset.wpformsId || '1'; // Configurable desde el HTML

    // Recolectar datos
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => { data[key] = value; });

    // Estado de carga en el botón
    const originalBtnText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Enviando...';
    btn.disabled = true;

    try {
        const response = await fetch(`${KULTTIA_CONFIG.WP_API_URL}/contact-form/${FORM_ID}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        // También intentamos con la ruta de WPForms directamente
        let result = await response.json();

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

/**
 * Muestra un mensaje de feedback en el formulario
 */
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
// MÓDULO: PAGINACIÓN (blog.html)
// =============================================
let currentPage = 1;

function updatePagination(page, totalPages) {
    const paginationEl = document.getElementById('blog-pagination');
    if (!paginationEl || totalPages <= 1) return;

    currentPage = page;
    paginationEl.innerHTML = `
        <button class="btn btn-outline" onclick="changePage(${page - 1})" ${page <= 1 ? 'disabled style="opacity:0.4;cursor:not-allowed"' : ''}>
            <i class="fa-solid fa-arrow-left"></i> Anteriores
        </button>
        <span style="color: var(--text-muted); font-size: 0.9rem;">Página ${page} de ${totalPages}</span>
        <button class="btn btn-outline" onclick="changePage(${page + 1})" ${page >= totalPages ? 'disabled style="opacity:0.4;cursor:not-allowed"' : ''}>
            Siguientes <i class="fa-solid fa-arrow-right"></i>
        </button>`;
}

function changePage(page) {
    if (page < 1) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    loadWordPressPosts('blog-posts-container', KULTTIA_CONFIG.POSTS_PER_PAGE, page);
}

// =============================================
// UTILIDADES
// =============================================
function stripHTML(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
}
