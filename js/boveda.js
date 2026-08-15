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

    const CAT_NAMES = {
        skills: 'Habilidades',
        agentes: 'Agentes',
        mcp: 'MCP',
        herramientas: 'Herramientas',
        creatividad: 'Creatividad',
        aprende: 'Aprende',
        datos: 'Datos',
        negocio: 'Negocio'
    };

    const LEVEL_ORDER = ['principiante', 'intermedio', 'avanzado'];

    let activeLevel = 'todos';
    let activeCat = 'todas';
    let query = '';
    let forceList = false; // true cuando se abre una carpeta de nivel completa

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
        const n = r.narr;
        const narrativa = n ? `
        <p class="ficha-gancho">${escapeHtml(n.gancho)}</p>
        <p class="ficha-cuerpo">${escapeHtml(n.cuerpo)}</p>
        <div class="ficha-regla">
            <span class="ficha-regla-label">La regla</span>
            <p>${escapeHtml(n.regla)}</p>
        </div>` : `
        <p class="ficha-desc">${escapeHtml(r.desc)}</p>`;
        return `
        <div class="ficha-head">
            <span class="vault-cat">${CAT_LABELS[r.cat] || '// RECURSO'}</span>
            <span class="vault-level ${r.level}">${r.level}</span>
        </div>
        <h2 class="ficha-title">${escapeHtml(r.name)}</h2>
        ${narrativa}
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

    // ---------- Vista carpetas ----------
    // Una carpeta por categoría, agrupadas en bloques de nivel.
    // Dentro de cada nivel las carpetas van de más a menos relevante
    // (estrellas acumuladas); dentro de cada carpeta, igual.

    function byStarsDesc(a, b) {
        return (b.stars || 0) - (a.stars || 0);
    }

    function foldersOfLevel(level) {
        const groups = new Map();
        BOVEDA_RESOURCES
            .filter(r => r.level === level)
            .forEach(r => {
                if (!groups.has(r.cat)) groups.set(r.cat, []);
                groups.get(r.cat).push(r);
            });

        return Array.from(groups, ([cat, items]) => {
            items.sort(byStarsDesc);
            return {
                cat,
                items,
                count: items.length,
                stars: items.reduce((s, r) => s + (r.stars || 0), 0)
            };
        }).sort((a, b) => b.stars - a.stars);
    }

    function levelFolderHTML(level, temas, maxCount) {
        const files = temas.slice(0, 3);
        const rest = temas.length - files.length;
        const count = temas.reduce((s, t) => s + t.count, 0);

        // El tema más relevante queda al frente (f0)
        const filesHTML = files.map((t, i) => {
            const preview = t.items.slice(0, 2).map(r => escapeHtml(r.name)).join(' \u00b7 ');
            return `
            <span class="folder-file f${i}" data-cat="${t.cat}" role="button" tabindex="-1"
                  aria-label="Abrir ${escapeHtml(CAT_NAMES[t.cat] || t.cat)}">
                <span class="file-bar">
                    ${escapeHtml(CAT_NAMES[t.cat] || t.cat)}
                    <em>${t.count}</em>
                </span>
                <span class="file-preview">${preview}</span>
            </span>`;
        }).reverse().join('');

        const more = rest > 0
            ? `<span class="folder-more">+${rest} tema${rest === 1 ? '' : 's'}</span>`
            : '';
        const pct = Math.max(8, Math.round((count / maxCount) * 100));

        return `
        <article class="vault-folder" data-level="${level}" tabindex="0" role="button"
                 aria-label="Abrir nivel ${level}, ${count} recursos en ${temas.length} temas">
            <div class="folder-stack">
                ${more}
                ${filesHTML}
            </div>
            <div class="folder-body">
                <div class="folder-meta">
                    <span><i class="fa-solid fa-layer-group"></i> Nivel</span>
                    <span class="vault-level ${level}">${level}</span>
                </div>
                <h3>${level}</h3>
                <div class="folder-bar"><span style="width:${pct}%"></span></div>
                <div class="folder-foot">
                    <span>${count} recursos \u00b7 ${temas.length} temas</span>
                    <span class="open-hint">Abrir <i class="fa-solid fa-arrow-right"></i></span>
                </div>
            </div>
        </article>`;
    }

    function isFolderView() {
        return !query && activeCat === 'todas' && !forceList;
    }

    function renderFolders() {
        const wrap = document.getElementById('vault-folders');
        const levels = (activeLevel === 'todos' ? LEVEL_ORDER : [activeLevel])
            .map(level => ({ level, temas: foldersOfLevel(level) }))
            .filter(x => x.temas.length);

        const counts = levels.map(x => x.temas.reduce((s, t) => s + t.count, 0));
        const maxCount = Math.max(1, ...counts);
        const total = counts.reduce((a, b) => a + b, 0);

        wrap.innerHTML = `
            <div class="folder-grid">
                ${levels.map(x => levelFolderHTML(x.level, x.temas, maxCount)).join('')}
            </div>`;

        return total;
    }

    function render() {
        const grid = document.getElementById('vault-grid');
        const folders = document.getElementById('vault-folders');
        const empty = document.getElementById('vault-empty');
        const count = document.getElementById('vault-count');
        const back = document.getElementById('vault-back');

        if (isFolderView()) {
            const total = renderFolders();
            folders.style.display = '';
            grid.style.display = 'none';
            grid.innerHTML = '';
            back.classList.remove('show');
            empty.style.display = total ? 'none' : 'block';
            count.textContent = `[ ${total} / ${BOVEDA_RESOURCES.length} RECURSOS ]`;
            return;
        }

        const list = BOVEDA_RESOURCES.filter(matches).sort(byStarsDesc);
        folders.style.display = 'none';
        folders.innerHTML = '';
        grid.style.display = '';
        grid.innerHTML = list.map(r => cardHTML(r, BOVEDA_RESOURCES.indexOf(r))).join('');
        back.classList.toggle('show', activeCat !== 'todas' || forceList);
        empty.style.display = list.length ? 'none' : 'block';
        count.textContent = `[ ${list.length} / ${BOVEDA_RESOURCES.length} RECURSOS ]`;
    }

    function syncFilterButtons(containerId, attr, value) {
        document.querySelectorAll(`#${containerId} .filter-btn`).forEach(b => {
            b.classList.toggle('active', b.dataset[attr] === value);
        });
    }

    // cat = 'todas' abre el nivel entero; si no, abre ese tema del nivel
    function openFolder(cat, level) {
        activeCat = cat;
        activeLevel = level;
        forceList = true;
        syncFilterButtons('vault-cats', 'cat', cat);
        syncFilterButtons('vault-levels', 'level', level);
        render();
        document.getElementById('vault-count').scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            block: 'start'
        });
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
        // filtrar por nivel devuelve al índice de carpetas; por tema abre la lista
        wireFilters('vault-levels', 'level', v => { activeLevel = v; forceList = false; });
        wireFilters('vault-cats', 'cat', v => activeCat = v);

        // carpetas: abrir la categoría del nivel (click o Enter)
        const foldersWrap = document.getElementById('vault-folders');
        foldersWrap.addEventListener('click', e => {
            const f = e.target.closest('.vault-folder');
            if (!f) return;
            // clic en un archivo → ese tema; clic en la carpeta → nivel completo
            const file = e.target.closest('.folder-file');
            openFolder(file ? file.dataset.cat : 'todas', f.dataset.level);
        });
        foldersWrap.addEventListener('keydown', e => {
            if (e.key !== 'Enter' && e.key !== ' ') return;
            const f = e.target.closest('.vault-folder');
            if (f) { e.preventDefault(); openFolder('todas', f.dataset.level); }
        });

        // volver al índice de carpetas
        document.getElementById('vault-back').addEventListener('click', () => {
            activeCat = 'todas';
            activeLevel = 'todos';
            forceList = false;
            syncFilterButtons('vault-cats', 'cat', 'todas');
            syncFilterButtons('vault-levels', 'level', 'todos');
            render();
        });

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
