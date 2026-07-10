// La Bóveda — render, búsqueda y filtros (nivel + categoría)
(function () {
    const CAT_LABELS = {
        skills: '// SKILLS',
        agentes: '// AGENTES',
        mcp: '// MCP',
        herramientas: '// HERRAMIENTAS',
        creatividad: '// CREATIVIDAD',
        aprende: '// APRENDE',
        datos: '// DATOS',
        negocio: '// NEGOCIO'
    };

    let activeLevel = 'todos';
    let activeCat = 'todas';
    let query = '';

    function formatStars(n) {
        if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1) + 'k';
        return String(n);
    }

    function escapeHtml(s) {
        return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }

    function cardHTML(r) {
        return `
        <article class="vault-card">
            <div class="vault-card-top">
                <span class="vault-cat">${CAT_LABELS[r.cat] || '// RECURSO'}</span>
                <span class="vault-level ${r.level}">${r.level}</span>
            </div>
            <h3><a href="${r.url}" target="_blank" rel="noopener">${escapeHtml(r.name)}</a></h3>
            <p class="vault-desc">${escapeHtml(r.desc)}</p>
            <div class="vault-meta">
                <span><i class="fa-regular fa-star"></i> ${formatStars(r.stars)}</span>
                ${r.lang ? `<span>${escapeHtml(r.lang)}</span>` : ''}
                <a class="repo-link" href="${r.url}" target="_blank" rel="noopener"
                   aria-label="Abrir ${escapeHtml(r.repo)} en GitHub">
                   ${escapeHtml(r.owner)}/${escapeHtml(r.name)} <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        </article>`;
    }

    function matches(r) {
        if (activeLevel !== 'todos' && r.level !== activeLevel) return false;
        if (activeCat !== 'todas' && r.cat !== activeCat) return false;
        if (query) {
            const hay = (r.repo + ' ' + r.name + ' ' + r.desc + ' ' + r.cat + ' ' + (r.lang || '')).toLowerCase();
            if (!query.split(/\s+/).every(t => hay.includes(t))) return false;
        }
        return true;
    }

    function render() {
        const grid = document.getElementById('vault-grid');
        const empty = document.getElementById('vault-empty');
        const count = document.getElementById('vault-count');
        const list = BOVEDA_RESOURCES.filter(matches);
        grid.innerHTML = list.map(cardHTML).join('');
        empty.style.display = list.length ? 'none' : 'block';
        count.textContent = `[ ${list.length} / ${BOVEDA_RESOURCES.length} RECURSOS ]`;
    }

    function wireFilters(containerId, attr, onChange) {
        const container = document.getElementById(containerId);
        container.addEventListener('click', e => {
            const btn = e.target.closest('.filter-btn');
            if (!btn) return;
            container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            onChange(btn.dataset[attr]);
            render();
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        wireFilters('vault-levels', 'level', v => activeLevel = v);
        wireFilters('vault-cats', 'cat', v => activeCat = v);

        const input = document.getElementById('vault-search-input');
        input.addEventListener('input', () => {
            query = input.value.trim().toLowerCase();
            render();
        });

        // deep-links: /boveda?nivel=principiante&cat=skills
        const params = new URLSearchParams(location.search);
        const nivel = params.get('nivel');
        const cat = params.get('cat');
        if (nivel) {
            const b = document.querySelector(`#vault-levels [data-level="${nivel}"]`);
            if (b) { activeLevel = nivel; document.querySelectorAll('#vault-levels .filter-btn').forEach(x => x.classList.remove('active')); b.classList.add('active'); }
        }
        if (cat) {
            const b = document.querySelector(`#vault-cats [data-cat="${cat}"]`);
            if (b) { activeCat = cat; document.querySelectorAll('#vault-cats .filter-btn').forEach(x => x.classList.remove('active')); b.classList.add('active'); }
        }

        render();
    });
})();
