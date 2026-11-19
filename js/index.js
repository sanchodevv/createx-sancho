function changeTab(tabName) {
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => content.classList.add("hidden"));

  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((button) => {
    button.classList.remove("border-red-500", "text-red-500");
    button.classList.add("border-transparent", "text-gray-500");
  });

  document.getElementById("content-" + tabName).classList.remove("hidden");

  const activeBtn = document.getElementById("btn-" + tabName);
  activeBtn.classList.remove("border-transparent", "text-gray-500");
  activeBtn.classList.add("border-red-500", "text-red-500");
}

document.addEventListener("DOMContentLoaded", () => {
  changeTab("tutors");
});

// soat uchun
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 7); // Bugundan 7 kun keyin

function updateCountdown() {
  const daysEl = document.getElementById("days");
  if (!daysEl) return;
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    daysEl.textContent = "00";
    const h = document.getElementById("hours"); if (h) h.textContent = "00";
    const m = document.getElementById("mins"); if (m) m.textContent = "00";
    const s = document.getElementById("secs"); if (s) s.textContent = "00";
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  daysEl.textContent = String(days).padStart(2, "0");
  const h = document.getElementById("hours"); if (h) h.textContent = String(hours).padStart(2, "0");
  const m = document.getElementById("mins"); if (m) m.textContent = String(mins).padStart(2, "0");
  const s = document.getElementById("secs"); if (s) s.textContent = String(secs).padStart(2, "0");
}

updateCountdown();
const timerInterval = setInterval(updateCountdown, 1000);
// ==================== MODALS (SIGN IN & SIGN UP) ====================
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");

const openLoginBtns = document.querySelectorAll("#openLoginModal, .openLoginModalMobile");
const openRegisterBtns = document.querySelectorAll("#openRegisterModal, .openRegisterModalMobile");

const closeLoginBtn = document.getElementById("closeLogin");
const closeRegisterBtn = document.getElementById("closeRegister");

const switchToRegister = document.getElementById("switchToRegister");
const switchToLogin = document.getElementById("switchToLogin");

// Open Sign in modal
openLoginBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (registerModal && registerModal.open) registerModal.close();
    if (loginModal) loginModal.showModal();
  });
});

// Open Sign up modal
openRegisterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (loginModal && loginModal.open) loginModal.close();
    if (registerModal) registerModal.showModal();
  });
});

// Close buttons
if (closeLoginBtn && loginModal) {
  closeLoginBtn.addEventListener("click", () => loginModal.close());
}

if (closeRegisterBtn && registerModal) {
  closeRegisterBtn.addEventListener("click", () => registerModal.close());
}

// Switch between modals
if (switchToRegister && loginModal && registerModal) {
  switchToRegister.addEventListener("click", () => {
    loginModal.close();
    registerModal.showModal();
  });
}

if (switchToLogin && loginModal && registerModal) {
  switchToLogin.addEventListener("click", () => {
    registerModal.close();
    loginModal.showModal();
  });
}

// Close when clicking outside on backdrop
function setupBackdropClose(dialog) {
  if (!dialog) return;
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      dialog.close();
    }
  });
}

setupBackdropClose(loginModal);
setupBackdropClose(registerModal);

// Toggle password visibility (eye icon)
document.querySelectorAll(".toggle-password").forEach((btn) => {
  btn.addEventListener("click", () => {
    const wrapper = btn.closest(".relative");
    if (!wrapper) return;
    const input = wrapper.querySelector("input");
    const eyeIcon = btn.querySelector(".eye-icon");
    const eyeOffIcon = btn.querySelector(".eye-off-icon");

    if (input.type === "password") {
      input.type = "text";
      if (eyeIcon) eyeIcon.classList.add("hidden");
      if (eyeOffIcon) eyeOffIcon.classList.remove("hidden");
    } else {
      input.type = "password";
      if (eyeIcon) eyeIcon.classList.remove("hidden");
      if (eyeOffIcon) eyeOffIcon.classList.add("hidden");
    }
  });
});

// Prevent form submission from reloading page
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

// ==================== HOME PAGE DYNAMIC 3-LANGUAGE RENDERING ====================
function getHomeLang() {
  return (
    (window.getCurrentLang && window.getCurrentLang()) ||
    localStorage.getItem("app_lang") ||
    "en"
  );
}

function getHomeText(field, lang) {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] || field["en"] || Object.values(field)[0] || "";
}

function renderHomeFeaturedCourses() {
  const container = document.getElementById("home-featured-courses");
  if (!container || typeof courses === "undefined" || !courses.length) return;

  const lang = getHomeLang();
  const byWord = { en: "by", ru: "автор:", uz: "muallif:" }[lang] || "by";
  const featured = courses.slice(0, 6);

  container.innerHTML = featured
    .map((c) => {
      const title = getHomeText(c.title, lang);
      const category = getHomeText(c.category, lang);
      const author = c.curator?.name || "Jerome Bell";

      return `
        <div 
          onclick="window.location.href='/pages/courses/course-detail.html?id=${c.id}'"
          class="featured-card flex flex-col sm:flex-row items-start sm:items-center gap-5 border border-[#ECEEF1] rounded-xl p-5 hover:shadow-xl transition-all duration-300 cursor-pointer bg-white group"
        >
          <div class="w-full sm:w-[214px] h-[140px] shrink-0 overflow-hidden rounded-lg bg-amber-400">
            <img 
              src="${c.image}" 
              alt="${title}" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="flex flex-col flex-1">
            <div>
              <span class="inline-block text-xs font-semibold px-2.5 py-1 rounded-md ${c.categoryBg}">
                ${category}
              </span>
            </div>
            <h2 class="text-base font-bold pt-2 pb-2 leading-snug group-hover:text-[#F75E05] transition-colors line-clamp-2">
              ${title}
            </h2>
            <div class="text-[#787A80] text-sm mt-auto">
              <span class="text-red-500 font-bold mr-1">${c.price}</span>
              <span>| ${byWord} ${author}</span>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderHomeEvents() {
  const container = document.getElementById("home-events-cards");
  if (!container || typeof events === "undefined" || !events.length) return;

  const lang = getHomeLang();
  const viewMoreText =
    { en: "View More", ru: "Подробнее", uz: "Batafsil" }[lang] || "View More";
  const homeEvents = events.slice(0, 3);

  container.innerHTML = homeEvents
    .map((e) => {
      const month = getHomeText(e.month, lang);
      const title = getHomeText(e.title, lang);
      const type = getHomeText(e.type, lang);

      return `
        <div class="event-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white p-5 sm:p-[30px] rounded-xl hover:shadow-xl transition-shadow duration-300 w-full border border-gray-100">
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-1">
            <div class="flex items-center gap-4 shrink-0">
              <h1 class="font-[900] text-3xl sm:text-4xl text-[#F75E05]">${e.day}</h1>
              <div>
                <h5 class="font-bold text-sm sm:text-base text-[#1E212C]">${month}</h5>
                <h6 class="text-[#787A80] text-xs sm:text-sm">${e.time}</h6>
              </div>
            </div>
            <div class="flex flex-col">
              <h4 class="font-bold text-base sm:text-lg text-[#1E212C] leading-snug">
                ${title}
              </h4>
              <h6 class="text-[#787A80] text-xs sm:text-sm mt-1">${type}</h6>
            </div>
          </div>
          <a
            class="w-full sm:w-auto text-center shrink-0 px-6 py-2.5 sm:px-[30px] sm:py-[10px] text-[#F75E05] hover:bg-[#F75E05] hover:text-white transition-colors duration-300 bg-white rounded-lg border border-[#F75E05] font-semibold text-sm"
            href="/pages/events/eventDetail.html?id=${e.id}"
          >
            ${viewMoreText}
          </a>
        </div>
      `;
    })
    .join("");
}

function renderHomeBlogs() {
  const container = document.getElementById("home-posts-cards");
  if (!container || typeof blogs === "undefined" || !blogs.length) return;

  const lang = getHomeLang();
  const homeBlogs = blogs.slice(0, 3);

  container.innerHTML = homeBlogs
    .map((b) => {
      const title = getHomeText(b.title, lang);
      const excerpt = getHomeText(b.excerpt, lang);
      const category = getHomeText(b.category, lang);
      const date = getHomeText(b.date, lang);
      const duration = getHomeText(b.duration, lang);
      const actionText = getHomeText(b.actionText, lang);
      const type = getHomeText(b.type, lang);
      const icon =
        b.typeKey === "Podcast" ? "🎙️" : b.typeKey === "Video" ? "▶️" : "📄";

      return `
        <div 
          onclick="window.location.href='/pages/blog/blogDetail.html?id=${b.id}'"
          class="posts-card flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 p-4 cursor-pointer group"
        >
          <div class="relative h-52 sm:h-56 rounded-lg overflow-hidden ${b.bgColor} mb-4">
            <img src="${b.image}" alt="${title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <span class="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded text-xs font-semibold text-[#424551] flex items-center gap-1.5 shadow-sm">
              <span>${icon}</span>
              <span>${type}</span>
            </span>
          </div>
          <div class="flex items-center gap-2 text-xs text-[#787A80] mb-2 font-medium">
            <span class="font-bold text-[#F75E05]">${category}</span>
            <span>|</span>
            <span>📅 ${date}</span>
            ${duration ? `<span>|</span><span>⏱️ ${duration}</span>` : ""}
          </div>
          <h2 class="text-base sm:text-lg font-bold text-[#1E212C] group-hover:text-[#F75E05] transition-colors mb-2 leading-snug">
            ${title}
          </h2>
          <p class="text-xs sm:text-sm text-[#424551] leading-relaxed mb-4 line-clamp-2">
            ${excerpt}
          </p>
          <div class="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[#1E212C] group-hover:text-[#F75E05] transition-colors">
            <span>${actionText}</span>
            <span class="text-[#F75E05]">-></span>
          </div>
        </div>
      `;
    })
    .join("");
}

function initHomeDynamicContent() {
  renderHomeFeaturedCourses();
  renderHomeEvents();
  renderHomeBlogs();
}

window.addEventListener("languageChanged", () => {
  initHomeDynamicContent();
});

document.addEventListener("DOMContentLoaded", () => {
  initHomeDynamicContent();
});

initHomeDynamicContent();
