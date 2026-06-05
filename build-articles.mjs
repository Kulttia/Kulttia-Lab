/**
 * build-articles.mjs
 * Genera HTML estático por artículo desde el WP REST API.
 * Crea blog/[slug].html — servido directo por .htaccess (regla !-f).
 * Googlebot y AI crawlers ven contenido completo sin ejecutar JS.
 *
 * Uso: node build-articles.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const WP_API = 'https://cms.kulttia.com/wp-json/wp/v2';
const SITE_URL = 'https://kulttia.com';
const PER_PAGE = 100;
const BLOG_DIR = join(__dirname, 'blog');

mkdirSync(BLOG_DIR, { recursive: true });

// ─── helpers ────────────────────────────────────────────────────
function stripHTML(html = '') {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

function readTime(html = '') {
  return Math.max(1, Math.round(stripHTML(html).split(/\s+/).length / 200));
}

// ─── fetch all posts (paginado) ──────────────────────────────────
async function fetchAllPosts() {
  let page = 1;
  let all = [];
  while (true) {
    const url = `${WP_API}/posts?per_page=${PER_PAGE}&page=${page}&_embed=true&status=publish&orderby=date&order=desc`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`WP API error: ${res.status}`);
    const posts = await res.json();
    if (!posts.length) break;
    all = all.concat(posts);
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1', 10);
    if (page >= totalPages) break;
    page++;
  }
  return all;
}

// ─── generate HTML for one post ─────────────────────────────────
function generateHTML(post) {
  const title     = stripHTML(post.title?.rendered || 'Sin título');
  const excerpt   = stripHTML(post.excerpt?.rendered || '').substring(0, 160);
  const content   = post.content?.rendered || '';
  const slug      = post.slug;
  const canonical = `${SITE_URL}/blog/${slug}`;
  const dateISO   = post.date;
  const modISO    = post.modified || post.date;
  const dateHuman = formatDate(dateISO);
  const mins      = readTime(content);

  const embedded        = post._embedded || {};
  const featuredMedia   = embedded['wp:featuredmedia']?.[0];
  const heroImg         = featuredMedia?.media_details?.sizes?.large?.source_url
                       || featuredMedia?.source_url
                       || '';
  const heroImgAlt      = featuredMedia?.alt_text || title;
  const ogImage         = heroImg || `${SITE_URL}/og-default.png`;

  const categories      = embedded['wp:term']?.[0] || [];
  const categoryName    = categories[0]?.name || 'Artículo';

  const author          = embedded['author']?.[0];
  const authorName      = author?.name || 'Kulttia Lab';
  const authorDesc      = author?.description || 'Explorando la intersección entre tecnología, cultura e inteligencia artificial.';
  const authorAvatar    = author?.avatar_urls?.['96']
                       || `https://ui-avatars.com/api/?name=${encodeURIComponent(authorName)}&background=0066ff&color=fff&size=96`;

  const jsonLD = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: excerpt,
    url: canonical,
    datePublished: dateISO,
    dateModified: modISO,
    image: heroImg || ogImage,
    inLanguage: 'es',
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#pedro-bedoya`,
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Kulttia Lab',
      url: SITE_URL,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Artículos', item: `${SITE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: title, item: canonical },
      ],
    },
  }, null, 2);

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Kulttia Lab</title>
  <meta name="description" content="${excerpt.replace(/"/g, '&quot;')}">
  <link rel="canonical" href="${canonical}">

  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Kulttia Lab">
  <meta property="og:title" content="${title.replace(/"/g, '&quot;')}">
  <meta property="og:description" content="${excerpt.replace(/"/g, '&quot;')}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:url" content="${canonical}">
  <meta property="article:published_time" content="${dateISO}">
  <meta property="article:modified_time" content="${modISO}">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title.replace(/"/g, '&quot;')}">
  <meta name="twitter:description" content="${excerpt.replace(/"/g, '&quot;')}">
  <meta name="twitter:image" content="${ogImage}">

  <script type="application/ld+json">${jsonLD}</script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="/css/estilos.css?v=2">

  <style>
    .single-article { padding-top: 10rem; padding-bottom: 5rem; }
    .article-header-meta { display:flex; align-items:center; justify-content:center; gap:1.5rem; margin-bottom:2rem; color:var(--text-muted); font-size:.95rem; flex-wrap:wrap; }
    .article-header-meta .tag-pill { margin-bottom:0; }
    .article-main-title { font-size:clamp(2.5rem,5vw,4rem); text-align:center; line-height:1.2; margin-bottom:3rem; max-width:900px; margin-left:auto; margin-right:auto; letter-spacing:-1px; }
    .article-hero-img { width:100%; height:60vh; min-height:400px; object-fit:cover; border-radius:var(--border-radius); margin-bottom:4rem; border:1px solid var(--border-color); display:block; }
    .article-body { max-width:760px; margin:0 auto; font-size:1.15rem; line-height:1.8; color:var(--text-muted); }
    .article-body p { margin-bottom:1.8rem; }
    .article-body h2 { color:var(--text-main); font-size:2rem; margin:3.5rem 0 1.5rem; line-height:1.3; }
    .article-body h3 { color:var(--text-main); font-size:1.5rem; margin:2.5rem 0 1rem; }
    .article-body img { width:100%; border-radius:var(--border-radius); margin:2.5rem 0; border:1px solid var(--border-color); }
    .article-body blockquote { border-left:4px solid var(--acid-blue); padding:1.5rem 2rem; background:var(--bg-element); margin:3rem 0; border-radius:0 var(--border-radius) var(--border-radius) 0; font-size:1.35rem; font-style:italic; color:var(--text-main); line-height:1.6; }
    .article-body ul, .article-body ol { margin-bottom:1.8rem; padding-left:1.5rem; }
    .article-body li { margin-bottom:.8rem; }
    .article-body a { color:var(--acid-blue); text-decoration:underline; text-underline-offset:4px; font-weight:500; }
    .author-box { max-width:760px; margin:5rem auto 0; padding:2.5rem; background:var(--bg-card); border:1px solid var(--border-color); border-radius:var(--border-radius); display:flex; align-items:center; gap:2rem; }
    .author-avatar { width:100px; height:100px; border-radius:50%; object-fit:cover; border:2px solid var(--acid-blue); box-shadow:0 0 15px var(--acid-blue-glow); flex-shrink:0; }
    .author-info h4 { font-size:1.3rem; margin-bottom:.5rem; color:var(--text-main); }
    .author-info p { font-size:.95rem; color:var(--text-muted); margin-bottom:0; }
    .back-to-blog { display:inline-flex; align-items:center; gap:.5rem; color:var(--text-muted); margin-bottom:2rem; font-size:.95rem; font-weight:600; transition:color .2s ease; }
    .back-to-blog:hover { color:var(--acid-blue); }
    @media (max-width:768px) { .author-box { flex-direction:column; text-align:center; gap:1.5rem; } .article-hero-img { height:40vh; min-height:280px; } }
  </style>
  <script>
    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  </script>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
</head>
<body>

  <header class="header">
    <div class="container flex-between">
      <a href="/" class="logo">Kulttia Lab<span>.</span></a>
      <nav class="nav-links" id="main-nav">
        <a href="/">Inicio</a>
        <a href="/blog" class="active">Artículos</a>
        <a href="/nosotros">Nosotros</a>
        <a href="/servicios">Servicios</a>
        <a href="/contacto">Contacto</a>
        <button class="btn btn-primary btn-subscribe" style="padding:.5rem 1.2rem;font-size:.85rem;margin-left:1rem;">Suscribirse</button>
        <button id="theme-toggle" class="btn" style="padding:.5rem;background:transparent;color:var(--text-main);font-size:1.2rem;margin-left:.5rem;" aria-label="Toggle Dark/Light Mode">
          <i class="fa-solid fa-moon"></i>
        </button>
      </nav>
      <div class="mobile-toggle" id="mobile-toggle"><span></span><span></span><span></span></div>
    </div>
  </header>

  <main class="single-article container" id="article-main">
    <a href="/blog" class="back-to-blog"><i class="fa-solid fa-arrow-left"></i> Volver a los artículos</a>

    <div id="article-content">
      <div class="article-header-meta">
        <span class="tag-pill" id="article-category">${categoryName}</span>
        <span class="article-date" id="article-date">
          <i class="fa-regular fa-calendar" style="margin-right:5px;"></i> ${dateHuman}
        </span>
        <span class="article-time" id="article-read-time">
          <i class="fa-regular fa-clock" style="margin-right:5px;"></i> ${mins} min de lectura
        </span>
      </div>

      <h1 class="article-main-title" id="article-title">${post.title?.rendered || title}</h1>

      ${heroImg ? `<img src="${heroImg}" alt="${heroImgAlt}" class="article-hero-img" id="article-hero-img" width="1200" height="630">` : ''}

      <div class="article-body" id="article-body">${content}</div>

      <div class="author-box" id="author-box">
        <img src="${authorAvatar}" alt="${authorName}" class="author-avatar" id="author-avatar">
        <div class="author-info">
          <h4 id="author-name">${authorName}</h4>
          <p id="author-desc">${authorDesc}</p>
        </div>
      </div>
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-bottom">
        <p>&copy; 2026 Kulttia Lab. Todos los derechos reservados.</p>
        <div class="social-links">
          <a href="https://www.tiktok.com/@kulttia" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
          <a href="https://www.instagram.com/kulttialab/" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://www.facebook.com/Kulttia/" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://www.linkedin.com/company/kulttia/" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  </footer>

  <div id="subscribe-modal" class="modal-overlay">
    <div class="modal-content">
      <span class="close-modal" id="close-modal"><i class="fa-solid fa-xmark"></i></span>
      <i class="fa-solid fa-envelope-open-text modal-icon"></i>
      <h2>Descifra el Mañana. Hoy.</h2>
      <p>Únete a nuestra comunidad selecta. Recibirás ensayos exclusivos sobre cómo la inteligencia artificial y la cultura moderna re-escriben las reglas del juego.</p>
      <form class="modal-form" data-wpforms-id="2" action="#" method="POST" onsubmit="sendSubscribeForm(event)">
        <input type="email" name="email" class="form-control" placeholder="tu@email.com" required style="margin-bottom:1.5rem;width:100%;padding:1rem;border-radius:8px;">
        <button type="submit" class="btn btn-primary" style="width:100%;">Quiero acceso anticipado</button>
      </form>
      <p class="modal-disclaimer">Al suscribirte aceptas nuestra <a href="/politica-privacidad">Política de Privacidad</a>.</p>
    </div>
  </div>

  <script src="/js/wordpress-api.js?v=3"></script>
  <script src="/js/main.js"></script>
  <script src="/js/search.js"></script>
  <div class="wa-bubble" aria-label="Chatea con nosotros por WhatsApp">
    <span class="wa-tooltip">💬 ¡Hablemos por WhatsApp!</span>
    <a href="https://wa.me/573182057306" class="wa-btn" target="_blank" rel="noopener noreferrer" aria-label="Abrir WhatsApp">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 3.5A12 12 0 0 0 3.5 20.5L2 22l1.5-1.5A12 12 0 1 0 20.5 3.5zm-8.5 18a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm5.2-7.8c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.1l-.9 1.1c-.1.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.4-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0s-.6.1-.9.4c-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.1.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.8.6.8.2 1.5.2 2 .1.6-.1 1.7-.7 2-1.3.2-.6.2-1.2.2-1.3 0-.2-.2-.3-.5-.4z"/></svg>
      <span class="wa-online"></span>
    </a>
  </div>

</body>
</html>`;
}

// ─── update sitemap.xml ──────────────────────────────────────────
function updateSitemap(posts) {
  const staticUrls = [
    { loc: `${SITE_URL}/`,          priority: '1.0', changefreq: 'weekly' },
    { loc: `${SITE_URL}/blog`,      priority: '0.9', changefreq: 'daily' },
    { loc: `${SITE_URL}/nosotros`,  priority: '0.8', changefreq: 'monthly' },
    { loc: `${SITE_URL}/servicios`, priority: '0.8', changefreq: 'monthly' },
    { loc: `${SITE_URL}/contacto`,  priority: '0.6', changefreq: 'monthly' },
  ];
  const articleUrls = posts.map(p => ({
    loc: `${SITE_URL}/blog/${p.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: (p.modified || p.date).substring(0, 10),
  }));

  const all = [...staticUrls, ...articleUrls];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all.map(u => `  <url>
    <loc>${u.loc}</loc>
    <priority>${u.priority}</priority>
    <changefreq>${u.changefreq}</changefreq>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;

  writeFileSync(join(__dirname, 'sitemap.xml'), xml, 'utf8');
  console.log('  sitemap.xml updated');
}

// ─── main ────────────────────────────────────────────────────────
async function main() {
  console.log('Fetching posts from WP API...');
  const posts = await fetchAllPosts();
  console.log(`Found ${posts.length} posts\n`);

  for (const post of posts) {
    const html = generateHTML(post);
    const slugDir = join(BLOG_DIR, post.slug);
    mkdirSync(slugDir, { recursive: true });
    const outPath = join(slugDir, 'index.html');
    writeFileSync(outPath, html, 'utf8');
    console.log(`  ✓ blog/${post.slug}/index.html`);
  }

  updateSitemap(posts);
  console.log(`\nDone. ${posts.length} static articles generated.`);
  console.log('Run: git add blog/ sitemap.xml && git commit -m "ssg: regenerate static articles" && git push');
}

main().catch(err => { console.error(err); process.exit(1); });
