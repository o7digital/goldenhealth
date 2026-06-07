import { useEffect, useState } from "react";

const copy = {
  es: {
    nav: { method: "Inicio", therapies: "Programa Integral", shop: "Tienda", contact: "Contacto" },
    cta: "Agenda tu valoración",
    heroBadge: "Clínica de longevidad y bienestar integral en CDMX",
    heroTitle: "Salud celular para vivir mejor, no solo vivir más.",
    heroText: "Golden Health integra medicina preventiva, terapias biológicas, nutrición funcional y protocolos anti-aging para personas que buscan energía, equilibrio y bienestar medible.",
    primaryCta: "Agendar valoración →",
    secondaryCta: "Conocer el método",
    keywords: ["Longevidad", "Anti-aging", "Salud celular", "Medicina preventiva", "Nutrición funcional", "CDMX"],
    methodEyebrow: "Método Golden Health",
    methodTitle: "Una experiencia médica, estética y funcional en una sola ruta.",
    methodText: "Este bloque ayuda a que la cliente vea un sitio más ordenado, más premium y mucho más fácil de vender.",
    method: [
      ["01", "Diagnóstico", "Primero entendemos tu estado actual: energía, sueño, nutrición, estrés, hábitos y objetivos."],
      ["02", "Protocolo", "Diseñamos una ruta personalizada con terapias, nutrición, suplementación y seguimiento."],
      ["03", "Acompañamiento", "Medimos progreso, ajustamos el plan y construimos hábitos sostenibles a largo plazo."],
    ],
    therapiesEyebrow: "Programa Integral",
    therapiesTitle: "Salud de alto nivel, presentada con claridad y confianza.",
    therapiesText: "",
    details: "Ver detalle →",
    services: [
      ["✦", "Medicina de longevidad", "Evaluación integral para entender energía, metabolismo, inflamación, hábitos y objetivos de salud."],
      ["♡", "Anti-aging funcional", "Protocolos personalizados para vitalidad, prevención, recuperación y bienestar a largo plazo."],
      ["◌", "Hidratación intravenosa", "Terapias de soporte con enfoque clínico para rendimiento, equilibrio y recuperación profunda."],
      ["☘", "Nutrición celular", "Planes de alimentación y suplementación diseñados para mejorar salud metabólica y calidad de vida."],
      ["⌁", "Ciencia del deporte", "Estrategias para personas activas que buscan fuerza, resistencia, descanso y mejor desempeño físico."],
      ["◎", "Equilibrio cuerpo-mente", "Un enfoque integral que une medicina, hábitos, bienestar emocional y prevención inteligente."],
    ],
    patientEyebrow: "Experiencia del paciente",
    patientTitle: "Más confianza desde el primer scroll.",
    patientText: "El rediseño debe mostrar autoridad médica, cercanía y resultados posibles sin prometer milagros. Eso protege la marca y mejora la conversión.",
    patientCards: [
      ["Consulta clara", "Explicación simple del proceso y próximos pasos."],
      ["Contenido médico", "Artículos, videos y educación para generar confianza."],
      ["Agenda visible", "Botón fijo a WhatsApp o formulario de valoración."],
      ["SEO local", "Páginas optimizadas para terapias y búsquedas en CDMX."],
    ],
    shopTitle: "Tienda Golden Health",
    shopText: "Una sección de productos más limpia, con categorías claras, fichas premium y llamadas a compra o consulta.",
    shopCta: "Ver categorías →",
    products: ["Suplementación premium", "Protocolos funcionales", "Menú Golden Health", "Programas integrales"],
    productText: "Ficha optimizada para confianza, SEO y conversión.",
    contactEyebrow: "Contacto",
    contactTitle: "Un cierre claro para convertir visitas en citas.",
    contactText: "Dirección, teléfono, correo y formulario deben estar visibles, con una llamada directa a WhatsApp y agenda.",
    proposalTitle: "Propuesta comercial",
    proposalText: "Este mockup se puede presentar como fase 1: rediseño visual, estructura SEO, contenidos base y preparación para agenda/WhatsApp.",
    addressMeta: "Miguel Hidalgo, CP 11529, Ciudad de México",
    emailMeta: "Atención personalizada",
    phoneMeta: "WhatsApp / llamadas",
    namePlaceholder: "Nombre",
    phonePlaceholder: "Teléfono",
    messagePlaceholder: "¿Qué objetivo de salud te gustaría trabajar?",
    submit: "Enviar solicitud",
    whatsapp: "WhatsApp / Agenda",
    slideLabel: "Mostrar slide",
  },
  en: {
    nav: { method: "Method", therapies: "Therapies", shop: "Shop", contact: "Contact" },
    cta: "Book your assessment",
    heroBadge: "Longevity and integrated wellness clinic in CDMX",
    heroTitle: "Cellular health to live better, not just longer.",
    heroText: "Golden Health integrates preventive medicine, biological therapies, functional nutrition, and anti-aging protocols for people seeking measurable energy, balance, and wellbeing.",
    primaryCta: "Book an assessment →",
    secondaryCta: "Explore the method",
    keywords: ["Longevity", "Anti-aging", "Cellular health", "Preventive medicine", "Functional nutrition", "CDMX"],
    methodEyebrow: "Golden Health Method",
    methodTitle: "A medical, aesthetic, and functional experience in one clear path.",
    methodText: "A structured approach designed to make every step clearer, more personal, and easier to follow.",
    method: [
      ["01", "Diagnosis", "We first understand your current state: energy, sleep, nutrition, stress, habits, and goals."],
      ["02", "Protocol", "We design a personalized path with therapies, nutrition, supplementation, and follow-up."],
      ["03", "Guidance", "We measure progress, adjust the plan, and build sustainable long-term habits."],
    ],
    therapiesEyebrow: "Therapies and services",
    therapiesTitle: "High-level health care, presented with clarity and confidence.",
    therapiesText: "Each service is explained with a clean structure designed for trust, conversion, and local medical SEO in Mexico City.",
    details: "View details →",
    services: [
      ["✦", "Longevity medicine", "Comprehensive assessment of energy, metabolism, inflammation, habits, and health goals."],
      ["♡", "Functional anti-aging", "Personalized protocols for vitality, prevention, recovery, and long-term wellbeing."],
      ["◌", "IV hydration", "Clinically guided support therapies for performance, balance, and deep recovery."],
      ["☘", "Cellular nutrition", "Nutrition and supplementation plans designed to improve metabolic health and quality of life."],
      ["⌁", "Sports science", "Strategies for active people seeking strength, endurance, recovery, and better physical performance."],
      ["◎", "Body-mind balance", "An integrated approach that connects medicine, habits, emotional wellbeing, and intelligent prevention."],
    ],
    patientEyebrow: "Patient experience",
    patientTitle: "More trust from the first scroll.",
    patientText: "The experience communicates medical authority, warmth, and realistic progress without overpromising. That protects the brand and improves conversion.",
    patientCards: [
      ["Clear consultation", "Simple explanation of the process and next steps."],
      ["Medical content", "Articles, videos, and education that build trust."],
      ["Visible booking", "Fixed WhatsApp access or assessment form."],
      ["Local SEO", "Pages optimized for therapies and searches in CDMX."],
    ],
    shopTitle: "Golden Health Shop",
    shopText: "A cleaner product section with clear categories, premium product cards, and calls to purchase or consult.",
    shopCta: "View categories →",
    products: ["Premium supplementation", "Functional protocols", "Golden Health menu", "Integrated programs"],
    productText: "Card optimized for trust, SEO, and conversion.",
    contactEyebrow: "Contact",
    contactTitle: "A clear close to turn visits into appointments.",
    contactText: "Address, phone, email, and form stay visible, with a direct call to WhatsApp and booking.",
    proposalTitle: "Commercial proposal",
    proposalText: "This can be presented as phase one: visual redesign, SEO structure, core content, and preparation for booking and WhatsApp.",
    addressMeta: "Miguel Hidalgo, ZIP 11529, Mexico City",
    emailMeta: "Personalized care",
    phoneMeta: "WhatsApp / calls",
    namePlaceholder: "Name",
    phonePlaceholder: "Phone",
    messagePlaceholder: "Which health goal would you like to work on?",
    submit: "Send request",
    whatsapp: "WhatsApp / Booking",
    slideLabel: "Show slide",
  },
};

const sliderImages = [
  { src: "/images/golden-health/consulta-medica.jpg", alt: { es: "Consulta médica Golden Health", en: "Golden Health medical consultation" } },
  { src: "/images/golden-health/terapia-iv.jpg", alt: { es: "Terapia intravenosa Golden Health", en: "Golden Health IV therapy" } },
  { src: "/images/golden-health/nutricion.jpg", alt: { es: "Nutrición funcional Golden Health", en: "Golden Health functional nutrition" } },
  { src: "/images/golden-health/comunidad.jpg", alt: { es: "Comunidad Golden Health", en: "Golden Health community" } },
];

const sourceSections = [
  {
    id: "programa",
    title: "Programa Integral",
    intro: "Longevidad, anti-envejecimiento y bienestar integral para vivir mas anos con energia optima.",
    items: [
      ["Medicina Regenerativa", "Tratamiento de renovacion celular de origen franco-suizo que busca regenerar y revitalizar organos, apoyar la salud hormonal y frenar la degeneracion celular."],
      ["Accion regenerativa bio-celular", "Tratamientos biologicos de origen aleman orientados a mineralizar, oxigenar y nutrir organos y sistemas para reactivar el poder regulador del organismo."],
      ["Escuela del arte", "Conferencias, seminarios web, podcast, cocina saludable y mindfulness para sostener el bienestar a largo plazo."],
      ["Cuerpo, mente y espiritu", "Programas enfocados en equilibrio emocional y mental mediante experiencias de aprendizaje y conexion interior."],
      ["Deportistas de alto rendimiento", "Disciplina, movimiento, oxigenacion y condicion fisica para lograr objetivos diarios y mejorar el funcionamiento cognitivo."],
    ],
  },
  {
    id: "biologicas",
    title: "Terapias Biologicas",
    intro: "Medicina biologica enfocada en desarrollar el potencial humano con ciencia, tecnologia, coaching de salud y protocolos regenerativos.",
    items: [
      ["Energia, estres y revitalizacion", "Restaura vitalidad ante desgaste fisico, mental y emocional."],
      ["Inmunologico", "Fortalece y estimula defensas contra agresiones del medio ambiente."],
      ["Osteoarticular", "Apoyo para lesiones especificas, movilidad, tejidos, fuerza y flexibilidad."],
      ["Cara", "Tratamiento para enfatizar belleza interior y exterior de rostro y cuello."],
      ["Hormonal", "Apoyo para equilibrar sintomas hormonales en mujeres y hombres."],
      ["Detox", "Protocolo para eliminar toxinas y promover un estilo de vida mas saludable."],
    ],
  },
  {
    id: "nutricion",
    title: "Salud nutricional y Zinzino",
    intro: "Nutricion personalizada basada en pruebas para orientar suplementos y medir progreso con datos objetivos.",
    items: [
      ["Nueva generacion de nutricion", "Pruebas de sangre seca como punto de partida para conocer el estado del cuerpo y guiar decisiones."],
      ["BalanceOil Kit with Test", "Omega 3, polifenoles de oliva y vitamina D3 para apoyar equilibrio Omega 6:3, cerebro, corazon e sistema inmune."],
      ["Seguimiento", "Nueva prueba cada 4 meses para comparar resultados y ajustar la ingesta."],
    ],
  },
  {
    id: "antroposofia",
    title: "Antroposofía",
    intro: "Andrés Muñoz Cárdenas es psicólogo de orientación antroposófica y fundador de la escuela Kamino Florido. Su enfoque aporta una concepción diferente e integral de la salud.",
    image: "/images/source/programa/andres-munoz-cardenas.webp",
    link: "https://www.kaminoflorido.com/",
    items: [
      ["Andrés Muñoz Cárdenas", "Fundador y CEO de la escuela Kamino Florido."],
      ["Los 7 Pasos de la Libertad", "Contenido educativo sobre antroposofía, desarrollo humano y una visión más amplia de la salud."],
    ],
  },
  {
    id: "arte-buen-comer",
    title: "Arte del Buen Comer y Buen Beber",
    intro: "Comer es una necesidad, pero comer de forma inteligente es un arte. Este programa enseña hábitos de alimentación y estilo de vida para prevenir enfermedades degenerativas, aumentar energía y fortalecer el sistema inmunológico.",
    image: "/images/source/programa/arte-buen-comer.jpeg",
    items: [
      ["Programa de hábitos saludables", "Acompañamiento para comer de forma sana, inteligente y equilibrada."],
      ["Buen beber y bien vivir", "Educación práctica para sostener cambios reales en la vida diaria."],
      ["Prevención y energía", "Enfoque en prevención, envejecimiento saludable y vitalidad."],
      ["Sistema inmunológico", "Hábitos nutricionales orientados a apoyar defensas y bienestar integral."],
    ],
  },
  {
    id: "anti-aging",
    title: "Anti-Aging",
    intro: "El objetivo de estos tratamientos es frenar el proceso de degeneración celular y reactivar el potencial de salud de cada individuo para prevenir y revertir el envejecimiento prematuro.",
    image: "/images/source/programa/anti-aging.jpeg",
    items: [
      ["Healthy Ageing", "Tratamientos anti-edad orientados a vitalidad, prevención y regeneración."],
      ["Regeneración celular", "Protocolos para apoyar la salud celular y reducir señales de desgaste prematuro."],
      ["Potencial de salud", "Enfoque integral para reactivar equilibrio, energía y bienestar funcional."],
      ["Prevención", "Trabajo preventivo para conservar calidad de vida a largo plazo."],
    ],
  },
  {
    id: "hidratacion",
    title: "Hidratacion Funcional",
    intro: "Introduccion al agua Kangen: agua alcalina ionizada tratada por electrolisis para modificar pH y crear propiedades antioxidantes.",
    items: [
      ["Socio autorizado", "Golden Health presenta informacion y acceso a hidratacion funcional."],
      ["Bienestar diario", "Apoyo a habitos de hidratacion dentro del programa integral."],
    ],
  },
];

const products = [
  {
    slug: "tratamientos-biologicos",
    name: "Tratamientos Biologicos",
    price: "$2,300.00",
    image: "/images/source/products/tratamientos-biologicos.jpeg",
    summary: "Paquete biologico de soporte para bienestar integral y equilibrio celular.",
    details: ["10 sesiones", "2 tratamientos biologicos", "Acompanamiento para elegir protocolo segun objetivo"],
  },
  {
    slug: "tratamiento-antioxidante",
    name: "Tratamiento Antioxidante",
    price: "$5,980.00",
    image: "/images/source/products/antioxidante.jpeg",
    summary: "Terapia antioxidante endocrina orientada a proteger, reparar y apoyar la vitalidad.",
    details: ["Formula Citoplacell", "Soporte antioxidante", "Enfoque anti-aging y energia"],
  },
  {
    slug: "tratamiento-anti-inflamatorio",
    name: "Tratamiento Anti-inflamatorio",
    price: "$4,200.00",
    image: "/images/source/products/antiinflamatorio.jpeg",
    summary: "Protocolo anti-inflamatorio para apoyar recuperacion, movilidad y equilibrio metabolico.",
    details: ["Formula Bioenzym", "Apoyo anti-inflamatorio", "Orientado a bienestar osteoarticular y sistemico"],
  },
  {
    slug: "tratamiento-sindrome-metabolico",
    name: "Tratamiento Sindrome Metabolico",
    price: "$7,250.00",
    image: "/images/source/products/sindrome-metabolico.jpeg",
    summary: "Terapia para acompanamiento metabolico y regulacion funcional.",
    details: ["Formula Revercell", "Apoyo al metabolismo", "Seguimiento recomendado con consulta"],
  },
  {
    slug: "tratamiento-detox",
    name: "Tratamiento Detox",
    price: "$4,200.00",
    image: "/images/source/products/detox.jpeg",
    summary: "Protocolo detox para apoyar eliminacion de toxinas y bienestar digestivo.",
    details: ["Formula Celltox", "Quelacion oral", "Apoyo a habitos saludables"],
  },
  {
    slug: "celulas-madre",
    name: "Celulas Madre",
    price: "$27,000.00",
    image: "/images/source/products/celulas-madre.jpeg",
    summary: "Activador de longevidad orientado a proteccion, reparacion y revitalizacion.",
    details: ["Human Ultracell VI", "Ciclos de tratamiento", "Protocolo premium de longevidad"],
  },
  {
    slug: "tratamiento-hormonal-hombre",
    name: "Tratamiento Hormonal Hombre",
    price: "$4,200.00",
    image: "/images/source/products/hormonal-hombre.jpeg",
    summary: "Soporte funcional para regulacion del ciclo hormonal masculino.",
    details: ["Formula Androcell", "Apoyo hormonal hombre", "Evaluacion medica recomendada"],
  },
  {
    slug: "tratamiento-hormonal-mujer",
    name: "Tratamiento Hormonal para la mujer",
    price: "$4,200.00",
    image: "/images/source/products/hormonal-mujer.jpeg",
    summary: "Soporte funcional para regulacion del ciclo hormonal femenino.",
    details: ["Formula Biofemin", "Apoyo hormonal mujer", "Seguimiento personalizado"],
  },
];

const consultations = [
  ["Consulta Online", "Disponible online", "30 min", "$500", "/images/source/consultas/consulta-online.jpg", "consulta-online-1"],
  ["Consulta Presencial", "En clinica", "1 h", "$1,500", "/images/source/consultas/consulta-presencial.jpeg", "consulta-presencial"],
  ["Consultas en Madrid", "Disponible online", "1 h", "$1,500", "/images/source/consultas/consultas-madrid.jpg", "consultas-en-madrid"],
];

const newsItems = [
  ["Comunidad Golden Health", "Videos, entrevistas y testimonios deben vivir como contenido editorial, no como bloque principal del home."],
  ["Educacion en bienestar", "Capsulas sobre medicina preventiva, longevidad, nutricion funcional y habitos sostenibles."],
  ["Eventos y aliados", "Espacio para conferencias, colaboraciones y novedades de la comunidad Golden Health."],
];

export default function GoldenHealthMockup() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [language, setLanguage] = useState("es");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [path, setPath] = useState(() => window.location.pathname);
  const t = copy.es;
  const page =
    path === "/historia" ? "historia" :
    path === "/tienda" ? "tienda" :
    path === "/consultas" ? "consultas" :
    path === "/contacto" ? "contacto" :
    path.startsWith("/booking-calendar/") ? "booking" :
    path.startsWith("/producto/") ? "producto" :
    "home";
  const selectedProduct = products.find((product) => path === `/producto/${product.slug}`);
  const selectedConsultation = consultations.find((consultation) => path === `/booking-calendar/${consultation[5]}`);
  const navLinks = [
    ["/", "Inicio"],
    ["/#terapias", "Programa Integral"],
    ["/historia", "Historia"],
    ["/tienda", t.nav.shop],
    ["/consultas", "Consultas"],
    ["/#noticias", "Noticias"],
    ["/contacto", t.nav.contact],
  ];
  const navigate = (event, href) => {
    if (href.startsWith("/#")) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);
    setPath(window.location.pathname);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % sliderImages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f3ea] text-[#17231c] selection:bg-[#d3aa45]/30">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/30 bg-[#f7f3ea]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#1f3b2c] text-xl text-[#f4c96b] shadow-lg shadow-[#1f3b2c]/20">
              ✦
              <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border-2 border-[#f7f3ea] bg-[#d3aa45]" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-[0.22em] text-[#1f3b2c]">GOLDEN</p>
              <p className="-mt-1 text-xs uppercase tracking-[0.36em] text-[#9b7a2f]">Health MX</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#314136] md:flex">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} onClick={(event) => navigate(event, href)} className="hover:text-[#9b7a2f]">{label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex rounded-full border border-[#1f3b2c]/15 bg-white/70 p-1 text-xs font-semibold text-[#1f3b2c] shadow-sm">
              {(["es", "en"]).map((locale) => (
                <button
                  key={locale}
                  type="button"
                  onClick={() => {
                    setLanguage(locale);
                    setMobileMenuOpen(false);
                  }}
                  className={`rounded-full px-3 py-2 transition ${
                    language === locale ? "bg-[#1f3b2c] text-white" : "hover:bg-[#f4ead0]"
                  }`}
                >
                  {locale.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              href="/contacto"
              onClick={(event) => navigate(event, "/contacto")}
              className="hidden rounded-full bg-[#1f3b2c] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1f3b2c]/20 transition hover:-translate-y-0.5 hover:bg-[#14261c] md:inline-flex"
            >
              {t.cta}
            </a>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-[#1f3b2c]/15 bg-white/75 shadow-sm md:hidden"
            >
              <span className={`h-0.5 w-5 rounded-full bg-[#1f3b2c] transition ${mobileMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-[#1f3b2c] transition ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 rounded-full bg-[#1f3b2c] transition ${mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
        <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
          <nav className="mx-5 mb-4 rounded-[1.5rem] border border-[#1f3b2c]/10 bg-white/95 p-3 text-[#1f3b2c] shadow-xl shadow-[#1f3b2c]/10">
            {navLinks.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={(event) => {
                  navigate(event, href);
                  setMobileMenuOpen(false);
                }}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-[#f4ead0]"
              >
                {label}
              </a>
            ))}
            <a
              href="/contacto"
              onClick={(event) => navigate(event, "/contacto")}
              className="mt-2 flex items-center justify-center rounded-full bg-[#1f3b2c] px-4 py-3 text-sm font-semibold text-white"
            >
              {t.cta}
            </a>
          </nav>
        </div>
      </header>

      <main>
        {page === "home" && (
          <>
        <section className="relative min-h-[90vh] overflow-hidden">
          <div className="absolute inset-0">
            {sliderImages.map((slide, index) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt[language]}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  activeSlide === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-[#102017]/90 via-[#102017]/55 to-[#102017]/20" />
            <div className="absolute inset-0 bg-[#102017]/10" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-5 pt-28 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/25 bg-white/15 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur">
                <span className="mr-2 h-2 w-2 rounded-full bg-[#d3aa45]" />
                {t.heroBadge}
              </div>

              <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-white md:text-7xl">
                {t.heroTitle}
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82">{t.heroText}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {t.keywords.map((item) => (
                  <span key={item} className="rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="/contacto" onClick={(event) => navigate(event, "/contacto")} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d3aa45] px-7 py-4 font-semibold text-[#14261c] shadow-xl shadow-[#d3aa45]/25 transition hover:-translate-y-0.5 hover:bg-[#c99c32]">
                  {t.primaryCta}
                </a>
                <a href="#metodo" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/12 px-7 py-4 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20">
                  {t.secondaryCta}
                </a>
              </div>

              <div className="mt-10 flex gap-2">
                {sliderImages.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    aria-label={`${t.slideLabel} ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 rounded-full transition-all ${activeSlide === index ? "w-12 bg-[#d3aa45]" : "w-6 bg-white/35"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="metodo" className="px-5 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.7rem] bg-[#14261c] p-8 text-white shadow-2xl shadow-[#14261c]/15 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d3aa45]">{t.methodEyebrow}</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{t.methodTitle}</h2>
                <p className="mt-5 leading-8 text-white/70">{t.methodText}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {t.method.map(([num, title, text]) => (
                  <div key={title} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                    <span className="text-sm font-semibold text-[#d3aa45]">{num}</span>
                    <p className="mt-4 text-xl font-semibold">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-white/68">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="terapias" className="px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">{t.therapiesEyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-5xl">{t.therapiesTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-[#607064]">{t.therapiesText}</p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {t.services.map(([icon, title, text]) => (
                <div key={title} className="group rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1f3b2c]/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4ead0] text-2xl text-[#9b7a2f] transition group-hover:bg-[#1f3b2c] group-hover:text-[#d3aa45]">{icon}</div>
                  <h3 className="mt-6 text-xl font-semibold text-[#14261c]">{title}</h3>
                  <p className="mt-3 leading-7 text-[#607064]">{text}</p>
                  <p className="mt-6 inline-flex text-sm font-semibold text-[#9b7a2f]">{t.details}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 space-y-5">
              {sourceSections.map((section) => (
                <article key={section.id} id={section.id} className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/5 lg:p-9">
                  <div className={`grid gap-8 ${section.image ? "lg:grid-cols-[0.65fr_1.35fr]" : ""}`}>
                    {section.image && (
                      <img src={section.image} alt={section.items[0][0]} className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" />
                    )}
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9b7a2f]">Programa Integral</p>
                      <h3 className="mt-3 text-3xl font-semibold text-[#14261c]">{section.title}</h3>
                      <p className="mt-4 max-w-3xl text-lg leading-8 text-[#607064]">{section.intro}</p>
                      <div className="mt-7 grid gap-4 md:grid-cols-2">
                        {section.items.map(([title, text]) => (
                          <div key={title} className="rounded-2xl bg-[#fbf8ef] p-5 ring-1 ring-[#efe6cd]">
                            <p className="font-semibold text-[#14261c]">{title}</p>
                            <p className="mt-2 text-sm leading-6 text-[#607064]">{text}</p>
                          </div>
                        ))}
                      </div>
                      {section.link && (
                        <a href={section.link} className="mt-6 inline-flex rounded-none bg-[#3f3f3f] px-6 py-3 font-serif text-lg text-white" target="_blank" rel="noreferrer">
                          Ver primero video
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2.7rem] bg-[#ecdfbf] p-8 lg:grid-cols-[1fr_0.9fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8a6a24]">{t.patientEyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-5xl">{t.patientTitle}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4f5c50]">{t.patientText}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {t.patientCards.map(([title, text]) => (
                <div key={title} className="rounded-3xl bg-white/65 p-6 shadow-sm ring-1 ring-black/5">
                  <p className="font-semibold text-[#14261c]">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#667166]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

          </>
        )}

        {page === "historia" && (
        <section id="historia" className="px-5 py-32 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.7rem] bg-[#14261c] p-8 text-white lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d3aa45]">Historia</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Dra. Silvia del Moral</h2>
              <p className="mt-3 text-xl text-white/80">Fundadora y medico responsable</p>
              <img
                src="/images/source/history/dra-silvia.jpeg"
                alt="Dra. Silvia del Moral, fundadora de Golden Health"
                className="aspect-[4/5] w-full max-w-sm rounded-[2rem] object-cover shadow-2xl shadow-black/25"
              />
            </div>
            <div className="space-y-5 leading-8 text-white/74">
              <p>Golden Health nace de la vision de la Dra. Silvia del Moral: integrar medicina preventiva, medicina regenerativa y bienestar funcional en una experiencia clara, humana y medible.</p>
              <p>Con mas de 35 anos de trayectoria en ciencias de la vida y cuidados de la salud, la Dra. Silvia ha desarrollado un enfoque que combina evaluacion medica, terapias biologicas, nutricion y acompanamiento para personas que buscan energia, prevencion y longevidad saludable.</p>
              <p>Su formacion incluye medicina, pediatria por el Instituto Nacional de Pediatria y estudios en el Goetheanum en Dornach, Suiza, centro mundial del movimiento antroposofico.</p>
              <p>La propuesta de Golden Health no se basa en promesas rapidas: parte de entender el estado actual del paciente, disenar una ruta personalizada y dar seguimiento para construir habitos sostenibles.</p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <img src="/images/source/history/certificado.jpeg" alt="Certificado Dra. Silvia del Moral" className="aspect-[4/3] w-full rounded-xl object-cover" />
                  <p className="mt-3 text-sm font-semibold text-[#d3aa45]">Formacion continua</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <img src="/images/source/history/bid-group.jpeg" alt="International Star for Quality 2017" className="mx-auto h-24 w-24 rounded-full object-cover" />
                  <p className="mt-3 text-sm font-semibold text-[#d3aa45]">International Star for Quality 2017</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <img src="/images/source/history/bizz-awards.png" alt="Excelencia empresarial 2019" className="mx-auto h-24 w-24 object-contain" />
                  <p className="mt-3 text-sm font-semibold text-[#d3aa45]">Excelencia empresarial 2019</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}

        {page === "tienda" && (
        <section id="tienda" className="px-5 py-32 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.7rem] bg-white shadow-xl ring-1 ring-black/5">
            <div className="grid lg:grid-cols-[0.65fr_1.35fr]">
            <div className="bg-[#e7d39b] p-10 lg:p-14">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#14261c] text-2xl text-[#d3aa45]">🛍</div>
              <h2 className="mt-8 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-5xl">{t.shopTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-[#3f493f]">Tratamientos biologicos y protocolos funcionales con fichas completas, imagen real, precio y solicitud directa.</p>
              <a href="#productos" className="mt-8 inline-flex rounded-full bg-[#14261c] px-6 py-4 font-semibold text-white shadow-lg shadow-[#14261c]/20">Ver productos →</a>
            </div>
            <div id="productos" className="grid gap-5 p-8 md:grid-cols-2 lg:p-12">
              {products.map((product) => (
                <a
                  key={product.slug}
                  href={`/producto/${product.slug}`}
                  onClick={(event) => navigate(event, `/producto/${product.slug}`)}
                  className="group overflow-hidden rounded-3xl border border-[#efe6cd] bg-[#fbf8ef] transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#1f3b2c]/10"
                >
                  <img src={product.image} alt={product.name} className="aspect-[4/3] w-full bg-white object-contain p-4" />
                  <div className="p-6">
                    <p className="text-lg font-semibold text-[#14261c]">{product.name}</p>
                    <p className="mt-2 text-sm leading-6 text-[#6a756d]">{product.summary}</p>
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <p className="text-xl font-semibold text-[#9b7a2f]">{product.price}</p>
                      <span className="rounded-full bg-[#14261c] px-4 py-2 text-sm font-semibold text-white">Ver ficha</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            </div>
          </div>
        </section>
        )}

        {page === "producto" && selectedProduct && (
        <section className="px-5 py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 text-sm text-[#607064]">
              <a href="/tienda" onClick={(event) => navigate(event, "/tienda")} className="font-semibold text-[#9b7a2f]">Tienda</a>
              <span> / {selectedProduct.name}</span>
            </div>
            <div className="grid gap-10 rounded-[2.7rem] bg-white p-8 shadow-xl ring-1 ring-black/5 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
              <div className="rounded-[2rem] bg-[#fbf8ef] p-6">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="aspect-square w-full object-contain" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">Ficha producto</p>
                <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-6xl">{selectedProduct.name}</h1>
                <p className="mt-5 text-3xl font-semibold text-[#9b7a2f]">{selectedProduct.price}</p>
                <p className="mt-6 text-lg leading-8 text-[#607064]">{selectedProduct.summary}</p>
                <div className="mt-8 rounded-3xl bg-[#14261c] p-6 text-white">
                  <p className="font-semibold text-[#d3aa45]">Incluye</p>
                  <ul className="mt-4 space-y-3 text-white/80">
                    {selectedProduct.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="text-[#d3aa45]">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <p className="text-sm font-semibold text-[#607064]">Cantidad *</p>
                  <div className="mt-3 inline-flex h-14 items-center overflow-hidden border border-[#14261c]/25 bg-white">
                    <button type="button" className="h-full w-14 text-2xl text-[#9b9b9b]">−</button>
                    <span className="flex h-full w-14 items-center justify-center border-x border-[#14261c]/15 text-[#14261c]">1</span>
                    <button type="button" className="h-full w-14 text-2xl text-[#14261c]">+</button>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button type="button" className="inline-flex justify-center rounded-none bg-[#3f3f3f] px-10 py-4 font-serif text-xl text-white transition hover:bg-[#242424] sm:min-w-80">Agregar al carrito</button>
                  <a href="/tienda" onClick={(event) => navigate(event, "/tienda")} className="inline-flex justify-center rounded-none border border-[#14261c]/20 px-7 py-4 font-semibold text-[#14261c]">Volver a tienda</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}

        {page === "home" && (
          <>

        <section id="noticias" className="px-5 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.7rem] bg-white p-8 shadow-sm ring-1 ring-black/5 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">Noticias</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-5xl">Comunidad Golden Health</h2>
                <p className="mt-5 text-lg leading-8 text-[#607064]">Esta parte funciona mejor como blog social y editorial: contenido vivo, entrevistas, testimonios y novedades, sin quitar fuerza al mensaje principal del home.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {newsItems.map(([title, text]) => (
                  <article key={title} className="rounded-3xl bg-[#fbf8ef] p-6 ring-1 ring-[#efe6cd]">
                    <p className="text-lg font-semibold text-[#14261c]">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-[#667166]">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
          </>
        )}

        {page === "consultas" && (
        <section id="consultas" className="px-5 py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">Consultas Medicas</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-5xl">Nuestros servicios</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {consultations.map(([name, meta, duration, price, image, slug]) => (
                <div key={name} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5">
                  <img src={image} alt={name} className="aspect-[4/2.7] w-full object-cover" />
                  <div className="p-7">
                    <p className="text-xl font-semibold text-[#14261c]">{name}</p>
                    <p className="mt-2 text-sm text-[#9b7a2f]">{meta}</p>
                    <div className="mt-6 flex items-end justify-between gap-4 border-t border-[#e5dfd1] pt-6">
                      <p className="text-[#607064]">{duration}</p>
                      <p className="text-3xl font-semibold text-[#14261c]">{price}</p>
                    </div>
                    <a href={`/booking-calendar/${slug}`} onClick={(event) => navigate(event, `/booking-calendar/${slug}`)} className="mt-6 inline-flex w-full justify-center rounded-full bg-[#1f3b2c] px-5 py-3 font-semibold text-white">Reservar ahora</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {page === "booking" && selectedConsultation && (
        <section className="px-5 py-32 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.7rem] bg-white p-8 shadow-xl ring-1 ring-black/5 lg:p-12">
            <a href="/consultas" onClick={(event) => navigate(event, "/consultas")} className="inline-flex items-center gap-2 text-lg text-[#607064]">‹ Volver</a>
            <div className="mt-16">
              <h1 className="font-serif text-5xl text-[#3f3f3f]">Programa tu servicio</h1>
              <p className="mt-6 text-xl leading-8 text-[#607064]">Revisa nuestra disponibilidad y reserva la fecha y hora que más te convengan</p>
            </div>
            <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_0.55fr]">
              <div>
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#d6d2ca] pb-4">
                  <h2 className="font-serif text-3xl text-[#3f3f3f]">Selecciona fecha y hora</h2>
                  <p className="text-[#aaa39b]">hora estándar central (GMT-6)</p>
                </div>
                <div className="mt-8 flex items-center justify-center gap-14 text-2xl text-[#777]">
                  <span>‹</span>
                  <span>May - Jun 2026</span>
                  <span>›</span>
                </div>
                <div className="mt-10 grid grid-cols-7 text-center text-[#c8c3bd]">
                  {["dom", "lun", "mar", "mié", "jue", "vie", "sáb"].map((day, index) => (
                    <div key={day} className="space-y-3">
                      <p>{day}</p>
                      <p className="text-2xl">{index === 0 ? "31" : index}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-28 text-center text-2xl text-[#8a8580]">No hay disponibilidad</p>
                <div className="mt-12 flex justify-center">
                  <button type="button" className="bg-[#9e9e9e] px-24 py-5 font-serif text-2xl text-white">Próxima sesión disponible</button>
                </div>
              </div>
              <aside>
                <h2 className="border-b border-[#d6d2ca] pb-4 font-serif text-3xl text-[#3f3f3f]">Detalles del servicio</h2>
                <div className="mt-8 space-y-5 text-xl text-[#607064]">
                  <p>{selectedConsultation[0]}</p>
                  <p>{selectedConsultation[2]}</p>
                  <p>{selectedConsultation[3]}</p>
                  <details className="border-t border-[#e2ddd4] pt-5">
                    <summary className="cursor-pointer">Más detalles</summary>
                    <p className="mt-4 text-base leading-7">Servicio de Golden Health. El motor real de reservas se integrará después.</p>
                  </details>
                </div>
                <button type="button" className="mt-10 w-full bg-[#c7c7c7] px-8 py-5 font-serif text-2xl text-white">Siguiente</button>
              </aside>
            </div>
          </div>
        </section>
        )}

        {page === "contacto" && (
        <section id="contacto" className="px-5 py-32 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">{t.contactEyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-5xl">{t.contactTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-[#607064]">{t.contactText}</p>
              <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <p className="font-semibold text-[#14261c]">{t.proposalTitle}</p>
                <p className="mt-2 text-sm leading-6 text-[#607064]">{t.proposalText}</p>
              </div>
            </div>
            <div className="rounded-[2rem] bg-[#14261c] p-8 text-white shadow-2xl shadow-[#14261c]/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-[#d3aa45]">📍</span>
                  <div className="min-w-0">
                    <p className="font-semibold break-words">Lago Zúrich 96, Ampliación Granada</p>
                    <p className="text-white/70 break-words">{t.addressMeta}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-[#d3aa45]">✉</span>
                  <div className="min-w-0">
                    <p className="font-semibold break-all">silvia.delmoral@goldenhealth.com.mx</p>
                    <p className="text-white/70 break-words">{t.emailMeta}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-[#d3aa45]">☎</span>
                  <div className="min-w-0">
                    <p className="font-semibold break-words">+55 55 5417 8009</p>
                    <p className="text-white/70 break-words">{t.phoneMeta}</p>
                  </div>
                </div>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white placeholder:text-white/50 outline-none focus:border-[#d3aa45]/60" placeholder={t.namePlaceholder} />
                <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white placeholder:text-white/50 outline-none focus:border-[#d3aa45]/60" placeholder={t.phonePlaceholder} />
                <textarea className="min-h-28 rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white placeholder:text-white/50 outline-none focus:border-[#d3aa45]/60 sm:col-span-2" placeholder={t.messagePlaceholder} />
                <button className="rounded-full bg-[#d3aa45] px-6 py-4 font-semibold text-[#14261c] transition hover:-translate-y-0.5 hover:bg-[#c99c32] sm:col-span-2">{t.submit}</button>
              </div>
            </div>
          </div>
        </section>
        )}
      </main>

      <footer className="bg-[#f3f3f3] px-5 py-14 text-[#779087] lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.75fr_1.25fr]">
          <div className="text-center md:text-left">
            <img src="/images/source/footer/logo.png" alt="Golden Health by Silvia del Moral" className="mx-auto h-auto w-52 md:mx-0" />
            <div className="mt-7 space-y-1 text-lg leading-7">
              <p>Lago Zúrich 96 Ampliación Granada</p>
              <p>Miguel Hidalgo CP 11529, Ciudad de México</p>
            </div>
            <div className="mt-8 space-y-1 text-lg leading-7">
              <p className="break-all">silvia.delmoral@goldenhealth.com.mx</p>
              <p>+55 55 5417 8009</p>
            </div>
            <div className="mt-7 flex justify-center gap-3 md:justify-start">
              {["◎", "f", "in", "▶"].map((icon) => (
                <span key={icon} className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a8a8a8] text-lg font-semibold text-white">
                  {icon}
                </span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="font-serif text-5xl font-semibold tracking-normal text-black">Aliados estratégicos</h2>
            <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-4">
              <img src="/images/source/footer/enagic.png" alt="Enagic" className="max-h-24 w-auto object-contain" />
              <img src="/images/source/footer/incruises.png" alt="inCruises" className="max-h-16 w-auto object-contain" />
              <img src="/images/source/footer/zinzino.png" alt="Zinzino" className="max-h-16 w-auto object-contain" />
              <img src="/images/source/footer/royal-prestige.jpeg" alt="Royal Prestige" className="max-h-24 w-auto object-contain" />
            </div>
          </div>
        </div>
      </footer>

      <a href="/contacto" onClick={(event) => navigate(event, "/contacto")} className="fixed bottom-5 right-5 z-50 rounded-full bg-[#1f3b2c] px-5 py-4 text-sm font-semibold text-white shadow-2xl shadow-[#1f3b2c]/30">{t.whatsapp}</a>
    </div>
  );
}
