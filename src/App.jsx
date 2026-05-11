import { useEffect, useState } from "react";

const copy = {
  es: {
    nav: { method: "Método", therapies: "Terapias", shop: "Tienda", contact: "Contacto" },
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
    therapiesEyebrow: "Terapias y servicios",
    therapiesTitle: "Salud de alto nivel, presentada con claridad y confianza.",
    therapiesText: "La nueva arquitectura permite explicar cada servicio, mejorar conversión y preparar el sitio para SEO médico local en Ciudad de México.",
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

export default function GoldenHealthMockup() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [language, setLanguage] = useState("es");
  const t = copy[language];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % sliderImages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f3ea] text-[#17231c] selection:bg-[#d3aa45]/30">
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
            <a href="#metodo" className="hover:text-[#9b7a2f]">{t.nav.method}</a>
            <a href="#terapias" className="hover:text-[#9b7a2f]">{t.nav.therapies}</a>
            <a href="#tienda" className="hover:text-[#9b7a2f]">{t.nav.shop}</a>
            <a href="#contacto" className="hover:text-[#9b7a2f]">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex rounded-full border border-[#1f3b2c]/15 bg-white/70 p-1 text-xs font-semibold text-[#1f3b2c] shadow-sm">
              {(["es", "en"]).map((locale) => (
                <button
                  key={locale}
                  type="button"
                  onClick={() => setLanguage(locale)}
                  className={`rounded-full px-3 py-2 transition ${
                    language === locale ? "bg-[#1f3b2c] text-white" : "hover:bg-[#f4ead0]"
                  }`}
                >
                  {locale.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              href="#contacto"
              className="hidden rounded-full bg-[#1f3b2c] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1f3b2c]/20 transition hover:-translate-y-0.5 hover:bg-[#14261c] md:inline-flex"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </header>

      <main>
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
                <a href="#contacto" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d3aa45] px-7 py-4 font-semibold text-[#14261c] shadow-xl shadow-[#d3aa45]/25 transition hover:-translate-y-0.5 hover:bg-[#c99c32]">
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

        <section id="tienda" className="px-5 pb-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.7rem] bg-white shadow-xl ring-1 ring-black/5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[#e7d39b] p-10 lg:p-14">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#14261c] text-2xl text-[#d3aa45]">🛍</div>
              <h2 className="mt-8 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-5xl">{t.shopTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-[#3f493f]">{t.shopText}</p>
              <button className="mt-8 rounded-full bg-[#14261c] px-6 py-4 font-semibold text-white shadow-lg shadow-[#14261c]/20">{t.shopCta}</button>
            </div>
            <div className="grid gap-4 p-8 md:grid-cols-2 lg:p-12">
              {t.products.map((product) => (
                <div key={product} className="rounded-3xl border border-[#efe6cd] bg-[#fbf8ef] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                  <p className="text-lg font-semibold text-[#14261c]">{product}</p>
                  <p className="mt-2 text-sm leading-6 text-[#6a756d]">{t.productText}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="px-5 py-24 lg:px-8">
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
                <div className="flex gap-4"><span className="mt-1 text-[#d3aa45]">📍</span><div><p className="font-semibold">Lago Zúrich 96, Ampliación Granada</p><p className="text-white/70">{t.addressMeta}</p></div></div>
                <div className="flex gap-4"><span className="mt-1 text-[#d3aa45]">✉</span><div><p className="font-semibold">silvia.delmoral@goldenhealth.com.mx</p><p className="text-white/70">{t.emailMeta}</p></div></div>
                <div className="flex gap-4"><span className="mt-1 text-[#d3aa45]">☎</span><div><p className="font-semibold">+55 55 5417 8009</p><p className="text-white/70">{t.phoneMeta}</p></div></div>
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
      </main>

      <a href="#contacto" className="fixed bottom-5 right-5 z-50 rounded-full bg-[#1f3b2c] px-5 py-4 text-sm font-semibold text-white shadow-2xl shadow-[#1f3b2c]/30">{t.whatsapp}</a>
    </div>
  );
}
