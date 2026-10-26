// La Bóveda · Recursos: guías que Kulttia publica desde Studio (las entrega el DM de una pieza: /boveda/slug; los
// enlaces viejos ?r=slug siguen abriendo).
// Se leen de studio-boveda en cada visita (sin volver a desplegar el sitio). Abrir una guía cuenta la visita.
(function () {
    const API = 'https://omhrqewzxdftglpvuqfg.supabase.co/functions/v1/studio-boveda?brand=kulttia';

    function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    }

    // Markdown simple y seguro: todo se escapa primero; solo se rearman títulos, listas, párrafos, negrita, cursiva,
    // código, imágenes y enlaces http(s).
    function inline(s) {
        return s
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
            .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>')
            .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    }

    // Diagramas (bloque ```diagrama, texto ya escapado): una línea con su tipo.
    //   flujo: A → B → C              pasos en orden (en el celular, uno bajo otro)
    //   ciclo: A → B → C → D          pasos que vuelven al inicio (en círculo)
    //   centro: X | A, B, C, D        una idea con sus partes alrededor
    function diagram(lines) {
        const src = lines.join(' ').replace(/\s+/g, ' ').trim();
        const m = src.match(/^(flujo|ciclo|centro)\s*:\s*(.+)$/i);
        if (!m) return `<pre><code>${lines.join('\n')}</code></pre>`;
        const kind = m[1].toLowerCase();
        const steps = s => s.split(/\s*(?:→|-&gt;)\s*/).map(x => x.trim()).filter(Boolean).slice(0, 8);
        const chip = (t, cls = '') => `<span class="dg-n${cls}">${inline(t)}</span>`;
        if (kind === 'flujo') {
            const items = steps(m[2]);
            return `<figure class="dg dg-flujo">${items.map(t => chip(t)).join('<span class="dg-a" aria-hidden="true">→</span>')}</figure>`;
        }
        // Ciclo y centro: puntos alrededor de un óvalo (posiciones en %, se adaptan al ancho; más angosto que alto para
        // que los de los lados no se salgan ni toquen el centro).
        const RX = 31, RY = 37;
        let center = '';
        let items;
        if (kind === 'centro') {
            const [c, rest = ''] = m[2].split('|');
            center = c.trim();
            items = rest.split(',').map(x => x.trim()).filter(Boolean).slice(0, 8);
        } else items = steps(m[2]);
        if (!items.length) return '';
        const pos = items.map((_, i) => {
            const a = -Math.PI / 2 + (i * 2 * Math.PI) / items.length;
            return { x: 50 + RX * Math.cos(a), y: 50 + RY * Math.sin(a), a };
        });
        let svg = '';
        if (kind === 'ciclo') {
            // Flechas sobre el círculo, a mitad de camino entre un paso y el siguiente.
            const arrows = pos.map((p, i) => {
                const a = p.a + Math.PI / items.length;
                const x = 50 + RX * Math.cos(a), y = 50 + RY * Math.sin(a);
                // Tangente del óvalo en ese punto.
                const deg = (Math.atan2(RY * Math.cos(a), -RX * Math.sin(a)) * 180) / Math.PI;
                return `<path d="M -2.2 -1.6 L 2.2 0 L -2.2 1.6" transform="translate(${x} ${y}) rotate(${deg})" class="dg-head"/>`;
            }).join('');
            svg = `<svg viewBox="0 0 100 100" aria-hidden="true"><ellipse cx="50" cy="50" rx="${RX}" ry="${RY}" class="dg-ring"/>${arrows}</svg>`;
        } else {
            svg = `<svg viewBox="0 0 100 100" aria-hidden="true">${pos.map(p => `<line x1="50" y1="50" x2="${p.x}" y2="${p.y}" class="dg-ray"/>`).join('')}</svg>`;
        }
        const nodes = pos.map((p, i) => `<span class="dg-n dg-p" style="left:${p.x}%;top:${p.y}%">${inline(items[i])}</span>`).join('');
        const mid = center ? `<span class="dg-n dg-p dg-c" style="left:50%;top:50%">${inline(center)}</span>` : (kind === 'ciclo' ? '<span class="dg-loop" aria-hidden="true">↻</span>' : '');
        return `<figure class="dg dg-${kind}" aria-label="${kind}: ${items.join(', ')}"><div class="dg-wheel">${svg}${mid}${nodes}</div></figure>`;
    }

    function md(text) {
        const lines = escapeHtml(text).split(/\r?\n/);
        const out = [];
        let list = null;
        let para = [];
        let code = null;
        let codeLang = '';
        const closeCode = () => out.push(codeLang === 'diagrama' ? diagram(code) : `<pre><code>${code.join('\n')}</code></pre>`);
        const flush = () => {
            if (para.length) out.push(`<p>${inline(para.join(' '))}</p>`);
            para = [];
            if (list) out.push(`</${list}>`);
            list = null;
        };
        for (const raw of lines) {
            const line = raw.trimEnd();
            if (code !== null) {
                if (/^```/.test(line)) { closeCode(); code = null; } else code.push(raw);
                continue;
            }
            const fence = line.match(/^```\s*([a-z]*)/);
            if (fence) { flush(); code = []; codeLang = fence[1]; continue; }
            // GIF o clip: en bucle, sin sonido, como un GIF.
            const vid = line.match(/^!video\[([^\]]*)\]\((https:\/\/[^\s)]+)\)$/);
            if (vid) {
                flush();
                out.push(`<figure><video src="${vid[2]}" autoplay muted loop playsinline preload="metadata" aria-label="${vid[1]}"></video>${vid[1] ? `<figcaption>${vid[1]}</figcaption>` : ''}</figure>`);
                continue;
            }
            const img = line.match(/^!\[([^\]]*)\]\((https:\/\/[^\s)]+)\)$/);
            if (img) {
                flush();
                out.push(`<figure><img src="${img[2]}" alt="${img[1]}" loading="lazy">${img[1] ? `<figcaption>${img[1]}</figcaption>` : ''}</figure>`);
                continue;
            }
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
        if (code !== null) closeCode();
        flush();
        return out.join('\n');
    }

    const overlay = () => document.getElementById('guia-modal');

    async function openGuia(slug) {
        const o = overlay();
        const body = document.getElementById('guia-body');
        body.innerHTML = '<p class="guia-loading">Abriendo la guía…</p>';
        o.classList.add('open');
        document.body.style.overflow = 'hidden';
        history.replaceState(null, '', '/boveda/' + encodeURIComponent(slug) + location.hash);
        try {
            const res = await fetch(`${API}&r=${encodeURIComponent(slug)}`);
            if (!res.ok) throw new Error(String(res.status));
            const { resource: r } = await res.json();
            document.title = `${r.title} | La Bóveda · Kulttia Lab`;
            const level = ['principiante', 'intermedio', 'avanzado'].includes(r.level) ? r.level : '';
            body.innerHTML = `
            <div class="guia-print-head">
                <span>KULTTIA LAB · LA BÓVEDA</span>
                <span>Guía${level ? ` · ${level}` : ''}</span>
            </div>
            <div class="ficha-head">
                <span class="vault-cat">// GUÍA KULTTIA</span>
                ${level ? `<span class="vault-level ${level}">${level}</span>` : ''}
            </div>
            <h2 class="ficha-title">${escapeHtml(r.title)}</h2>
            ${r.summary ? `<p class="ficha-gancho">${escapeHtml(r.summary)}</p>` : ''}
            <div class="guia-texto">${md(r.body_md || '')}</div>
            <p class="guia-print-foot">kulttia.com/boveda/${escapeHtml(r.slug)}</p>
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
        history.replaceState(null, '', '/boveda' + location.hash);
    }

    // Las guías visibles entran a La Bóveda como el tema «Guías» de la carpeta de su nivel.
    async function loadList() {
        try {
            const res = await fetch(API);
            if (!res.ok) return;
            const { resources } = await res.json();
            if (!resources || !resources.length || typeof BOVEDA_RESOURCES === 'undefined') return;
            for (const r of resources) {
                BOVEDA_RESOURCES.push({
                    repo: 'guia/' + r.slug,
                    name: r.title,
                    desc: r.summary || '',
                    level: ['principiante', 'intermedio', 'avanzado'].includes(r.level) ? r.level : 'principiante',
                    cat: 'guias',
                    stars: 0,
                    guide: r.slug
                });
            }
            if (window.bovedaRender) window.bovedaRender();
        } catch {
            // Sin guías visibles: La Bóveda queda con sus repos.
        }
    }

    window.openGuia = openGuia;

    document.addEventListener('DOMContentLoaded', () => {
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
        const slug = (location.pathname.match(/^\/boveda\/([a-z0-9-]+)\/?$/) || [])[1] || new URLSearchParams(location.search).get('r');
        if (slug && /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) openGuia(slug);
    });
})();
