// Blog Detail with full 3-language support (EN, RU, UZ)

function getBlogLang() {
  return (
    (window.getCurrentLang && window.getCurrentLang()) ||
    localStorage.getItem("app_lang") ||
    "en"
  );
}

function getBlogText(field, lang) {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] || field["en"] || Object.values(field)[0] || "";
}

function getBlogArray(field, lang) {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  return field[lang] || field["en"] || [];
}

const blogDetailUi = {
  authorTag: { en: "AUTHOR", ru: "АВТОР", uz: "MUALLIF" },
  trendingTag: {
    en: "TRENDING ARTICLES",
    ru: "ПОПУЛЯРНЫЕ СТАТЬИ",
    uz: "OMMABOP MAQOLALAR",
  },
  tagsTag: { en: "TAGS", ru: "ТЕГИ", uz: "TEGLAR" },
  shareTag: {
    en: "Share this post:",
    ru: "Поделиться статьей:",
    uz: "Maqolani ulashish:",
  },
  searchPlaceholder: {
    en: "Search blog...",
    ru: "Поиск по блогу...",
    uz: "Blogdan qidirish...",
  },
  notFound: {
    en: "Article not found",
    ru: "Статья не найдена",
    uz: "Maqola topilmadi",
  },
};

function formatBlogAssetUrl(url) {
  if (!url) return "";
  if (window.location.protocol === "file:" && url.startsWith("/")) {
    return "../.." + url;
  }
  return url;
}

function renderBlogDetail() {
  const container =
    document.getElementById("blog-detail-container") ||
    document.getElementById("detail-layout");
  if (!container) return;

  if (container.id === "detail-layout") {
    container.className = "w-full";
  }

  const urlParams = new URLSearchParams(window.location.search);
  const blogId = parseInt(urlParams.get("id")) || 1;

  if (typeof blogs === "undefined" || !blogs.length) return;

  const article = blogs.find((b) => b.id === blogId) || blogs[0];
  const lang = getBlogLang();

  if (!article) {
    container.innerHTML = `
      <div class="max-w-4xl mx-auto py-20 text-center">
        <h2 class="text-3xl font-bold">${blogDetailUi.notFound[lang]}</h2>
      </div>
    `;
    return;
  }

  const title = getBlogText(article.title, lang);
  const category = getBlogText(article.category, lang);
  const date = getBlogText(article.date, lang);
  const duration = getBlogText(article.duration, lang);
  const readTime = getBlogText(article.readTime, lang);
  const leadParagraph = getBlogText(article.leadParagraph, lang);
  const contentList = getBlogArray(article.content, lang);
  const quote = getBlogText(article.quote, lang);
  const listIntro = getBlogText(article.listIntro, lang);
  const bulletPoints = getBlogArray(article.bulletPoints, lang);
  const outro = getBlogText(article.outro, lang);

  const authorName = article.author?.name || "Kristin Watson";
  const authorRole = getBlogText(article.author?.role, lang);
  const authorAvatar = formatBlogAssetUrl(
    article.author?.avatar || "/assets/swiper-img.png",
  );

  const trendingArticles = blogs.filter((b) => b.id !== article.id).slice(0, 3);
  const allTags = Array.from(new Set(blogs.flatMap((b) => b.tags || [])));

  document.title = `${title} | Createx`;

  container.innerHTML = `
    <!-- Main Article Body (2 columns on large screen) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
      
      <!-- Article Content (Left) -->
      <main class="lg:col-span-8">
        <!-- Meta info -->
        <div class="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#787A80] font-medium mb-3">
          <span class="font-bold text-[#FF3F3A] uppercase tracking-wider">${category}</span>
          <span>|</span>
          <span>📅 ${date}</span>
          ${readTime ? `<span>|</span><span>⏱️ ${readTime}</span>` : ""}
        </div>

        <!-- Title -->
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E212C] leading-tight mb-8">
          ${title}
        </h1>

        <!-- Cover Image -->
        <div class="rounded-2xl overflow-hidden mb-8 shadow-md">
          <img src="${formatBlogAssetUrl(article.image)}" alt="${title}" class="w-full h-auto max-h-[480px] object-cover" />
        </div>

        <!-- Lead Paragraph -->
        ${
          leadParagraph
            ? `
          <p class="text-lg sm:text-xl font-semibold text-[#1E212C] leading-relaxed mb-6">
            ${leadParagraph}
          </p>
        `
            : ""
        }

        <!-- Content Paragraphs -->
        <div class="space-y-5 text-base sm:text-lg text-[#424551] leading-relaxed mb-8">
          ${contentList.map((p) => `<p>${p}</p>`).join("")}
        </div>

        <!-- Quote -->
        ${
          quote
            ? `
          <blockquote class="my-8 pl-6 border-l-4 border-[#FF3F3A] py-2">
            <p class="text-xl sm:text-2xl font-bold italic text-[#1E212C] leading-snug">
              "${quote}"
            </p>
          </blockquote>
        `
            : ""
        }

        <!-- Bullet Points -->
        ${
          bulletPoints.length
            ? `
          <div class="my-8">
            ${listIntro ? `<p class="font-bold text-lg text-[#1E212C] mb-4">${listIntro}</p>` : ""}
            <ul class="space-y-3">
              ${bulletPoints
                .map(
                  (pt) => `
                <li class="flex items-start gap-3 text-base sm:text-lg text-[#424551] leading-relaxed">
                  <span class="text-[#FF3F3A] font-black text-xl leading-none mt-0.5">✓</span>
                  <span>${pt}</span>
                </li>
              `,
                )
                .join("")}
            </ul>
          </div>
        `
            : ""
        }

        <!-- Outro -->
        ${
          outro
            ? `
          <p class="text-base sm:text-lg text-[#424551] leading-relaxed mb-8">
            ${outro}
          </p>
        `
            : ""
        }

        <!-- Social Share & Tags Bar -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-gray-200 mt-12">
          <div class="flex items-center gap-3">
            <span class="font-bold text-sm text-[#1E212C]">${blogDetailUi.shareTag[lang]}</span>
            <div class="flex items-center gap-2">
              <img src="${formatBlogAssetUrl("/assets/Facebook (1).png")}" alt="Facebook" class="w-6 h-6 cursor-pointer hover:opacity-80" />
              <img src="${formatBlogAssetUrl("/assets/Twitter (1).png")}" alt="Twitter" class="w-6 h-6 cursor-pointer hover:opacity-80" />
              <img src="${formatBlogAssetUrl("/assets/Linked-In (1).png")}" alt="LinkedIn" class="w-6 h-6 cursor-pointer hover:opacity-80" />
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            ${(article.tags || [])
              .map(
                (t) =>
                  `<span class="px-3 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-600">${t}</span>`,
              )
              .join("")}
          </div>
        </div>
      </main>

      <!-- Sidebar (Right) -->
      <aside class="lg:col-span-4 w-full space-y-12">
        <!-- Search Box -->
        <div class="relative">
          <input
            id="sidebar-search"
            type="text"
            placeholder="${blogDetailUi.searchPlaceholder[lang]}"
            class="w-full pl-4 pr-10 py-3 rounded-lg border border-gray-300 text-sm outline-none focus:border-[#FF3F3A] transition-colors"
          />
          <span class="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">🔍</span>
        </div>

        <!-- Author Box -->
        <div class="p-6 bg-white rounded-xl">
          <h3 class="text-xs font-bold tracking-widest uppercase text-[#787A80] mb-4">${blogDetailUi.authorTag[lang]}</h3>
          <div class="flex items-center gap-4">
            <img src="${authorAvatar}" alt="${authorName}" class="w-16 h-16 rounded-xl object-cover bg-amber-200 shrink-0" />
            <div>
              <h4 class="text-base font-bold text-[#1E212C]">${authorName}</h4>
              <p class="text-xs text-[#787A80] mt-0.5">${authorRole}</p>
            </div>
          </div>
        </div>

        <!-- Trending Articles -->
        <div>
          <h3 class="text-xs font-bold tracking-widest uppercase text-[#787A80] mb-5">${blogDetailUi.trendingTag[lang]}</h3>
          <div class="space-y-4">
            ${trendingArticles
              .map((item) => {
                const itemTitle = getBlogText(item.title, lang);
                const itemDate = getBlogText(item.date, lang);
                return `
                  <div
                    onclick="window.location.href='blogDetail.html?id=${item.id}'"
                    class="flex items-start gap-3.5 group cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div class="w-16 h-16 rounded-lg overflow-hidden shrink-0 ${item.bgColor}">
                      <img src="${formatBlogAssetUrl(item.image)}" alt="${itemTitle}" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div>
                      <div class="text-xs text-[#787A80] mb-1">📅 ${itemDate}</div>
                      <h5 class="text-xs sm:text-sm font-bold text-[#1E212C] group-hover:text-[#FF3F3A] transition-colors line-clamp-2 leading-snug">
                        ${itemTitle}
                      </h5>
                    </div>
                  </div>
                `;
              })
              .join("")}
          </div>
        </div>

        <!-- Tags Cloud -->
        <div>
          <h3 class="text-xs font-bold tracking-widest uppercase text-[#787A80] mb-4">${blogDetailUi.tagsTag[lang]}</h3>
          <div class="flex flex-wrap gap-2">
            ${allTags
              .map(
                (tag) => `
                <span class="px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-200 text-[#787A80] hover:bg-[#FF3F3A] hover:text-white hover:border-[#FF3F3A] cursor-pointer transition">
                  ${tag}
                </span>
              `,
              )
              .join("")}
          </div>
        </div>
      </aside>

    </div>
  `;

  // Setup sidebar search enter key
  const sbSearch = document.getElementById("sidebar-search");
  if (sbSearch) {
    sbSearch.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && sbSearch.value.trim()) {
        window.location.href = `blog.html?q=${encodeURIComponent(sbSearch.value.trim())}`;
      }
    });
  }

  // Burger menu setup
  const burgerBtn = document.getElementById("burger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const burgerIcon = document.getElementById("burger-icon");
  const closeIcon = document.getElementById("close-icon");
  if (burgerBtn && mobileMenu && !burgerBtn.dataset.bound) {
    burgerBtn.dataset.bound = "true";
    burgerBtn.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.toggle("hidden");
      if (burgerIcon && closeIcon) {
        burgerIcon.classList.toggle("hidden", !isHidden);
        closeIcon.classList.toggle("hidden", isHidden);
      }
    });
  }
}

window.addEventListener("languageChanged", () => {
  renderBlogDetail();
});

document.addEventListener("DOMContentLoaded", () => {
  renderBlogDetail();
});

renderBlogDetail();
