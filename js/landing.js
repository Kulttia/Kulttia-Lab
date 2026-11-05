/* =============================================
   KULTTIA LAB — LANDINGS DE PRODUCTO (Academia, Negocios)
   - Revelado al hacer scroll ([data-lx])
   - Captura fija que cambia según el paso visible (.lx-show)
   - Parallax suave ([data-parallax])
   - Pestañas de capturas del panel (.lx-panel)
   Sin animaciones con prefers-reduced-motion.
   ============================================= */
(function () {
    'use strict';

    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var hasIO = 'IntersectionObserver' in window;
    var root = document.documentElement;

    function each(sel, fn, scope) {
        Array.prototype.forEach.call((scope || document).querySelectorAll(sel), fn);
    }

    /* --- 1. Revelado --- */
    function initReveal() {
        if (reduce || !hasIO) {
            root.classList.remove('lx-on');
            return;
        }
        // Escalonado dentro de cada grupo marcado con data-lx-group
        each('[data-lx-group]', function (g) {
            each('[data-lx]', function (el, i) {
                el.style.setProperty('--lx-delay', (Math.min(i, 6) * 0.09).toFixed(2) + 's');
            }, g);
        });
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (!e.isIntersecting) return;
                e.target.classList.add('is-in');
                io.unobserve(e.target);
            });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
        each('[data-lx]', function (el) { io.observe(el); });
    }

    /* --- 2. Showcase con captura fija --- */
    function initShowcase() {
        each('.lx-show', function (show) {
            var steps = show.querySelectorAll('.lx-step');
            var shots = show.querySelectorAll('.lx-screen .lx-frame-body img');
            var dots = show.querySelectorAll('.lx-screen-dots i');
            if (!steps.length || !shots.length) return;

            function activate(i) {
                Array.prototype.forEach.call(steps, function (s, k) { s.classList.toggle('is-active', k === i); });
                Array.prototype.forEach.call(shots, function (s, k) { s.classList.toggle('is-on', k === i); });
                Array.prototype.forEach.call(dots, function (s, k) { s.classList.toggle('is-on', k === i); });
            }
            activate(0);
            if (!hasIO) return;

            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (e) {
                    if (e.isIntersecting) activate(Array.prototype.indexOf.call(steps, e.target));
                });
            }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
            Array.prototype.forEach.call(steps, function (s) { io.observe(s); });
        });
    }

    /* --- 3. Parallax --- */
    function initParallax() {
        var items = document.querySelectorAll('[data-parallax]');
        if (reduce || !items.length) return;
        var mq = window.matchMedia('(min-width: 1000px)');
        var ticking = false;

        function update() {
            ticking = false;
            var vh = window.innerHeight;
            Array.prototype.forEach.call(items, function (el) {
                if (!mq.matches) { el.style.removeProperty('--lx-y'); return; }
                var r = el.getBoundingClientRect();
                if (r.bottom < -200 || r.top > vh + 200) return;
                var speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
                var offset = (r.top + r.height / 2 - vh / 2) * -speed;
                el.style.setProperty('--lx-y', offset.toFixed(1) + 'px');
            });
        }
        function onScroll() {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(update);
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        update();
    }

    /* --- 4. Pestañas de capturas --- */
    function initPanels() {
        each('.lx-panel', function (panel) {
            var tabs = panel.querySelectorAll('[role="tab"]');
            var shots = panel.querySelectorAll('.lx-frame-body img');
            var caption = panel.querySelector('.lx-panel-caption');

            function select(i, focus) {
                Array.prototype.forEach.call(tabs, function (t, k) {
                    var on = k === i;
                    t.setAttribute('aria-selected', on ? 'true' : 'false');
                    t.tabIndex = on ? 0 : -1;
                    if (on && focus) t.focus();
                });
                Array.prototype.forEach.call(shots, function (s, k) { s.classList.toggle('is-on', k === i); });
                if (caption) caption.textContent = tabs[i].getAttribute('data-caption') || '';
            }

            Array.prototype.forEach.call(tabs, function (t, i) {
                t.addEventListener('click', function () { select(i); });
                t.addEventListener('keydown', function (e) {
                    var n = tabs.length;
                    if (e.key === 'ArrowRight') { e.preventDefault(); select((i + 1) % n, true); }
                    if (e.key === 'ArrowLeft') { e.preventDefault(); select((i - 1 + n) % n, true); }
                });
            });
            select(0);
        });
    }

    function init() {
        initReveal();
        initShowcase();
        initParallax();
        initPanels();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
