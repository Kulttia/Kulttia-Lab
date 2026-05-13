/**
 * Kulttia Lab — Search Functionality
 * Searches: WordPress posts (REST API) + static pages index
 */

(function () {
    'use strict';

    const WP_API = 'https://cms.kulttia.com/wp-json/wp/v2';

    // Static pages index
    const STATIC_PAGES = [
        { title: 'Inicio', url: '/', excerpt: 'Explorando la intersección entre inteligencia artificial y la evolución de la cultura moderna.', tag: 'Página' },
        { title: 'Artículos / Blog', url: '/blog', excerpt: 'Todos los artículos sobre tecnología, IA, cultura digital y más.', tag: 'Página' },
        { title: 'Nosotros', url: '/nosotros', excerpt: 'Conoce el equipo detrás de Kulttia Lab y nuestra misión.', tag: 'Página' },
        { title: 'Contacto', url: '/contacto', excerpt: 'Escríbenos, cuéntanos tu proyecto o simplemente saluda.', tag: 'Página' },
        {
            title: 'Formación en IA — Servicios',
            url: '/servicios',
            excerpt: 'Talleres y programas de formación en inteligencia artificial para equipos y profesionales.',
            tag: 'Servicio'
        },
        {
            title: 'Conferencias — Servicios',
            url: '/servicios',
            excerpt: 'Conferencias y keynotes sobre IA, cultura digital y el futuro del trabajo.',
            tag: 'Servicio'
        },
        {
            title: 'Acompañamiento — Servicios',
            url: '/servicios',
            excerpt: 'Consultoría personalizada para integrar IA en tu organización o proyecto.',
            tag: 'Servicio'
        },
    ];

    let debounceTimer = null;
    let currentQuery = '';

    // ── DOM bootstrap ──────────────────────────────────────────────────────────
    function init() {
        injectHTML();
        bindEvents();
    }

    function injectHTML() {
        // Search button in nav (before theme toggle)
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle && !document.getElementById('search-btn-nav')) {
            const btn = document.createElement('button');
            btn.id = 'search-btn-nav';
            btn.className = 'search-btn-nav';
            btn.setAttribute('aria-label', 'Buscar');
            btn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
            themeToggle.parentNode.insertBefore(btn, themeToggle);
        }

        // Overlay (once per page)
        if (!document.getElementById('search-overlay')) {
            const overlay = document.createElement('div');
            overlay.id = 'search-overlay';
            overlay.className = 'search-overlay';
            overlay.setAttribute('role', 'dialog');
            overlay.setAttribute('aria-modal', 'true');
            overlay.setAttribute('aria-label', 'Buscar en Kulttia Lab');
            overlay.innerHTML = `
                <div class="search-box">
                    <div class="search-input-row">
                        <i class="fa-solid fa-magnifying-glass search-icon"></i>
                        <input
                            type="search"
                            id="search-input"
                            class="search-input"
                            placeholder="Buscar artículos, servicios, páginas…"
                            autocomplete="off"
                            spellcheck="false"
                        />
                        <button class="search-close" id="search-close" aria-label="Cerrar búsqueda">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div class="search-results" id="search-results" role="listbox">
                        <p class="search-status" id="search-status">Escribe para buscar…</p>
                    </div>
                </div>
            `;
            document.body.appendChild(overlay);
        }
    }

    function bindEvents() {
        // Open
        document.addEventListener('click', function (e) {
            if (e.target.closest('#search-btn-nav')) openSearch();
        });

        // Close button
        document.addEventListener('click', function (e) {
            if (e.target.closest('#search-close')) closeSearch();
        });

        // Click outside box
        document.addEventListener('click', function (e) {
            const overlay = document.getElementById('search-overlay');
            if (overlay && overlay.classList.contains('active') && e.target === overlay) {
                closeSearch();
            }
        });

        // Keyboard
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeSearch();
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                openSearch();
            }
            // Arrow navigation
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                navigateResults(e.key === 'ArrowDown' ? 1 : -1);
                e.preventDefault();
            }
            if (e.key === 'Enter') selectFocusedResult();
        });

        // Input
        document.addEventListener('input', function (e) {
            if (e.target.id === 'search-input') {
                clearTimeout(debounceTimer);
                const q = e.target.value.trim();
                currentQuery = q;
                if (!q) {
                    setStatus('Escribe para buscar…');
                    clearResults();
                    return;
                }
                setStatus('Buscando…');
                debounceTimer = setTimeout(() => runSearch(q), 320);
            }
        });
    }

    // ── Open / Close ───────────────────────────────────────────────────────────
    function openSearch() {
        const overlay = document.getElementById('search-overlay');
        if (!overlay) return;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            const input = document.getElementById('search-input');
            if (input) input.focus();
        }, 80);
    }

    function closeSearch() {
        const overlay = document.getElementById('search-overlay');
        if (!overlay) return;
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        const input = document.getElementById('search-input');
        if (input) { input.value = ''; currentQuery = ''; }
        clearResults();
        setStatus('Escribe para buscar…');
    }

    // ── Search logic ───────────────────────────────────────────────────────────
    async function runSearch(query) {
        if (query !== currentQuery) return; // stale

        const staticMatches = searchStatic(query);
        renderResults(staticMatches, [], true); // show static instantly

        try {
            const posts = await fetchWPPosts(query);
            if (query !== currentQuery) return; // stale after await
            renderResults(staticMatches, posts, false);
        } catch (_) {
            if (query !== currentQuery) return;
            renderResults(staticMatches, [], false);
        }
    }

    function searchStatic(query) {
        const q = query.toLowerCase();
        return STATIC_PAGES.filter(p =>
            p.title.toLowerCase().includes(q) ||
            p.excerpt.toLowerCase().includes(q) ||
            p.tag.toLowerCase().includes(q)
        );
    }

    async function fetchWPPosts(query) {
        const url = `${WP_API}/posts?search=${encodeURIComponent(query)}&per_page=6&_fields=id,slug,title,excerpt,_links&_embed=false`;
        const res = await fetch(url);
        if (!res.ok) return [];
        return await res.json();
    }

    // ── Render ─────────────────────────────────────────────────────────────────
    function renderResults(staticItems, posts, loading) {
        const container = document.getElementById('search-results');
        if (!container) return;

        const total = staticItems.length + posts.length;

        if (total === 0 && !loading) {
            container.innerHTML = '<p class="search-status">Sin resultados. Intenta con otro término.</p>';
            return;
        }

        let html = '';

        if (posts.length > 0) {
            html += '<p class="search-results-label">Artículos</p>';
            posts.forEach(post => {
                const title = decodeHTMLEntities(post.title.rendered);
                const excerpt = stripHTML(decodeHTMLEntities(post.excerpt?.rendered || '')).slice(0, 100);
                const url = `/blog/${post.slug}`;
                html += resultItem(url, title, excerpt, 'Blog');
            });
        }

        if (staticItems.length > 0) {
            html += '<p class="search-results-label">Páginas y Servicios</p>';
            staticItems.forEach(item => {
                html += resultItem(item.url, item.title, item.excerpt, item.tag);
            });
        }

        if (loading && posts.length === 0) {
            html += '<p class="search-status" style="margin-top:0.5rem">Buscando artículos…</p>';
        }

        container.innerHTML = html;
    }

    function resultItem(url, title, excerpt, tag) {
        return `
            <a class="search-result-item" href="${url}" role="option">
                <div class="search-result-text">
                    <span class="search-result-title">${title}</span>
                    <span class="search-result-excerpt">${excerpt}</span>
                </div>
                <span class="search-result-tag">${tag}</span>
            </a>
        `;
    }

    // ── Keyboard navigation ────────────────────────────────────────────────────
    function navigateResults(dir) {
        const items = document.querySelectorAll('.search-result-item');
        if (!items.length) return;
        let idx = Array.from(items).findIndex(i => i.classList.contains('focused'));
        items.forEach(i => i.classList.remove('focused'));
        idx = idx + dir;
        if (idx < 0) idx = items.length - 1;
        if (idx >= items.length) idx = 0;
        items[idx].classList.add('focused');
        items[idx].scrollIntoView({ block: 'nearest' });
    }

    function selectFocusedResult() {
        const focused = document.querySelector('.search-result-item.focused');
        if (focused) { focused.click(); }
    }

    // ── Helpers ────────────────────────────────────────────────────────────────
    function setStatus(msg) {
        clearResults();
        const container = document.getElementById('search-results');
        if (container) container.innerHTML = `<p class="search-status">${msg}</p>`;
    }

    function clearResults() {
        const container = document.getElementById('search-results');
        if (container) container.innerHTML = '';
    }

    function stripHTML(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText || '';
    }

    function decodeHTMLEntities(str) {
        const txt = document.createElement('textarea');
        txt.innerHTML = str;
        return txt.value;
    }

    // ── Boot ───────────────────────────────────────────────────────────────────
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
