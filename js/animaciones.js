/* =============================================
   KULTTIA LAB — MOTOR DE ANIMACIÓN
   - Cubo 3D en el logo (todas las páginas)
   - Escena de cubos del hero + parallax de mouse
   - Revelado al hacer scroll (incluye contenido
     cargado desde WordPress)
   Respeta prefers-reduced-motion.
   ============================================= */
(function () {
    'use strict';

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Se activa antes del primer pintado (script defer) para que no haya
    // parpadeo entre el estado inicial y el animado.
    document.documentElement.classList.add('anim-in');

    function cubeFaces() {
        return '<i></i><i></i><i></i><i></i><i></i><i></i>';
    }

    /* --- 1. Punto del logo → cubo 3D --- */
    function buildLogoCubes() {
        document.querySelectorAll('.logo span, .footer-logo span').forEach(dot => {
            if (dot.dataset.cubed) return;
            dot.dataset.cubed = '1';
            dot.classList.add('logo-cube');
            dot.setAttribute('aria-hidden', 'true');
            dot.innerHTML = cubeFaces();
        });
    }

    /* --- 1b. Logo del header: solo el cubo; el clic despliega el nombre --- */
    function collapseHeaderLogo() {
        const logo = document.querySelector('.header .logo');
        if (!logo || logo.dataset.collapsible) return;

        // Envuelve el texto suelto ("Kulttia Lab") en un span animable
        const textNode = Array.from(logo.childNodes)
            .find(n => n.nodeType === Node.TEXT_NODE && n.textContent.trim());
        if (!textNode) return;

        const name = document.createElement('span');
        name.className = 'logo-name';
        name.textContent = textNode.textContent.trim();
        logo.replaceChild(name, textNode);

        logo.dataset.collapsible = '1';
        logo.setAttribute('aria-label', 'Kulttia Lab — inicio');

        if (reduceMotion) {
            logo.classList.add('is-collapsible', 'is-open');
            logo.setAttribute('aria-expanded', 'true');
            return;
        }

        logo.classList.add('is-collapsible');
        logo.setAttribute('aria-expanded', 'false');

        // Con mouse el nombre sale al pasar el cursor (CSS :hover) y el clic
        // navega directo. El toggle por clic queda solo para pantallas táctiles.
        if (window.matchMedia('(hover: hover)').matches) return;

        // Primer toque: despliega el nombre. Segundo: navega a inicio.
        logo.addEventListener('click', e => {
            if (logo.classList.contains('is-open')) return;
            e.preventDefault();
            logo.classList.add('is-open');
            logo.setAttribute('aria-expanded', 'true');
        });

        // Clic fuera: se repliega
        document.addEventListener('click', e => {
            if (logo.contains(e.target) || !logo.classList.contains('is-open')) return;
            logo.classList.remove('is-open');
            logo.setAttribute('aria-expanded', 'false');
        });
    }

    /* --- 2. Escena de cubos en el hero --- */
    function buildHeroScene() {
        const hero = document.querySelector('.hero');
        if (!hero || hero.querySelector('.cube-scene')) return;

        const scene = document.createElement('div');
        scene.className = 'cube-scene';
        scene.setAttribute('aria-hidden', 'true');
        scene.innerHTML = `
            <div class="cube-stage">
                <div class="cube">
                    <div class="cube-face front"></div>
                    <div class="cube-face back"></div>
                    <div class="cube-face right"></div>
                    <div class="cube-face left"></div>
                    <div class="cube-face top"></div>
                    <div class="cube-face bottom"></div>
                </div>
                <div class="cube-core"></div>
                <div class="orbit-tilt a"><div class="orbit"><div class="sat"><div class="mini-cube">${cubeFaces()}</div></div></div></div>
                <div class="orbit-tilt b"><div class="orbit"><div class="sat"><div class="mini-cube">${cubeFaces()}</div></div></div></div>
                <div class="orbit-tilt c"><div class="orbit"><div class="sat"><div class="mini-cube">${cubeFaces()}</div></div></div></div>
            </div>`;
        hero.appendChild(scene);

        if (reduceMotion || window.matchMedia('(pointer: coarse)').matches) return;

        // Parallax: la escena se inclina siguiendo el cursor
        let raf = null;
        window.addEventListener('mousemove', e => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                raf = null;
                const x = (e.clientX / window.innerWidth) - 0.5;
                const y = (e.clientY / window.innerHeight) - 0.5;
                scene.style.setProperty('--tilt-y', (x * 22).toFixed(2) + 'deg');
                scene.style.setProperty('--tilt-x', (-y * 16).toFixed(2) + 'deg');
            });
        }, { passive: true });
    }

    /* --- 3. Revelado al hacer scroll --- */
    const REVEAL_SELECTOR = [
        '.section-title',
        '.article-card',
        '.newsletter',
        '.boveda-card',
        '.footer-grid > div'
    ].join(',');

    let observer = null;

    function markAndObserve(root) {
        const scope = root || document;
        const nodes = scope.querySelectorAll(REVEAL_SELECTOR);
        let i = 0;
        nodes.forEach(el => {
            if (el.dataset.reveal !== undefined) return;
            el.dataset.reveal = '';
            // Escalonado dentro de cada grupo (máx 6 pasos)
            el.style.setProperty('--reveal-delay', (Math.min(i, 5) * 0.08).toFixed(2) + 's');
            i++;
            if (observer) observer.observe(el);
            else el.classList.add('is-visible');
        });
    }

    function initReveal() {
        if (reduceMotion || !('IntersectionObserver' in window)) {
            markAndObserve(document);
            return;
        }

        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

        markAndObserve(document);

        // Contenido cargado por JS (posts de WordPress, bóveda…)
        const dynamicRoots = document.querySelectorAll('#home-posts-container, #posts-container, #boveda-grid');
        dynamicRoots.forEach(root => {
            new MutationObserver(() => markAndObserve(root)).observe(root, { childList: true });
        });
    }

    function init() {
        buildLogoCubes();
        collapseHeaderLogo();
        buildHeroScene();
        initReveal();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
