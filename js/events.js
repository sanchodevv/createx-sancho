const events = [
  {
    id: 1,
    day: "05",
    month: { en: "August", ru: "Август", uz: "Avgust" },
    time: "11:00 – 14:00",
    title: {
      en: "Formation of the organizational structure of the company in the face of uncertainty.",
      ru: "Формирование организационной структуры компании в условиях неопределенности.",
      uz: "Noaniqlik sharoitida kompaniyaning tashkiliy tuzilmasini shakllantirish.",
    },
    type: {
      en: "Online master-class",
      ru: "Онлайн мастер-класс",
      uz: "Onlayn mahorat darsi",
    },
    category: { en: "Management", ru: "Менеджмент", uz: "Menejment" },
    categoryKey: "Management",
    price: { en: "Free", ru: "Бесплатно", uz: "Bepul" },
    priceNote: {
      en: "Registration is required before the start of the event.",
      ru: "Обязательна регистрация до начала мероприятия.",
      uz: "Tadbir boshlanishidan oldin ro'yxatdan o'tish talab qilinadi.",
    },
    timeNote: {
      en: "Live stream link will be sent to your email.",
      ru: "Ссылка на трансляцию будет отправлена на почту.",
      uz: "Jonli efir havolasi emailingizga yuboriladi.",
    },
    facebookLink: "https://facebook.com",
    speaker: {
      name: "Kathryn Murphy",
      role: {
        en: "Analyst and Management Consultant in Tech",
        ru: "Аналитик и консультант по менеджменту в IT",
        uz: "IT sohasida tahlilchi va boshqaruv maslahatchisi",
      },
      bio: {
        en: "Over 8 years helping tech startups restructure internal workflows and scale operational efficiency.",
        ru: "Более 8 лет помогает IT-компаниям оптимизировать рабочие процессы и масштабироваться.",
        uz: "IT kompaniyalarda ish jarayonlarini optimallashtirish va masshtablash bo'yicha 8 yillik tajribaga ega ekspert.",
      },
      image: "/assets/speaker-image.png",
      companies: ["Del Mar Strategy", "Sentinal Consulting", "National"],
    },
    themes: [
      {
        id: 1,
        title: {
          en: "Theme 1. Adapting business processes to rapid market changes.",
          ru: "Тема 1. Адаптация бизнес-процессов к быстрым изменениям рынка.",
          uz: "1-mavzu. Biznes jarayonlarini bozor o'zgarishlariga moslashtirish.",
        },
        description: {
          en: "Understanding core structural bottlenecks and creating flexible cross-functional teams.",
          ru: "Поиск узких мест в структуре компании и формирование гибких кросс-функциональных команд.",
          uz: "Kompaniya tuzilmasidagi to'siqlarni aniqlash va moslashuvchan jamoalar tuzish.",
        },
      },
      {
        id: 2,
        title: {
          en: "Theme 2. Delegating authority without losing control.",
          ru: "Тема 2. Делегирование полномочий без потери контроля.",
          uz: "2-mavzu. Nazoratni yo'qotmagan holda vakolatlarni topshirish.",
        },
        description: {
          en: "Practical frameworks for decision-making autonomy in remote and hybrid environments.",
          ru: "Практические инструменты распределения ответственности в гибридных командах.",
          uz: "Gibrid va masofaviy jamoalarda mustaqil qaror qabul qilish tizimini o'rnatish.",
        },
      },
      {
        id: 3,
        title: {
          en: "Theme 3. Crisis communication within departments.",
          ru: "Тема 3. Антикризисные коммуникации между отделами.",
          uz: "3-mavzu. Bo'limlar o'rtasidagi inqirozli kommunikatsiyalar.",
        },
        description: {
          en: "Establishing transparent feedback loops to maintain morale and productivity.",
          ru: "Построение прозрачной обратной связи для поддержания мотивации и продуктивности.",
          uz: "Ish unumdorligi va motivatsiyani saqlash uchun ochiq aloqa tizimini qurish.",
        },
      },
    ],
    benefits: {
      en: [
        "Specialists with more than 1 year of active management experience",
        "Team leads and managers looking to optimize departmental workflows",
        "Startup founders preparing to scale their core teams",
      ],
      ru: [
        "Специалисты с опытом управления командами более 1 года",
        "Тимлиды и менеджеры, стремящиеся оптимизировать процессы",
        "Основатели стартапов, планирующие расширение штата",
      ],
      uz: [
        "Boshqaruv sohasida 1 yildan ortiq tajribaga ega mutaxassislar",
        "Jamoa jarayonlarini optimallashtirmoqchi bo'lgan Team Leadlar",
        "Kompaniyasini kengaytirayotgan startap asoschilari",
      ],
    },
  },
  {
    id: 2,
    day: "24",
    month: { en: "July", ru: "Июль", uz: "Iyul" },
    time: "11:00 – 12:30",
    title: {
      en: "Building a customer service department. Best Practices.",
      ru: "Построение отдела клиентского сервиса: лучшие практики.",
      uz: "Mijozlarga xizmat ko'rsatish bo'limini qurish: eng yaxshi amaliyotlar.",
    },
    type: {
      en: "Online lecture",
      ru: "Онлайн лекция",
      uz: "Onlayn ma'ruza",
    },
    category: { en: "Management", ru: "Менеджмент", uz: "Menejment" },
    categoryKey: "Management",
    price: { en: "Free", ru: "Бесплатно", uz: "Bepul" },
    priceNote: {
      en: "Open access for all registered participants.",
      ru: "Открытый доступ для всех зарегистрированных участников.",
      uz: "Barcha ro'yxatdan o'tganlar uchun ochiq kirish.",
    },
    timeNote: {
      en: "Q&A session included in the last 20 minutes.",
      ru: "Сессия вопросов и ответов в последние 20 минут.",
      uz: "Oxirgi 20 daqiqada savol-javob sessiyasi bo'lib o'tadi.",
    },
    facebookLink: "https://facebook.com",
    speaker: {
      name: "Devon Lane",
      role: {
        en: "Head of Customer Experience at FinTech Hub",
        ru: "Директор по клиентскому опыту в FinTech Hub",
        uz: "FinTech Hub mijozlar tajribasi bo'limi boshlig'i",
      },
      bio: {
        en: "Built three international customer support centers from scratch, improving CSAT to 96%.",
        ru: "Построил три международных центра поддержки с показателем удовлетворенности 96%.",
        uz: "Xalqaro darajadagi uchta mijozlarni qo'llab-quvvatlash markazini noldan qurgan mutaxassis.",
      },
      image: "/assets/speaker-image.png",
      companies: ["Higher Fit", "Sentinal Consulting"],
    },
    themes: [
      {
        id: 1,
        title: {
          en: "Theme 1. Hiring and onboarding support specialists.",
          ru: "Тема 1. Найм и адаптация специалистов поддержки.",
          uz: "1-mavzu. Qo'llab-quvvatlash mutaxassislarini saralash va moslashtirish.",
        },
        description: {
          en: "Key soft skills and empathy metrics to evaluate during candidate interviews.",
          ru: "Ключевые гибкие навыки и уровень эмпатии кандидатов на интервью.",
          uz: "Nomzodlar suhbatida muhim soft-skill va empatiya ko'rsatkichlarini baholash.",
        },
      },
      {
        id: 2,
        title: {
          en: "Theme 2. Choosing the right CRM and ticketing tools.",
          ru: "Тема 2. Выбор CRM и систем обработки тикетов.",
          uz: "2-mavzu. To'g'ri CRM va tiket tizimlarini tanlash.",
        },
        description: {
          en: "Comparing modern helpdesk platforms for growing digital businesses.",
          ru: "Сравнение современных платформ техподдержки для растущего бизнеса.",
          uz: "O'sayotgan bizneslar uchun zamonaviy helpdesk platformalarini taqqoslash.",
        },
      },
    ],
    benefits: {
      en: [
        "Customer support team leaders and supervisors",
        "Product managers focused on user retention and satisfaction",
        "Small business owners setting up customer service workflows",
      ],
      ru: [
        "Руководители служб заботы о клиентах и техподдержки",
        "Продакт-менеджеры, работающие над удержанием пользователей",
        "Владельцы бизнеса, создающие отдел поддержки с нуля",
      ],
      uz: [
        "Mijozlarga xizmat ko'rsatish va qo'llab-quvvatlash bo'limi boshliqlari",
        "Mijozlarni saqlab qolish ustida ishlayotgan mahsulot menejerlari",
        "Qo'llab-quvvatlash bo'limini noldan tashkil etayotgan tadbirkorlar",
      ],
    },
  },
  {
    id: 3,
    day: "16",
    month: { en: "July", ru: "Июль", uz: "Iyul" },
    time: "10:00 – 13:00",
    title: {
      en: "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
      ru: "Как применять методы спекулятивного дизайна на практике. Прототипирование миров.",
      uz: "Spekulyativ dizayn metodlarini amaliyotda qo'llash. Yangi konseptlarni prototiplash.",
    },
    type: {
      en: "Online workshop",
      ru: "Онлайн воркшоп",
      uz: "Onlayn amaliyot",
    },
    category: { en: "Design", ru: "Дизайн", uz: "Dizayn" },
    categoryKey: "Design",
    price: { en: "Free", ru: "Бесплатно", uz: "Bepul" },
    priceNote: {
      en: "Includes Figma workshop templates and certificate.",
      ru: "Включает шаблоны для Figma и сертификат участника.",
      uz: "Figma andozalari va ishtirokchi sertifikatini o'z ichiga oladi.",
    },
    timeNote: {
      en: "Interactive session; have your Figma account ready.",
      ru: "Интерактивная сессия; подготовьте аккаунт в Figma.",
      uz: "Interaktiv amaliy dars; Figma hisobingiz tayyor bo'lsin.",
    },
    facebookLink: "https://facebook.com",
    speaker: {
      name: "Guy Hawkins",
      role: {
        en: "Lead Product Designer & Design Futurist",
        ru: "Ведущий продуктовый дизайнер и визионер",
        uz: "Yetakchi mahsulot dizayneri va vizioner",
      },
      bio: {
        en: "10+ years exploring speculative design thinking and future tech UI conceptualization.",
        ru: "Более 10 лет исследует концептуальный дизайн будущих технологий.",
        uz: "Kelajak texnologiyalari va konseptual dizayn bo'yicha 10 yillik tajribaga ega ekspert.",
      },
      image: "/assets/speaker-image.png",
      companies: ["Del Mar Strategy", "Sentinal Consulting"],
    },
    themes: [
      {
        id: 1,
        title: {
          en: "Theme 1. Introduction to speculative design thinking.",
          ru: "Тема 1. Введение в спекулятивное дизайн-мышление.",
          uz: "1-mavzu. Spekulyativ dizayn-fikrlash asoslari.",
        },
        description: {
          en: "Moving beyond immediate user needs to explore future technological scenarios.",
          ru: "Выход за рамки сиюминутных потребностей для изучения будущих сценариев.",
          uz: "Kelajak texnologik ssenariylarini o'rganish orqali yangi g'oyalar yaratish.",
        },
      },
    ],
    benefits: {
      en: [
        "Senior and lead product designers seeking inspiration",
        "Design strategists working on visionary innovation",
        "Creative directors exploring new interactive formats",
      ],
      ru: [
        "Опытные дизайнеры интерфейсов в поисках вдохновения",
        "Дизайн-стратеги, создающие инновационные концепции",
        "Креативные директора и арт-директора",
      ],
      uz: [
        "Ilhom va yangi yondashuvlar izlayotgan katta dizaynerlar",
        "Innovatsion mahsulotlar ustida ishlayotgan strateglar",
        "Kreativ va art-direktorlar",
      ],
    },
  },
  {
    id: 4,
    day: "10",
    month: { en: "June", ru: "Июнь", uz: "Iyun" },
    time: "09:00 – 11:00",
    title: {
      en: "Find and evaluate: search and assessment tools for candidates.",
      ru: "Найти и оценить: современные инструменты поиска и оценки кандидатов.",
      uz: "Nomzodlarni topish va baholash: zamonaviy sorsing vositalari.",
    },
    type: {
      en: "Online master-class",
      ru: "Онлайн мастер-класс",
      uz: "Onlayn mahorat darsi",
    },
    category: {
      en: "HR & Recruiting",
      ru: "HR и рекрутинг",
      uz: "HR va rekruting",
    },
    categoryKey: "HR & Recruiting",
    price: { en: "Free", ru: "Бесплатно", uz: "Bepul" },
    priceNote: {
      en: "Includes assessment scorecard templates.",
      ru: "Включает чек-листы оценки кандидатов.",
      uz: "Nomzodlarni baholash chek-listlarini o'z ichiga oladi.",
    },
    timeNote: {
      en: "Interactive webinar with live Q&A.",
      ru: "Интерактивный вебинар с ответами на вопросы.",
      uz: "Savol-javoblar bilan jonli vebinar.",
    },
    facebookLink: "https://facebook.com",
    speaker: {
      name: "Eleanor Pena",
      role: {
        en: "Head of Talent Acquisition",
        ru: "Руководитель отдела подбора персонала",
        uz: "Kadrlar saralash bo'limi boshlig'i",
      },
      bio: {
        en: "Automated recruitment screening processes for over 15 high-growth international businesses.",
        ru: "Выстроила автоматизированные воронки найма более чем в 15 компаниях.",
        uz: "15 dan ortiq xalqaro kompaniyalarda xodimlarni saralash jarayonini avtomatlashtirgan mutaxassis.",
      },
      image: "/assets/speaker-image.png",
      companies: ["Sentinal Consulting", "National"],
    },
    themes: [
      {
        id: 1,
        title: {
          en: "Theme 1. Automated candidate screening and talent scoring.",
          ru: "Тема 1. Автоматический скрининг и скоринг кандидатов.",
          uz: "1-mavzu. Nomzodlarni avtomatlashtirilgan saralash va skoring.",
        },
        description: {
          en: "How AI tools help recruiters process thousands of resumes in minutes.",
          ru: "Как AI-инструменты помогают отбирать сотни резюме без потери качества.",
          uz: "AI vositalari orqali rezyumelarni sifatli va tezkor saralash usullari.",
        },
      },
    ],
    benefits: {
      en: [
        "In-house recruiters managing high volume hiring",
        "HR managers optimizing the recruitment funnel",
        "Talent acquisition specialists building talent pipelines",
      ],
      ru: [
        "Рекрутеры с большим объемом найма",
        "HR-менеджеры, оптимизирующие стоимость закрытия вакансии",
        "Специалисты по поиску талантов",
      ],
      uz: [
        "Katta hajmdagi vakansiyalar bilan ishlovchi rekruterlar",
        "Xodimlarni yollash samaradorligini oshirmoqchi bo'lgan HR mutaxassislari",
        "Talantlarni saralash mutaxassislari",
      ],
    },
  },
  {
    id: 5,
    day: "27",
    month: { en: "May", ru: "Май", uz: "May" },
    time: "15:00 – 17:00",
    title: {
      en: "Connection to dark side: what is hidden behind cybersecurity?",
      ru: "Темная сторона сети: что скрывается за кибербезопасностью?",
      uz: "Tarmoqning yashirin tomoni: kiberxavfsizlik ortida nimalar yotadi?",
    },
    type: {
      en: "Online lecture",
      ru: "Онлайн лекция",
      uz: "Onlayn ma'ruza",
    },
    category: { en: "Development", ru: "Разработка", uz: "Dasturlash" },
    categoryKey: "Development",
    price: { en: "Free", ru: "Бесплатно", uz: "Bepul" },
    priceNote: {
      en: "Security awareness checklist included.",
      ru: "Памятка по цифровой безопасности в подарок.",
      uz: "Raqamli xavfsizlik eslatmasi taqdim etiladi.",
    },
    timeNote: {
      en: "Live demonstration of ethical penetration testing.",
      ru: "Демонстрация работы пентестера в реальном времени.",
      uz: "Real vaqt rejimida etuk xakerlik sinovlari namoyishi.",
    },
    facebookLink: "https://facebook.com",
    speaker: {
      name: "Albert Flores",
      role: {
        en: "Cybersecurity Analyst & Ethical Hacker",
        ru: "Аналитик по кибербезопасности и этичный хакер",
        uz: "Kiberxavfsizlik tahlilchisi va etuk xaker",
      },
      bio: {
        en: "Penetration tester with 9 years of corporate digital defence experience.",
        ru: "Пентестер с 9-летним стажем защиты корпоративных данных.",
        uz: "Korporativ ma'lumotlarni himoyalash bo'yicha 9 yillik amaliy tajribaga ega ekspert.",
      },
      image: "/assets/speaker-image.png",
      companies: ["Del Mar Strategy", "National"],
    },
    themes: [
      {
        id: 1,
        title: {
          en: "Theme 1. Social engineering and phishing attack mechanics.",
          ru: "Тема 1. Социальная инженерия и механика фишинга.",
          uz: "1-mavzu. Ijtimoiy muhandislik va fishing hujumlari mexanikasi.",
        },
        description: {
          en: "Why humans remain the most vulnerable link in modern information security.",
          ru: "Почему человек остается самым уязвимым звеном в защите данных.",
          uz: "Nima uchun inson axborot xavfsizligida eng zaif bo'g'in bo'lib qolmoqda.",
        },
      },
    ],
    benefits: {
      en: [
        "IT specialists and software developers",
        "System administrators responsible for data security",
        "Anyone interested in protecting private digital data",
      ],
      ru: [
        "IT-специалисты и разработчики программного обеспечения",
        "Системные администраторы, отвечающие за безопасность",
        "Все, кто заботится о защите своих цифровых данных",
      ],
      uz: [
        "IT mutaxassislari va dasturchilar",
        "Ma'lumotlar xavfsizligiga mas'ul tizim ma'murlari",
        "O'zining raqamli xavfsizligini mustahkamlamoqchi bo'lgan har bir kishi",
      ],
    },
  },
  {
    id: 6,
    day: "18",
    month: { en: "May", ru: "Май", uz: "May" },
    time: "10:00 – 12:00",
    title: {
      en: "Digital marketing trends and algorithmic shifts for the upcoming year.",
      ru: "Тренды интернет-маркетинга и алгоритмические изменения на будущий год.",
      uz: "Internet-marketing tendensiyalari va algoritmlardagi o'zgarishlar.",
    },
    type: {
      en: "Online master-class",
      ru: "Онлайн мастер-класс",
      uz: "Onlayn mahorat darsi",
    },
    category: { en: "Marketing", ru: "Маркетинг", uz: "Marketing" },
    categoryKey: "Marketing",
    price: { en: "Free", ru: "Бесплатно", uz: "Bepul" },
    priceNote: {
      en: "Comprehensive marketing strategy guide included.",
      ru: "Гайд по маркетинговой стратегии в подарок.",
      uz: "Marketing strategiyasi bo'yicha qo'llanma taqdim etiladi.",
    },
    timeNote: {
      en: "Recording will be available for 48 hours.",
      ru: "Запись будет доступна в течение 48 часов.",
      uz: "Dars yozuvi 48 soat davomida ochiq bo'ladi.",
    },
    facebookLink: "https://facebook.com",
    speaker: {
      name: "Jerome Bell",
      role: {
        en: "Digital Marketing Lead",
        ru: "Руководитель digital-маркетинга",
        uz: "Raqamli marketing bo'limi boshlig'i",
      },
      bio: {
        en: "Managed multi-million advertising campaigns across Google, Meta, and TikTok.",
        ru: "Управлял многомиллионными кампаниями в Google, Meta и TikTok.",
        uz: "Google, Meta va TikTok tarmoqlarida yirik reklama byudjetlarini boshqargan mutaxassis.",
      },
      image: "/assets/speaker-image.png",
      companies: ["Del Mar Strategy", "Sentinal Consulting"],
    },
    themes: [
      {
        id: 1,
        title: {
          en: "Theme 1. AI-driven campaign optimization and creative generation.",
          ru: "Тема 1. AI-инструменты для оптимизации рекламы и создания креативов.",
          uz: "1-mavzu. Reklamani optimallashtirish va kreativlar yaratishda sun'iy intellekt.",
        },
        description: {
          en: "Leveraging generative models to scale ad variations and cut production costs.",
          ru: "Использование нейросетей для генерации объявлений и экономии бюджета.",
          uz: "Neyrotarmoqlar yordamida reklamalar samaradorligini oshirish va xarajatlarni tejash.",
        },
      },
    ],
    benefits: {
      en: [
        "Marketing specialists and digital agency founders",
        "Media buyers and targeted advertising experts",
        "Business owners seeking higher return on ad spend",
      ],
      ru: [
        "Маркетологи и владельцы digital-агентств",
        "Таргетологи и специалисты по контекстной рекламе",
        "Предприниматели, желающие повысить отдачу от рекламы",
      ],
      uz: [
        "Marketing mutaxassislari va agentlik egalari",
        "Targetologlar va kontekstli reklama mutaxassislari",
        "Reklama samaradorligini oshirmoqchi bo'lgan tadbirkorlar",
      ],
    },
  },
  {
    id: 7,
    day: "02",
    month: { en: "May", ru: "Май", uz: "May" },
    time: "11:00 – 13:00",
    title: {
      en: "How to pass a technical interview in an international company.",
      ru: "Как пройти техническое собеседование в международную компанию.",
      uz: "Xalqaro kompaniyada texnik suhbatdan qanday muvaffaqiyatli o'tish mumkin?",
    },
    type: {
      en: "Online workshop",
      ru: "Онлайн воркшоп",
      uz: "Onlayn amaliyot",
    },
    category: { en: "Development", ru: "Разработка", uz: "Dasturlash" },
    categoryKey: "Development",
    price: { en: "Free", ru: "Бесплатно", uz: "Bepul" },
    priceNote: {
      en: "Algorithms cheatsheet and mock interview tips.",
      ru: "Шпаргалка по алгоритмам и структурам данных.",
      uz: "Algoritmlar bo'yicha qo'llanma va suhbat sirlari.",
    },
    timeNote: {
      en: "Live coding demonstration on LeetCode.",
      ru: "Разбор задач с LeetCode в прямом эфире.",
      uz: "LeetCode masalalari jonli tahlil qilinadi.",
    },
    facebookLink: "https://facebook.com",
    speaker: {
      name: "Ralph Edwards",
      role: {
        en: "Senior Software Architect",
        ru: "Главный системный архитектор",
        uz: "Bosh tizim me'mori",
      },
      bio: {
        en: "Passed and conducted over 200 FAANG and top-tier technical interviews.",
        ru: "Прошел и провел более 200 технических интервью в международных IT-гигантах.",
        uz: "Xalqaro IT-kompaniyalarda 200 dan ortiq texnik suhbatlarni muvaffaqiyatli o'tkazgan ekspert.",
      },
      image: "/assets/speaker-image.png",
      companies: ["Sentinal Consulting", "National"],
    },
    themes: [
      {
        id: 1,
        title: {
          en: "Theme 1. Data structures and algorithm problem-solving strategies.",
          ru: "Тема 1. Стратегии решения задач по структурам данных и алгоритмам.",
          uz: "1-mavzu. Ma'lumotlar tuzilmasi va algoritmlar bo'yicha masalalarni yechish strategiyalari.",
        },
        description: {
          en: "How to communicate your thought process clearly during high-pressure coding interviews.",
          ru: "Как уверенно объяснять ход своих мыслей на техническом интервью.",
          uz: "Texnik intervyuda o'z fikrlash jarayonini aniq va ishonchli yetkazib berish sirlari.",
        },
      },
    ],
    benefits: {
      en: [
        "Junior and middle software engineers preparing for job hunting",
        "Developers aiming for relocation or remote foreign roles",
        "Computer science students preparing for graduate internships",
      ],
      ru: [
        "Разработчики уровней Junior и Middle, ищущие работу",
        "Специалисты, нацеленные на релокацию или зарубежный ремоут",
        "Студенты профильных IT-факультетов",
      ],
      uz: [
        "Ish qidirayotgan Junior va Middle dasturchilar",
        "Xorijiy kompaniyalarda masofaviy ishlashni maqsad qilganlar",
        "IT yo'nalishidagi talabalar",
      ],
    },
  },
  {
    id: 8,
    day: "21",
    month: { en: "April", ru: "Апрель", uz: "Aprel" },
    time: "18:00 – 20:00",
    title: {
      en: "Product metrics that matter: from acquisition to monetization.",
      ru: "Продуктовые метрики, которые имеют значение: от привлечения к монетизации.",
      uz: "Muhim mahsulot metrikalari: foydalanuvchini jalb qilishdan daromad olishgacha.",
    },
    type: {
      en: "Online lecture",
      ru: "Онлайн лекция",
      uz: "Onlayn ma'ruza",
    },
    category: { en: "Management", ru: "Менеджмент", uz: "Menejment" },
    categoryKey: "Management",
    price: { en: "Free", ru: "Бесплатно", uz: "Bepul" },
    priceNote: {
      en: "Unit economics Excel calculator provided.",
      ru: "Калькулятор юнит-экономики в Excel.",
      uz: "Excel da unit-iqtisodiyot kalkulyatori taqdim etiladi.",
    },
    timeNote: {
      en: "Interactive case breakdown.",
      ru: "Интерактивный разбор кейсов.",
      uz: "Haqiqiy keyslar tahlili.",
    },
    facebookLink: "https://facebook.com",
    speaker: {
      name: "Marvin McKinney",
      role: {
        en: "Senior Product Manager",
        ru: "Ведущий продакт-менеджер",
        uz: "Yetakchi mahsulot menejeri",
      },
      bio: {
        en: "Built analytics stacks and scaled monetization for consumer mobile applications.",
        ru: "Выстроил аналитику и монетизацию в мобильных приложениях с миллионами пользователей.",
        uz: "Millionlab foydalanuvchilarga ega mobil ilovalarda tahlil va monetizatsiyani yo'lga qo'ygan ekspert.",
      },
      image: "/assets/speaker-image.png",
      companies: ["Del Mar Strategy", "Higher Fit"],
    },
    themes: [
      {
        id: 1,
        title: {
          en: "Theme 1. Finding North Star metrics and building metric trees.",
          ru: "Тема 1. Поиск метрики North Star и построение дерева метрик.",
          uz: "1-mavzu. Asosiy maqsad ko'rsatkichi (North Star) va metrikalar daraxtini qurish.",
        },
        description: {
          en: "Connecting operational team tasks with top-level financial business performance.",
          ru: "Связка ежедневных задач продуктовой команды с доходами бизнеса.",
          uz: "Kundalik vazifalarni kompaniyaning umumiy moliyaviy muvaffaqiyati bilan bog'lash.",
        },
      },
      {
        id: 2,
        title: {
          en: "Theme 1. Finding North Star metrics and building metric trees.",
          ru: "Тема 1. Поиск метрики North Star и построение дерева метрик.",
          uz: "1-mavzu. Asosiy maqsad ko'rsatkichi (North Star) va metrikalar daraxtini qurish.",
        },
        description: {
          en: "Connecting operational team tasks with top-level financial business performance.",
          ru: "Связка ежедневных задач продуктовой команды с доходами бизнеса.",
          uz: "Kundalik vazifalarni kompaniyaning umumiy moliyaviy muvaffaqiyati bilan bog'lash.",
        },
      },
      {
        id: 3,
        title: {
          en: "Theme 1. Finding North Star metrics and building metric trees.",
          ru: "Тема 1. Поиск метрики North Star и построение дерева метрик.",
          uz: "1-mavzu. Asosiy maqsad ko'rsatkichi (North Star) va metrikalar daraxtini qurish.",
        },
        description: {
          en: "Connecting operational team tasks with top-level financial business performance.",
          ru: "Связка ежедневных задач продуктовой команды с доходами бизнеса.",
          uz: "Kundalik vazifalarni kompaniyaning umumiy moliyaviy muvaffaqiyati bilan bog'lash.",
        },
      },
    ],
    benefits: {
      en: [
        "Product and project managers",
        "Business analysts and data scientists",
        "Founders tracking product-market fit metrics",
      ],
      ru: [
        "Продакт- и проджект-менеджеры",
        "Бизнес-аналитики и продуктовые аналитики",
        "Основатели стартапов",
      ],
      uz: [
        "Mahsulot va loyiha menejerlari",
        "Biznes tahlilchilar",
        "O'z loyihasining o'sishini kuzatayotgan tadbirkorlar",
      ],
    },
  },
];

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

const eventUiTranslations = {
  viewMore: { en: "View more", ru: "Подробнее", uz: "Batafsil" },
  allThemes: { en: "all themes", ru: "все темы", uz: "barcha mavzular" },
  newest: { en: "newest", ru: "сначала новые", uz: "avval yangilari" },
  oldest: { en: "oldest", ru: "сначала старые", uz: "avval eskilar" },
  az: { en: "A - Z", ru: "А - Я", uz: "A - Z" },
  searchPlaceholder: {
    en: "Search event...",
    ru: "Поиск мероприятия...",
    uz: "Tadbirni qidirish...",
  },
  eventsPerPage: {
    en: "events per page",
    ru: "мероприятий на странице",
    uz: "tadbir har bir sahifada",
  },
};

let eventCardsContainer =
  document.getElementById("eventsContainer") ||
  document.getElementById("events-container");
let eventCategorySelect =
  document.getElementById("categoryFilter") ||
  document.getElementById("category-filter");
let eventSortSelect =
  document.getElementById("sortFilter") ||
  document.getElementById("sort-filter");
let eventPerPageInput =
  document.getElementById("perPageInput") ||
  document.getElementById("per-page-input");
let eventSearchInput =
  document.getElementById("searchInput") ||
  document.getElementById("search-input");
let eventPaginationEl = document.getElementById("pagination");
let eventLineViewBtn =
  document.getElementById("listViewBtn") ||
  document.getElementById("line-view-btn");
let eventGridViewBtn =
  document.getElementById("gridViewBtn") ||
  document.getElementById("grid-view-btn");

let eventCurrentPage = 1;
let eventIsGridView = false;
let eventListenersBound = false;

function refreshEventElements() {
  if (!eventCardsContainer)
    eventCardsContainer =
      document.getElementById("eventsContainer") ||
      document.getElementById("events-container");
  if (!eventCategorySelect)
    eventCategorySelect =
      document.getElementById("categoryFilter") ||
      document.getElementById("category-filter");
  if (!eventSortSelect)
    eventSortSelect =
      document.getElementById("sortFilter") ||
      document.getElementById("sort-filter");
  if (!eventPerPageInput)
    eventPerPageInput =
      document.getElementById("perPageInput") ||
      document.getElementById("per-page-input");
  if (!eventSearchInput)
    eventSearchInput =
      document.getElementById("searchInput") ||
      document.getElementById("search-input");
  if (!eventPaginationEl)
    eventPaginationEl = document.getElementById("pagination");
  if (!eventLineViewBtn)
    eventLineViewBtn =
      document.getElementById("listViewBtn") ||
      document.getElementById("line-view-btn");
  if (!eventGridViewBtn)
    eventGridViewBtn =
      document.getElementById("gridViewBtn") ||
      document.getElementById("grid-view-btn");
}

function updateEventFilterTexts() {
  refreshEventElements();
  const lang = getEventLang();

  if (
    eventCategorySelect &&
    eventCategorySelect.options &&
    eventCategorySelect.options[0]
  ) {
    eventCategorySelect.options[0].text =
      eventUiTranslations.allThemes[lang] || "all themes";
  }

  if (eventSortSelect && eventSortSelect.options) {
    if (eventSortSelect.options[0])
      eventSortSelect.options[0].text =
        eventUiTranslations.newest[lang] || "newest";
    if (eventSortSelect.options[1])
      eventSortSelect.options[1].text =
        eventUiTranslations.oldest[lang] || "oldest";
    if (eventSortSelect.options[2])
      eventSortSelect.options[2].text = eventUiTranslations.az[lang] || "A - Z";
  }

  if (eventSearchInput) {
    eventSearchInput.placeholder =
      eventUiTranslations.searchPlaceholder[lang] || "Search event...";
  }
}

function setupEventListeners() {
  if (eventListenersBound) return;
  refreshEventElements();

  if (eventLineViewBtn && eventGridViewBtn) {
    eventLineViewBtn.addEventListener("click", () => {
      eventIsGridView = false;
      eventLineViewBtn.classList.add("text-[#FF3F3A]");
      eventLineViewBtn.classList.remove("text-[#424551]", "text-[#9A9CA5]");
      eventGridViewBtn.classList.remove("text-[#FF3F3A]");
      eventGridViewBtn.classList.add("text-[#424551]");
      if (eventCardsContainer)
        eventCardsContainer.className = "flex flex-col gap-6";
      renderEvents();
    });

    eventGridViewBtn.addEventListener("click", () => {
      eventIsGridView = true;
      eventGridViewBtn.classList.add("text-[#FF3F3A]");
      eventGridViewBtn.classList.remove("text-[#424551]", "text-[#9A9CA5]");
      eventLineViewBtn.classList.remove("text-[#FF3F3A]");
      eventLineViewBtn.classList.add("text-[#424551]");
      if (eventCardsContainer)
        eventCardsContainer.className =
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
      renderEvents();
    });
  }

  if (eventCategorySelect) {
    eventCategorySelect.addEventListener("change", () => {
      eventCurrentPage = 1;
      renderEvents();
    });
  }

  if (eventSortSelect) {
    eventSortSelect.addEventListener("change", () => {
      eventCurrentPage = 1;
      renderEvents();
    });
  }

  if (eventPerPageInput) {
    eventPerPageInput.addEventListener("input", () => {
      eventCurrentPage = 1;
      renderEvents();
    });
  }

  if (eventSearchInput) {
    eventSearchInput.addEventListener("input", () => {
      eventCurrentPage = 1;
      renderEvents();
    });
  }

  // Burger menu support if on events page
  const burgerBtn = document.getElementById("burger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const burgerIcon = document.getElementById("burger-icon");
  const closeIcon = document.getElementById("close-icon");
  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.toggle("hidden");
      if (burgerIcon && closeIcon) {
        burgerIcon.classList.toggle("hidden", !isHidden);
        closeIcon.classList.toggle("hidden", isHidden);
      }
    });
  }

  eventListenersBound = true;
}

function renderEvents() {
  refreshEventElements();
  if (!eventCardsContainer) return;

  const lang = getEventLang();
  updateEventFilterTexts();

  let filtered = events.filter((event) => {
    const category = eventCategorySelect ? eventCategorySelect.value : "all";
    const search = eventSearchInput
      ? eventSearchInput.value.toLowerCase().trim()
      : "";

    const titleText = getEventText(event.title, lang).toLowerCase();
    const typeText = getEventText(event.type, lang).toLowerCase();

    const matchesCategory =
      category === "all" ||
      event.categoryKey === category ||
      category.toLowerCase().includes(event.categoryKey.toLowerCase()) ||
      event.categoryKey.toLowerCase().includes(category.toLowerCase());

    const matchesSearch =
      titleText.includes(search) || typeText.includes(search);

    return matchesCategory && matchesSearch;
  });

  const sortValue = eventSortSelect ? eventSortSelect.value : "newest";
  if (sortValue === "newest") {
    filtered.sort((a, b) => b.id - a.id);
  } else if (sortValue === "oldest") {
    filtered.sort((a, b) => a.id - b.id);
  } else if (sortValue === "az" || sortValue === "title") {
    filtered.sort((a, b) =>
      getEventText(a.title, lang).localeCompare(getEventText(b.title, lang)),
    );
  }

  const perPage =
    eventPerPageInput && parseInt(eventPerPageInput.value) > 0
      ? parseInt(eventPerPageInput.value)
      : 9;
  const totalPages = Math.ceil(filtered.length / perPage) || 1;

  if (eventCurrentPage > totalPages) eventCurrentPage = totalPages;

  const start = (eventCurrentPage - 1) * perPage;
  const paginatedItems = filtered.slice(start, start + perPage);

  const viewMoreText = eventUiTranslations.viewMore[lang] || "View more";

  if (paginatedItems.length === 0) {
    eventCardsContainer.innerHTML = `
      <div class="py-12 text-center text-gray-500 font-medium">
        ${lang === "uz" ? "Tadbirlar topilmadi" : lang === "ru" ? "Мероприятия не найдены" : "No events found"}
      </div>
    `;
    renderPagination(0);
    return;
  }

  eventCardsContainer.innerHTML = paginatedItems
    .map((event) => {
      const month = getEventText(event.month, lang);
      const title = getEventText(event.title, lang);
      const type = getEventText(event.type, lang);

      if (eventIsGridView) {
        return `
          <div class="flex flex-col justify-between p-6 border border-[#E5E8ED] rounded-xl bg-white min-h-[300px] transition duration-300 hover:border-transparent hover:shadow-xl">
            <div>
              <div class="mb-5">
                <div class="text-[28px] font-black text-[#FF3F3A] leading-tight mb-1">${event.day} ${month.slice(0, 3)}</div>
                <div class="text-sm text-[#787A80]">${event.time}</div>
              </div>
              <div class="mb-6">
                <h3 class="text-lg font-bold leading-snug mb-2">${title}</h3>
                <p class="text-sm text-[#787A80]">${type}</p>
              </div>
            </div>
            <a href="eventDetail.html?id=${event.id}" class="block w-full text-center py-3 px-8 border border-[#FF3F3A] rounded-lg text-[#FF3F3A] font-bold text-sm transition duration-300 hover:bg-[#FF3F3A] hover:text-white">
              ${viewMoreText}
            </a>
          </div>
        `;
      } else {
        return `
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8 py-8 px-6 lg:px-10 border border-[#E5E8ED] rounded-xl bg-white transition duration-300 hover:border-transparent hover:shadow-xl">
            <div class="flex items-center gap-5 min-w-[180px]">
              <span class="text-5xl font-black text-[#FF3F3A] leading-none">${event.day}</span>
              <div>
                <div class="text-xl font-bold mb-1">${month}</div>
                <div class="text-sm text-[#787A80]">${event.time}</div>
              </div>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold leading-snug mb-1.5">${title}</h3>
              <p class="text-sm text-[#787A80]">${type}</p>
            </div>
            <a href="eventDetail.html?id=${event.id}" class="inline-block text-center py-3 px-8 border border-[#FF3F3A] rounded-lg text-[#FF3F3A] font-bold text-sm whitespace-nowrap transition duration-300 hover:bg-[#FF3F3A] hover:text-white">
              ${viewMoreText}
            </a>
          </div>
        `;
      }
    })
    .join("");

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  refreshEventElements();
  if (!eventPaginationEl) return;
  if (totalPages <= 1) {
    eventPaginationEl.innerHTML = "";
    return;
  }
  let html = "";
  for (let i = 1; i <= totalPages; i++) {
    const activeClass =
      i === eventCurrentPage
        ? "text-[#FF3F3A]"
        : "text-[#424551] hover:text-[#FF3F3A]";
    html += `<button class="text-base font-bold px-2 py-1 cursor-pointer transition ${activeClass}" onclick="goToPage(${i})">${i}</button>`;
  }
  if (eventCurrentPage < totalPages) {
    html += `<button class="text-base font-bold text-[#424551] hover:text-[#FF3F3A] px-2 py-1 cursor-pointer transition" onclick="goToPage(${eventCurrentPage + 1})">→</button>`;
  }
  eventPaginationEl.innerHTML = html;
}

window.goToPage = function (page) {
  eventCurrentPage = page;
  renderEvents();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("languageChanged", () => {
  renderEvents();
});

document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  renderEvents();
});

setupEventListeners();
renderEvents();
