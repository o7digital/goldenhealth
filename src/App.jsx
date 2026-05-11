import { useEffect, useState } from "react";

const services = [
  {
    icon: "✦",
    title: "Medicina de longevidad",
    text: "Evaluación integral para entender energía, metabolismo, inflamación, hábitos y objetivos de salud.",
    en: "Longevity medicine with a full assessment of energy, metabolism, inflammation, habits, and goals.",
  },
  {
    icon: "♡",
    title: "Anti-aging funcional",
    text: "Protocolos personalizados para vitalidad, prevención, recuperación y bienestar a largo plazo.",
    en: "Functional anti-aging protocols for vitality, prevention, recovery, and long-term wellbeing.",
  },
  {
    icon: "◌",
    title: "Hidratación intravenosa",
    text: "Terapias de soporte con enfoque clínico para rendimiento, equilibrio y recuperación profunda.",
    en: "Clinically guided IV support for performance, balance, and deep recovery.",
  },
  {
    icon: "☘",
    title: "Nutrición celular",
    text: "Planes de alimentación y suplementación diseñados para mejorar salud metabólica y calidad de vida.",
    en: "Cellular nutrition plans designed to improve metabolic health and quality of life.",
  },
  {
    icon: "⌁",
    title: "Ciencia del deporte",
    text: "Estrategias para personas activas que buscan fuerza, resistencia, descanso y mejor desempeño físico.",
    en: "Sports science strategies for strength, endurance, recovery, and physical performance.",
  },
  {
    icon: "◎",
    title: "Equilibrio cuerpo-mente",
    text: "Un enfoque integral que une medicina, hábitos, bienestar emocional y prevención inteligente.",
    en: "An integrated body-mind approach combining medicine, habits, emotional wellbeing, and prevention.",
  },
];

const method = [
  ["01", "Diagnóstico", "Primero entendemos tu estado actual: energía, sueño, nutrición, estrés, hábitos y objetivos.", "Diagnosis", "We first understand your current state: energy, sleep, nutrition, stress, habits, and goals."],
  ["02", "Protocolo", "Diseñamos una ruta personalizada con terapias, nutrición, suplementación y seguimiento.", "Protocol", "We design a personalized path with therapies, nutrition, supplementation, and follow-up."],
  ["03", "Acompañamiento", "Medimos progreso, ajustamos el plan y construimos hábitos sostenibles a largo plazo.", "Guidance", "We measure progress, adjust the plan, and build sustainable long-term habits."],
];

const products = [
  "Suplementación premium",
  "Protocolos funcionales",
  "Menú Golden Health",
  "Programas integrales",
];

const keywords = [
  "Longevidad", "Anti-aging", "Salud celular", "Medicina preventiva", "Nutrición funcional", "CDMX"
];

const sliderImages = [
  {
    src: "/images/golden-health/consulta-medica.jpg",
    alt: "Consulta médica Golden Health",
  },
  {
    src: "/images/golden-health/terapia-iv.jpg",
    alt: "Terapia intravenosa Golden Health",
  },
  {
    src: "/images/golden-health/nutricion.jpg",
    alt: "Nutrición funcional Golden Health",
  },
  {
    src: "/images/golden-health/comunidad.jpg",
    alt: "Comunidad Golden Health",
  },
];

export default function GoldenHealthMockup() {
  const [activeSlide, setActiveSlide] = useState(0);

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
            <a href="#metodo" className="hover:text-[#9b7a2f]">Método</a>
            <a href="#terapias" className="hover:text-[#9b7a2f]">Terapias</a>
            <a href="#tienda" className="hover:text-[#9b7a2f]">Tienda</a>
            <a href="#contacto" className="hover:text-[#9b7a2f]">Contacto</a>
          </nav>

          <a
            href="#contacto"
            className="hidden rounded-full bg-[#1f3b2c] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1f3b2c]/20 transition hover:-translate-y-0.5 hover:bg-[#14261c] md:inline-flex"
          >
            Agenda tu valoración
          </a>
        </div>
      </header>

      <main>
        <section className="relative min-h-[90vh] overflow-hidden">
          <div className="absolute inset-0">
            {sliderImages.map((slide, index) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
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
                Clínica de longevidad y bienestar integral en CDMX · Longevity clinic
              </div>

              <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-white md:text-7xl">
                Salud celular para vivir mejor, no solo vivir más.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82">
                Golden Health integra medicina preventiva, terapias biológicas, nutrición funcional y protocolos anti-aging para personas que buscan energía, equilibrio y bienestar medible.
              </p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-white/68">
                Golden Health combines preventive medicine, biological therapies, functional nutrition, and anti-aging protocols for measurable energy, balance, and wellbeing.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {keywords.map((item) => (
                  <span key={item} className="rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d3aa45] px-7 py-4 font-semibold text-[#14261c] shadow-xl shadow-[#d3aa45]/25 transition hover:-translate-y-0.5 hover:bg-[#c99c32]"
                >
                  Agendar valoración →
                </a>
                <a
                  href="#metodo"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/12 px-7 py-4 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
                >
                  Conocer el método
                </a>
              </div>

              <div className="mt-10 flex gap-2">
                {sliderImages.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    aria-label={`Mostrar slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      activeSlide === index ? "w-12 bg-[#d3aa45]" : "w-6 bg-white/35"
                    }`}
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
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d3aa45]">Método Golden Health</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                  Una experiencia médica, estética y funcional en una sola ruta.
                </h2>
                <p className="mt-5 leading-8 text-white/70">
                  Este bloque ayuda a que la cliente vea un sitio más ordenado, más premium y mucho más fácil de vender.
                </p>
                <p className="mt-3 leading-7 text-white/55">
                  A medical, aesthetic, and functional experience in one clear path.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {method.map(([num, title, text, titleEn, textEn]) => (
                  <div key={title} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                    <span className="text-sm font-semibold text-[#d3aa45]">{num}</span>
                    <p className="mt-4 text-xl font-semibold">{title}</p>
                    <p className="mt-3 text-sm leading-6 text-white/68">{text}</p>
                    <p className="mt-4 text-sm font-semibold text-[#d3aa45]/90">{titleEn}</p>
                    <p className="mt-2 text-sm leading-6 text-white/50">{textEn}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="terapias" className="px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">Terapias y servicios</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-5xl">
                Salud de alto nivel, presentada con claridad y confianza.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#607064]">
                La nueva arquitectura permite explicar cada servicio, mejorar conversión y preparar el sitio para SEO médico local en Ciudad de México.
              </p>
              <p className="mt-3 text-base leading-7 text-[#7a867b]">
                A clear service structure designed for trust, conversion, and local medical SEO in Mexico City.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon, title, text, en }) => (
                <div key={title} className="group rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1f3b2c]/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4ead0] text-2xl text-[#9b7a2f] transition group-hover:bg-[#1f3b2c] group-hover:text-[#d3aa45]">
                    {icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[#14261c]">{title}</h3>
                  <p className="mt-3 leading-7 text-[#607064]">{text}</p>
                  <p className="mt-3 text-sm leading-6 text-[#879184]">{en}</p>
                  <p className="mt-6 inline-flex text-sm font-semibold text-[#9b7a2f]">Ver detalle →</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2.7rem] bg-[#ecdfbf] p-8 lg:grid-cols-[1fr_0.9fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8a6a24]">Experiencia del paciente</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-5xl">
                Más confianza desde el primer scroll.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4f5c50]">
                El rediseño debe mostrar autoridad médica, cercanía y resultados posibles sin prometer milagros. Eso protege la marca y mejora la conversión.
              </p>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[#738073]">
                The experience communicates medical authority, warmth, and realistic progress without overpromising.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Consulta clara", "Explicación simple del proceso y próximos pasos."],
                ["Contenido médico", "Artículos, videos y educación para generar confianza."],
                ["Agenda visible", "Botón fijo a WhatsApp o formulario de valoración."],
                ["SEO local", "Páginas optimizadas para terapias y búsquedas en CDMX."],
              ].map(([title, text]) => (
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
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#14261c] text-2xl text-[#d3aa45]">
                🛍
              </div>
              <h2 className="mt-8 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-5xl">
                Tienda Golden Health
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#3f493f]">
                Una sección de productos más limpia, con categorías claras, fichas premium y llamadas a compra o consulta.
              </p>
              <p className="mt-3 text-base leading-7 text-[#657063]">
                A cleaner product section with clear categories, premium cards, and calls to purchase or consult.
              </p>
              <button className="mt-8 rounded-full bg-[#14261c] px-6 py-4 font-semibold text-white shadow-lg shadow-[#14261c]/20">
                Ver categorías →
              </button>
            </div>
            <div className="grid gap-4 p-8 md:grid-cols-2 lg:p-12">
              {products.map((product) => (
                <div key={product} className="rounded-3xl border border-[#efe6cd] bg-[#fbf8ef] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                  <p className="text-lg font-semibold text-[#14261c]">{product}</p>
                  <p className="mt-2 text-sm leading-6 text-[#6a756d]">Ficha optimizada para confianza, SEO y conversión.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="px-5 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">Contacto</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-5xl">
                Un cierre claro para convertir visitas en citas.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#607064]">
                Dirección, teléfono, correo y formulario deben estar visibles, con una llamada directa a WhatsApp y agenda.
              </p>
              <p className="mt-3 text-base leading-7 text-[#7a867b]">
                Address, phone, email, and form remain visible, with direct WhatsApp and booking access.
              </p>
              <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <p className="font-semibold text-[#14261c]">Propuesta comercial</p>
                <p className="mt-2 text-sm leading-6 text-[#607064]">
                  Este mockup se puede presentar como fase 1: rediseño visual, estructura SEO, contenidos base y preparación para agenda/WhatsApp.
                </p>
              </div>
            </div>
            <div className="rounded-[2rem] bg-[#14261c] p-8 text-white shadow-2xl shadow-[#14261c]/20">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="mt-1 text-[#d3aa45]">📍</span>
                  <div>
                    <p className="font-semibold">Lago Zúrich 96, Ampliación Granada</p>
                    <p className="text-white/70">Miguel Hidalgo, CP 11529, Ciudad de México</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="mt-1 text-[#d3aa45]">✉</span>
                  <div>
                    <p className="font-semibold">silvia.delmoral@goldenhealth.com.mx</p>
                    <p className="text-white/70">Atención personalizada</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="mt-1 text-[#d3aa45]">☎</span>
                  <div>
                    <p className="font-semibold">+55 55 5417 8009</p>
                    <p className="text-white/70">WhatsApp / llamadas</p>
                  </div>
                </div>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white placeholder:text-white/50 outline-none focus:border-[#d3aa45]/60" placeholder="Nombre" />
                <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white placeholder:text-white/50 outline-none focus:border-[#d3aa45]/60" placeholder="Teléfono" />
                <textarea className="min-h-28 rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white placeholder:text-white/50 outline-none focus:border-[#d3aa45]/60 sm:col-span-2" placeholder="¿Qué objetivo de salud te gustaría trabajar?" />
                <button className="rounded-full bg-[#d3aa45] px-6 py-4 font-semibold text-[#14261c] transition hover:-translate-y-0.5 hover:bg-[#c99c32] sm:col-span-2">
                  Enviar solicitud
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a href="#contacto" className="fixed bottom-5 right-5 z-50 rounded-full bg-[#1f3b2c] px-5 py-4 text-sm font-semibold text-white shadow-2xl shadow-[#1f3b2c]/30">
        WhatsApp / Agenda
      </a>
    </div>
  );
}
