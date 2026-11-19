// Event Detail with full 3-language support (EN, RU, UZ)

function getEventLang() {
  return (
    (window.getCurrentLang && window.getCurrentLang()) ||
    localStorage.getItem("app_lang") ||
    "en"
  );
}

function getEventText(field, lang) {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] || field["en"] || Object.values(field)[0] || "";
}

function getEventArray(field, lang) {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  return field[lang] || field["en"] || [];
}

const eventDetailUi = {
  timeLabel: { en: "Time", ru: "Время", uz: "Vaqt" },
  priceLabel: { en: "Price", ru: "Стоимость", uz: "Narxi" },
  weTalkAbout: {
    en: "We will talk about:",
    ru: "О чем будем говорить:",
    uz: "Quyidagilar haqida gaplashamiz:",
  },
  speakerTag: { en: "SPEAKER", ru: "СПИКЕР", uz: "MA'RUZACHI" },
  forWhomTag: { en: "FOR WHOM?", ru: "ДЛЯ КОГО?", uz: "KIMLAR UCHUN?" },
  forWhomTitle: {
    en: "Who will benefit from the event:",
    ru: "Кому полезно мероприятие:",
    uz: "Tadbir kimlar uchun foydali:",
  },
  joinBtn: {
    en: "Join the event",
    ru: "Записаться на событие",
    uz: "Tadbirga yozilish",
  },
  notFound: {
    en: "Event not found",
    ru: "Мероприятие не найдено",
    uz: "Tadbir topilmadi",
  },
};

function renderEventDetail() {
  const root =
    document.getElementById("detailRoot") ||
    document.getElementById("event-detail-wrapper");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const eventId = parseInt(params.get("id")) || 1;

  if (typeof events === "undefined" || !events.length) return;

  const event = events.find((item) => item.id === eventId) || events[0];
  const lang = getEventLang();

  if (!event) {
    root.innerHTML = `
      <div class="max-w-[1230px] mx-auto py-24 px-5 text-center">
        <h2 class="text-3xl font-black mb-4">${eventDetailUi.notFound[lang]}</h2>
      </div>
    `;
    return;
  }

  const title = getEventText(event.title, lang);
  const type = getEventText(event.type, lang);
  const month = getEventText(event.month, lang);
  const price = getEventText(event.price, lang);
  const priceNote = getEventText(event.priceNote, lang);
  const timeNote = getEventText(event.timeNote, lang);

  const speakerName = event.speaker?.name || "Kathryn Murphy";
  const speakerRole = getEventText(event.speaker?.role, lang);
  const speakerBio = getEventText(event.speaker?.bio, lang);
  const speakerImage = event.speaker?.image || "/assets/speaker-image.png";
  const companies = event.speaker?.companies || [];

  const themes = event.themes || [];
  const benefits = getEventArray(event.benefits, lang);

  document.title = title;

  root.innerHTML = `
    <!-- Top Hero Banner -->
    <div class="bg-[#FEDCD1] py-16 md:py-20 px-5 text-center mb-16 md:mb-20">
      <div class="max-w-[1230px] mx-auto">
        <div class="text-[#FF3F3A] font-bold text-sm md:text-base uppercase tracking-widest mb-3">
          ${type}
        </div>
        <h1 class="text-3xl md:text-[42px] font-black max-w-[900px] mx-auto leading-tight text-[#1E212C]">
          ${title}
        </h1>
      </div>
    </div>

    <!-- Main Content Container -->
    <div class="max-w-[1230px] mx-auto px-5">
      <!-- Section 1: Themes & Side Card -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 md:mb-24 items-start">
        <!-- Themes Accordion -->
        <div class="lg:col-span-7">
          <h2 class="text-2xl md:text-[36px] font-black mb-8 text-[#1E212C]">
            ${eventDetailUi.weTalkAbout[lang]}
          </h2>
          <div id="accordionContainer" class="space-y-4">
            ${themes
              .map((theme, index) => {
                const themeTitle = getEventText(theme.title, lang);
                const themeDesc = getEventText(theme.description, lang);
                const dotIdx = themeTitle.indexOf(". ");
                const prefix =
                  dotIdx !== -1 ? themeTitle.substring(0, dotIdx) : `Theme ${index + 1}`;
                const rest =
                  dotIdx !== -1 ? themeTitle.substring(dotIdx + 2) : themeTitle;
                const isFirst = index === 0;

                return `
                  <div class="accordion-item   pb-4 ${isFirst ? "active" : ""}">
                    <div onclick="toggleAccordion(this)" class="flex items-start gap-3.5 cursor-pointer text-base md:text-base font-bold leading-snug select-none  transition-colors">
                      <span class="accordion-icon text-[#FF3F3A] text-2xl font-black leading-none mt-0.5">${isFirst ? "−" : "+"}</span>
                      <div>
                        <span class="text-[#FF3F3A] font-bold">${prefix}.</span> ${rest}
                      </div>
                    </div>
                    <div class="accordion-body pl-8 mt-3 text-[#424551] text-sm md:text-[13px] leading-relaxed ${isFirst ? "block" : "hidden"}">
                      ${themeDesc}
                    </div>
                  </div>
                `;
              })
              .join("")}
          </div>
        </div>

        <!-- Sidebar Card -->
        <div class="lg:col-span-5 bg-white border border-[#E5E8ED] rounded-xl p-8 md:p-10 shadow-[0_80px_80px_-20px_rgba(154,156,165,0.08)]">
          <div class="space-y-6">
            <div>
              <div class="text-xs font-bold text-[#787A80] uppercase tracking-wider mb-1">${eventDetailUi.timeLabel[lang]}</div>
              <div class="text-2xl font-black text-[#FF3F3A] leading-tight">${event.day} ${month}, ${event.time}</div>
              <div class="text-sm text-[#787A80] mt-1">${timeNote}</div>
            </div>
            <div>
              <div class="text-xs font-bold text-[#787A80] uppercase tracking-wider mb-1">${eventDetailUi.priceLabel[lang]}</div>
              <div class="text-2xl font-black text-[#FF3F3A] leading-tight">${price}</div>
              <div class="text-sm text-[#787A80] mt-1">${priceNote}</div>
            </div>
            <a href="/pages/login/login.html" class="block w-full text-center py-3.5 px-8 rounded-lg bg-[#FF3F3A] text-white font-bold text-sm transition duration-300 hover:bg-[#e03430] shadow-md">
              ${eventDetailUi.joinBtn[lang]}
            </a>
          </div>
        </div>
      </div>

      <!-- Section 2: Speaker -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 md:mb-24 pt-8 border-t border-[#E5E8ED]">
        <div class="lg:col-span-5 rounded-xl overflow-hidden max-w-sm mx-auto lg:max-w-none flex items-end justify-center bg-[#FFCF2D]">
          <img src="${speakerImage}" alt="${speakerName}" class="w-full h-auto object-cover max-h-[400px]">
        </div>
        <div class="lg:col-span-7">
          <div class="text-xs font-bold tracking-widest uppercase mb-2 text-[#787A80]">${eventDetailUi.speakerTag[lang]}</div>
          <h2 class="text-2xl md:text-[36px] font-black mb-2 text-[#1E212C]">${speakerName}</h2>
          <div class="text-base text-[#787A80] mb-5 font-medium">${speakerRole}</div>
          <p class="text-sm md:text-base text-[#424551] leading-relaxed mb-6">${speakerBio}</p>
          ${
            companies.length
              ? `
            <div class="flex flex-wrap gap-4 font-black text-[#9A9CA5] tracking-wider text-xs md:text-sm">
              ${companies.map((c) => `<span class="px-3 py-1 bg-gray-100 rounded">${c.toUpperCase()}</span>`).join("")}
            </div>
          `
              : ""
          }
        </div>
      </div>

      <!-- Section 3: For Whom -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 md:mb-24 items-start pt-8 border-t border-[#E5E8ED]">
        <div class="lg:col-span-5">
          <div class="text-xs font-bold tracking-widest uppercase mb-2 text-[#787A80]">${eventDetailUi.forWhomTag[lang]}</div>
          <h2 class="text-2xl md:text-[32px] font-black leading-tight text-[#1E212C]">
            ${eventDetailUi.forWhomTitle[lang]}
          </h2>
        </div>
        <ul class="lg:col-span-7 space-y-4">
          ${benefits
            .map(
              (b) => `
            <li class="flex items-start gap-3.5 text-base md:text-lg font-bold leading-snug text-[#1E212C]">
              <span class="text-[#FF3F3A] font-black mt-0.5">✓</span>
              <span>${b}</span>
            </li>
          `,
            )
            .join("")}
        </ul>
      </div>
    </div>
  `;
}

window.toggleAccordion = function (headerEl) {
  const item = headerEl.closest(".accordion-item");
  if (!item) return;
  const body = item.querySelector(".accordion-body");
  const icon = headerEl.querySelector(".accordion-icon");
  const isOpen = body && !body.classList.contains("hidden");

  document.querySelectorAll(".accordion-item").forEach((el) => {
    const b = el.querySelector(".accordion-body");
    const ic = el.querySelector(".accordion-icon");
    if (b) {
      b.classList.add("hidden");
      b.classList.remove("block");
    }
    if (ic) ic.textContent = "+";
  });

  if (!isOpen && body) {
    body.classList.remove("hidden");
    body.classList.add("block");
    if (icon) icon.textContent = "−";
  }
};

window.addEventListener("languageChanged", () => {
  renderEventDetail();
});

document.addEventListener("DOMContentLoaded", () => {
  renderEventDetail();
});

renderEventDetail();
