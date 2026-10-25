// La Bóveda · Recursos: guías que Kulttia publica desde Studio (las entrega el DM de una pieza con ?r=slug).
// Se leen de studio-boveda en cada visita (sin volver a desplegar el sitio). Abrir una guía cuenta la visita.
(function () {
    const API = 'https://omhrqewzxdftglpvuqfg.supabase.co/functions/v1/studio-boveda?brand=kulttia';

    function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }

    // Markdown simple y seguro: todo se escapa primero; solo se rearman títulos, listas, párrafos, negrita, cursiva,
    // código y enlaces http(s).
    function inline(s) {
        return s
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
            .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>')
            .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    }

    function md(text) {
        const lines = escapeHtml(text).split(/\r?\n/);
        const out = [];
        let list = null;
        let para = [];
        let code = null;
        const flush = () => {
            if (para.length) out.push(`<p>${inline(para.join(' '))}</p>`);
            para = [];
            if (list) out.push(`</${list}>`);
            list = null;
        };
        for (const raw of lines) {
            const line = raw.trimEnd();
            if (code !== null) {
                if (/^```/.test(line)) { out.push(`<pre><code>${code.join('\n')}</code></pre>`); code = null; } else code.push(raw);
                continue;
            }
            if (/^```/.test(line)) { flush(); code = []; continue; }
            const h = line.match(/^(#{1,4})\s+(.*)$/);
            if (h) { flush(); const n = Math.min(4, h[1].length + 1); out.push(`<h${n}>${inline(h[2])}</h${n}>`); continue; }
            const ul = line.match(/^\s*[-*]\s+(.*)$/);
            const ol = line.match(/^\s*\d+[.)]\s+(.*)$/);
            if (ul || ol) {
                if (para.length) { out.push(`<p>${inline(para.join(' '))}</p>`); para = []; }
                const kind = ul ? 'ul' : 'ol';
                if (list !== kind) { if (list) out.push(`</${list}>`); out.push(`<${kind}>`); list = kind; }
                out.push(`<li>${inline((ul || ol)[1])}</li>`);
                continue;
            }
            if (!line.trim()) { flush(); continue; }
            if (list) { out.push(`</${list}>`); list = null; }
            para.push(line.trim());
        }
        if (code !== null) out.push(`<pre><code>${code.join('\n')}</code></pre>`);
        flush();
        return out.join('\n');
    }

    function cardHTML(r) {
        return `
        <article class="vault-card guia-card" data-slug="${escapeHtml(r.slug)}" tabindex="0" role="button"
                 aria-label="Leer ${escapeHtml(r.title)}">
            <div class="vault-card-top"><span class="vault-cat">// GUÍA KULTTIA</span></div>
            <h3>${escapeHtml(r.title)}</h3>
            <p class="vault-desc">${escapeHtml(r.summary || '')}</p>
            <div class="vault-meta"><span class="repo-link">Leer guía <i class="fa-solid fa-arrow-right"></i></span></div>
        </article>`;
    }

    const overlay = () => document.getElementById('guia-modal');

    async function openGuia(slug) {
        const o = overlay();
        const body = document.getElementById('guia-body');
        body.innerHTML = '<p class="guia-loading">Abriendo la guía…</p>';
        o.classList.add('open');
        document.body.style.overflow = 'hidden';
        history.replaceState(null, '', '?r=' + encodeURIComponent(slug) + location.hash);
        try {
            const res = await fetch(`${API}&r=${encodeURIComponent(slug)}`);
            if (!res.ok) throw new Error(String(res.status));
            const { resource: r } = await res.json();
            document.title = `${r.title} | La Bóveda · Kulttia Lab`;
            body.innerHTML = `
            <div class="ficha-head"><span class="vault-cat">// GUÍA KULTTIA</span></div>
            <h2 class="ficha-title">${escapeHtml(r.title)}</h2>
            ${r.summary ? `<p class="ficha-gancho">${escapeHtml(r.summary)}</p>` : ''}
            <div class="guia-texto">${md(r.body_md || '')}</div>
            <button class="btn btn-primary guia-pdf" type="button">Guardar como PDF <i class="fa-solid fa-file-arrow-down"></i></button>`;
            o.querySelector('.ficha-content').scrollTop = 0;
        } catch {
            body.innerHTML = '<p class="guia-loading">No encontramos esta guía. Puede que ya no esté disponible.</p>';
        }
    }

    function closeGuia() {
        overlay().classList.remove('open');
        document.body.style.overflow = '';
        document.title = 'La Bóveda | Kulttia Lab';
        history.replaceState(null, '', location.pathname + location.hash);
    }

    async function loadList() {
        const wrap = document.getElementById('vault-recursos');
        try {
            const res = await fetch(API);
            if (!res.ok) return;
            const { resources } = await res.json();
            if (!resources || !resources.length) return;
            document.getElementById('vault-recursos-grid').innerHTML = resources.map(cardHTML).join('');
            wrap.hidden = false;
        } catch {
            // Sin guías visibles: la sección queda oculta.
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        const grid = document.getElementById('vault-recursos-grid');
        const open = e => {
            const card = e.target.closest('.guia-card');
            if (card && (e.type === 'click' || e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                openGuia(card.dataset.slug);
            }
        };
        grid.addEventListener('click', open);
        grid.addEventListener('keydown', open);
        const o = overlay();
        o.addEventListener('click', e => {
            if (e.target === o || e.target.closest('.ficha-close')) closeGuia();
            if (e.target.closest('.guia-pdf')) {
                document.body.classList.add('print-guia');
                window.print();
            }
        });
        window.addEventListener('afterprint', () => document.body.classList.remove('print-guia'));
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && o.classList.contains('open')) closeGuia();
        });
        loadList();
        const slug = new URLSearchParams(location.search).get('r');
        if (slug && /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) openGuia(slug);
    });
})();
