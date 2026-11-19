const courses = [
  {
    id: 1,
    title: "The Ultimate Google Ads Training Course",
    category: "Marketing",
    categoryBg: "bg-emerald-100 text-emerald-700",
    image: '/assets/dss.png',
    about:
      "Google Ads bo'yicha noldan boshlab professional darajagacha bo'lgan to'liq kurs. Reklama kampaniyalarini to'g'ri sozlash, byudjetni optimizatsiya qilish va mijozlaroqimini ko'paytirish sirlarini o'rganing.",
    dates: "Sept 10 – Nov 15",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "2 months – 10 lessons",
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$100",
    pricePerMonth: "$100 per month",
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "Google Ads interfeysi va asosiy instrumentlar bilan ishlash",
      "Qidiruv tarmog'ida samarali reklama kampaniyalarini tuzish",
      "Budjetni to'g'ri taqsimlash va CPC narxini pasaytirish",
      "Retargeting va tahlil vositalarini ulash",
    ],
    curator: {
      name: "Jerome Bell",
      role: "Senior Marketing Expert & PPC Specialist",
      image: "/assets/curator-image.png",
      rate: "4.8 rate",
      coursesCount: "3 courses",
      studentsCount: "420 students",
      bio: "Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat.",
    },
    forWhom: [
      "Marketing mutaxassislari va SMM menejerlar",
      "O'z biznesini yurizuvchi tadbirkorlar va startapchilar",
      "Kontekstli reklamani noldan o'rganmoqchi bo'lganlar",
      "Mijozlar oqimini oshirishni istagan frilanserlar",
    ],
  },
  {
    id: 2,
    title: "Product Management Fundamentals",
    category: "Management",
    categoryBg: "bg-blue-100 text-blue-700",
    image: '/assets/dss1.png',
    about:
      "Mahsulot boshqaruvi asoslari, strategiya tuzish va mijozlar ehtiyojlarini o'rganish bo'yicha mukammal qo'llanma. Raqamli mahsulotlarni yaratish va bozorga chiqarish jarayonlarini o'zlashtiring.",
    dates: "Oct 1 – Dec 1",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "2 months – 8 lessons",
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$480",
    pricePerMonth: "$240 per month",
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "Product lifecycle va strategik rejalashtirish",
      "MVP (Minimum Viable Product) ishlab chiqish",
      "Foydalanuvchilar fikrini o'rganish (CustDev)",
      "Agile va Scrum metodologiyalarini qo'llash",
    ],
    curator: {
      name: "Marvin McKinney",
      role: "Lead Product Manager in Tech Corp",
      image: "/assets/curator-image.png",
      rate: "4.9 rate",
      coursesCount: "5 courses",
      studentsCount: "610 students",
      bio: "Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio.",
    },
    forWhom: [
      "Boshlang'ich va o'rta darajadagi Product menejerlar",
      "Loyihani boshqarishga qiziquvchi mutaxassislar",
      "O'z mahsulotini yaratmoqchi bo'lgan IT tadbirkorlar",
    ],
  },
  {
    id: 3,
    title: "HR Management and Analytics",
    category: "HR & Recruiting",
    categoryBg: "bg-orange-100 text-orange-700",
    image: '/assets/dss.png',
    about:
      "Kadrlar bo'limini boshqarish va HR analitika ko'rsatkichlarini hisoblashni o'rganing. Jamoada sog'lom muhitni shakllantirish va motivatsiya tizimini qurish sirlari.",
    dates: "Sept 15 – Nov 10",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "2 months – 7 lessons",
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$200",
    pricePerMonth: "$100 per month",
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "Xodimlarni tanlab olish va professional intervyu texnikalari",
      "HR metrikalari va analitika hisob-kitoblari",
      "Korporativ madaniyat va jamoani birlashtirish",
      "KPI va samaradorlikni baholash tizimlari",
    ],
    curator: {
      name: "Leslie Alexander Li",
      role: "Head of HR Department",
      image: "/assets/curator-image.png",
      rate: "4.7 rate",
      coursesCount: "2 courses",
      studentsCount: "290 students",
      bio: "Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam.",
    },
    forWhom: [
      "HR menejerlar va rekruterlar",
      "Kompaniya rahbarlari va bo'lim boshliqlari",
      "Kadrlar siyosatini o'rganishni istaganlar",
    ],
  },
  {
    id: 4,
    title: "Brand Management & PR Communications",
    category: "Marketing",
    image: '/assets/dss1.png',
    categoryBg: "bg-emerald-100 text-emerald-700",
    about:
      "Brendni bozorda tanitish, jamoatchilik bilan aloqalar (PR) va inqirozli vaziyatlarda ishlash strategiyalari. O'z brendingizni muvaffaqiyatli quring.",
    dates: "Oct 5 – Dec 5",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "2 months – 8 lessons",
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$530",
    pricePerMonth: "$265 per month",
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "Brend identiteti va platformasini yaratish",
      "OAV va influencerlar bilan ishlash strategiyalari",
      "Inqirozli PR va obro'ni saqlab qolish",
      "Media reja va PR kampaniyalarni tuzish",
    ],
    curator: {
      name: "Kristin Watson",
      role: "PR Director & Brand Strategist",
      image: "/assets/curator-image.png",
      rate: "4.9 rate",
      coursesCount: "4 courses",
      studentsCount: "510 students",
      bio: "Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo.",
    },
    forWhom: [
      "PR mutaxassislar va marketing direktorlar",
      "Brend egalari va tadbirkorlar",
      "Media sohasida o'sishni istaganlar",
    ],
  },
  {
    id: 5,
    title: "Graphic Design Basic",
    category: "Design",
    categoryBg: "bg-pink-100 text-pink-700",
    image: '/assets/dss.png',
    about:
      "Grafik dizayn qoidalari, rangshunoslik, kompozitsiya va asosiy dasturlarda professional ishlashni noldan o'rganing.",
    dates: "Sept 1 – Nov 1",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "2 months – 9 lessons",
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$500",
    pricePerMonth: "$250 per month",
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "Adobe Photoshop va Illustrator dasturlari",
      "Rangshunoslik va tipografika asoslari",
      "Logotip va firmaviy uslub yaratish",
      "Professional portfolio tayyorlash",
    ],
    curator: {
      name: "Guy Hawkins",
      role: "Senior Graphic Designer",
      image: "/assets/curator-image.png",
      rate: "4.8 rate",
      coursesCount: "6 courses",
      studentsCount: "780 students",
      bio: "Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra.",
    },
    forWhom: [
      "Dizayn sohasiga endi kirib kelayotganlar",
      "O'z ijodiy ko'nikmalarini oshirmoqchi bo'lganlar",
      "SMM dizaynni o'rganmoqchi bo'lganlar",
    ],
  },
  {
    id: 6,
    title: "Business Development Management",
    category: "Management",
    categoryBg: "bg-blue-100 text-blue-700",
    image: '/assets/dss.png',
    about:
      "Biznesni kengaytirish, yangi bozorlarga chiqish va savdo hajmini oshirish usullari. Kompaniyaning uzoq muddatli o'sish strategiyasini tuzing.",
    dates: "Oct 10 – Dec 10",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "2 months – 8 lessons",
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$400",
    pricePerMonth: "$200 per month",
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "Bozor tahlili va raqobat muhitini o'rganish",
      "B2B savdo strategiyalari va hamkorliklar",
      "Moliyaviy o'sish rejalari va modellashtirish",
      "Yangi savdo kanallarini ochish",
    ],
    curator: {
      name: "Dianne Russell",
      role: "Business Development Executive",
     image: "/assets/curator-image.png",
      rate: "4.9 rate",
      coursesCount: "3 courses",
      studentsCount: "340 students",
      bio: "Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo.",
    },
    forWhom: [
      "Biznesni rivojlantirish menejerlari",
      "Tadbirkorlar va kompaniya asoschilari",
      "Savdo bo'limi rahbarlari",
    ],
  },
  {
    id: 7,
    title: "Highload Software Architecture",
    image: '/assets/dss1.png',
    category: "Development",
    categoryBg: "bg-purple-100 text-purple-700",
    about:
      "Yuqori yuklamalarga bardosh beruvchi dasturiy ta'minot arxitekturasini loyihalash. Millionlab foydalanuvchilar uchun tizimlar yarating.",
    dates: "Sept 20 – Nov 20",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "3 months – 12 lessons",
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$600",
    pricePerMonth: "$200 per month",
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "Mikroservislar arxitekturasi va tamoyillari",
      "Redis va kesh siyosatini to'g'ri qo'llash",
      "Ma'lumotlar bazasini optimizatsiya qilish va sharding",
      "Load balancing va xavfsizlikni ta'minlash",
    ],
    curator: {
      name: "Brooklyn Simmons",
      role: "Principal Software Architect",
      image: "/assets/curator-image.png",
      rate: "5.0 rate",
      coursesCount: "5 courses",
      studentsCount: "890 students",
      bio: "Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante.",
    },
    forWhom: [
      "Tajribali Backend dasturchilar",
      "Software injenerlar va Team Leadlar",
      "Katta tizimlar arxitekturasiga qiziquvchilar",
    ],
  },
  {
    id: 8,
    title: "Human Resources – Selection and Recruitment",
    category: "HR & Recruiting",
    categoryBg: "bg-orange-100 text-orange-700",
    about:
      "Professional darajada xodimlarni qidirish, saralash va tanlab olish jarayonlari. IT va boshqa sohalar uchun rekruting sirlari.",
    dates: "Oct 1 – Nov 30",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "2 months – 6 lessons",
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$150",
    pricePerMonth: "$75 per month",
    image: '/assets/dss.png',
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "Effektiv vakansiya matnlarini tuzish",
      "Nomzodlarni baholash va intervyu texnikalari",
      "Xodimlarni kompaniyaga moslashtirish (Onboarding)",
      "Headhunting va sourcing usullari",
    ],
    curator: {
      name: "Kathryn Murphy",
      role: "Lead IT Recruiter",
      image: "/assets/curator-image.png",
      rate: "4.7 rate",
      coursesCount: "2 courses",
      studentsCount: "210 students",
      bio: "Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio.",
    },
    forWhom: [
      "Boshlang'ich rekruterlar",
      "HR sohasiga o'tmoqchi bo'lganlar",
      "O'z jamoasiga mustaqil xodim yig'moqchi bo'lganlar",
    ],
  },
  {
    id: 9,
    title: "User Experience. Human-centered Design",
    category: "Design",
    categoryBg: "bg-pink-100 text-pink-700",
    image: '/assets/dss.png',
    about:
      "Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at elementum. Tellus maecenas libero est tempus sit cras at malesuada diam.",
    dates: "Sept 7 – Nov 2",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "2 months – 8 lessons",
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$240",
    pricePerMonth: "$120 per month",
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "A fermentum in morbi pretium aliquam adipiscing donec tempus.",
      "Vulputate placerat amet pulvinar lorem nisl.",
      "Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.",
      "Etiam duis lobortis in fames ultrices commodo nibh.",
    ],
    curator: {
      name: "Cody Fisher",
      role: "Senior UX designer in IT Product Company",
      image: "/assets/curator-image.png",
      rate: "4.9 rate",
      coursesCount: "4 courses",
      studentsCount: "350 students",
      bio: "Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio.",
    },
    forWhom: [
      "Specialists with more than 1 year of active work experience",
      "Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces",
      "Professional designers who want to feel more confident in UX",
      "Specialists who would like to structure their knowledge, fill in the gaps",
    ],
  },
  {
    id: 10,
    title: "Advanced Digital Marketing Masterclass",
    category: "Marketing",
    categoryBg: "bg-emerald-100 text-emerald-700",
    image: '/assets/dss.png',
    about:
      "SMM, SEO va target reklama vositalarini mukammal darajada birlashtirish. Marketing jarayonlarini to'liq avtomatlashtirish.",
    dates: "Oct 15 – Dec 15",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "2 months – 10 lessons",
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$450",
    pricePerMonth: "$225 per month",
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "SEO optimizatsiya va qidiruv tizimlarida ko'tarilish",
      "Kross-kanal SMM strategiyalari",
      "Skvoznaya analitika va ROMI hisoblash",
      "Email va CRM marketingni sozlash",
    ],
    curator: {
      name: "Wade Warren",
      role: "Digital Marketing Director",
      image: "/assets/curator-image.png",
      rate: "4.8 rate",
      coursesCount: "3 courses",
      studentsCount: "480 students",
      bio: "Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo.",
    },
    forWhom: [
      "Tajribali marketing mutaxassislari",
      "Agentlik egalari va frilanserlar",
      "Biznesini raqamli muhitda kengaytirmoqchi bo'lganlar",
    ],
  },
  {
    id: 11,
    title: "Fullstack Web Development",
    category: "Development",
    categoryBg: "bg-purple-100 text-purple-700",
    image: '/assets/dss.png',
    about:
      "Frontend va Backend texnologiyalarini noldan o'rganib, to'liq ishlaydigan veb-ilovalar yaratishni o'zlashtiring.",
    dates: "Sept 1 – Dec 1",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "3 months – 15 lessons",
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$750",
    pricePerMonth: "$250 per month",
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "React va Next.js yordamida zamonaviy interfeyslar",
      "Node.js va Express yordamida server qismini yozish",
      "MongoDB va PostgreSQL ma'lumotlar bazasi",
      "Vercel va Docker orqali loyihani deploy qilish",
    ],
    curator: {
      name: "Devon Lane",
      role: "Senior Fullstack Engineer",
      image: "/assets/curator-image.png",
      rate: "4.9 rate",
      coursesCount: "7 courses",
      studentsCount: "1200 students",
      bio: "Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante.",
    },
    forWhom: [
      "Dasturlashni noldan boshlamoqchi bo'lganlar",
      "Frontend dasturchilar uchun backend'ni o'rganish",
      "Web dasturlash bo'yicha to'liq bilim olmoqchi bo'lganlar",
    ],
  },
  {
    id: 12,
    title: "Financial Analysis for Managers",
    category: "Management",
    categoryBg: "bg-blue-100 text-blue-700",
    image: '/assets/dss.png',
    about:
      "Menejerlar uchun moliyaviy hisobotlarni o'qish, byudjet tuzish va xarajatlarni boshqarish. To'g'ri moliyaviy qarorlar qabul qiling.",
    dates: "Oct 1 – Nov 30",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "2 months – 7 lessons",
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$320",
    pricePerMonth: "$160 per month",
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "P&L va Balance Sheet hisobotlarini tahlil qilish",
      "Kompaniya byudjetini rejalashtirish",
      "Rentabellik va xarajatlarni optimizatsiya qilish",
      "Investitsion loyihalarni baholash",
    ],
    curator: {
      name: "Bessie Cooper",
      role: "Financial Advisor & CFO",
      image: "/assets/curator-image.png",
      rate: "4.8 rate",
      coursesCount: "2 courses",
      studentsCount: "310 students",
      bio: "Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio.",
    },
    forWhom: [
      "Moliya sohasida ishlamaydigan rahbarlar",
      "Bo'lim boshliqlari va menejerlar",
      "O'z biznesining moliya oqimini tushunmoqchi bo'lganlar",
    ],
  },
  {
    id: 13,
    title: "UI/UX Mobile App Design",
    category: "Design",
    categoryBg: "bg-pink-100 text-pink-700",
    image: '/assets/dss.png',
    about:
      "Mobil ilovalar uchun zamonaviy va qulay interfeys dizaynlarini yaratish. iOS va Android uchun maxsus dizayn qoidalari.",
    dates: "Sept 10 – Nov 10",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "2 months – 8 lessons",
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$350",
    pricePerMonth: "$175 per month",
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "iOS va Android dizayn gidlari (Guidelines)",
      "Figma'da interaktiv prototiplar yasash",
      "Design System yaratish va boshqarish",
      "Dizaynni dasturchilarga to'g'ri topshirish",
    ],
    curator: {
      name: "Jacob Jones",
      role: "Lead Mobile Product Designer",
      image: "/assets/curator-image.png",
      rate: "4.9 rate",
      coursesCount: "4 courses",
      studentsCount: "530 students",
      bio: "Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo.",
    },
    forWhom: [
      "Mobil ilova dizayniga qiziquvchilar",
      "Web dizaynerlar uchun mobile yo'nalish",
      "UI/UX ko'nikmalarini oshirmoqchi bo'lganlar",
    ],
  },
  {
    id: 14,
    title: "Content Marketing Strategy",
    category: "Marketing",
    categoryBg: "bg-emerald-100 text-emerald-700",
    about:
      "Brend uchun foydali va qiziqarli kontent rejasini tuzish, matn va ssenariylar orqali mijozlarni jalb qilish sirlari.",
    dates: "Oct 5 – Nov 30",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "2 months – 6 lessons",
    image: '/assets/dss.png',
    durationDesc:
    
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$210",
    pricePerMonth: "$105 per month",
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "Kopirayting va Storytelling sirlari",
      "Maqsadli auditoriya uchun kontent turlari",
      "Kontentni tarqatish kanallari va taqvim",
      "Natijalarni o'lchash va tahlil qilish",
    ],
    curator: {
      name: "Annette Black",
      role: "Content Strategy Manager",
      image: "/assets/curator-image.png",
      rate: "4.7 rate",
      coursesCount: "3 courses",
      studentsCount: "390 students",
      bio: "Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam.",
    },
    forWhom: [
      "Copywriter va SMM mutaxassislar",
      "Kontent menejerlar",
      "O'z sahifasini yurituvchi blogerlar",
    ],
  },
  {
    id: 15,
    title: "Agile Project Management",
    category: "Management",
    categoryBg: "bg-blue-100 text-blue-700",
    about:
      "Scrum va Kanban metodologiyalari yordamida jamoa ishini samarali boshqaring. Loyihalarni o'z vaqtida va sifatli topshiring.",
    dates: "Sept 15 – Nov 15",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "2 months – 7 lessons",
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$390",
    pricePerMonth: "$195 per month",
    image: '/assets/dss.png',
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "Scrum master rollari va marosimlari",
      "Jira va Trello dasturlarida ishlash",
      "Backlogni boshqarish va baholash",
      "Sprint rejalashtirish va retro",
    ],
    curator: {
      name: "Floyd Miles",
      role: "Agile Coach & Scrum Master",
      image: "/assets/curator-image.png",
      rate: "4.9 rate",
      coursesCount: "4 courses",
      studentsCount: "620 students",
      bio: "Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis.",
    },
    forWhom: [
      "Project menejerlar",
      "IT jamoa rahbarlari va team leadlar",
      "Agile metodologiyasini o'rganmoqchi bo'lganlar",
    ],
  },
  {
    id: 16,
    title: "Python for Data Science",
    category: "Development",
    categoryBg: "bg-purple-100 text-purple-700",
    about:
      "Python yordamida katta hajmdagi ma'lumotlarni tahlil qilish, tozalash va bashorat qilish modellarini qurishni o'rganing.",
    dates: "Oct 1 – Dec 20",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "3 months – 12 lessons",
    image: '/assets/dss.png',
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$490",
    pricePerMonth: "$163 per month",
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "Pandas va NumPy kutubxonalari bilan ishlash",
      "Ma'lumotlarni vizualizatsiya qilish (Matplotlib, Seaborn)",
      "Statistik tahlil asoslari",
      "Machine learning asoslariga kirish",
    ],
    curator: {
      name: "Ronald Richards",
      role: "Data Scientist & ML Engineer",
      image: "/assets/curator-image.png",
      rate: "4.9 rate",
      coursesCount: "5 courses",
      studentsCount: "740 students",
      bio: "Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo.",
    },
    forWhom: [
      "Data Analyst bo'lishni istaganlar",
      "Python dasturlash tilini biladigan va ma'lumotlar bilan ishlaydiganlar",
      "Analitika sohasiga qiziquvchilar",
    ],
  },
  {
    id: 17,
    title: "Executive Leadership Program",
    category: "Management",
    image: '/assets/dss.png',
    categoryBg: "bg-blue-100 text-blue-700",
    about:
      "Rahbarlar uchun liderlik sifatlarini rivojlantirish, strategik fikrlash va jamoani boshqarish sirlari.",
    dates: "Sept 20 – Nov 30",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "2 months – 8 lessons",
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$650",
    pricePerMonth: "$325 per month",
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "Strategik fikrlash va qaror qabul qilish",
      "Liderlik uslublari va jamoani ilhomlantirish",
      "Inqirozli vaziyatlarda boshqaruv",
      "Muzokaralar olib borish san'ati",
    ],
    curator: {
      name: "Courtney Henry",
      role: "Executive Coach & CEO Mentor",
      image: "/assets/curator-image.png",
      rate: "5.0 rate",
      coursesCount: "3 courses",
      studentsCount: "410 students",
      bio: "Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet.",
    },
    forWhom: [
      "Kompaniya rahbarlari va direktorlar",
      "Top-menejerlar",
      "O'z liderlik qobiliyatini oshirmoqchi bo'lganlar",
    ],
  },
  {
    id: 18,
    title: "Motion Design & Animation",
    category: "Design",
    categoryBg: "bg-pink-100 text-pink-700",
    image: '/assets/dss.png',
    about:
      "After Effects yordamida harakatli dizayn va animatsiyalar yaratishni o'rganing. Vizual kontentingizni jonlantiring.",
    dates: "Oct 10 – Dec 10",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "2 months – 8 lessons",
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$420",
    pricePerMonth: "$210 per month",
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "After Effects dasturi asoslari va interfeysi",
      "Kinematik harakatlar va animatsiya qonunlari",
      "2D banner va reklamalar yasash",
      "Video montaj va post-produksion",
    ],
    curator: {
      name: "Darrell Steward",
      role: "Motion Designer & Animator",
      image: "/assets/curator-image.png",
      rate: "4.8 rate",
      coursesCount: "4 courses",
      studentsCount: "460 students",
      bio: "Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis.",
    },
    forWhom: [
      "Dizaynerlar uchun motion yo'nalishi",
      "Video montajchilar va animatorlar",
      "Reklama roliklarini yaratishni istaganlar",
    ],
  },
  {
    id: 19,
    title: "Talent Acquisition and Sourcing",
    category: "HR & Recruiting",
    categoryBg: "bg-orange-100 text-orange-700",
    image: '/assets/dss.png',
    about:
      "IT va boshqa murakkab sohalar uchun mutaxassislarni topish (Sourcing) zamonaviy usullari va qidirish texnikalari.",
    dates: "Sept 15 – Nov 15",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "2 months – 6 lessons",
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$280",
    pricePerMonth: "$140 per month",
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "Boolean search va X-ray qidirish texnikasi",
      "LinkedIn orqali nomzod topish va yozish",
      "IT sourcing strategiyalari",
      "Kandidatlar bilan aloqa o'rnatish (Outreach)",
    ],
    curator: {
      name: "Theresa Webb",
      role: "Global Talent Sourcer",
      image: "/assets/curator-image.png",
      rate: "4.7 rate",
      coursesCount: "2 courses",
      studentsCount: "190 students",
      bio: "Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio.",
    },
    forWhom: [
      "Sourcer va rekruterlar",
      "IT kompaniyalarda ishlovchi HR mutaxassislar",
      "Tezda xodim topish sirini o'rganmoqchi bo'lganlar",
    ],
  },
  {
    id: 20,
    title: "Cyber Security Fundamentals",
    category: "Development",
    categoryBg: "bg-purple-100 text-purple-700",
    image: '/assets/dss1.png',
    about:
      "Axborot xavfsizligi asoslari, tarmoq himoyasi va kiberxurujlarning oldini olish usullarini o'rganing. Ma'lumotlaringizni himoya qiling.",
    dates: "Oct 1 – Dec 1",
    datesDesc: "Metus turpis sit lorem lacus, in elit tellus lacus.",
    duration: "2 months – 9 lessons",
    durationDesc:
      "Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.",
    price: "$550",
    pricePerMonth: "$275 per month",
    priceDesc:
      "Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.",
    learn: [
      "Tarmoq xavfsizligi va protokollar",
      "Kriptografiya va shifrlash asoslari",
      "Zaifliklarni aniqlash (Penetration testing)",
      "Xavfsizlik siyosatini ishlab chiqish",
    ],
    curator: {
      name: "Albert Flores",
      role: "Cyber Security Specialist",
      image: "/assets/curator-image.png",
      rate: "4.9 rate",
      coursesCount: "3 courses",
      studentsCount: "580 students",
      bio: "Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo.",
    },
    forWhom: [
      "IT mutaxassislari va sistem administratsiyachilar",
      "Axborot xavfsizligiga qiziquvchi dasturchilar",
      "Kiberxavfsizlikni noldan boshlamoqchi bo'lganlar",
    ],
  },
];

      const gridContainer = document.getElementById("courses");
      const filterContainer = document.getElementById("filter-buttons");
      const searchInput = document.getElementById("search-input");
      const noResult = document.getElementById("no-results");

      let currentCategory = "All";
      let searchQuery = "";

      const categories = [
        "All",
        "Marketing",
        "Management",
        "HR & Recruiting",
        "Design",
        "Development",
      ];

      function renderFilters() {
        filterContainer.innerHTML = categories
          .map((cat) => {
            const count =
              cat === "All"
                ? courses.length
                : courses.filter((c) => c.category === cat).length;
            const isActive = currentCategory === cat;

            const activeClasses = isActive
              ? "border-red-500 text-red-500 font-semibold"
              : "border-transparent text-gray-500 hover:text-gray-800 font-medium";

            return `
          <button 
            onclick="setCategory('${cat}')" 
            class="px-5 py-2.5 rounded-xl border bg-white shadow-sm transition-all text-sm flex items-center gap-1.5 ${activeClasses}"
          >
            <span>${cat}</span>
            <span class="text-xs opacity-70">${count}</span>
          </button>
        `;
          })
          .join("");
      }

      function renderCourses() {
        const filteredCourses = courses.filter((course) => {
          const matchesCategory =
            currentCategory === "All" || course.category === currentCategory;
          const matchesSearch =
            course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.author.toLowerCase().includes(searchQuery.toLowerCase());
          return matchesCategory && matchesSearch;
        });

        if (filteredCourses.length === 0) {
          gridContainer.innerHTML = "";
          noResult.classList.remove("hidden");
          return;
        }

        noResult.classList.add("hidden");

        gridContainer.innerHTML = filteredCourses
          .map(
            (course) => `
        <div 
          onclick="goToDetail(${course.id})" 
          class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col group border border-gray-100"
        >
          <div class="relative overflow-hidden bg-amber-400 h-52">
            <img 
              src="${course.image}" 
              alt="${course.title}" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="p-6 flex flex-col flex-grow">
            <div>
              <span class="inline-block text-xs font-semibold px-3 py-1 rounded-md bg-emerald-300 text-[#fff] ${course.categoryBg}">
                ${course.category}
              </span>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mt-3 mb-4 leading-snug group-hover:text-amber-600 transition-colors">
              ${course.title}
            </h3>
            <div class="mt-auto pt-4 border-t border-gray-100 text-sm font-medium">
              <span class="text-red-500 font-bold text-base mr-1">${course.price}</span>
              <span class="text-gray-400">| by ${course.author}</span>
            </div>
          </div>
        </div>
      `,
          )
          .join("");
      }

      window.setCategory = function (cat) {
        currentCategory = cat;
        renderFilters();
        renderCourses();
      };

      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        renderCourses();
      });

      function goToDetail(id) {
        window.location.href = `course-detail.html?id=${id}`;
      }

      renderFilters();
      renderCourses();
  