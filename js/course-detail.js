// Course Detail with full 3-language support (EN, RU, UZ)

function getCourseLang() {
  return (
    (window.getCurrentLang && window.getCurrentLang()) ||
    localStorage.getItem("app_lang") ||
    "en"
  );
}

function getCourseText(field, lang) {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] || field["en"] || Object.values(field)[0] || "";
}

function getCourseArray(field, lang) {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  return field[lang] || field["en"] || [];
}

const detailUi = {
  category: {en: "Marketing", ru: "Маркетинг", uz: "Marketing" },
  courseTitle: {en: ""},
  aboutTitle: { en: "About the course", ru: "О курсе", uz: "Kurs haqida" },
  learnTitle: {
    en: "You will learn:",
    ru: "Чему вы научитесь:",
    uz: "Siz nimalarni o'rganasiz:",
  },
  dates: { en: "DATES", ru: "ДАТЫ", uz: "SANALAR" },
  duration: { en: "Duration", ru: "Длительность", uz: "Davomiyligi" },
  price: { en: "Price", ru: "Стоимость", uz: "Narxi" },
  joinCourse: {
    en: "Join the course",
    ru: "Записаться на курс",
    uz: "Kursga yozilish",
  },
  curatorTag: {
    en: "Course curator",
    ru: "Куратор курса",
    uz: "Kurs kuratori",
  },
  mainSteps: {
    en: "Main steps",
    ru: "Основные этапы",
    uz: "Asosiy bosqichlar",
  },
  processTitle: {
    en: "Online learning process",
    ru: "Процесс онлайн-обучения",
    uz: "Onlayn ta'lim jarayoni",
  },
  step1Title: {
    en: "Watching online video lectures",
    ru: "Просмотр онлайн-видеолекций",
    uz: "Onlayn videodarslarni tomosha qilish",
  },
  step1Desc: {
    en: "Structured modules accessible at any time from desktop or mobile.",
    ru: "Структурированные модули доступны в любое время с любого устройства.",
    uz: "Istalgan qurilmadan istalgan vaqtda kirish mumkin bo'lgan modullar.",
  },
  step2Title: {
    en: "Passing practical tests",
    ru: "Прохождение практических тестов",
    uz: "Amaliy testlarni topshirish",
  },
  step2Desc: {
    en: "Interactive quizzes and homework to reinforce every concept.",
    ru: "Интерактивные задания для закрепления каждой темы.",
    uz: "Har bir mavzuni mustahkamlash uchun interaktiv mashqlar.",
  },
  step3Title: {
    en: "Curator's feedback",
    ru: "Обратная связь от куратора",
    uz: "Kuratordan tahliliy fikr",
  },
  step3Desc: {
    en: "Detailed review of your projects and answers to questions.",
    ru: "Детальный разбор ваших работ и ответы на вопросы.",
    uz: "Loyihalaringizning batafsil tahlili va savollarga javoblar.",
  },
  step4Title: {
    en: "Corrections & certification",
    ru: "Доработка и сертификация",
    uz: "Tuzatishlar va sertifikatlash",
  },
  step4Desc: {
    en: "Final polish of portfolio case and receiving official certificate.",
    ru: "Финальная доработка кейса в портфолио и получение сертификата.",
    uz: "Portfolioni yakuniy tayyorlash va rasmiy sertifikat olish.",
  },
  discountTitle: {
    en: "20% discount for early birds!",
    ru: "Скидка 20% для первых участников!",
    uz: "Erta ro'yxatdan o'tganlar uchun 20% chegirma!",
  },
  days: { en: "Days", ru: "Дней", uz: "Kun" },
  hours: { en: "Hours", ru: "Часов", uz: "Soat" },
  mins: { en: "Mins", ru: "Мин", uz: "Daq" },
  secs: { en: "Sec", ru: "Сек", uz: "Soniya" },
  labelName: { en: "Full name", ru: "Полное имя", uz: "To'liq ism" },
  labelEmail: {
    en: "Email",
    ru: "Электронная почта",
    uz: "Elektron pochta",
  },
  labelPhone: { en: "Phone", ru: "Телефон", uz: "Telefon" },
  placeholderName: {
    en: "Your full name",
    ru: "Ваше полное имя",
    uz: "To'liq ismingiz",
  },
  placeholderEmail: {
    en: "Your working email",
    ru: "Ваш рабочий email",
    uz: "Ishchi emailingiz",
  },
  placeholderPhone: {
    en: "Your phone number",
    ru: "Ваш номер телефона",
    uz: "Telefon raqamingiz",
  },
  forWhomTag: { en: "FOR WHOM?", ru: "ДЛЯ КОГО?", uz: "KIMLAR UCHUN?" },
  forWhomTitle: {
    en: "Who will benefit from the course:",
    ru: "Кому подойдет этот курс:",
    uz: "Kurs kimlar uchun foydali:",
  },
};

function renderCourseDetail() {
  const container = document.getElementById("detail-wrapper");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const courseId = parseInt(urlParams.get("id")) || 1;

  if (typeof courses === "undefined" || !courses.length) return;

  const course = courses.find((c) => c.id === courseId) || courses[0];
  const lang = getCourseLang();

  const title = getCourseText(course.title, lang);
  const category = getCourseText(course.category, lang);
  const about = getCourseText(course.about, lang);
  const dates = getCourseText(course.dates, lang);
  const datesDesc = getCourseText(course.datesDesc, lang);
  const duration = getCourseText(course.duration, lang);
  const durationDesc = getCourseText(course.durationDesc, lang);
  const pricePerMonth = getCourseText(course.pricePerMonth, lang);
  const priceDesc = getCourseText(course.priceDesc, lang);
  const learnList = getCourseArray(course.learn, lang);
  const forWhomList = getCourseArray(course.forWhom, lang);

  const curatorName = course.curator?.name || "Jerome Bell";
  const curatorRole = getCourseText(course.curator?.role, lang);
  const curatorBio = getCourseText(course.curator?.bio, lang);
  const curatorRate = course.curator?.rate || "4.8 rate";
  const curatorCourses = getCourseText(course.curator?.coursesCount, lang);
  const curatorStudents = getCourseText(course.curator?.studentsCount, lang);
  const curatorImage = course.curator?.image || "/assets/curator-image.png";

  container.innerHTML = `
    <section class="title text-center py-12 sm:py-20 lg:py-24">
      <h3 class="font-semibold text-red-600 uppercase tracking-wider text-sm sm:text-base">${detailUi.category[lang]}</h3>
      <h1 class="font-bold text-3xl sm:text-4xl max-w-3xl mx-auto mt-2 px-4">
        ${title}
      </h1>
    </section>

    <section class="max-w-7xl mx-auto px-4 my-12 sm:my-20 flex flex-col lg:flex-row items-start justify-between gap-12">
      <div class="flex flex-col items-start w-full lg:max-w-[650px]">
        <div class="flex flex-col gap-5">
          <h1 class="font-bold text-3xl sm:text-4xl">${detailUi.aboutTitle[lang]}</h1>
          <p class="text-[#424551] mb-8 leading-relaxed">
            ${about}
          </p>
        </div>
        <div>
          <h2 class="font-bold text-2xl sm:text-3xl mb-4">${detailUi.learnTitle[lang]}</h2>
          <div class="space-y-3">
            ${learnList
              .map(
                (item) => `
              <div class="flex items-start gap-3">
                <img src="/assets/check.png" alt="check" class="mt-1 shrink-0" />
                <p class="text-[#424551] font-medium">${item}</p>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      </div>

      <div class="p-8 sm:p-10 border rounded-2xl shadow-lg bg-white flex flex-col items-start gap-6 w-full lg:w-[495px]">
        <div>
          <h4 class="font-bold text-xs sm:text-sm tracking-wider uppercase text-gray-500">${detailUi.dates[lang]}</h4>
          <h1 class="font-bold text-2xl text-red-600 mt-1">${dates}</h1>
          <p class="text-[#787A80] mt-1 text-sm">${datesDesc}</p>
        </div>
        <div>
          <h4 class="font-bold text-xs sm:text-sm tracking-wider uppercase text-gray-500">${detailUi.duration[lang]}</h4>
          <h1 class="font-bold text-2xl text-red-600 mt-1">${duration}</h1>
          <p class="text-[#787A80] mt-1 text-sm">${durationDesc}</p>
        </div>
        <div>
          <h4 class="font-bold text-xs sm:text-sm tracking-wider uppercase text-gray-500">${detailUi.price[lang]}</h4>
          <h1 class="font-bold text-2xl text-red-600 mt-1">${pricePerMonth}</h1>
          <p class="text-[#787A80] mt-1 text-sm">${priceDesc}</p>
        </div>
        <a
          href="/pages/login/login.html"
          class="w-full text-center bg-[#F75E05] py-3 rounded-lg text-[#fff] font-bold hover:bg-[#fff] border border-[#F75E05] hover:text-[#F75E05] transition-colors duration-300"
        >
          ${detailUi.joinCourse[lang]}
        </a>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-20 sm:mb-32">
      <div class="w-full max-w-md lg:w-[495px] h-[340px] sm:h-[460px] lg:h-[600px] bg-[#FFCF2D] rounded-xl overflow-hidden shrink-0">
        <img class="w-full h-full object-cover" src="${curatorImage}" alt="${curatorName}" />
      </div>
      <div class="flex flex-col w-full">
        <h3 class="font-bold text-sm sm:text-base uppercase tracking-wider text-[#787A80]">${detailUi.curatorTag[lang]}</h3>
        <h1 class="font-bold text-3xl sm:text-4xl mt-1">${curatorName}</h1>
        <h6 class="text-[#787A80] mt-1 text-base sm:text-lg">${curatorRole}</h6>
        <div class="my-6 flex flex-col gap-2 font-bold text-[#424551]">
          <div class="flex items-center gap-3">
            <img src="/assets/check.png" alt="rate" class="w-4 h-4" />
            <p>${curatorRate}</p>
          </div>
          <div class="flex items-center gap-3">
            <img src="/assets/check.png" alt="courses" class="w-4 h-4" />
            <p>${curatorCourses}</p>
          </div>
          <div class="flex items-center gap-3">
            <img src="/assets/check.png" alt="students" class="w-4 h-4" />
            <p>${curatorStudents}</p>
          </div>
        </div>
        <p class="max-w-xl text-[#424551] leading-relaxed text-sm sm:text-base">
          ${curatorBio}
        </p>
        <div class="flex items-center gap-4 mt-8">
          <img src="/assets/Facebook (1).png" alt="Facebook" class="cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="/assets/Linked-In (1).png" alt="LinkedIn" class="cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="/assets/Twitter (1).png" alt="Twitter" class="cursor-pointer hover:opacity-80 transition-opacity" />
          <img src="/assets/behance.png" alt="Behance" class="cursor-pointer hover:opacity-80 transition-opacity" />
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 mb-20 sm:mb-32">
      <div class="text-center mb-12 sm:mb-16">
        <h3 class="font-bold uppercase tracking-wider text-sm sm:text-base text-gray-500">${detailUi.mainSteps[lang]}</h3>
        <h1 class="font-bold text-3xl sm:text-4xl mt-1">${detailUi.processTitle[lang]}</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        <div class="flex flex-col">
          <div class="flex items-center gap-4">
            <h1 class="font-bold text-4xl text-[#D7DADD]">01</h1>
            <span class="w-full h-[1px] bg-[#D7DADD]"></span>
          </div>
          <h3 class="font-bold mt-4 mb-2 text-lg">${detailUi.step1Title[lang]}</h3>
          <p class="text-[#787A80] text-sm leading-relaxed">${detailUi.step1Desc[lang]}</p>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-4">
            <h1 class="font-bold text-4xl text-[#D7DADD]">02</h1>
            <span class="w-full h-[1px] bg-[#D7DADD]"></span>
          </div>
          <h3 class="font-bold mt-4 mb-2 text-lg">${detailUi.step2Title[lang]}</h3>
          <p class="text-[#787A80] text-sm leading-relaxed">${detailUi.step2Desc[lang]}</p>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-4">
            <h1 class="font-bold text-4xl text-[#D7DADD]">03</h1>
            <span class="w-full h-[1px] bg-[#D7DADD]"></span>
          </div>
          <h3 class="font-bold mt-4 mb-2 text-lg">${detailUi.step3Title[lang]}</h3>
          <p class="text-[#787A80] text-sm leading-relaxed">${detailUi.step3Desc[lang]}</p>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-4">
            <h1 class="font-bold text-4xl text-[#FF3F3A] bg-[#FF3F3A33] w-14 h-14 flex items-center justify-center rounded-full shrink-0">
              04
            </h1>
            <span class="w-full h-[1px] bg-[#FF3F3A33]"></span>
          </div>
          <h3 class="font-bold mt-4 mb-2 text-lg">${detailUi.step4Title[lang]}</h3>
          <p class="text-[#787A80] text-sm leading-relaxed">${detailUi.step4Desc[lang]}</p>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 bg-[#FEDCD2] rounded-2xl p-6 sm:p-10 mb-20 sm:mb-32">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-red-200">
        <h1 class="font-bold text-2xl sm:text-3xl text-[#1E212C] text-center md:text-left">
          ${detailUi.discountTitle[lang]}
        </h1>
        <div class="flex items-center gap-4 sm:gap-6 text-[#2B2D42]">
          <div class="flex flex-col items-center min-w-[50px]">
            <span id="detail-days" class="text-3xl sm:text-4xl font-bold leading-tight">06</span>
            <span class="text-xs sm:text-sm font-medium mt-1">${detailUi.days[lang]}</span>
          </div>
          <div class="flex flex-col items-center min-w-[50px]">
            <span id="detail-hours" class="text-3xl sm:text-4xl font-bold leading-tight">18</span>
            <span class="text-xs sm:text-sm font-medium mt-1">${detailUi.hours[lang]}</span>
          </div>
          <div class="flex flex-col items-center min-w-[50px]">
            <span id="detail-mins" class="text-3xl sm:text-4xl font-bold leading-tight">24</span>
            <span class="text-xs sm:text-sm font-medium mt-1">${detailUi.mins[lang]}</span>
          </div>
          <div class="flex flex-col items-center min-w-[50px]">
            <span id="detail-secs" class="text-3xl sm:text-4xl font-bold leading-tight">12</span>
            <span class="text-xs sm:text-sm font-medium mt-1">${detailUi.secs[lang]}</span>
          </div>
        </div>
      </div>
      <div class="pt-8">
        <form action="#" class="flex flex-col lg:flex-row gap-5 items-end">
          <div class="flex flex-col gap-1.5 w-full">
            <label class="text-sm font-medium text-[#424551]">${detailUi.labelName[lang]}</label>
            <input class="px-4 py-2.5 bg-white rounded-lg w-full outline-none text-sm" type="text" placeholder="${detailUi.placeholderName[lang]}" />
          </div>
          <div class="flex flex-col gap-1.5 w-full">
            <label class="text-sm font-medium text-[#424551]">${detailUi.labelEmail[lang]}</label>
            <input class="px-4 py-2.5 bg-white rounded-lg w-full outline-none text-sm" type="email" placeholder="${detailUi.placeholderEmail[lang]}" />
          </div>
          <div class="flex flex-col gap-1.5 w-full">
            <label class="text-sm font-medium text-[#424551]">${detailUi.labelPhone[lang]}</label>
            <input class="px-4 py-2.5 bg-white rounded-lg w-full outline-none text-sm" type="tel" placeholder="${detailUi.placeholderPhone[lang]}" />
          </div>
          <button
            type="submit"
            class="w-full lg:w-auto whitespace-nowrap text-center px-8 py-2.5 text-white bg-[#F75E05] hover:bg-white hover:text-[#F75E05] transition-colors duration-300 rounded-lg border border-[#F75E05] font-semibold text-sm h-[42px]"
          >
            ${detailUi.joinCourse[lang]}
          </button>
        </form>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-start justify-between my-20 sm:my-32 gap-10">
      <div>
        <h3 class="font-bold uppercase tracking-wider text-sm sm:text-base text-gray-500">${detailUi.forWhomTag[lang]}</h3>
        <h1 class="font-bold text-3xl sm:text-4xl max-w-[492px] mt-2 leading-tight">
          ${detailUi.forWhomTitle[lang]}
        </h1>
      </div>
      <div class="flex flex-col gap-4 w-full lg:max-w-[600px]">
        ${forWhomList
          .map(
            (benefit) => `
          <div class="flex items-start gap-3">
            <img src="/assets/check.png" alt="check" class="mt-1 shrink-0" />
            <p class="text-[#424551] font-semibold leading-relaxed">
              ${benefit}
            </p>
          </div>
        `,
          )
          .join("")}
      </div>
    </section>
  `;
}

// Listen to language changes
window.addEventListener("languageChanged", () => {
  renderCourseDetail();
});

document.addEventListener("DOMContentLoaded", () => {
  renderCourseDetail();
});

renderCourseDetail();
