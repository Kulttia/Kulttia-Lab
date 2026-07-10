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

    function cardHTML(r, idx) {
        return `
        <article class="vault-card" data-idx="${idx}" tabindex="0" role="button"
                 aria-label="Abrir ficha de ${escapeHtml(r.name)}">
            <div class="vault-card-top">
                <span class="vault-cat">${CAT_LABELS[r.cat] || '// RECURSO'}</span>
                <span class="vault-level ${r.level}">${r.level}</span>
            </div>
            <h3>${escapeHtml(r.name)}</h3>
            <p class="vault-desc">${escapeHtml(r.desc)}</p>
            <div class="vault-meta">
                <span><i class="fa-regular fa-star"></i> ${formatStars(r.stars)}</span>
                ${r.lang ? `<span>${escapeHtml(r.lang)}</span>` : ''}
                <span class="repo-link">Ver ficha <i class="fa-solid fa-arrow-right"></i></span>
            </div>
        </article>`;
    }

    // ---------- Ficha (modal) ----------
    function fichaHTML(r) {
        const how = r.how || {};
        const reqs = (how.req || []).map(x => `<li>${escapeHtml(x)}</li>`).join('');
        const blocks = (how.cmds || []).map(c => `
            <div class="ficha-cmd">
                <pre><code>${escapeHtml(c)}</code></pre>
                <button class="ficha-copy" data-cmd="${escapeHtml(c)}" aria-label="Copiar comando">
                    <i class="fa-regular fa-copy"></i>
                </button>
            </div>`).join('');
        return `
        <div class="ficha-head">
            <span class="vault-cat">${CAT_LABELS[r.cat] || '// RECURSO'}</span>
            <span class="vault-level ${r.level}">${r.level}</span>
        </div>
        <h2 class="ficha-title">${escapeHtml(r.name)}</h2>
        <p class="ficha-desc">${escapeHtml(r.desc)}</p>
        <div class="ficha-stats">
            <span><i class="fa-regular fa-star"></i> ${formatStars(r.stars)} estrellas</span>
            ${r.lang ? `<span><i class="fa-solid fa-code"></i> ${escapeHtml(r.lang)}</span>` : ''}
            ${r.license ? `<span><i class="fa-solid fa-scale-balanced"></i> ${escapeHtml(r.license)}</span>` : ''}
        </div>

        <h4 class="ficha-step"><span>01</span> Antes de empezar</h4>
        <ul class="ficha-reqs">${reqs}</ul>

        <h4 class="ficha-step"><span>02</span> Instalación</h4>
        ${blocks}
        <p class="ficha-note">Comandos tomados del README oficial. Si algo cambia, el repo manda.</p>

        <h4 class="ficha-step"><span>03</span> Ponlo a trabajar</h4>
        <p class="ficha-uso">${escapeHtml(how.uso || 'Revisa el README del repositorio para el primer uso.')}</p>

        <a class="btn btn-primary ficha-repo-btn" href="${r.url}" target="_blank" rel="noopener">
            Ver repositorio completo <i class="fa-brands fa-github"></i>
        </a>`;
    }

    function openFicha(r) {
        const overlay = document.getElementById('ficha-modal');
        document.getElementById('ficha-body').innerHTML = fichaHTML(r);
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        overlay.querySelector('.ficha-content').scrollTop = 0;
        history.replaceState(null, '', '?repo=' + encodeURIComponent(r.repo) + location.hash);
    }

    function closeFicha() {
        const overlay = document.getElementById('ficha-modal');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
        history.replaceState(null, '', location.pathname + location.hash);
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
        grid.innerHTML = list.map(r => cardHTML(r, BOVEDA_RESOURCES.indexOf(r))).join('');
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

        // ficha: abrir desde card (click o Enter)
        const grid = document.getElementById('vault-grid');
        grid.addEventListener('click', e => {
            const card = e.target.closest('.vault-card');
            if (card) openFicha(BOVEDA_RESOURCES[+card.dataset.idx]);
        });
        grid.addEventListener('keydown', e => {
            if (e.key !== 'Enter' && e.key !== ' ') return;
            const card = e.target.closest('.vault-card');
            if (card) { e.preventDefault(); openFicha(BOVEDA_RESOURCES[+card.dataset.idx]); }
        });

        // ficha: cerrar (X, fondo, Escape) y copiar comandos
        const overlay = document.getElementById('ficha-modal');
        overlay.addEventListener('click', e => {
            if (e.target === overlay || e.target.closest('.ficha-close')) closeFicha();
            const copyBtn = e.target.closest('.ficha-copy');
            if (copyBtn) {
                navigator.clipboard.writeText(copyBtn.dataset.cmd).then(() => {
                    copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
                    setTimeout(() => copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>', 1500);
                });
            }
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && overlay.classList.contains('open')) closeFicha();
        });

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

        // deep-link a una ficha: /boveda?repo=owner/name
        const repoParam = params.get('repo');
        if (repoParam) {
            const r = BOVEDA_RESOURCES.find(x => x.repo === repoParam);
            if (r) openFicha(r);
        }
    });
})();
