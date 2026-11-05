document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('main-nav');

    if (mobileToggle && navLinks) {
        const spans = mobileToggle.querySelectorAll('span');

        const setMenu = (open) => {
            navLinks.classList.toggle('active', open);
            mobileToggle.setAttribute('aria-expanded', String(open));
            mobileToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');

            // Hamburger animation
            spans[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : 'none';
            spans[1].style.opacity = open ? '0' : '1';
            spans[2].style.transform = open ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
        };

        mobileToggle.addEventListener('click', () => {
            setMenu(!navLinks.classList.contains('active'));
        });

        // Escape cierra el menú y devuelve el foco al botón
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                setMenu(false);
                mobileToggle.focus();
            }
        });
    }

    // Header scroll transparency effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Handle Active Nav links based on current URL path
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    const navItems = document.querySelectorAll('.nav-links a');

    navItems.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        const normalizedHref = href.replace(/\/$/, '') || '/';
        if (normalizedHref === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');

        // Check for saved theme preference or OS default
        const savedTheme = localStorage.getItem('theme');
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

        // Initial Theme Load
        if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
            document.documentElement.setAttribute('data-theme', 'light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }

        // Toggle Event
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            let newTheme = 'dark';

            if (currentTheme === 'light') {
                newTheme = 'dark';
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            } else {
                newTheme = 'light';
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Modal Subscription Logic
    const subscribeBtns = document.querySelectorAll('.btn-subscribe');
    const subscribeModal = document.getElementById('subscribe-modal');
    const closeModalBtn = document.getElementById('close-modal');

    if (subscribeModal) {
        // Open Modal
        subscribeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                subscribeModal.classList.add('active');
            });
        });

        // Close Modal via Button
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                subscribeModal.classList.remove('active');
            });
        }

        // Close Modal via Outside Click
        window.addEventListener('click', (e) => {
            if (e.target === subscribeModal) {
                subscribeModal.classList.remove('active');
            }
        });
    }
});
