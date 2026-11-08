/* =============================================
   KULTTIA LAB — Cursos de la Academia en vivo
   Lee el catálogo público de academia.kulttia.com (cursos y «Próximamente» publicados, función academia-cert-public)
   y redibuja cada [data-academia-cursos]. El HTML del contenedor es el respaldo (y lo que ven los buscadores): si la
   API falla o tarda, se queda tal cual. Si una tarjeta del respaldo tiene el mismo data-slug, se conservan su texto y
   su requisito (escritos a mano); portada, nivel, clases, duración y enlace salen siempre del catálogo.
   Variantes: data-academia-cursos="full" (insignia Gratis, texto, enlace y Próximamente) o "mini" (solo portada, meta
   y título). Copia en sessionStorage por 5 min.
   ============================================= */
(function () {
    'use strict';

    var API = 'https://omhrqewzxdftglpvuqfg.supabase.co/functions/v1/academia-cert-public?catalogo=1&forceFunctionRegion=us-west-1';
    var SITE = 'https://academia.kulttia.com';
    var CACHE_KEY = 'kl-academia-catalogo';
    var CACHE_MS = 5 * 60 * 1000;
    var LEVELS = { basico: 'Básico', principiante: 'Básico', intermedio: 'Intermedio', avanzado: 'Avanzado' };
    var ORDER = { basico: 0, principiante: 0, intermedio: 1, avanzado: 2 };
    var SLUG_RE = /^[a-z0-9-]{1,80}$/;

    var boxes = document.querySelectorAll('[data-academia-cursos]');
    if (!boxes.length || !window.fetch) return;

    function el(tag, cls, text) {
        var n = document.createElement(tag);
        if (cls) n.className = cls;
        if (text != null) n.textContent = text;
        return n;
    }
    function https(u) { return typeof u === 'string' && u.indexOf('https://') === 0 ? u : ''; }
    function str(v) { return typeof v === 'string' ? v.trim() : ''; }
    function duration(min) {
        min = Math.max(0, Math.round(Number(min) || 0));
        if (min < 60) return min + ' min';
        var m = min % 60;
        return Math.floor(min / 60) + ' h' + (m ? ' ' + m + ' min' : '');
    }
    function meta(icon, text) {
        var s = el('span');
        s.appendChild(el('i', icon));
        s.appendChild(document.createTextNode(text));
        return s;
    }

    /* Portada: la subida o, sin ella, la diseñada de la academia (nivel, título y firma). */
    function cover(c, badge) {
        var box = el('div', 'lx-course-cover');
        var src = https(c.cover_url);
        if (src) {
            var img = el('img');
            img.src = src;
            img.width = 1280;
            img.height = 720;
            img.loading = 'lazy';
            img.decoding = 'async';
            img.alt = 'Portada del curso ' + c.title;
            box.appendChild(img);
        } else {
            var alt = el('div', 'lx-cover-alt');
            alt.setAttribute('aria-hidden', 'true');
            alt.appendChild(LEVELS[c.level] ? el('span', 'lx-cover-lvl', LEVELS[c.level]) : el('span'));
            alt.appendChild(el('span', 'lx-cover-t', c.title));
            var k = el('span', 'lx-cover-k', 'Kulttia');
            k.appendChild(el('b', null, '.'));
            alt.appendChild(k);
            box.appendChild(alt);
        }
        if (badge) box.appendChild(el('span', 'lx-badge', badge));
        return box;
    }

    function courseCard(c, full, old) {
        var a = el('article', 'lx-course');
        a.setAttribute('data-slug', c.slug);
        a.appendChild(cover(c, full ? 'Gratis' : ''));
        var body = el('div', 'lx-course-body');
        var m = el('div', 'lx-course-meta');
        if (LEVELS[c.level]) m.appendChild(meta('fa-solid fa-signal', LEVELS[c.level]));
        var n = Number(c.n_videos) || 0;
        if (n) m.appendChild(meta('fa-solid fa-play', n + (n === 1 ? ' clase' : ' clases')));
        if (Number(c.duration_min) > 0) m.appendChild(meta('fa-regular fa-clock', duration(c.duration_min)));
        body.appendChild(m);
        body.appendChild(el('h3', null, c.title));
        if (full) {
            var p = old && old.querySelector('.lx-course-body > p:not(.lx-req)');
            body.appendChild(p ? p.cloneNode(true) : el('p', null, str(c.subtitle)));
            var req = old && old.querySelector('.lx-req');
            if (req) body.appendChild(req.cloneNode(true));
            var link = el('a', 'article-link', 'Ver curso ');
            link.href = SITE + '/cursos/' + c.slug + '/';
            link.appendChild(el('i', 'fa-solid fa-arrow-right'));
            body.appendChild(link);
        }
        a.appendChild(body);
        return a;
    }

    function soonCard(u) {
        var a = el('article', 'lx-course is-soon');
        var box = el('div', 'lx-course-cover');
        var img = el('img');
        img.src = https(u.cover_url) || '/img/academia/proximamente.svg';
        img.width = 1600;
        img.height = 900;
        img.loading = 'lazy';
        img.decoding = 'async';
        img.alt = 'Curso ' + u.title + ', próximamente';
        box.appendChild(img);
        box.appendChild(el('span', 'lx-badge', 'Próximamente'));
        a.appendChild(box);
        var body = el('div', 'lx-course-body');
        body.appendChild(el('h3', null, u.title));
        if (str(u.subtitle)) body.appendChild(el('p', null, str(u.subtitle)));
        a.appendChild(body);
        return a;
    }

    function render(box, data) {
        var full = box.getAttribute('data-academia-cursos') !== 'mini';
        var courses = (Array.isArray(data.courses) ? data.courses : []).filter(function (c) {
            return c && SLUG_RE.test(c.slug || '') && str(c.title);
        });
        if (!courses.length) return; // catálogo vacío o raro: mejor el respaldo
        // Empieza por la base y sigue subiendo: por nivel; dentro del nivel, el orden del catálogo.
        courses = courses.map(function (c, i) { return { c: c, i: i }; }).sort(function (x, y) {
            var a = ORDER[x.c.level], b = ORDER[y.c.level];
            return (a == null ? 9 : a) - (b == null ? 9 : b) || x.i - y.i;
        }).map(function (x) { return x.c; });

        var old = {};
        Array.prototype.forEach.call(box.querySelectorAll('[data-slug]'), function (n) { old[n.getAttribute('data-slug')] = n; });
        var shown = box.querySelector('.is-in') !== null;
        var frag = document.createDocumentFragment();
        var cards = courses.map(function (c) { return courseCard(c, full, old[c.slug]); });
        if (full && Array.isArray(data.upcoming)) {
            data.upcoming.forEach(function (u) { if (u && str(u.title)) cards.push(soonCard(u)); });
        }
        cards.forEach(function (n) {
            n.setAttribute('data-lx', 'up');
            if (shown || !document.documentElement.classList.contains('lx-on')) n.classList.add('is-in');
            frag.appendChild(n);
        });
        box.replaceChildren(frag);
        box.classList.toggle('has-three', cards.length % 3 === 0 || cards.length > 4);
        if (!shown && 'IntersectionObserver' in window) {
            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (e) {
                    if (!e.isIntersecting) return;
                    e.target.classList.add('is-in');
                    io.unobserve(e.target);
                });
            }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
            cards.forEach(function (n, i) {
                n.style.setProperty('--lx-delay', (Math.min(i, 6) * 0.09).toFixed(2) + 's');
                io.observe(n);
            });
        }
    }

    function readCache() {
        try {
            var c = JSON.parse(sessionStorage.getItem(CACHE_KEY) || 'null');
            return c && Date.now() - c.t < CACHE_MS ? c.d : null;
        } catch (e) { return null; }
    }
    function writeCache(d) {
        try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), d: d })); } catch (e) { /* sin almacenamiento */ }
    }

    function apply(d) {
        Array.prototype.forEach.call(boxes, function (b) {
            try { render(b, d); } catch (e) { /* se queda el respaldo */ }
        });
    }

    var cached = readCache();
    if (cached) { apply(cached); return; }

    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, 6000) : 0;
    fetch(API, { signal: ctrl ? ctrl.signal : undefined, credentials: 'omit' })
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function (d) {
            clearTimeout(timer);
            if (!d || !Array.isArray(d.courses)) return;
            writeCache(d);
            apply(d);
        })
        .catch(function () { clearTimeout(timer); });
})();
