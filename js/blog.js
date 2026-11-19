const blogs = [
  {
    id: 1,
    type: { en: "Podcast", ru: "Подкаст", uz: "Podkast" },
    typeKey: "Podcast",
    category: { en: "Marketing", ru: "Маркетинг", uz: "Marketing" },
    categoryKey: "Marketing",
    date: {
      en: "September 4, 2020",
      ru: "4 сентября 2020",
      uz: "4-sentyabr, 2020",
    },
    duration: { en: "36 min", ru: "36 мин", uz: "36 daqiqa" },
    readTime: {
      en: "36 min listen",
      ru: "36 мин прослушивания",
      uz: "36 daqiqa tinglash",
    },
    actionText: { en: "Listen", ru: "Слушать", uz: "Tinglash" },
    image: "/assets/blog1.png",
    bgColor: "bg-[#9AD1F5]",
    isWide: false,
    title: {
      en: "What is traffic arbitrage and does it really make money?",
      ru: "Что такое арбитраж трафика и можно ли на нем реально заработать?",
      uz: "Trafik arbitraji nima va unda haqiqatdan ham pul ishlash mumkinmi?",
    },
    excerpt: {
      en: "An honest breakdown of media buying, affiliate marketing networks, traffic sources, and actual profit margins.",
      ru: "Честный разбор медиабаинга, партнерских сетей, источников трафика и реальной рентабельности связок.",
      uz: "Media baying, hamkorlik tarmoqlari, trafik manbalari va real daromadlilik bo'yicha batafsil tahlil.",
    },
    leadParagraph: {
      en: "Traffic arbitrage has become one of the most talked-about topics in digital business. In this episode we discuss the realities, budgets, and pitfalls.",
      ru: "Арбитраж трафика стал одной из самых обсуждаемых тем в цифровом маркетинге. В этом подкасте разбираем реальность, бюджеты и подводные камни.",
      uz: "Trafik arbitraji raqamli marketingdagi eng dolzarb mavzulardan biriga aylandi. Ushbu podkastda real tajribalar va byudjetlarni tahlil qilamiz.",
    },
    content: {
      en: [
        "Buying traffic on one platform and directing it to an offer on another can yield high returns, but requires strict analytics and testing discipline.",
        "Successful media buyers rely on multivariate split-testing, pixel attribution, and deep audience segmentation rather than pure luck.",
      ],
      ru: [
        "Покупка рекламы на одной площадке и перенаправление на оффер может приносить высокую прибыль, но требует жесткой аналитической дисциплины.",
        "Успешные медиабайеры полагаются на сплит-тесты, оптимизацию пикселей и сегментацию аудитории, а не на случайную удачу.",
      ],
      uz: [
        "Bir platformadan trafik sotib olib ikkinchisiga yo'naltirish yuqori daromad keltirishi mumkin, ammo qat'iy tahlilni talab qiladi.",
        "Muvaffaqiyatli mutaxassislar omadga emas, balki chuqur A/B testlar va auditoriya segmentatsiyasiga tayanadilar.",
      ],
    },
    quote: {
      en: "Arbitrage is not easy money; it is a systematic engineering business based on numbers, unit economics, and data testing.",
      ru: "Арбитраж — это не легкие деньги, а системный инженерный бизнес, основанный на цифрах, юнит-экономике и тестировании данных.",
      uz: "Arbitraj oson pul emas; bu raqamlar, iqtisodiyot va muntazam tajribalarga asoslangan tizimli biznesdir.",
    },
    listIntro: {
      en: "Key skills required for sustainable media buying:",
      ru: "Ключевые навыки, необходимые для успешного арбитража:",
      uz: "Muvaffaqiyatli media-baying uchun zarur asosiy ko'nikmalar:",
    },
    bulletPoints: {
      en: [
        "Deep understanding of advertising policy guidelines across Google and Meta",
        "Competency in tracker setup (Keitaro, Voluum) and conversion postbacks",
        "Creative production ability for high-CTR landing pages and videos",
        "Data analysis and fast budget reallocation skills",
      ],
      ru: [
        "Глубокое знание правил рекламной политики Google и Meta",
        "Навыки работы с трекерами (Keitaro, Voluum) и постбэками",
        "Создание цепляющих креативов и конвертящих лендингов",
        "Аналитика данных и оперативное перераспределение бюджетов",
      ],
      uz: [
        "Google va Meta reklama siyosatini mukammal bilish",
        "Trekerlar (Keitaro, Voluum) va postbeklar bilan professional ishlash",
        "Yuqori konversiyali kreativlar va lending sahifalar tayyorlash",
        "Ma'lumotlar tahlili va byudjetni tezkor boshqarish mahorati",
      ],
    },
    outro: {
      en: "Treat traffic arbitrage as a scientific experiment: formulate hypotheses, measure metrics, and cut unprofitable campaigns early.",
      ru: "Относитесь к арбитражу как к научной лаборатории: тестируйте гипотезы, считайте цифры и вовремя отключайте нерентабельные связки.",
      uz: "Trafik arbitrajiga ilmiy laboratoriya sifatida qarang: gipotezalarni sinang, raqamlarni hisoblang va samarasiz kampaniyalarni o'z vaqtida to'xtating.",
    },
    author: {
      name: "Kristin Watson",
      role: {
        en: "Curator of Marketing Courses",
        ru: "Куратор направления маркетинга",
        uz: "Marketing yo'nalishi kuratori",
      },
      avatar: "/assets/swiper-img.png",
    },
    tags: ["#marketing", "#traffic", "#business"],
  },
  {
    id: 2,
    type: { en: "Article", ru: "Статья", uz: "Maqola" },
    typeKey: "Article",
    category: { en: "Development", ru: "Разработка", uz: "Dasturlash" },
    categoryKey: "Development",
    date: {
      en: "September 1, 2020",
      ru: "1 сентября 2020",
      uz: "1-sentyabr, 2020",
    },
    duration: { en: "5 min read", ru: "5 мин чтения", uz: "5 daqiqa o'qish" },
    readTime: {
      en: "5 min read",
      ru: "5 мин чтения",
      uz: "5 daqiqa o'qish",
    },
    actionText: { en: "Read", ru: "Читать", uz: "O'qish" },
    image: "/assets/blog2.jpg",
    bgColor: "bg-gray-200",
    isWide: false,
    title: {
      en: "How to choose the first programming language for a beginner",
      ru: "Как выбрать первый язык программирования новичку",
      uz: "Boshlovchi uchun ilk dasturlash tilini qanday tanlash kerak?",
    },
    excerpt: {
      en: "JavaScript, Python, C#, or Go? A practical roadmap based on job market demand, career prospects, and learning curve.",
      ru: "JavaScript, Python, C# или Go? Практический ориентир по рынку труда, перспективам и порогу входа.",
      uz: "Python, JavaScript yoki C#? Bozor talabi, istiqbollar va o'rganish osonligiga asoslangan amaliy qo'llanma.",
    },
    leadParagraph: {
      en: "Starting a programming career is overwhelming with dozens of competing languages. The right choice depends on your target industry.",
      ru: "Начало пути в программировании часто вызывает растерянность. Правильный выбор языка зависит от сферы, в которой вы хотите работать.",
      uz: "Dasturlash olamiga ilk qadam qo'yayotgan har bir inson uchun eng qiyin savol — qaysi tildan boshlash. Tanlov sizning maqsadingizga bog'liq.",
    },
    content: {
      en: [
        "If your dream is web development, JavaScript and TypeScript are indispensable. Every modern browser runs JavaScript, guaranteeing endless job openings.",
        "For artificial intelligence, machine learning, and data analytics, Python remains the undisputed global standard due to its syntax simplicity and rich ecosystem.",
      ],
      ru: [
        "Если ваша цель — веб-разработка, то JavaScript и TypeScript незаменимы. На них работает каждый современный браузер.",
        "Для искусственного интеллекта и анализа данных бесспорным стандартом остается Python благодаря простому синтаксису и библиотекам.",
      ],
      uz: [
        "Agar maqsadingiz veb-dasturlash bo'lsa, JavaScript va TypeScript eng to'g'ri tanlovdir. Har bir brauzer JavaScript orqali ishlaydi.",
        "Sun'iy intellekt va ma'lumotlar tahlili uchun esa oddiy sintaksisi va boy kutubxonalari tufayli Python yetakchi til hisoblanadi.",
      ],
    },
    quote: {
      en: "Your first programming language is simply a tool. The real superpower is developing algorithmic thinking and problem-solving tenacity.",
      ru: "Первый язык программирования — это просто инструмент. Главный навык — умение алгоритмически мыслить и находить решения.",
      uz: "Birinchi dasturlash tili — bu shunchaki vosita. Asosiysi algoritmik fikrlash va muammolarni hal qilish ko'nikmasini shakllantirishdir.",
    },
    listIntro: {
      en: "Key factors to evaluate when choosing your starting stack:",
      ru: "Факторы, на которые стоит обратить внимание при выборе стека:",
      uz: "Til tanlashda quyidagi omillarga e'tibor bering:",
    },
    bulletPoints: {
      en: [
        "Job openings and average salaries in your target geographical market",
        "Availability of high-quality beginner tutorials and open-source documentation",
        "Which niche (Web, Mobile, AI, Cloud) inspires your curiosity most",
        "Active community support on StackOverflow and GitHub",
      ],
      ru: [
        "Количество открытых вакансий и зарплаты на целевом рынке",
        "Доступность качественных обучающих материалов и документации",
        "Интересующее вас направление (Веб, Мобайл, ИИ или Бэкенд)",
        "Активность сообщества и поддержка новичков",
      ],
      uz: [
        "Bozordagi talab va ochiq vakansiyalar soni",
        "O'rganish uchun sifatli o'quv resurslari va qo'llanmalar mavjudligi",
        "Qaysi yo'nalish (Web, Mobile, AI) sizga ko'proq qiziq ekanligi",
        "Dasturchilar hamjamiyati (Community) qo'llab-quvvatlovi",
      ],
    },
    outro: {
      en: "Pick one language, stick to it for at least 6 months, build real projects, and subsequent languages will take weeks to learn.",
      ru: "Выберите один язык, посвятите ему полгода практики и создавайте реальные проекты — тогда все следующие языки вы освоите за недели.",
      uz: "Bitta tilni tanlang, unga kamida 6 oy amaliyot ajrating va real loyihalar quring — shunda keyingi tillarni bir necha haftada o'zlashtirasiz.",
    },
    author: {
      name: "Brooklyn Simmons",
      role: {
        en: "Senior Software Architect",
        ru: "Главный системный архитектор",
        uz: "Yetakchi dasturiy ta'minot me'mori",
      },
      avatar: "/assets/swiper-img.png",
    },
    tags: ["#coding", "#development", "#learning"],
  },
  {
    id: 3,
    type: { en: "Video", ru: "Видео", uz: "Video" },
    typeKey: "Video",
    category: { en: "Design", ru: "Дизайн", uz: "Dizayn" },
    categoryKey: "Design",
    date: {
      en: "August 8, 2020",
      ru: "8 августа 2020",
      uz: "8-avgust, 2020",
    },
    duration: { en: "40 min", ru: "40 мин", uz: "40 daqiqa" },
    readTime: {
      en: "40 min watch",
      ru: "40 мин просмотра",
      uz: "40 daqiqa ko'rish",
    },
    actionText: { en: "Watch", ru: "Смотреть", uz: "Ko'rish" },
    image: "/assets/blog3.png",
    bgColor: "bg-[#FFF3A1]",
    isWide: false,
    title: {
      en: "Should you choose a creative profession if you are attracted to creativity?",
      ru: "Стоит ли выбирать творческую профессию, если вас тянет к креативу?",
      uz: "Ijodga qiziqsangiz, ijodiy kasbni tanlash to'g'rimi?",
    },
    excerpt: {
      en: "The truth about commercial creative careers: client briefs, tight deadlines, constructive critique, and daily design discipline.",
      ru: "Вся правда о коммерческом дизайне: брифы клиентов, дедлайны, критика и профессиональная дисциплина.",
      uz: "Tijoriy dizayn sohasi haqida haqiqat: mijozlar talablari, dedlaynlar, tanqid va doimiy intizom.",
    },
    leadParagraph: {
      en: "Many assume creative careers are endless freedom and spontaneous inspiration. In reality, commercial design is systematic problem solving.",
      ru: "Многие думают, что дизайн — это только вдохновение. В реальности коммерческий дизайн — это решение задач бизнеса визуальными средствами.",
      uz: "Ijodkorlik va dizayn sohasi tashqaridan faqat erkinlikdek ko'rinadi, ammo uning ortida tizimli mehnat va mijozlar bilan ishlash yotadi.",
    },
    content: {
      en: [
        "Art is about self-expression, but design is about serving users and clients. Understanding this distinction is key to enjoying a lasting career.",
        "Top designers spend more time communicating, researching user psychology, and iterating on feedback than drawing aesthetics.",
      ],
      ru: [
        "Искусство служит самовыражению, а дизайн решает задачи пользователей и бизнеса. Это ключевое отличие для успеха в профессии.",
        "Ведущие дизайнеры тратят больше времени на исследование психологии пользователей и коммуникацию, чем на рисование.",
      ],
      uz: [
        "San'at — bu o'zini ifoda etish, dizayn esa — foydalanuvchilar va biznes muammosini hal qilishdir.",
        "Katta dizaynerlar vaqtning ko'p qismini rasm chizishga emas, balki foydalanuvchi psixologiyasini o'rganishga sarflaydilar.",
      ],
    },
    quote: {
      en: "Design is not just what it looks like and feels like. Design is how it works.",
      ru: "Дизайн — это не просто то, как вещь выглядит. Дизайн — это то, как она работает.",
      uz: "Dizayn shunchaki chiroyli rasm emas, balki uning qanday ishlashi va qulayligidir.",
    },
    listIntro: {
      en: "Essential skills for a thriving commercial designer:",
      ru: "Главные навыки для успешного дизайнера:",
      uz: "Muvaffaqiyatli dizayner uchun muhim ko'nikmalar:",
    },
    bulletPoints: {
      en: [
        "Receiving and incorporating constructive feedback objectively",
        "Developing visual taste and design awareness daily",
        "Respecting strict project delivery deadlines",
        "Mastering modern tools like Figma and interactive prototyping",
      ],
      ru: [
        "Спокойное и конструктивное восприятие критики",
        "Ежедневная тренировка насмотренности и визуального вкуса",
        "Строгое соблюдение сроков и дедлайнов",
        "Владение Figma и современными дизайн-инструментами",
      ],
      uz: [
        "Tanqidni to'g'ri qabul qilish va tahlil qilish",
        "Doimiy ravishda vizual didni (nasmotrennost) rivojlantirish",
        "Dedlaynlarga qat'iy rioya qilish va intizom",
        "Figma va zamonaviy vositalarni mukammal bilish",
      ],
    },
    outro: {
      en: "If you love combining creativity with analytical thinking, product design offers exceptional personal and financial rewards.",
      ru: "Если вы любите соединять творчество с аналитикой, сфера дизайна принесет вам огромное удовольствие и высокий доход.",
      uz: "Agar sizda sabr va ijodkorlik bilan birga o'rganish istagi bo'lsa, dizayn sohasi eng yaxshi tanlovdir.",
    },
    author: {
      name: "Cody Fisher",
      role: {
        en: "Senior UX Designer",
        ru: "Ведущий UX-дизайнер",
        uz: "Yetakchi UX dizayner",
      },
      avatar: "/assets/swiper-img.png",
    },
    tags: ["#design", "#creativity", "#self-development"],
  },
  {
    id: 4,
    type: { en: "Article", ru: "Статья", uz: "Maqola" },
    typeKey: "Article",
    category: {
      en: "HR & Recruiting",
      ru: "HR и рекрутинг",
      uz: "HR va rekruting",
    },
    categoryKey: "HR & Recruiting",
    date: {
      en: "August 3, 2020",
      ru: "3 августа 2020",
      uz: "3-avgust, 2020",
    },
    duration: { en: "4 min read", ru: "4 мин чтения", uz: "4 daqiqa o'qish" },
    readTime: {
      en: "4 min read",
      ru: "4 мин чтения",
      uz: "4 daqiqa o'qish",
    },
    actionText: { en: "Read", ru: "Читать", uz: "O'qish" },
    image: "/assets/blog4.jpg",
    bgColor: "bg-gray-100",
    isWide: true,
    title: {
      en: "HR statistics: job search, interviews, hiring and recruiting benchmarks",
      ru: "HR-статистика: поиск работы, собеседования, найм и бенчмарки рекрутинга",
      uz: "HR statistikasi: ish qidirish, intervyular, yollash va rekruting ko'rsatkichlari",
    },
    excerpt: {
      en: "A comprehensive analysis of average hiring times, offer acceptance rates, remote work preferences, and candidate drop-off metrics in modern tech companies.",
      ru: "Подробный анализ сроков закрытия вакансий, процента принятия офферов, предпочтений удаленной работы и причин отказов кандидатов.",
      uz: "Vakansiyalarni yopish muddatlari, ish takliflarini qabul qilish ko'rsatkichlari va zamonaviy kompaniyalarda xodimlarni saralash tahlili.",
    },
    leadParagraph: {
      en: "Data-driven recruitment is changing how talent is acquired. Tracking metrics enables hiring managers to make predictable, cost-efficient hires.",
      ru: "Рекрутинг на основе данных меняет подход к найму. Анализ метрик позволяет делать процесс найма предсказуемым и экономически выгодным.",
      uz: "Ma'lumotlarga asoslangan rekruting yollash sifatini yangi bosqichga olib chiqmoqda. Metrikalarni kuzatish eng yaxshi mutaxassislarni tez topish imkonini beradi.",
    },
    content: {
      en: [
        "The average time-to-hire in tech has increased to 42 days, highlighting the importance of efficient screening and fast stakeholder feedback.",
        "Companies offering transparent salary ranges and remote flexibility report 70% higher applicant response rates on initial outreach.",
      ],
      ru: [
        "Средний срок закрытия IT-вакансий вырос до 42 дней, что подчеркивает важность быстрого согласования кандидатов руководителями.",
        "Компании с прозрачными вилками зарплат и гибким графиком получают на 70% больше откликов от сильных специалистов.",
      ],
      uz: [
        "IT sohasida xodimni yollashning o'rtacha muddati 42 kunga yetdi, bu esa saralash bosqichlarini optimallashtirish zarurligini ko'rsatadi.",
        "Ish haqi va masofaviy ishlash imkoniyatini ochiq ko'rsatgan kompaniyalar 70% ko'proq ijobiy javob olmoqda.",
      ],
    },
    quote: {
      en: "Your recruitment process is the first product demo candidate sees. A great candidate experience wins the best talent.",
      ru: "Процесс найма — это визитная карточка компании. Качественный опыт кандидата привлекает сильнейших специалистов рынка.",
      uz: "Ishga qabul qilish jarayoni — bu kompaniyaning birinchi yuzi. Nomzodga bo'lgan e'tibor eng yaxshi mutaxassislarni jalb qiladi.",
    },
    listIntro: {
      en: "Most impactful metrics every talent team should monitor:",
      ru: "Главные метрики, за которыми должна следить HR-команда:",
      uz: "Har bir HR jamoasi kuzatishi kerak bo'lgan asosiy ko'rsatkichlar:",
    },
    bulletPoints: {
      en: [
        "Time-to-Hire and Time-to-Fill across departments",
        "Offer Acceptance Rate (OAR) benchmarked against industry standards",
        "Quality of Hire after the 3-month probation period",
        "Cost per hire including sourcing and assessment tooling",
      ],
      ru: [
        "Время закрытия вакансии (Time-to-Hire)",
        "Процент принятых офферов (Offer Acceptance Rate)",
        "Качество найма по итогам прохождения испытательного срока",
        "Стоимость найма сотрудника с учетом всех инструментов",
      ],
      uz: [
        "Vakansiyani yopish vaqti (Time-to-Hire)",
        "Ish taklifining qabul qilinish foizi (Offer Acceptance Rate)",
        "Sinov muddatidan so'ng yangi xodimning samaradorligi",
        "Bitta xodimni yollash xarajati",
      ],
    },
    outro: {
      en: "Build a measurable recruitment pipeline to reduce turnover and empower high-velocity business scaling.",
      ru: "Стройте прозрачную воронку найма, чтобы снижать текучесть кадров и масштабировать бизнес уверенно.",
      uz: "Xodimlar qo'nimsizligini kamaytirish va biznesni tezkor rivojlantirish uchun shaffof rekruting tizimini quring.",
    },
    author: {
      name: "Leslie Alexander Li",
      role: {
        en: "Head of People & Culture",
        ru: "Директор по персоналу",
        uz: "Kadrlar va korporativ madaniyat bo'limi boshlig'i",
      },
      avatar: "/assets/swiper-img.png",
    },
    tags: ["#recruiting", "#analytics", "#hr"],
  },
  {
    id: 5,
    type: { en: "Article", ru: "Статья", uz: "Maqola" },
    typeKey: "Article",
    category: { en: "Design", ru: "Дизайн", uz: "Dizayn" },
    categoryKey: "Design",
    date: {
      en: "July 28, 2020",
      ru: "28 июля 2020",
      uz: "28-iyul, 2020",
    },
    duration: { en: "6 min read", ru: "6 мин чтения", uz: "6 daqiqa o'qish" },
    readTime: {
      en: "6 min read",
      ru: "6 мин чтения",
      uz: "6 daqiqa o'qish",
    },
    actionText: { en: "Read", ru: "Читать", uz: "O'qish" },
    image: "/assets/blog5.png",
    bgColor: "bg-[#FEDCD1]",
    isWide: false,
    title: {
      en: "10 golden rules of UI design for high converting landing pages",
      ru: "10 золотых правил UI-дизайна для конвертящих лендингов",
      uz: "Yuqori konversiyali lending sahifalar uchun UI-dizaynning 10 ta oltin qoidasi",
    },
    excerpt: {
      en: "Visual hierarchy, contrast ratios, microcopy, social proof placement, and mobile responsive optimization tips.",
      ru: "Визуальная иерархия, контраст, микротексты, размещение отзывов и мобильная адаптивность для роста продаж.",
      uz: "Vizual ierarxiya, kontrast, ishonch belgilari va mobil moslashuvchanlik orqali buyurtmalarni oshirish sirlari.",
    },
    leadParagraph: {
      en: "A landing page has less than five seconds to capture a visitor's interest. Every pixel must guide the user smoothly toward the call to action.",
      ru: "У лендинга есть всего пять секунд, чтобы заинтересовать посетителя. Каждый элемент должен вести пользователя к действию.",
      uz: "Lending sahifasiga kirgan foydalanuvchini jalb qilish uchun bor-yo'g'i 5 soniya bor. Har bir element maqsadli harakatga yo'naltirishi lozim.",
    },
    content: {
      en: [
        "Visual hierarchy dictates what the eye perceives first. Use scale, color weight, and negative white space to emphasize the core value proposition.",
        "Mobile traffic exceeds 70% in modern consumer markets; designing mobile-first is no longer optional.",
      ],
      ru: [
        "Визуальная иерархия управляет вниманием пользователя. Используйте размер, контрастные цвета и свободное пространство.",
        "Доля мобильного трафика превышает 70%, поэтому проектирование mobile-first обязательно для высоких продаж.",
      ],
      uz: [
        "Vizual ierarxiya inson nigohini to'g'ri boshqaradi. Asosiy taklifni ajratib ko'rsatish uchun bo'sh joy va kontrastdan foydalaning.",
        "Mobil trafik ulushi 70% dan oshgan, shuning uchun birinchi navbatda mobil ko'rinishga e'tibor qaratish zarur.",
      ],
    },
    quote: {
      en: "Good design is obvious. Great design is transparent.",
      ru: "Хороший дизайн заметен сразу. Отличный дизайн незаметен и удобен.",
      uz: "Yaxshi dizayn darhol ko'zga tashlanadi. Mukammal dizayn esa foydalanishda sezilmaydi.",
    },
    listIntro: {
      en: "High-conversion landing page essentials:",
      ru: "Главные правила для высокой конверсии:",
      uz: "Yuqori konversiyali lendingning asosiy qoidalari:",
    },
    bulletPoints: {
      en: [
        "Clear headline communicating value in under 5 seconds",
        "High-contrast Call to Action (CTA) buttons",
        "Genuine client social proof, testimonials, and video reviews",
        "Blazing fast page load speed under 2 seconds",
      ],
      ru: [
        "Понятный заголовок, объясняющий ценность за 5 секунд",
        "Контрастная и заметная кнопка призыва к действию (CTA)",
        "Реальные социальные доказательства: отзывы и кейсы",
        "Высокая скорость загрузки страницы менее 2 секунд",
      ],
      uz: [
        "Qiymatni 5 soniyada yetkazib beruvchi aniq sarlavha",
        "Ko'zga tashlanuvchi, kontrastli harakat tugmasi (CTA)",
        "Haqiqiy mijozlar fikrlari va ijtimoiy dalillar",
        "Sahifaning 2 soniyadan kam vaqtda tez yuklanishi",
      ],
    },
    outro: {
      en: "Test multiple layout variants with A/B experiments to continuously iterate on user conversion rates.",
      ru: "Тестируйте варианты страниц с помощью A/B тестов для постоянного роста конверсии.",
      uz: "Konversiyani muntazam oshirib borish uchun turli variantlarni A/B testlar orqali sinab boring.",
    },
    author: {
      name: "Guy Hawkins",
      role: {
        en: "Lead UI/UX Designer",
        ru: "Ведущий дизайнер интерфейсов",
        uz: "Bosh interfeys dizayneri",
      },
      avatar: "/assets/swiper-img.png",
    },
    tags: ["#design", "#ui", "#conversion"],
  },
  {
    id: 6,
    type: { en: "Podcast", ru: "Подкаст", uz: "Podkast" },
    typeKey: "Podcast",
    category: { en: "Marketing", ru: "Маркетинг", uz: "Marketing" },
    categoryKey: "Marketing",
    date: {
      en: "July 15, 2020",
      ru: "15 июля 2020",
      uz: "15-iyul, 2020",
    },
    duration: { en: "45 min", ru: "45 мин", uz: "45 daqiqa" },
    readTime: {
      en: "45 min listen",
      ru: "45 мин прослушивания",
      uz: "45 daqiqa tinglash",
    },
    actionText: { en: "Listen", ru: "Слушать", uz: "Tinglash" },
    image: "/assets/blog6.png",
    bgColor: "bg-[#E6F5FC]",
    isWide: false,
    title: {
      en: "How to build personal brand from zero on LinkedIn",
      ru: "Как построить личный бренд с нуля в LinkedIn",
      uz: "LinkedIn tarmog'ida shaxsiy brendni noldan qanday qurish kerak?",
    },
    excerpt: {
      en: "Profile optimization, content strategy, networking algorithms, and turning post engagement into lucrative enterprise consulting leads.",
      ru: "Оптимизация профиля, алгоритмы ленты, контентная стратегия и превращение охватов в дорогие B2B-контракты.",
      uz: "Profilni to'g'ri sozlash, algoritmlar sirlari, kontent strategiyasi va postlar orqali qimmatli B2B buyurtmalarni jalb qilish.",
    },
    leadParagraph: {
      en: "LinkedIn is the world's most powerful B2B networking platform. A strong personal brand unlocks speaking gigs, funding, and high-ticket clients.",
      ru: "LinkedIn — главная B2B-платформа мира. Сильный личный бренд открывает двери к партнерствам, инвестициям и крупным клиентам.",
      uz: "LinkedIn — dunyodagi eng kuchli professional tarmoqdir. Kuchli shaxsiy brend sizga yangi mijozlar, investitsiyalar va hamkorliklar keltiradi.",
    },
    content: {
      en: [
        "Positioning yourself as a thought leader starts with consistent, value-first storytelling rather than generic resume bragging.",
        "Engaging genuinely in comment sections of peers drives 3x more profile views than posting alone.",
      ],
      ru: [
        "Позиционирование эксперта начинается с регулярного полезного контента и честных профессиональных инсайтов.",
        "Активное осмысленное комментирование чужих постов приносит в 3 раза больше просмотров профиля, чем просто публикации.",
      ],
      uz: [
        "Ekspert sifatida tanilish har kuni foydali va amaliy bilimlar bilan bo'lishishdan boshlanadi.",
        "Boshqa mutaxassislar postlariga qiziqarli fikr bildirish profil ko'rishlarini 3 barobarga oshiradi.",
      ],
    },
    quote: {
      en: "Your personal brand is what people say about you when you leave the room. Build it with integrity and value.",
      ru: "Личный бренд — это то, что говорят о вас, когда вы выходите из комнаты. Стройте его на реальной пользе.",
      uz: "Shaxsiy brend — siz xonadan chiqqaningizda odamlar siz haqingizda nima deyishidir. Uni halol va foydali bilimlar bilan quring.",
    },
    listIntro: {
      en: "Steps to skyrocket your LinkedIn presence:",
      ru: "Шаги для взрывного роста профиля в LinkedIn:",
      uz: "LinkedIn tarmog'ida tez o'sish uchun asosiy qadamlar:",
    },
    bulletPoints: {
      en: [
        "Optimizing your headline and banner with a distinct value proposition",
        "Posting 3 to 4 times a week using storytelling frameworks",
        "Connecting with 20 relevant decision makers daily",
        "Directing profile visitors to an email newsletter or consultation link",
      ],
      ru: [
        "Оформление шапки профиля с четким позиционированием",
        "Публикация 3-4 полезных постов в неделю",
        "Ежедневное добавление целевых контактов из вашей сферы",
        "Перенаправление трафика на консультации или сайт",
      ],
      uz: [
        "Profil sarlavhasi va bannerida o'z sohangizdagi aniq qiymatni ko'rsatish",
        "Haftasiga 3-4 ta amaliy va qiziqarli postlar e'lon qilish",
        "Har kuni o'z sohangizdagi 20 nafar mutaxassis bilan aloqa bog'lash",
        "Profilga tashrif buyuruvchilarni konsultatsiya yoki saytga yo'naltirish",
      ],
    },
    outro: {
      en: "Consistency compounds in networking: six months of focused sharing will transform your professional career trajectory.",
      ru: "Постоянство дает колоссальный накопительный эффект: полгода регулярного контента преобразят вашу карьеру.",
      uz: "Muntazamlik ulkan natija beradi: 6 oylik faoliyat sizning professional martabangizni butunlay yangi darajaga olib chiqadi.",
    },
    author: {
      name: "Kristin Watson",
      role: {
        en: "PR Director & Brand Strategist",
        ru: "PR-директор и бренд-стратег",
        uz: "PR direktori va brend strategi",
      },
      avatar: "/assets/swiper-img.png",
    },
    tags: ["#linkedin", "#branding", "#networking"],
  },
  {
    id: 7,
    type: { en: "Article", ru: "Статья", uz: "Maqola" },
    typeKey: "Article",
    category: { en: "Development", ru: "Разработка", uz: "Dasturlash" },
    categoryKey: "Development",
    date: {
      en: "July 2, 2020",
      ru: "2 июля 2020",
      uz: "2-iyul, 2020",
    },
    duration: { en: "7 min read", ru: "7 мин чтения", uz: "7 daqiqa o'qish" },
    readTime: {
      en: "7 min read",
      ru: "7 мин чтения",
      uz: "7 daqiqa o'qish",
    },
    actionText: { en: "Read", ru: "Читать", uz: "O'qish" },
    image: "/assets/blog7.png",
    bgColor: "bg-gray-100",
    isWide: false,
    title: {
      en: "Microservices vs Monolith: architectural breakdown for CTOs",
      ru: "Микросервисы против монолита: архитектурный разбор для CTO",
      uz: "Mikroservislar yoki Monolit: CTO lar uchun arxitektura tahlili",
    },
    excerpt: {
      en: "When should a growing engineering organization split a monolith? Trade-offs in deployment speed, network latency, distributed transactions, and DevOps costs.",
      ru: "Когда стоит распиливать монолит? Реальные компромиссы в скорости деплоя, сетевых задержках и расходах на DevOps.",
      uz: "Monolit tizimni qachon mikroservislarga bo'lish kerak? Tezlik, tarmoq xarajatlari va DevOps infratuzilmasi bo'yicha to'liq tahlil.",
    },
    leadParagraph: {
      en: "Microservices have been hyped as the silver bullet for engineering scalability, but premature adoption creates severe organizational overhead.",
      ru: "Микросервисы часто преподносят как универсальное решение, однако их преждевременное внедрение создает огромные сложности для команды.",
      uz: "Mikroservislar ko'pincha universal yechim deb qaraladi, ammo o'rinsiz qo'llash jamoaga jiddiy qiyinchiliklar tug'dirishi mumkin.",
    },
    content: {
      en: [
        "A modular monolith is often the fastest way to achieve product-market fit with small teams. Deployment is straightforward, and database transactions are ACID compliant.",
        "Split into microservices only when organizational boundaries demand independent deployability and domain teams exceed 30+ engineers.",
      ],
      ru: [
        "Модульный монолит часто является лучшим решением для быстрого запуска продукта. Деплой прост, а транзакции БД надежны.",
        "Переход к микросервисам оправдан тогда, когда команды разработки вырастают и требуют независимого деплоя.",
      ],
      uz: [
        "Modulli monolit ko'pincha kichik jamoalar uchun eng tezkor yechim hisoblanadi. Uni yangilash oson va ma'lumotlar bazasi ishonchli ishlaydi.",
        "Mikroservislarga o'tish faqat jamoa 30 dan ortiq dasturchilarga yetganda va mustaqil deploy qilish zarurati tug'ilganda ma'qul.",
      ],
    },
    quote: {
      en: "Don't build a distributed system until you have a distributed team that actually requires it.",
      ru: "Не стройте распределенные системы, пока у вас нет распределенной команды, которой это действительно необходимо.",
      uz: "Taqsimlangan tizimlarni bunga chinakam ehtiyoji bo'lgan jamoangiz bo'lmaguncha qurmang.",
    },
    listIntro: {
      en: "Key criteria for deciding architectural migration:",
      ru: "Критерии выбора между монолитом и микросервисами:",
      uz: "Arxitekturani tanlashda asosiy mezonlar:",
    },
    bulletPoints: {
      en: [
        "Engineering team size and domain team independence",
        "DevOps infrastructure maturity and automated CI/CD capabilities",
        "Performance tolerance for network serialization overhead",
        "Domain boundaries clarity (bounded contexts)",
      ],
      ru: [
        "Размер инженерной команды и автономность отделов",
        "Зрелость инфраструктуры DevOps и автоматизации CI/CD",
        "Допустимость сетевых задержек между сервисами",
        "Четкость границ бизнес-доменов (Bounded Contexts)",
      ],
      uz: [
        "Dasturchilar jamoasi hajmi va bo'limlar mustaqilligi",
        "DevOps infratuzilmasining tayyorgarligi va avtomatlashtirish",
        "Servislararo tarmoq uzilishlariga tizimning bardoshliligi",
        "Biznes sohasining aniq chegaralarga bo'linganligi",
      ],
    },
    outro: {
      en: "Always start clean and modular: refactoring well-designed boundaries is simple, but fixing a distributed spaghetti architecture is agonizing.",
      ru: "Всегда начинайте с чистого модульного кода: выделить правильный сервис легко, а распутать сложную паутину сервисов — мучительно.",
      uz: "Doimo toza modulli arxitekturadan boshlang: yaxshi koddan servis ajratish oson, lekin chigal tizimni to'g'irlash juda qiyin.",
    },
    author: {
      name: "Ralph Edwards",
      role: {
        en: "Chief Systems Architect",
        ru: "Главный системный архитектор",
        uz: "Bosh tizim me'mori",
      },
      avatar: "/assets/swiper-img.png",
    },
    tags: ["#architecture", "#backend", "#cloud"],
  },
  {
    id: 8,
    type: { en: "Video", ru: "Видео", uz: "Video" },
    typeKey: "Video",
    category: { en: "Management", ru: "Менеджмент", uz: "Menejment" },
    categoryKey: "Management",
    date: {
      en: "June 20, 2020",
      ru: "20 июня 2020",
      uz: "20-iyun, 2020",
    },
    duration: { en: "50 min", ru: "50 мин", uz: "50 daqiqa" },
    readTime: {
      en: "50 min watch",
      ru: "50 мин просмотра",
      uz: "50 daqiqa ko'rish",
    },
    actionText: { en: "Watch", ru: "Смотреть", uz: "Ko'rish" },
    image: "/assets/blog8.jpg",
    bgColor: "bg-amber-100",
    isWide: false,
    title: {
      en: "Startup financial runway: how not to burn cash in year one",
      ru: "Финансовый запас стартапа: как не сжечь бюджет в первый год",
      uz: "Startapning moliyaviy zaxirasi: birinchi yilda byudjetni qanday tejash kerak?",
    },
    excerpt: {
      en: "Cash flow modeling, burn rate control, hiring vs outsourcing math, and calculating minimum runway for successful fundraising rounds.",
      ru: "Управление Cash Flow, контроль скорости сжигания денег (Burn Rate), аутсорс против найма и расчет запаса прочности стартапа.",
      uz: "Pul oqimini (Cash Flow) boshqarish, xarajatlar tezligini nazorat qilish va investitsiya jalb qilishgacha bo'lgan moliyaviy reja.",
    },
    leadParagraph: {
      en: "More than 70% of early-stage startups fail because they run out of money before validating their core value proposition.",
      ru: "Более 70% молодых стартапов закрываются из-за того, что у них заканчиваются деньги до подтверждения ценности продукта.",
      uz: "Yosh startaplarning 70% dan ortig'i o'z mahsulotini to'liq tasdiqlashdan oldin puli tugab qolganligi sababli yopiladi.",
    },
    content: {
      en: [
        "Keeping your fixed monthly burn rate minimal until achieving repeatable customer acquisition is the golden rule of startup survival.",
        "Distinguish between vanity spending (expensive offices, premature PR) and value-creating experiments (customer discovery, product iteration).",
      ],
      ru: [
        "Главное правило выживания стартапа — держать фиксированные ежемесячные расходы на минимуме до появления регулярных продаж.",
        "Научитесь отличать бесполезные траты (дорогие офисы, громкий PR) от вложений в проверку гипотез и поиск клиентов.",
      ],
      uz: [
        "Startap yashab qolishining oltin qoidasi — muntazam sotuvlar yo'lga qo'yilguncha oylik xarajatlarni minimal darajada ushlab turishdir.",
        "Qimmat ofislar va ortiqcha xarajatlardan qochib, barcha resursni mijozlarni o'rganish va mahsulotni yaxshilashga yo'naltiring.",
      ],
    },
    quote: {
      en: "Cash is the oxygen of your startup. Never let oxygen drop below six months of operating expenses.",
      ru: "Деньги — это кислород вашего бизнеса. Никогда не допускайте, чтобы запаса оставалось меньше чем на 6 месяцев.",
      uz: "Mablag' — bu sizning startapingiz kislorodidir. Zaxirangiz hech qachon 6 oylik xarajatdan kamayib ketishiga yo'l qo'ymang.",
    },
    listIntro: {
      en: "Smart financial guardrails for early founders:",
      ru: "Финансовые правила для основателей стартапов:",
      uz: "Startap asoschilari uchun muhim moliyaviy qoidalar:",
    },
    bulletPoints: {
      en: [
        "Maintain a minimum 9-month cash runway before scaling",
        "Outsource non-core operations to stay lean and nimble",
        "Review weekly actual vs planned cash flow statements",
        "Negotiate milestone-based contractor contracts",
      ],
      ru: [
        "Поддерживайте финансовый запас минимум на 9 месяцев вперед",
        "Отдавайте непрофильные задачи на аутсорс для гибкости",
        "Еженедельно сверяйте план и факт движения денежных средств",
        "Оплачивайте работу подрядчиков только по факту этапов",
      ],
      uz: [
        "Kompaniya hisobida kamida 9 oylik xarajat zaxirasini saqlash",
        "Moslashuvchan bo'lish uchun asosiy bo'lmagan vazifalarni autsorsga berish",
        "Har hafta pul oqimi rejasini amaldagi holat bilan solishtirish",
        "Pudratchilarga natijaga qarab bosqichma-bosqich to'lov qilish",
      ],
    },
    outro: {
      en: "Disciplined capital stewardship gives founders resilience: survive long enough to find product-market fit.",
      ru: "Финансовая дисциплина дает компании устойчивость: продержитесь достаточно долго, чтобы найти свой рынок.",
      uz: "Moliyaviy intizom biznesingizga mustahkamlik beradi: o'z bozoringizni topguncha chidam bilan harakat qiling.",
    },
    author: {
      name: "Courtney Henry",
      role: {
        en: "CFO & Startup Advisor",
        ru: "Финансовый директор и стартап-советник",
        uz: "Moliyaviy direktor va startap maslahatchisi",
      },
      avatar: "/assets/swiper-img.png",
    },
    tags: ["#finance", "#startup", "#management"],
  },
];


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

const typeTabsData = [
  { key: "All", label: { en: "All", ru: "Все", uz: "Barchasi" } },
  { key: "Article", label: { en: "Articles", ru: "Статьи", uz: "Maqolalar" } },
  { key: "Video", label: { en: "Videos", ru: "Видео", uz: "Videolar" } },
  { key: "Podcast", label: { en: "Podcasts", ru: "Подкасты", uz: "Podkastlar" } },
];

const categoryOptions = [
  { value: "all", label: { en: "All categories", ru: "Все категории", uz: "Barcha toifalar" } },
  { value: "Marketing", label: { en: "Marketing", ru: "Маркетинг", uz: "Marketing" } },
  { value: "Development", label: { en: "Development", ru: "Разработка", uz: "Dasturlash" } },
  { value: "Design", label: { en: "Design", ru: "Дизайн", uz: "Dizayn" } },
  { value: "HR & Recruiting", label: { en: "HR & Recruiting", ru: "HR и рекрутинг", uz: "HR va rekruting" } },
  { value: "Management", label: { en: "Management", ru: "Менеджмент", uz: "Menejment" } },
];

const blogUiTranslations = {
  searchPlaceholder: {
    en: "Search blog...",
    ru: "Поиск по блогу...",
    uz: "Blogdan qidirish...",
  },
  noPostsFound: {
    en: "No posts found",
    ru: "Публикации не найдены",
    uz: "Maqolalar topilmadi",
  },
};

const blogGridContainer = document.getElementById("blog-grid");
const blogTypeTabsContainer = document.getElementById("type-tabs");
const blogCategorySelect = document.getElementById("category-select");
const blogSearchInput = document.getElementById("search-input");
const blogEmptyStateEl = document.getElementById("empty-state");

let selectedType = "All";
let selectedCategory = "all";
let blogSearchQuery = "";

function renderTypeTabs() {
  if (!blogTypeTabsContainer) return;
  const lang = getBlogLang();

  blogTypeTabsContainer.innerHTML = typeTabsData
    .map((tab) => {
      const isActive = selectedType === tab.key;
      const activeClass = isActive
        ? "border-[#FF3F3A] text-[#FF3F3A]"
        : "border-transparent text-[#9A9CA5] hover:text-[#424551]";
      const count =
        tab.key === "All"
          ? blogs.length
          : blogs.filter((b) => b.typeKey === tab.key).length;
      const tabLabel = tab.label[lang] || tab.label.en;

      return `
        <button
          onclick="setType('${tab.key}')"
          class="flex items-center gap-2 pb-3 font-bold border-b-2 transition-colors cursor-pointer text-sm sm:text-base ${activeClass}"
        >
          <span>${tabLabel}</span>
          <span class="text-xs opacity-75">(${count})</span>
        </button>
      `;
    })
    .join("");
}

function updateBlogSelectTexts() {
  const lang = getBlogLang();

  if (blogCategorySelect) {
    blogCategorySelect.innerHTML = categoryOptions
      .map(
        (opt) =>
          `<option value="${opt.value}" ${selectedCategory === opt.value ? "selected" : ""}>${opt.label[lang] || opt.label.en}</option>`,
      )
      .join("");
  }

  if (blogSearchInput) {
    blogSearchInput.placeholder =
      blogUiTranslations.searchPlaceholder[lang] || "Search blog...";
  }

  if (blogEmptyStateEl) {
    const textEl = blogEmptyStateEl.querySelector("p") || blogEmptyStateEl;
    textEl.textContent =
      blogUiTranslations.noPostsFound[lang] || "No posts found";
  }
}

function getBadgeIcon(typeKey) {
  if (typeKey === "Podcast") return "🎙️";
  if (typeKey === "Video") return "▶️";
  return "📄";
}

function renderBlogs() {
  if (!blogGridContainer) return;
  const lang = getBlogLang();
  updateBlogSelectTexts();

  const filtered = blogs.filter((blog) => {
    const matchesType =
      selectedType === "All" || blog.typeKey === selectedType;
    const matchesCategory =
      selectedCategory === "all" || blog.categoryKey === selectedCategory;

    const titleText = getBlogText(blog.title, lang).toLowerCase();
    const excerptText = getBlogText(blog.excerpt, lang).toLowerCase();
    const query = blogSearchQuery.toLowerCase();

    const matchesSearch =
      !blogSearchQuery ||
      titleText.includes(query) ||
      excerptText.includes(query) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(query));

    return matchesType && matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    blogGridContainer.innerHTML = "";
    if (blogEmptyStateEl) blogEmptyStateEl.classList.remove("hidden");
    return;
  }

  if (blogEmptyStateEl) blogEmptyStateEl.classList.add("hidden");

  blogGridContainer.innerHTML = filtered
    .map((blog) => {
      const title = getBlogText(blog.title, lang);
      const excerpt = getBlogText(blog.excerpt, lang);
      const category = getBlogText(blog.category, lang);
      const date = getBlogText(blog.date, lang);
      const duration = getBlogText(blog.duration, lang);
      const actionText = getBlogText(blog.actionText, lang);
      const typeLabel = getBlogText(blog.type, lang);

      const spanClass =
        blog.isWide &&
        selectedType === "All" &&
        selectedCategory === "all" &&
        !blogSearchQuery
          ? "md:col-span-2"
          : "col-span-1";

      return `
        <article 
          onclick="openBlog(${blog.id})"
          class="${spanClass} group cursor-pointer flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 "
        >
          <!-- Image Container -->
          <div class="relative h-[220px] sm:h-[260px] rounded-lg overflow-hidden ${blog.bgColor} mb-4">
            <img 
              src="${blog.image}" 
              alt="${title}" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <!-- Top Left Type Badge -->
            <span class="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-semibold text-[#424551] flex items-center gap-1.5 shadow-sm">
              <span>${getBadgeIcon(blog.typeKey)}</span>
              <span>${typeLabel}</span>
            </span>
          </div>

          <!-- Meta Info -->
          <div class="flex flex-wrap items-center gap-2 px-4 text-xs text-[#787A80] mb-2 font-medium">
            <span class="font-bold text-[#FF3F3A]">${category}</span>
            <span>|</span>
            <span>📅 ${date}</span>
            ${duration ? `<span>|</span><span>⏱️ ${duration}</span>` : ""}
          </div>

          <!-- Title -->
          <h2 class="text-lg px-4 sm:text-xl font-bold text-[#1E212C] group-hover:text-[#FF3F3A] transition-colors mb-2 leading-snug">
            ${title}
          </h2>

          <!-- Excerpt -->
          <p class="text-sm px-4 text-[#424551] leading-relaxed mb-4 line-clamp-3">
            ${excerpt}
          </p>

          <!-- Action Link -->
          <div class="p-4 mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#1E212C] group-hover:text-[#FF3F3A] transition-colors pt-2">
            <span>${actionText}</span>
            <span class="text-[#FF3F3A] text-lg leading-none">→</span>
          </div>
        </article>
      `;
    })
    .join("");
}

window.setType = function (type) {
  selectedType = type;
  renderTypeTabs();
  renderBlogs();
};

if (blogCategorySelect) {
  blogCategorySelect.addEventListener("change", (e) => {
    selectedCategory = e.target.value;
    renderBlogs();
  });
}

if (blogSearchInput) {
  blogSearchInput.addEventListener("input", (e) => {
    blogSearchQuery = e.target.value.trim();
    renderBlogs();
  });
}

function openBlog(id) {
  window.location.href = `blogDetail.html?id=${id}`;
}

window.addEventListener("languageChanged", () => {
  renderTypeTabs();
  renderBlogs();
});

document.addEventListener("DOMContentLoaded", () => {
  renderTypeTabs();
  renderBlogs();
});

renderTypeTabs();
renderBlogs();
