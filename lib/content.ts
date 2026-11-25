export type Lang = "en" | "ar";

export const SITE = {
  name: "Donia Haroun",
  phone: "01141654852",
  whatsapp: "https://wa.me/201141654852",
  instagram: "https://www.instagram.com/doniaWebSite/",
  email: "doniaharoun91@gmail.com",
};

/** Language-independent shop data. Text for each shop lives in `dict[lang].projects` in the same order. */
export type Shop = {
  id: string;
  name: string;
  url: string;
  /** awning stripe colours, sign accent */
  a: string;
  b: string;
  /** sign background / text */
  bg: string;
  fg: string;
  signClass: string;
};

export const shops: Shop[] = [
  {
    id: "karam",
    name: "Karam El Sham",
    url: "https://doniaharoun91-cmyk.github.io/LAVORA/",
    a: "#c8372d",
    b: "#f1e3c8",
    bg: "#2b100d",
    fg: "#f6d9a0",
    signClass: "sign-serif",
  },
  {
    id: "noir",
    name: "NOIR Café",
    url: "https://doniaharoun91-cmyk.github.io/my-coffee-/",
    a: "#8a5a3b",
    b: "#e9d8c0",
    bg: "#1a1210",
    fg: "#e9d8c0",
    signClass: "sign-wide",
  },
  {
    id: "wika",
    name: "WIKA Accessories",
    url: "https://doniaharoun91-cmyk.github.io/-wika..-accessories/",
    a: "#d6447a",
    b: "#fbd6e3",
    bg: "#2a0f1b",
    fg: "#ffd3e2",
    signClass: "sign-heavy",
  },
  {
    id: "chronolux",
    name: "ChronoLux",
    url: "https://doniaharoun91-cmyk.github.io/chronolux-luxury-watch-/",
    a: "#c9a24a",
    b: "#13243b",
    bg: "#0c1828",
    fg: "#e6c777",
    signClass: "sign-serif-caps",
  },
  {
    id: "luxora",
    name: "LUXORA Furniture",
    url: "https://doniaharoun91-cmyk.github.io/Foundation-Exhibition-/",
    a: "#7d9a7a",
    b: "#e7e0d2",
    bg: "#14201a",
    fg: "#dfe8d6",
    signClass: "sign-wide",
  },
  {
    id: "extreme",
    name: "EXTREME GYM",
    url: "https://tinyurl.com/extremegym-Google",
    a: "#f2b705",
    b: "#0b0b0b",
    bg: "#0b0b0b",
    fg: "#f2b705",
    signClass: "sign-heavy-caps",
  },
  {
    id: "fox",
    name: "FOX STORE",
    url: "https://doniaharoun91-cmyk.github.io/fox-Store-..-/",
    a: "#ff6a1a",
    b: "#1e2a3a",
    bg: "#101822",
    fg: "#ff9a5c",
    signClass: "sign-heavy",
  },
];

type ProjectText = { kind: string; desc: string; tags: string[] };

const en = {
  meta: {
    title: "Donia Haroun | Web Developer",
    description:
      "Donia Haroun builds fast, mobile-first websites in Arabic and English for restaurants, cafés, stores and gyms. See her work and get in touch.",
  },
  ui: {
    skip: "Skip to content",
    langBtn: "عربي",
    langLabel: "Switch the site to Arabic",
    toDark: "Dark mode",
    toLight: "Light mode",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    home: "Donia Haroun, home",
  },
  nav: {
    about: "About",
    work: "Work",
    services: "Services",
    contact: "Contact",
  },
  hero: {
    status: "Open for new projects",
    title: "Websites that bring customers through your door.",
    lead: "I'm Donia Haroun. I design and build fast, mobile-first websites in Arabic and English for restaurants, cafés, stores and gyms.",
    ctaWork: "View my work",
    ctaTalk: "Message me on WhatsApp",
  },
  about: {
    title: "Design, function and the small details.",
    p1: "I'm a web developer who builds websites for businesses and personal brands. I focus on clear layouts, mobile-friendly pages and designs that make it easy for visitors to take action.",
    p2: "I keep learning and refining my skills, looking for ways to make every project clearer, faster and more useful.",
    skillsTitle: "What I work with",
    groups: [
      { label: "Build", items: ["HTML5", "CSS3", "JavaScript", "Next.js"] },
      { label: "Design", items: ["Responsive UI", "UI / UX", "E-commerce"] },
      { label: "Deliver", items: ["GitHub Pages", "Arabic and English"] },
    ],
  },
  work: {
    title: "Projects I've built",
    lead: "Seven websites for seven kinds of business. Hover a preview to scroll through the page, or tap a card to open the live site.",
    open: "Open live site",
    openIn: "Opens in a new tab",
  },
  services: {
    title: "Services",
    lead: "Simple, professional web solutions built around your goals.",
    items: [
      {
        title: "Business websites",
        text: "Professional sites that introduce your business and make it easy for customers to reach you.",
      },
      {
        title: "Landing pages and stores",
        text: "Focused pages and online storefronts for products, services and campaigns.",
      },
      {
        title: "Responsive design",
        text: "Websites that work smoothly on phones, tablets and desktop screens.",
      },
    ],
  },
  contact: {
    title: "Have a project in mind?",
    lead: "Tell me about your business, store or personal brand. I'll reply on WhatsApp.",
    name: "Your name",
    message: "What do you need?",
    messagePh: "A website for my café, a store for my products…",
    send: "Send on WhatsApp",
    note: "This opens WhatsApp with your message ready to send.",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    email: "Email",
    template: "Hello Donia, I'm {name}.\n{message}",
  },
  footer: { rights: "Donia Haroun. Designed and built with care.", top: "Back to top" },
  projects: [
    {
      kind: "Restaurant",
      desc: "A restaurant site that presents the brand, menu, offers and branches, with an online ordering flow.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      kind: "Café",
      desc: "A specialty coffee site with a warm look, menu browsing and product categories.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      kind: "Online store",
      desc: "An accessories storefront built around product presentation, bilingual content and an easy shopping path.",
      tags: ["E-commerce", "Arabic / English", "Product UI"],
    },
    {
      kind: "Luxury watches",
      desc: "A watch magazine and showcase with iconic timepieces, brand stories and reviews in an editorial layout.",
      tags: ["Showcase", "Responsive", "Editorial"],
    },
    {
      kind: "Furniture showroom",
      desc: "A showroom with collections, category browsing, a shopping cart and WhatsApp inquiries.",
      tags: ["Gallery", "Cart", "WhatsApp"],
    },
    {
      kind: "Gym",
      desc: "A gym site covering memberships, training schedules, facilities and payment options, in black and gold.",
      tags: ["Memberships", "Schedules", "Responsive"],
    },
    {
      kind: "Tech retail",
      desc: "A site for mobile and computer services that presents products and services clearly.",
      tags: ["Retail", "Services", "Responsive"],
    },
  ] as ProjectText[],
};

export type Dict = typeof en;

const ar: Dict = {
  meta: {
    title: "دنيا هارون | مطوّرة ويب",
    description:
      "دنيا هارون تبني مواقع سريعة تناسب الموبايل بالعربية والإنجليزية للمطاعم والكافيهات والمتاجر والجيم. شاهد أعمالها وتواصل معها.",
  },
  ui: {
    skip: "تخطَّ إلى المحتوى",
    langBtn: "EN",
    langLabel: "التبديل إلى اللغة الإنجليزية",
    toDark: "الوضع الداكن",
    toLight: "الوضع الفاتح",
    menuOpen: "فتح القائمة",
    menuClose: "إغلاق القائمة",
    home: "دنيا هارون، الصفحة الرئيسية",
  },
  nav: {
    about: "من أنا",
    work: "أعمالي",
    services: "خدماتي",
    contact: "تواصل",
  },
  hero: {
    status: "متاحة لمشاريع جديدة",
    title: "مواقع تجلب الزبائن إلى باب محلك.",
    lead: "أنا دنيا هارون. أصمّم وأبني مواقع سريعة تناسب الموبايل بالعربية والإنجليزية للمطاعم والكافيهات والمتاجر والجيم.",
    ctaWork: "شاهد أعمالي",
    ctaTalk: "راسلني على واتساب",
  },
  about: {
    title: "التصميم والوظيفة وتفاصيل صغيرة.",
    p1: "أنا مطوّرة ويب أبني مواقع للشركات والعلامات الشخصية. أهتم بتخطيط واضح وصفحات مريحة على الموبايل وتصاميم تسهّل على الزائر اتخاذ الخطوة التالية.",
    p2: "أواصل التعلّم وتطوير مهاراتي، وأبحث دائمًا عن طريقة تجعل كل مشروع أوضح وأسرع وأنفع.",
    skillsTitle: "ما أعمل به",
    groups: [
      { label: "البناء", items: ["HTML5", "CSS3", "JavaScript", "Next.js"] },
      { label: "التصميم", items: ["واجهات متجاوبة", "UI / UX", "المتاجر الإلكترونية"] },
      { label: "التسليم", items: ["GitHub Pages", "العربية والإنجليزية"] },
    ],
  },
  work: {
    title: "مشاريع نفّذتها",
    lead: "سبعة مواقع لسبعة أنواع من الأعمال. مرّر المؤشر على المعاينة لتتصفح الصفحة، أو اضغط على البطاقة لفتح الموقع الحي.",
    open: "افتح الموقع",
    openIn: "يفتح في تبويب جديد",
  },
  services: {
    title: "الخدمات",
    lead: "حلول ويب بسيطة واحترافية مبنية حول أهدافك.",
    items: [
      {
        title: "مواقع الشركات",
        text: "مواقع احترافية تعرّف بنشاطك وتسهّل على العملاء الوصول إليك.",
      },
      {
        title: "صفحات الهبوط والمتاجر",
        text: "صفحات مركّزة ومتاجر إلكترونية للمنتجات والخدمات والحملات.",
      },
      {
        title: "تصميم متجاوب",
        text: "مواقع تعمل بسلاسة على الموبايل والتابلت وشاشات الكمبيوتر.",
      },
    ],
  },
  contact: {
    title: "عندك مشروع في بالك؟",
    lead: "احكِ لي عن نشاطك أو متجرك أو علامتك الشخصية، وسأردّ عليك على واتساب.",
    name: "اسمك",
    message: "ماذا تحتاج؟",
    messagePh: "موقع للكافيه الخاص بي، متجر لمنتجاتي…",
    send: "أرسل عبر واتساب",
    note: "سيفتح واتساب ومعه رسالتك جاهزة للإرسال.",
    whatsapp: "واتساب",
    instagram: "إنستجرام",
    email: "البريد الإلكتروني",
    template: "مرحبًا دنيا، أنا {name}.\n{message}",
  },
  footer: { rights: "دنيا هارون. صُمّم وبُني بعناية.", top: "العودة للأعلى" },
  projects: [
    {
      kind: "مطعم",
      desc: "موقع مطعم يعرض الهوية والمنيو والعروض والفروع، مع تجربة طلب أونلاين.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      kind: "كافيه",
      desc: "موقع لقهوة مختصة بطابع دافئ، مع تصفّح المنيو وتصنيفات المنتجات.",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      kind: "متجر إلكتروني",
      desc: "متجر إكسسوارات يركّز على عرض المنتجات والمحتوى بلغتين ورحلة شراء سهلة.",
      tags: ["متجر", "عربي / إنجليزي", "واجهة المنتج"],
    },
    {
      kind: "ساعات فاخرة",
      desc: "مجلة ومعرض للساعات يضم ساعات شهيرة وقصص العلامات والمراجعات بتصميم تحريري.",
      tags: ["معرض", "متجاوب", "تحريري"],
    },
    {
      kind: "معرض أثاث",
      desc: "معرض يضم المجموعات وتصفّح الأقسام وسلة مشتريات واستفسارات عبر واتساب.",
      tags: ["معرض صور", "سلة", "واتساب"],
    },
    {
      kind: "جيم",
      desc: "موقع جيم يشمل الاشتراكات وجداول التدريب والمرافق وطرق الدفع، بالأسود والذهبي.",
      tags: ["اشتراكات", "جداول", "متجاوب"],
    },
    {
      kind: "تجزئة تقنية",
      desc: "موقع لخدمات الموبايل والكمبيوتر يعرض المنتجات والخدمات بوضوح.",
      tags: ["تجزئة", "خدمات", "متجاوب"],
    },
  ],
};

export const dict: Record<Lang, Dict> = { en, ar };
