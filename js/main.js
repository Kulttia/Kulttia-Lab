document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('main-nav');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Hamburger animation
            const spans = mobileToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
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
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-links a');

    navItems.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
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
