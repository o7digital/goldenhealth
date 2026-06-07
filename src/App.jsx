import { useCallback, useEffect, useState } from "react";

const copy = {
  es: {
    nav: { home: "Inicio", program: "Programa Integral", history: "Historia", shop: "Tienda", consultations: "Consultas", news: "Noticias", contact: "Contacto" },
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
    contactTitle: "Agenda tu valoración Golden Health.",
    contactText: "Cuéntanos qué necesitas trabajar: longevidad, energía, nutrición funcional, anti-aging o bienestar integral. Nuestro equipo te orientará para elegir la valoración adecuada.",
    proposalTitle: "Atención personalizada",
    proposalText: "Cada valoración inicia con una revisión de tus objetivos, hábitos y estado actual para definir una ruta de acompañamiento clara y realista.",
    addressMeta: "Miguel Hidalgo, CP 11529, Ciudad de México",
    emailMeta: "Atención personalizada",
    phoneMeta: "WhatsApp / llamadas",
    namePlaceholder: "Nombre",
    phonePlaceholder: "Teléfono",
    messagePlaceholder: "¿Qué objetivo de salud te gustaría trabajar?",
    submit: "Enviar solicitud",
    whatsapp: "WhatsApp / Agenda",
    slideLabel: "Mostrar slide",
    programHomeTitle: "Longevidad y Anti-envejecimiento",
    programHomeText: "Es imposible detener el envejecimiento, pero en Golden Health contamos con tratamientos y programas para retrasar sus efectos, mejorar la calidad de vida y prevenir el envejecimiento prematuro.",
    newsEyebrow: "Noticias",
    newsTitle: "Comunidad Golden Health",
    newsText: "Videos, entrevistas, cápsulas y testimonios de la comunidad Golden Health.",
    shopIntro: "Tratamientos biológicos y protocolos funcionales con fichas completas, imagen real, precio y solicitud directa.",
    shopProducts: "Ver productos →",
    productSheet: "Ficha producto",
    viewSheet: "Ver ficha",
    includes: "Incluye",
    quantity: "Cantidad *",
    addToCart: "Agregar al carrito",
    backToShop: "Volver a tienda",
    medicalConsultations: "Consultas Médicas",
    ourServices: "Nuestros servicios",
    bookNow: "Reservar ahora",
    back: "‹ Volver",
    scheduleService: "Programa tu servicio",
    scheduleText: "Revisa nuestra disponibilidad y reserva la fecha y hora que más te convengan",
    selectDateTime: "Selecciona fecha y hora",
    timezone: "hora estándar central (GMT-6)",
    weekdays: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    noAvailability: "No hay disponibilidad",
    nextSession: "Próxima sesión disponible",
    serviceDetails: "Detalles del servicio",
    moreDetails: "Más detalles",
    servicePlaceholder: "Servicio de Golden Health. El motor real de reservas se integrará después.",
    next: "Siguiente",
    programBack: "Volver a Programa Integral",
    firstVideo: "Ver primer video",
    watchVideo: "VER VIDEO",
    whatItIncludes: "¿En qué consiste?",
    bookButton: "Reserva ahora",
    designedFor: "Diseñado para:",
    whatIsProgram: "¿Qué es este programa?",
    howTo: "¿Cómo lograrlo?",
    objectives: "¿Cuáles son los objetivos?",
    buy: "COMPRAR",
    strategicPartners: "Aliados estratégicos",
    pageTitles: {
      home: "Golden Health MX",
      programa: "Programa Integral | Golden Health MX",
      programaDetalle: "Programa Integral | Golden Health MX",
      historia: "Historia | Golden Health MX",
      tienda: "Tienda | Golden Health MX",
      producto: "Producto | Golden Health MX",
      consultas: "Consultas | Golden Health MX",
      booking: "Reservar consulta | Golden Health MX",
      noticias: "Noticias | Golden Health MX",
      contacto: "Contacto | Golden Health MX",
    },
    programSummary: {
      items: [
        ["Medicina Regenerativa", "Tratamiento de renovación celular de origen franco-suizo para regenerar y revitalizar órganos, apoyar la salud hormonal y frenar la degeneración celular."],
        ["Acción regenerativa bio-celular", "Tratamientos biológicos de origen alemán orientados a mineralizar, oxigenar y nutrir órganos y sistemas."],
        ["Escuela del arte", "Conferencias, seminarios web, podcast, cocina saludable y mindfulness para sostener el bienestar a largo plazo."],
        ["Deportistas de alto rendimiento", "Disciplina, movimiento, oxigenación y condición física para mejorar el funcionamiento físico y cognitivo."],
      ],
    },
    historyEyebrow: "Historia",
    historySubtitle: "Fundadora y médico responsable",
    historyParagraphs: [
      "Golden Health nace de la visión de la Dra. Silvia del Moral: integrar medicina preventiva, medicina regenerativa y bienestar funcional en una experiencia clara, humana y medible.",
      "Con más de 35 años de trayectoria en ciencias de la vida y cuidados de la salud, la Dra. Silvia ha desarrollado un enfoque que combina evaluación médica, terapias biológicas, nutrición y acompañamiento.",
      "Su formación incluye medicina, pediatría por el Instituto Nacional de Pediatría y estudios en el Goetheanum en Dornach, Suiza.",
      "La propuesta de Golden Health parte de entender el estado actual del paciente, diseñar una ruta personalizada y dar seguimiento para construir hábitos sostenibles.",
    ],
    continuingEducation: "Formación continua",
    businessExcellence: "Excelencia empresarial 2019",
  },
  en: {
    nav: { home: "Home", program: "Integral Program", history: "Story", shop: "Shop", consultations: "Consultations", news: "News", contact: "Contact" },
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
    contactTitle: "Book your Golden Health assessment.",
    contactText: "Tell us what you want to work on: longevity, energy, functional nutrition, anti-aging, or integral wellbeing. Our team will guide you toward the right assessment.",
    proposalTitle: "Personalized care",
    proposalText: "Each assessment starts with a review of your goals, habits, and current state to define a clear and realistic care path.",
    addressMeta: "Miguel Hidalgo, ZIP 11529, Mexico City",
    emailMeta: "Personalized care",
    phoneMeta: "WhatsApp / calls",
    namePlaceholder: "Name",
    phonePlaceholder: "Phone",
    messagePlaceholder: "Which health goal would you like to work on?",
    submit: "Send request",
    whatsapp: "WhatsApp / Booking",
    slideLabel: "Show slide",
    programHomeTitle: "Longevity and Anti-Aging",
    programHomeText: "Aging cannot be stopped, but Golden Health offers treatments and programs designed to slow its effects, improve quality of life, and help prevent premature aging.",
    newsEyebrow: "News",
    newsTitle: "Golden Health Community",
    newsText: "Videos, interviews, short capsules, and testimonials from the Golden Health community.",
    shopIntro: "Biological treatments and functional protocols with complete sheets, real product images, pricing, and direct requests.",
    shopProducts: "View products →",
    productSheet: "Product sheet",
    viewSheet: "View sheet",
    includes: "Includes",
    quantity: "Quantity *",
    addToCart: "Add to cart",
    backToShop: "Back to shop",
    medicalConsultations: "Medical Consultations",
    ourServices: "Our services",
    bookNow: "Book now",
    back: "‹ Back",
    scheduleService: "Schedule your service",
    scheduleText: "Check our availability and reserve the date and time that work best for you",
    selectDateTime: "Select date and time",
    timezone: "Central standard time (GMT-6)",
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    noAvailability: "No availability",
    nextSession: "Next available session",
    serviceDetails: "Service details",
    moreDetails: "More details",
    servicePlaceholder: "Golden Health service. The real booking engine will be integrated later.",
    next: "Next",
    programBack: "Back to Integral Program",
    firstVideo: "Watch first video",
    watchVideo: "WATCH VIDEO",
    whatItIncludes: "What does it include?",
    bookButton: "Book now",
    designedFor: "Designed for:",
    whatIsProgram: "What is this program?",
    howTo: "How do we achieve it?",
    objectives: "What are the objectives?",
    buy: "BUY",
    strategicPartners: "Strategic partners",
    pageTitles: {
      home: "Golden Health MX",
      programa: "Integral Program | Golden Health MX",
      programaDetalle: "Integral Program | Golden Health MX",
      historia: "Story | Golden Health MX",
      tienda: "Shop | Golden Health MX",
      producto: "Product | Golden Health MX",
      consultas: "Consultations | Golden Health MX",
      booking: "Book a consultation | Golden Health MX",
      noticias: "News | Golden Health MX",
      contacto: "Contact | Golden Health MX",
    },
    programSummary: {
      items: [
        ["Regenerative Medicine", "Cell-renewal treatment of Franco-Swiss origin designed to regenerate and revitalize organs, support hormonal health, and slow cellular degeneration."],
        ["Bio-cellular regenerative action", "German-origin biological treatments focused on mineralizing, oxygenating, and nourishing organs and systems."],
        ["The art school", "Conferences, webinars, podcasts, healthy cooking, and mindfulness to sustain long-term wellbeing."],
        ["High-performance athletes", "Discipline, movement, oxygenation, and physical conditioning to improve physical and cognitive performance."],
      ],
    },
    historyEyebrow: "Story",
    historySubtitle: "Founder and medical director",
    historyParagraphs: [
      "Golden Health was born from Dr. Silvia del Moral's vision: integrating preventive medicine, regenerative medicine, and functional wellbeing into a clear, human, and measurable experience.",
      "With more than 35 years in life sciences and health care, Dr. Silvia has developed an approach that combines medical evaluation, biological therapies, nutrition, and follow-up.",
      "Her training includes medicine, pediatrics at the National Institute of Pediatrics, and studies at the Goetheanum in Dornach, Switzerland.",
      "Golden Health starts by understanding each patient's current state, designing a personalized path, and following up to build sustainable habits.",
    ],
    continuingEducation: "Continuing education",
    businessExcellence: "Business excellence 2019",
  },
};

const programEnglish = {
  antroposofia: {
    title: "Anthroposophy",
    eyebrow: "Integral Program",
    intro: "Andres Munoz Cardenas is an anthroposophical psychologist who teaches a different, more integrated understanding of health.",
    profileTitle: "Andres Munoz Cardenas",
    profileSubtitle: "Founder and CEO of Kamino Florido",
    videoText: "Ongoing L.U.S. activity: the first of 12 conferences on creating the reality we long for through the 7 Steps of Freedom. Psychoanalysis and Anthroposophy.",
  },
  "arte-del-buen-comer-y-buen-beber": {
    title: "The Art of Eating and Drinking Well",
    eyebrow: "The art of eating well, drinking well, and living well",
    intro: "EATING IS A NEED, BUT EATING INTELLIGENTLY IS AN ART",
    programHeading: "DISCOVER THE PROGRAM",
    questionHeading: "What is it?",
    finalText: "Our art of eating and drinking well program is a healthy, intelligent, and balanced way of eating, inspired by leading nutrition programs. We guide patients toward a healthier lifestyle reflected in disease prevention, especially degenerative conditions, premature aging prevention, increased energy, and immune-system support.",
  },
  "menu-golden-health": {
    title: "Golden Health Menu",
    eyebrow: "Golden Health Menus",
    intro: "GOLDEN HEALTH MENUS",
  },
  "anti-aging": {
    title: "Regenerative Medicine",
    eyebrow: "Regenerative Medicine",
    intro: "These treatments aim to slow cellular degeneration and reactivate each person's health potential.",
    introExtra: "With these treatments, we help prevent and reverse premature aging.",
    diagnosticTitle: "Healthy Ageing Diagnosis",
    diagnosticText: "At the beginning of treatment, a medical consultation is held with our health expert, who determines the most appropriate treatment to slow aging and improve quality of life in each case.",
    regenerationTitle: "Advanced Cellular Regeneration Treatment",
  },
  "terapias-biologicas": {
    title: "Biological Therapies",
    eyebrow: "Biological Medicine",
    intro: "Biological medicine focuses on developing human potential through science, technology, and new health-care trends.",
  },
  "hidratacion-funcional": {
    title: "Functional Hydration",
    eyebrow: "Golden Health Authorized Partner",
    intro: "Kangen water is alkaline ionized water treated through electrolysis to alter its pH and create a unique molecular structure.",
  },
  "ciencia-del-deporte": {
    title: "Sports Science",
    eyebrow: "Program for high-performance athletes",
    intro: "\"You must cultivate the vigor of the body to preserve the spirit.\"",
    description: "This program builds discipline and stimulates purposeful movement to reach a state of energetic empowerment and excellent physical condition for daily goals.",
    designedFor: ["People who want to improve their physical condition or appearance.", "Learn new healthy habits to optimize natural detoxification."],
  },
  "equilibrio-mente-cuerpo-espiritu": {
    title: "Mind, Body, and Spirit Balance",
    eyebrow: "Body, Mind, and Spirit",
    intro: "Everything you need for an optimal state of health",
    objectivesIntro: "This program has two main objectives:",
    objectives: ["1. Recover general wellbeing through a learning experience.", "2. Continue the learning process in daily life through the knowledge and lifestyle habits acquired at Golden Health."],
  },
  "salud-nutricional": {
    title: "Nutritional Health",
    eyebrow: "Pioneers in test-based personalized nutrition",
    intro: "Challenging the status quo since 2005",
    nutritionTitle: "Introducing the new generation of nutrition",
    balanceText: "Get a clear view of your body's Omega 6:3 ratio and see your individual results before and after the BalanceTest.",
    deliveryItems: ["First delivery", "2 BalanceOil+, 300 ml", "2 BalanceOil, 100 ml", "2 BalanceTests*", "*One BalanceTest is included in your first delivery; the second is delivered after 120 days so you can compare before and after results."],
  },
};

const productEnglish = {
  "tratamientos-biologicos": ["Biological Treatments", "Biological support package for integral wellbeing and cellular balance.", ["10 sessions", "2 biological treatments", "Guidance to choose the protocol according to your goal"]],
  "tratamiento-antioxidante": ["Antioxidant Treatment", "Endocrine antioxidant therapy designed to protect, repair, and support vitality.", ["Citoplacell formula", "Antioxidant support", "Anti-aging and energy focus"]],
  "tratamiento-anti-inflamatorio": ["Anti-inflammatory Treatment", "Anti-inflammatory protocol to support recovery, mobility, and metabolic balance.", ["Bioenzym formula", "Anti-inflammatory support", "Focused on osteoarticular and systemic wellbeing"]],
  "tratamiento-sindrome-metabolico": ["Metabolic Syndrome Treatment", "Therapy for metabolic support and functional regulation.", ["Revercell formula", "Metabolism support", "Medical consultation recommended"]],
  "tratamiento-detox": ["Detox Treatment", "Detox protocol to support toxin elimination and digestive wellbeing.", ["Celltox formula", "Oral chelation", "Healthy habit support"]],
  "celulas-madre": ["Stem Cells", "Longevity activator focused on protection, repair, and revitalization.", ["Human Ultracell VI", "Treatment cycles", "Premium longevity protocol"]],
  "tratamiento-hormonal-hombre": ["Men's Hormonal Treatment", "Functional support for male hormonal-cycle regulation.", ["Androcell formula", "Male hormonal support", "Medical evaluation recommended"]],
  "tratamiento-hormonal-mujer": ["Women's Hormonal Treatment", "Functional support for female hormonal-cycle regulation.", ["Biofemin formula", "Female hormonal support", "Personalized follow-up"]],
};

const consultationEnglish = {
  "consulta-online-1": ["Online Consultation", "Available online", "30 min"],
  "consulta-presencial": ["In-person Consultation", "At the clinic", "1 hr"],
  "consultas-en-madrid": ["Madrid Consultations", "Available online", "1 hr"],
};

const withLocale = (item, translations, language) => {
  if (language !== "en") return item;
  const translated = translations[item.slug];
  if (!translated) return item;
  return { ...item, ...translated };
};

const sliderImages = [
  { src: "/images/golden-health/consulta-medica.webp", alt: { es: "Consulta médica Golden Health", en: "Golden Health medical consultation" } },
  { src: "/images/golden-health/terapia-iv.webp", alt: { es: "Terapia intravenosa Golden Health", en: "Golden Health IV therapy" } },
  { src: "/images/golden-health/nutricion.webp", alt: { es: "Nutrición funcional Golden Health", en: "Golden Health functional nutrition" } },
  { src: "/images/golden-health/comunidad.webp", alt: { es: "Comunidad Golden Health", en: "Golden Health community" } },
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
      ["Deportistas de alto rendimiento", "Disciplina, movimiento, oxigenacion y condicion fisica para lograr objetivos diarios y mejorar el funcionamiento cognitivo."],
    ],
  },
  {
    id: "biologicas",
    title: "Terapias Biológicas",
    intro: "La medicina biológica se enfoca en desarrollar el potencial humano apoyándose en la ciencia, la tecnología y nuevas tendencias para el cuidado de la salud. El programa acompaña a las personas para llevar vidas más saludables y activas.",
    image: "/images/source/programa/terapias-biologicas.webp",
    items: [
      ["Acción regenerativa de la ciencia biocelular", "Tratamientos biológicos de origen alemán para mineralizar, oxigenar y nutrir órganos y sistemas."],
      ["Energía, estrés y revitalización", "Restaura vitalidad ante desgaste físico, mental y emocional."],
      ["Inmunológico", "Fortalece y estimula defensas contra agresiones del medio ambiente."],
      ["Osteoarticular", "Apoyo para lesiones específicas, movilidad, tejidos, fuerza y flexibilidad."],
      ["Cara", "Tratamiento para enfatizar belleza interior y exterior de rostro y cuello."],
      ["Hormonal", "Apoyo para equilibrar sintomas hormonales en mujeres y hombres."],
      ["Detox", "Protocolo para eliminar toxinas y promover un estilo de vida mas saludable."],
    ],
  },
  {
    id: "nutricion",
    title: "Salud nutricional",
    intro: "Nutrición personalizada basada en pruebas. El objetivo es evitar la fase de prueba y error, encontrar la mejor manera de mejorar la salud con datos objetivos y guiar la suplementación según necesidades específicas.",
    image: "/images/source/programa/salud-nutricional.webp",
    items: [
      ["Nueva generación de la nutrición", "Pruebas de sangre seca como punto de partida natural para conocer el estado del cuerpo."],
      ["Datos objetivos", "Resultados para orientar decisiones y evitar suposiciones en el proceso de salud."],
      ["Suplementos adaptados", "Recomendaciones ajustadas a necesidades específicas para mantenerse en el camino adecuado."],
      ["Zinzino BalanceTest", "Herramienta de seguimiento para comparar progreso y ajustar la ingesta."],
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
    image: "/images/source/programa/arte-buen-comer.webp",
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
    image: "/images/source/programa/anti-aging.webp",
    items: [
      ["Healthy Ageing", "Tratamientos anti-edad orientados a vitalidad, prevención y regeneración."],
      ["Regeneración celular", "Protocolos para apoyar la salud celular y reducir señales de desgaste prematuro."],
      ["Potencial de salud", "Enfoque integral para reactivar equilibrio, energía y bienestar funcional."],
      ["Prevención", "Trabajo preventivo para conservar calidad de vida a largo plazo."],
    ],
  },
  {
    id: "hidratacion",
    title: "Hidratación Funcional",
    intro: "Introducción al agua Kangen: agua alcalina ionizada tratada mediante electrólisis para alterar su pH y crear una estructura molecular única, con un pH más alto y propiedades antioxidantes.",
    image: "/images/source/programa/hidratacion-funcional.webp",
    items: [
      ["Agua Kangen", "El agua pasa por una máquina de ionización que separa moléculas cargadas positiva y negativamente."],
      ["pH alcalino", "Proceso orientado a obtener agua con pH más alto y propiedades antioxidantes."],
      ["Socio autorizado Golden Health", "Golden Health presenta información y acceso a hidratación funcional."],
      ["Bienestar diario", "Apoyo a hábitos de hidratación dentro del programa integral."],
    ],
  },
  {
    id: "ciencia-deporte",
    title: "Ciencia del Deporte",
    intro: "Programa para deportistas de alto rendimiento. Busca crear disciplina y estimular la capacidad de movimiento con intención, propósito, empoderamiento energético y excelente condición física para alcanzar objetivos día a día.",
    image: "/images/source/programa/ciencia-deporte.webp",
    items: [
      ["Deportistas de alto rendimiento", "Trabajo orientado a disciplina, constancia y mejora física."],
      ["Movimiento con propósito", "Estimula la capacidad de movimiento con intención y objetivos claros."],
      ["Empoderamiento energético", "Enfoque para sostener energía, rendimiento y recuperación."],
      ["Condición física", "Apoyo para alcanzar metas diarias y mejorar desempeño."],
    ],
  },
  {
    id: "cuerpo-mente-espiritu",
    title: "Cuerpo, Mente y Espíritu",
    intro: "Todo lo que necesitas para un estado óptimo de salud. Este programa se dedica a la motivación y generación de conductas que llevan a encontrar inspiración en la vida cotidiana por medio de experiencias con uno mismo y los demás.",
    image: "/images/source/programa/cuerpo-mente-espiritu.webp",
    items: [
      ["Inspiración cotidiana", "Experiencias para ejercitar el espíritu y conectarse con el ser interior."],
      ["Equilibrio integral", "No hay buena salud sin equilibrio entre cuerpo, mente y espíritu."],
      ["Motivación", "Generación de conductas para sostener bienestar emocional y mental."],
      ["Conexión interior", "Espacio para fortalecer presencia, propósito y calidad de vida."],
    ],
  },
];

const programPages = [
  {
    slug: "antroposofia",
    title: "Antroposofía",
    eyebrow: "Programa Integral",
    image: "/images/source/programa/andres-munoz-cardenas.webp",
    intro: "Andrés Muñoz Cárdenas es psicólogo de orientación antroposófica que nos enseña una concepción diferente a la que conocíamos de lo que es la salud.",
    profileTitle: "Andrés Muñoz Cardenas",
    profileSubtitle: "Fundador de CEO de la escuela Kamino Florido",
    website: "https://www.kaminoflorido.com/",
    firstVideoUrl: "https://www.youtube.com/watch?v=f8nc4C0ZjIg&t=415s",
    videoTitle: "Los 7 Pasos de la Libertad - Crear realidad en tiempos de I.A. (inteligencia artificial)",
    videoUrl: "https://www.youtube.com/watch?v=Z-I3Vdl8VP0",
    videoText: "Actividad continua L.U.S. - 1era Conferencia del ciclo de 12 conferencias respecto de Crear la Realidad que Anhelamos a través de los 7 Pasos de la Libertad. Psicoanálisis y Antroposofía.",
    videoImage: "/images/source/programa/andres-munoz-antroposofia.webp",
    socialLinks: [
      ["Facebook", "http://www.facebook.com/WixEspanol", "f"],
      ["Twitter", "http://twitter.com/MundoWix", "x"],
      ["LinkedIn", "https://www.linkedin.com/company/wix-com", "in"],
    ],
    sections: [
      {
        title: "Andrés Muñoz Cárdenas",
        text: "Fundador de CEO de la escuela Kamino Florido. Andrés Muñoz Cárdenas es psicólogo de orientación antroposófica que nos enseña una concepción diferente a la que conocíamos de lo que es la salud.",
      },
      {
        title: "Los 7 Pasos de la Libertad - Crear realidad en tiempos de I.A.",
        text: "Actividad continua L.U.S. - 1era Conferencia del ciclo de 12 conferencias respecto de Crear la Realidad que Anhelamos a través de los 7 Pasos de la Libertad. Psicoanálisis y Antroposofía.",
      },
    ],
    links: [["https://www.kaminoflorido.com/", "https://www.kaminoflorido.com/"]],
  },
  {
    slug: "arte-del-buen-comer-y-buen-beber",
    title: "Arte del Buen Comer y Buen Beber",
    eyebrow: "El arte del buen comer, buen beber y bien vivir",
    image: "/images/source/programa/arte-buen-comer.webp",
    intro: "COMER ES UNA NECESIDAD, PERO COMER DE FORMA INTELIGENTE ES UN ARTE",
    programHeading: "CONOCÉ EL PROGRAMA",
    questionHeading: "¿Qué es?",
    menusHref: "/programa-integral/menu-golden-health",
    finalText: "Nuestro programa del arte del buen comer y el buen beber es una forma sana, inteligente y equilibrada de comer inspiradamente en las recomendaciones de los mejores programas de alimentación en el cual instruimos a nuestros pacientes a llevar un estilo de vida mas saludable que se ve reflejado en la prevención de enfermedades, especialmente las degenerativas, prevenir el envejecimiento prematuro, aumentar la energía e incrementar el sistema inmunológico.",
    gallery: [
      ["/images/source/programa/ensalada-golden-health.webp", "ENSALADA GOLDEN HEALTHMX.jpeg"],
      ["/images/source/programa/menu-vegetariano-golden-health.webp", "MENU VEGETARIANO GOLDENHEALTHMX.jpeg"],
    ],
    sections: [
      {
        title: "CLASES GRUPALES DE COCINA",
        kicker: "PROXIMAMENTE",
        text: "Aprende de los mejores coach de alimentación y expertos en el campo. ofrecemos clases en línea en donde aprenderás las mejores recetas fáciles y saludables para llevar una vida mas sana",
      },
      {
        title: "CLASE PRIVADA DE COCINA",
        kicker: "PROXIMAMENTE",
        text: "Aprende de los mejores coach de alimentación y expertos en el campo. ofrecemos clases privadas en donde aprenderás las mejores recetas fáciles y saludables para llevar una vida mas sana.",
      },
      {
        title: "MENU GOLDEN HEALTH",
        text: "Es fundamental que aprendamos nuevos hábitos saludables que nos ayuden a alcanzar el objetivo de vivir más y mejor. Descarga los mejores ménus para la semana.",
      },
      {
        title: "MENÚ BEBIDAS",
        text: "La nutrición es uno de los pilares fundamentales de nuestro programa, hemos diseñado un espacio para compartir los secretos de bebidas saludables",
      },
    ],
  },
  {
    slug: "menu-golden-health",
    title: "Menú Golden Health",
    eyebrow: "Ménus Golden Health",
    image: "/images/source/programa/alimentos-golden-health.webp",
    intro: "MÉNUS GOLDEN HEALTH",
    downloads: [
      ["MENÚ GOLDEN HEALTH", "https://www.goldenhealthmx.com/_files/ugd/e47656_a5b631e3351a47448a73a2d560f98691.pdf"],
      ["MENÚ CARNES", "https://www.goldenhealthmx.com/_files/ugd/e47656_4d8ac404c4bd40c389267c6e92a9ccb2.pdf"],
    ],
  },
  {
    slug: "anti-aging",
    title: "Medicina Regenerativa",
    eyebrow: "Medicina Regenerativa",
    image: "/images/source/programa/anti-aging-captura.webp",
    secondaryImage: "/images/source/programa/anti-aging-celulas-1.webp",
    tertiaryImage: "/images/source/programa/anti-aging-celulas-2.webp",
    intro: "El objetivo de estos tratamientos es frenar el proceso de degeneración celular y reactivar el potencial de salud de cada individuo.",
    introExtra: "Con estos tratamientos prevenimos y revertimos el envejecimiento prematuro.",
    diagnosticTitle: "Diagnóstico Healthy Ageing",
    diagnosticText: "Al inicio del tratamiento se realiza una consulta médica con nuestra experta en salud, quien determinará que tratamiento es el más adecuado para retardar el proceso de envejecimiento y mejorar la calidad de vida en cada caso.",
    reserveUrl: "https://www.goldenhealthmx.com/book-online",
    regenerationTitle: "Lo mas avanzado en tratamiento de Regeneración Celular",
    regenerationText: [
      "Resumen histórico de lo mas avanzado en tratamiento de regeneración celular para pacientes sanos y enfermos con la experiencia en Medicina Regenerativa y Anti envejecimiento.",
      "La aventura comienza en la década de 1930. El profesor Paul Niehans, pionero de la longevidad, que lideró en este momento muchas investigaciones sobre la capacidad de adaptación de las células, se destaca como líder de esta práctica, más conocida hoy como celuloterapia.",
      "¡Descubra la entrevista exclusiva del Prof. Dr. Ernst Theodor Rietschel, Jefe del equipo científico de Clinique La Prairie y adéntrese en el fantástico viaje del legendario Programa de Revitalización!",
    ],
    expertName: "Prof. Dr. Ernst Theodor Rietschel",
    sections: [
      {
        title: "Healthy Ageing",
        text: "Nuestros tratamientos antiedad están orientados a retardar el envejecimiento prematuro, prevenir enfermedades crónico degenerativas y padecimientos asociados al paso de los años.",
      },
      {
        title: "Diagnóstico Healthy Ageing",
        text: "Al inicio del tratamiento se realiza una consulta médica con nuestra experta en salud, quien determinará que tratamiento es el más adecuado para retardar el proceso de envejecimiento y mejorar la calidad de vida en cada caso.",
      },
      {
        title: "Regeneración celular",
        text: "Resumen histórico de lo más avanzado en regeneración celular, desde los trabajos pioneros de Paul Niehans hasta los programas modernos de revitalización.",
      },
    ],
  },
  {
    slug: "terapias-biologicas",
    title: "Terapias Biológicas",
    eyebrow: "Medicina Biológica",
    image: "/images/source/programa/terapias-biologicas.webp",
    intro: "La medicina biológica se enfoca en desarrollar el potencial humano apoyándose en la ciencia, la tecnología y nuevas tendencias para el cuidado de la salud.",
    sections: [
      {
        title: "Acción regenerativa de la ciencia biocelular",
        text: "Biotecnología orientada al envejecimiento prematuro, tratamientos sin efectos adversos, innovación médica enfocada en capacidades humanas y valor para una larga vida con salud.",
      },
      {
        title: "Procedimiento",
        text: "Introducción por vía intramuscular, subcutánea o subdérmica de enzimas, vitaminas, minerales y activadores de energía que estimulan órganos, tejidos y sistemas en el corto, mediano y largo plazo.",
      },
      {
        title: "Energía, estrés y revitalización",
        text: "Tratamiento biológico para restaurar la vitalidad del cuerpo y restituir desgaste físico, mental y emocional.",
      },
      {
        title: "Inmunológico",
        text: "Tratamiento para reforzar el sistema inmunológico, fortalecer y estimular defensas contra agresiones del medio ambiente.",
      },
      {
        title: "Osteoarticular",
        text: "Tratamiento para lesiones específicas que mejora movilidad, regenera tejidos y aumenta fuerza y flexibilidad.",
      },
      {
        title: "Cara, hormonal y detox",
        text: "Protocolos para rostro y cuello, equilibrio hormonal de mujeres y hombres, y detox para eliminar toxinas y apoyar un estilo de vida más saludable.",
      },
    ],
  },
  {
    slug: "hidratacion-funcional",
    title: "Hidratación Funcional",
    eyebrow: "Socio autorizado Golden Health",
    image: "/images/source/programa/hidratacion-funcional.webp",
    intro: "El agua Kangen es un tipo de agua alcalina ionizada tratada mediante electrólisis para alterar su pH y crear una estructura molecular única.",
    sections: [
      {
        title: "Introducción al agua Kangen",
        text: "Este proceso pasa el agua a través de una máquina de ionización que separa moléculas cargadas positiva y negativamente, creando agua con pH más alto y propiedades antioxidantes.",
      },
      {
        title: "Hidratación dentro del programa",
        text: "Golden Health presenta la hidratación funcional como parte de hábitos diarios para acompañar bienestar, equilibrio y prevención.",
      },
    ],
  },
  {
    slug: "ciencia-del-deporte",
    title: "Ciencia del Deporte",
    eyebrow: "Programa para deportistas de alto rendimiento",
    image: "/images/source/programa/deporte-golden-health.webp",
    secondaryImage: "/images/source/programa/deporte-alto-rendimiento.webp",
    intro: "“Tienes que cultivar el vigor del cuerpo para preservar el espíritu \"",
    quoteAuthor: "Luc de Clapiers",
    description: "Este programa busca crear disciplina y estimular la capacidad de movimiento que tenemos con una intensión y un propósito de alcanzar un estado de empoderamiento energético y una excelente condición física que nos permita alcanzar objetivos que tenemos día a día.",
    designedFor: [
      "Personas que deseen mejorar su estado o aspecto físico.",
      "Aprende nuevos hábitos saludables para optimizar la desintoxicación natural.",
    ],
    sections: [
      {
        title: "¿En qué consiste?",
        text: "Este programa busca crear disciplina y estimular la capacidad de movimiento que tenemos con una intensión y un propósito de alcanzar un estado de empoderamiento energético y una excelente condición física que nos permita alcanzar objetivos que tenemos día a día.",
      },
      {
        title: "Diseñado para",
        text: "Personas que deseen mejorar su estado o aspecto físico, aprender nuevos hábitos saludables y optimizar su desintoxicación natural.",
      },
    ],
  },
  {
    slug: "equilibrio-mente-cuerpo-espiritu",
    title: "Equilibrio Mente, Cuerpo, Espíritu",
    eyebrow: "Cuerpo, Mente y Espíritu",
    image: "/images/source/programa/cuerpo-mente-programa.webp",
    secondaryImage: "/images/source/programa/cuerpo-mente-lograrlo.webp",
    intro: "Todo lo que necesitas para un estado óptimo de salud",
    objectivesIntro: "Este programa tiene 2 objetivos principales:",
    objectives: [
      "1.-Recuperar el bienestar general gracias a una experiencia de aprendizaje.",
      "2.- Dar continuidad al proceso de aprendizaje en la vida cotidiana, gracias a lo conocimientos y a los hábitos de vida adquiridos en Golden Health.",
    ],
    sections: [
      {
        title: "¿Qué es este programa?",
        text: "Este programa se dedica a la motivación y generación de conductas que nos llevan a encontrar inspiración en la vida cotidiana por medio de experiencias con uno mismo y los demás. Esta experiencia es una excelente oportunidad para ejercitar su espíritu y conectarse con su ser interior.",
        extra: "Es imposible mantener una buena salud sin un equilibrio entre cuerpo, mente y espíritu. Es por ello que ofrecemos programas, conferencias, webinars y podcast enfocados en el equilibrio emocional y mental.",
      },
      {
        title: "¿Como lograrlo?",
        text: "Este programa tiene 2 objetivos principales:",
      },
      {
        title: "¿Cuales son los objetivos?",
        text: "Recuperar el bienestar general y dar continuidad al proceso de aprendizaje en la vida cotidiana.",
      },
    ],
  },
  {
    slug: "salud-nutricional",
    title: "Salud nutricional",
    eyebrow: "Pioneros de la nutrición personalizada basada en pruebas",
    image: "/images/source/programa/balance-oil-and-test-situational.webp",
    secondaryImage: "/images/source/programa/zinzino-balance-oil.webp",
    intro: "Desafiando el orden establecido desde 2005",
    brandTitle: "ZINZINO",
    brandText: [
      "Zinzino nació de un deseo de pensar diferente. La pareja emprendedora Hilde y Ørjan Sæle querían volver a sus raíces, a su gran pasión por compartir grandes experiencias de producto. Lo convirtieron en su misión para recuperar el enfoque centrado en el cliente en la venta directa. Un atrevido paso que también llevó su negocio a la vanguardia de la nutrición personalizada basada en pruebas.",
      "Hoy en día, Zinzino ha pasado de ser una pequeña empresa emergente escandinava a ser incluida en Nasdaq First North como una de las empresas de venta directa de más rápido crecimiento en el rango de la salud y el bienestar, que sigue desafiando el orden establecido. Nuestros clientes son lo primero.",
    ],
    nutritionTitle: "Le presentamos la nueva generación de la nutrición",
    nutritionText: [
      "Queremos evitarle la fase de prueba y error y que encuentre la mejor manera de mejorar su salud. Por eso, nuestras pruebas de sangre seca son un punto de partida natural. Le ofrecemos datos objetivos y le guiamos.",
      "Le proporcionamos los suplementos adaptados a sus necesidades específicas y le ayudamos a mantenerse en el camino adecuado.",
      "Comience su viaje hacia una vida en equilibrio con una prueba de mancha de sangre seca científica y confidencial. Averigüe el estado de su cuerpo y qué suplementos podría necesitar. Haga la prueba de nuevo cada 4 meses para seguir su progreso y ajustar su ingesta si fuese necesario.",
    ],
    buyUrl: "https://www.zinzino.com/shop/2016732291/MX/es-ES/products/shop/home-health-tests/",
    balanceTitle: "BalanceOil Kit with Test",
    balanceText: "Obtenga una visión clara sobre la relación Omega 6:3 de su cuerpo y vea los resultados individuales antes y después del BalanceTest. Luego, use Zinzino BalanceOil, una mezcla de primera calidad que contiene aceite natural de pescado, con alto contenido de Omega 3 (EPA + DHA), polifenoles de oliva y vitamina D3 para proteger las células de la oxidación y ajustar el equilibrio Omega 6:3 del cuerpo, promoviendo el funcionamiento normal del cerebro, el corazón y el sistema inmune.",
    deliveryItems: [
      "Primera entrega",
      "2 BalanceOil+, 300 ml",
      "2 BalanceOil, 100 ml",
      "2 BalanceTest*",
      "* Puedes encontrar un BalanceTest en tu primera entrega; el segundo BalanceTest se entregará al cabo de 120 días para que puedas hacerlo en el momento correcto para ver los resultados del “antes” y del “después”.",
    ],
    sections: [
      {
        title: "Nueva generación de la nutrición",
        text: "Las pruebas de sangre seca son un punto de partida natural para ofrecer datos objetivos, guiar decisiones y evitar la fase de prueba y error.",
      },
      {
        title: "Suplementos adaptados",
        text: "Se proporcionan suplementos adaptados a necesidades específicas y acompañamiento para mantenerse en el camino adecuado.",
      },
      {
        title: "BalanceOil Kit with Test",
        text: "Permite obtener una visión clara sobre la relación Omega 6:3 del cuerpo, ver resultados antes y después del BalanceTest, y ajustar el equilibrio con BalanceOil.",
      },
    ],
    links: [["COMPRAR", "https://www.zinzino.com/shop/2016732291/MX/es-ES/products/shop/home-health-tests/"]],
  },
];

const products = [
  {
    slug: "tratamientos-biologicos",
    name: "Tratamientos Biologicos",
    price: "$2,300.00",
    image: "/images/source/products/tratamientos-biologicos.webp",
    summary: "Paquete biologico de soporte para bienestar integral y equilibrio celular.",
    details: ["10 sesiones", "2 tratamientos biologicos", "Acompanamiento para elegir protocolo segun objetivo"],
  },
  {
    slug: "tratamiento-antioxidante",
    name: "Tratamiento Antioxidante",
    price: "$5,980.00",
    image: "/images/source/products/antioxidante.webp",
    summary: "Terapia antioxidante endocrina orientada a proteger, reparar y apoyar la vitalidad.",
    details: ["Formula Citoplacell", "Soporte antioxidante", "Enfoque anti-aging y energia"],
  },
  {
    slug: "tratamiento-anti-inflamatorio",
    name: "Tratamiento Anti-inflamatorio",
    price: "$4,200.00",
    image: "/images/source/products/antiinflamatorio.webp",
    summary: "Protocolo anti-inflamatorio para apoyar recuperacion, movilidad y equilibrio metabolico.",
    details: ["Formula Bioenzym", "Apoyo anti-inflamatorio", "Orientado a bienestar osteoarticular y sistemico"],
  },
  {
    slug: "tratamiento-sindrome-metabolico",
    name: "Tratamiento Sindrome Metabolico",
    price: "$7,250.00",
    image: "/images/source/products/sindrome-metabolico.webp",
    summary: "Terapia para acompanamiento metabolico y regulacion funcional.",
    details: ["Formula Revercell", "Apoyo al metabolismo", "Seguimiento recomendado con consulta"],
  },
  {
    slug: "tratamiento-detox",
    name: "Tratamiento Detox",
    price: "$4,200.00",
    image: "/images/source/products/detox.webp",
    summary: "Protocolo detox para apoyar eliminacion de toxinas y bienestar digestivo.",
    details: ["Formula Celltox", "Quelacion oral", "Apoyo a habitos saludables"],
  },
  {
    slug: "celulas-madre",
    name: "Celulas Madre",
    price: "$27,000.00",
    image: "/images/source/products/celulas-madre.webp",
    summary: "Activador de longevidad orientado a proteccion, reparacion y revitalizacion.",
    details: ["Human Ultracell VI", "Ciclos de tratamiento", "Protocolo premium de longevidad"],
  },
  {
    slug: "tratamiento-hormonal-hombre",
    name: "Tratamiento Hormonal Hombre",
    price: "$4,200.00",
    image: "/images/source/products/hormonal-hombre.webp",
    summary: "Soporte funcional para regulacion del ciclo hormonal masculino.",
    details: ["Formula Androcell", "Apoyo hormonal hombre", "Evaluacion medica recomendada"],
  },
  {
    slug: "tratamiento-hormonal-mujer",
    name: "Tratamiento Hormonal para la mujer",
    price: "$4,200.00",
    image: "/images/source/products/hormonal-mujer.webp",
    summary: "Soporte funcional para regulacion del ciclo hormonal femenino.",
    details: ["Formula Biofemin", "Apoyo hormonal mujer", "Seguimiento personalizado"],
  },
];

const consultations = [
  ["Consulta Online", "Disponible online", "30 min", "$500", "/images/source/consultas/consulta-online.webp", "consulta-online-1"],
  ["Consulta Presencial", "En clinica", "1 h", "$1,500", "/images/golden-health/consulta-medica.webp", "consulta-presencial"],
  ["Consultas en Madrid", "Disponible online", "1 h", "$1,500", "/images/source/consultas/consultas-madrid.webp", "consultas-en-madrid"],
];

const communityVideos = [
  {
    title: "ENTREVISTA CON PERLA",
    src: "https://video.wixstatic.com/video/e47656_5f84c412e45a48b9b1c9b41c2dadd514/1080p/mp4/file.mp4",
    poster: "https://static.wixstatic.com/media/e47656_5f84c412e45a48b9b1c9b41c2dadd514f000.jpg/v1/fill/w_540,h_960,al_c,q_85,enc_auto/e47656_5f84c412e45a48b9b1c9b41c2dadd514f000.jpg",
  },
  {
    title: "JADE1",
    src: "https://video.wixstatic.com/video/e47656_a8fb3c4559c14d5eb52053875f16ba62/1080p/mp4/file.mp4",
    poster: "https://static.wixstatic.com/media/e47656_a8fb3c4559c14d5eb52053875f16ba62f000.jpg/v1/fill/w_540,h_960,al_c,q_85,enc_auto/e47656_a8fb3c4559c14d5eb52053875f16ba62f000.jpg",
  },
  {
    title: "capsula 2",
    src: "https://video.wixstatic.com/video/e47656_cade056312b7450abb6eb2052e9db5de/1080p/mp4/file.mp4",
    poster: "https://static.wixstatic.com/media/e47656_cade056312b7450abb6eb2052e9db5def000.jpg/v1/fill/w_540,h_960,al_c,q_85,enc_auto/e47656_cade056312b7450abb6eb2052e9db5def000.jpg",
  },
  {
    title: "ENTREVISTA PIOLIN",
    src: "https://video.wixstatic.com/video/e47656_f4bbacab0c124c7983e930e63e317dfd/1080p/mp4/file.mp4",
    poster: "https://static.wixstatic.com/media/e47656_f4bbacab0c124c7983e930e63e317dfdf000.jpg/v1/fill/w_540,h_960,al_c,q_85,enc_auto/e47656_f4bbacab0c124c7983e930e63e317dfdf000.jpg",
  },
  {
    title: "Jade 2",
    src: "https://video.wixstatic.com/video/e47656_a7d21d8136dd4800bacb893966166f10/1080p/mp4/file.mp4",
    poster: "https://static.wixstatic.com/media/e47656_a7d21d8136dd4800bacb893966166f10f000.jpg/v1/fill/w_540,h_960,al_c,q_85,enc_auto/e47656_a7d21d8136dd4800bacb893966166f10f000.jpg",
  },
  {
    title: "Capsula 1 RP",
    src: "https://video.wixstatic.com/video/e47656_2f0aba4cbf844ef9a4c2fced67fe02fe/1080p/mp4/file.mp4",
    poster: "https://static.wixstatic.com/media/e47656_2f0aba4cbf844ef9a4c2fced67fe02fef000.jpg/v1/fill/w_540,h_960,al_c,q_85,enc_auto/e47656_2f0aba4cbf844ef9a4c2fced67fe02fef000.jpg",
  },
];

const socialLinks = [
  ["Instagram", "https://www.instagram.com/goldenhealthmx/?hl=es", "◎"],
  ["Facebook", "https://es-la.facebook.com/goldenhealthmx/", "f"],
  ["LinkedIn", "https://mx.linkedin.com/in/silviadelmoral", "in"],
  ["YouTube", "https://www.youtube.com/user/GoldenHealthSalud", "▶"],
];

export default function GoldenHealthMockup() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [path, setPath] = useState(() => window.location.pathname);
  const language = path === "/en" || path.startsWith("/en/") ? "en" : "es";
  const routePath = language === "en" ? path.replace(/^\/en(?=\/|$)/, "") || "/" : path;
  const t = copy[language];
  const page =
    routePath === "/historia" ? "historia" :
    routePath === "/programa-integral" ? "programa" :
    routePath.startsWith("/programa-integral/") ? "programaDetalle" :
    routePath === "/tienda" ? "tienda" :
    routePath === "/consultas" ? "consultas" :
    routePath === "/noticias" ? "noticias" :
    routePath === "/contacto" ? "contacto" :
    routePath.startsWith("/booking-calendar/") ? "booking" :
    routePath.startsWith("/producto/") ? "producto" :
    "home";
  const localizedPrograms = programPages.map((program) => withLocale(program, programEnglish, language));
  const localizedProducts = products.map((product) => {
    if (language !== "en" || !productEnglish[product.slug]) return product;
    const [name, summary, details] = productEnglish[product.slug];
    return { ...product, name, summary, details };
  });
  const localizedConsultations = consultations.map((consultation) => {
    if (language !== "en" || !consultationEnglish[consultation[5]]) return consultation;
    const [name, meta, duration] = consultationEnglish[consultation[5]];
    return [name, meta, duration, consultation[3], consultation[4], consultation[5]];
  });
  const selectedProgram = localizedPrograms.find((program) => routePath === `/programa-integral/${program.slug}`);
  const selectedProduct = localizedProducts.find((product) => routePath === `/producto/${product.slug}`);
  const selectedConsultation = localizedConsultations.find((consultation) => routePath === `/booking-calendar/${consultation[5]}`);
  const localizedHref = useCallback((href, locale = language) => {
    if (href.startsWith("/#")) return href;
    if (!href.startsWith("/")) return href;
    return locale === "en" ? `/en${href === "/" ? "" : href}` : href;
  }, [language]);
  const navLinks = [
    ["/", t.nav.home],
    ["/programa-integral", t.nav.program],
    ["/historia", t.nav.history],
    ["/tienda", t.nav.shop],
    ["/consultas", t.nav.consultations],
    ["/noticias", t.nav.news],
    ["/contacto", t.nav.contact],
  ];
  const navigate = (event, href) => {
    if (href.startsWith("/#")) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", localizedHref(href));
    setPath(window.location.pathname);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const switchLanguage = (locale) => {
    window.history.pushState({}, "", localizedHref(routePath, locale));
    setPath(window.location.pathname);
    setMobileMenuOpen(false);
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

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const origin = window.location.origin;
    const canonicalPath = localizedHref(routePath);
    const alternateEs = routePath;
    const alternateEn = localizedHref(routePath, "en");
    const pageTitle = t.pageTitles[page] || "Golden Health MX";
    const description = page === "programa" ? t.programHomeText : page === "contacto" ? t.contactText : t.heroText;

    document.title = pageTitle;

    const setMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };
    const setLink = (selector, attrs) => {
      let link = document.querySelector(selector);
      if (!link) {
        link = document.createElement("link");
        document.head.appendChild(link);
      }
      Object.entries(attrs).forEach(([key, value]) => link.setAttribute(key, value));
    };

    setMeta("description", description);
    setLink('link[rel="canonical"]', { rel: "canonical", href: `${origin}${canonicalPath}` });
    setLink('link[rel="alternate"][hreflang="es-MX"]', { rel: "alternate", hreflang: "es-MX", href: `${origin}${alternateEs}` });
    setLink('link[rel="alternate"][hreflang="en"]', { rel: "alternate", hreflang: "en", href: `${origin}${alternateEn}` });
    setLink('link[rel="alternate"][hreflang="x-default"]', { rel: "alternate", hreflang: "x-default", href: `${origin}${alternateEs}` });
  }, [language, localizedHref, page, routePath, t]);

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
              href === "/programa-integral" ? (
                <div key={href} className="group relative py-2">
                  <a href={localizedHref(href)} onClick={(event) => navigate(event, href)} className="hover:text-[#9b7a2f]">{label}</a>
                  <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 border-t-4 border-[#d0d0d0] bg-white py-3 text-[#535353] opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                    {localizedPrograms.map((program) => (
                      <a
                        key={program.slug}
                        href={localizedHref(`/programa-integral/${program.slug}`)}
                        onClick={(event) => navigate(event, `/programa-integral/${program.slug}`)}
                        className="block px-6 py-2.5 text-lg font-normal hover:bg-[#f7f3ea] hover:text-[#9b7a2f]"
                      >
                        {program.title}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={href} href={localizedHref(href)} onClick={(event) => navigate(event, href)} className="hover:text-[#9b7a2f]">{label}</a>
              )
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex rounded-full border border-[#1f3b2c]/15 bg-white/70 p-1 text-xs font-semibold text-[#1f3b2c] shadow-sm">
              {(["es", "en"]).map((locale) => (
                <a
                  key={locale}
                  href={localizedHref(routePath, locale)}
                  onClick={(event) => {
                    event.preventDefault();
                    switchLanguage(locale);
                  }}
                  className={`rounded-full px-3 py-2 transition ${
                    language === locale ? "bg-[#1f3b2c] text-white" : "hover:bg-[#f4ead0]"
                  }`}
                >
                  {locale.toUpperCase()}
                </a>
              ))}
            </div>
            <a
              href={localizedHref("/contacto")}
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
              href === "/programa-integral" ? (
                <div key={href}>
                  <a
	                    href={localizedHref(href)}
                    onClick={(event) => {
                      navigate(event, href);
                      setMobileMenuOpen(false);
                    }}
                    className="block rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-[#f4ead0]"
                  >
	                    {label}
                  </a>
                  <div className="ml-3 border-l border-[#1f3b2c]/10 pl-3">
                    {localizedPrograms.map((program) => (
                      <a
                        key={program.slug}
                        href={localizedHref(`/programa-integral/${program.slug}`)}
                        onClick={(event) => navigate(event, `/programa-integral/${program.slug}`)}
                        className="block rounded-xl px-4 py-2 text-sm text-[#607064] hover:bg-[#f4ead0]"
                      >
                        {program.title}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={href}
	                  href={localizedHref(href)}
                  onClick={(event) => {
                    navigate(event, href);
                    setMobileMenuOpen(false);
                  }}
                  className="block rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-[#f4ead0]"
                >
                  {label}
                </a>
              )
            ))}
            <a
	              href={localizedHref("/contacto")}
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
                <a href={localizedHref("/contacto")} onClick={(event) => navigate(event, "/contacto")} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d3aa45] px-7 py-4 font-semibold text-[#14261c] shadow-xl shadow-[#d3aa45]/25 transition hover:-translate-y-0.5 hover:bg-[#c99c32]">
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
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">{t.therapiesEyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-6xl">{t.therapiesTitle}</h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {t.services.map(([icon, title, text]) => (
                <a
                  key={title}
                  href={localizedHref("/programa-integral")}
                  onClick={(event) => navigate(event, "/programa-integral")}
                  className="group rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1f3b2c]/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4ead0] text-2xl text-[#9b7a2f] transition group-hover:bg-[#1f3b2c] group-hover:text-[#d3aa45]">{icon}</div>
                  <h3 className="mt-6 text-xl font-semibold text-[#14261c]">{title}</h3>
                  <p className="mt-3 leading-7 text-[#607064]">{text}</p>
                  <p className="mt-6 inline-flex text-sm font-semibold text-[#9b7a2f]">{t.details}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.7rem] bg-white p-8 shadow-xl ring-1 ring-black/5 lg:p-12">
	            {sourceSections.filter((section) => section.id === "programa").map((section) => (
	              <article key={section.id}>
	                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">{t.therapiesEyebrow}</p>
	                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-5xl">{t.programHomeTitle}</h2>
	                <p className="mt-6 text-xl leading-8 text-[#607064]">{t.programHomeText}</p>
                <div className="mt-10 grid gap-5 md:grid-cols-2">
	                  {t.programSummary.items.map(([title, text]) => (
	                    <div key={title} className="rounded-2xl bg-[#fbf8ef] p-6 ring-1 ring-[#efe6cd]">
                      <h3 className="text-xl font-semibold text-[#14261c]">{title}</h3>
                      <p className="mt-3 leading-7 text-[#607064]">{text}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.7rem] bg-[#e7d39b] p-8 shadow-sm ring-1 ring-black/5 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">{t.patientEyebrow}</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-5xl">{t.patientTitle}</h2>
                <p className="mt-5 text-lg leading-8 text-[#607064]">{t.patientText}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {t.patientCards.map(([title, text]) => (
                  <article key={title} className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-black/5">
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

        {page === "noticias" && (
        <section id="noticias" className="px-5 py-32 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.7rem] bg-white p-8 shadow-sm ring-1 ring-black/5 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">{t.newsEyebrow}</p>
                <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-5xl">{t.newsTitle}</h1>
                <p className="mt-5 text-lg leading-8 text-[#607064]">{t.newsText}</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {communityVideos.map((video) => (
                  <article key={video.title} className="overflow-hidden rounded-3xl bg-[#fbf8ef] shadow-sm ring-1 ring-[#efe6cd]">
                    <video
                      className="aspect-[9/16] w-full bg-[#14261c] object-cover"
                      controls
                      playsInline
                      preload="metadata"
                      poster={video.poster}
                      src={video.src}
                    />
                    <div className="p-5">
                      <p className="text-base font-semibold text-[#14261c]">{video.title}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        )}

        {page === "programa" && (
        <section id="programa-integral" className="px-5 py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">{t.therapiesEyebrow}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-5xl">{t.programHomeTitle}</h1>
              <p className="mt-5 text-lg leading-8 text-[#607064]">{t.programHomeText}</p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {localizedPrograms.map((program) => (
                <a
                  key={program.slug}
                  href={localizedHref(`/programa-integral/${program.slug}`)}
                  onClick={(event) => navigate(event, `/programa-integral/${program.slug}`)}
                  className="group overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1f3b2c]/10"
                >
                  <img src={program.image} alt={program.title} className="aspect-[4/3] w-full object-cover" />
                  <div className="p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7a2f]">{program.eyebrow}</p>
                    <h2 className="mt-3 text-xl font-semibold text-[#14261c]">{program.title}</h2>
                    <p className="mt-3 line-clamp-4 leading-7 text-[#607064]">{program.intro}</p>
	                    <p className="mt-6 inline-flex text-sm font-semibold text-[#9b7a2f]">{t.details}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        )}

        {page === "programaDetalle" && selectedProgram && (
        <section className="px-5 py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 text-sm text-[#607064]">
              <a href={localizedHref("/programa-integral")} onClick={(event) => navigate(event, "/programa-integral")} className="font-semibold text-[#9b7a2f]">{t.nav.program}</a>
              <span> / {selectedProgram.title}</span>
            </div>
            {selectedProgram.slug === "antroposofia" ? (
              <article className="overflow-hidden rounded-[2.7rem] bg-white shadow-xl ring-1 ring-black/5">
                <div className="p-8 text-center lg:p-12">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">{selectedProgram.eyebrow}</p>
                  <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-7xl">{selectedProgram.title}</h1>
                </div>
                <div className="grid gap-10 px-8 pb-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
                  <div className="flex justify-center">
                    <img src={selectedProgram.image} alt="Andres muñoz cardenas" className="aspect-square w-full max-w-md rounded-full object-cover shadow-xl ring-1 ring-black/5" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#14261c]">{selectedProgram.profileTitle}</h2>
                    <p className="mt-4 text-xl font-semibold text-[#9b7a2f]">{selectedProgram.profileSubtitle}</p>
                    <p className="mt-6 max-w-3xl text-xl leading-9 text-[#607064]">{selectedProgram.intro}</p>
                    <a href={selectedProgram.website} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-fit text-lg font-semibold text-[#9b7a2f] underline underline-offset-4">
                      {selectedProgram.website}
                    </a>
                    <div className="mt-6 flex gap-3">
                      {selectedProgram.socialLinks.map(([label, href, icon]) => (
                        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a8a8a8] text-sm font-semibold text-white transition hover:bg-[#1f3b2c]">
                          {icon}
                        </a>
                      ))}
                    </div>
                    <a href={selectedProgram.firstVideoUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit rounded-none bg-[#3f3f3f] px-8 py-4 font-serif text-xl text-white transition hover:bg-[#242424]">
                      Ver primero video
                    </a>
                  </div>
                </div>
                <div className="grid gap-10 border-t border-[#efe6cd] bg-[#fbf8ef] p-8 lg:grid-cols-[1fr_0.8fr] lg:p-12">
                  <div className="flex flex-col justify-center text-center lg:text-left">
                    <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#14261c] md:text-4xl">{selectedProgram.videoTitle}</h2>
                    <p className="mt-6 text-lg leading-8 text-[#607064]">{selectedProgram.videoText}</p>
                    <a href={selectedProgram.videoUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit self-center rounded-none bg-[#3f3f3f] px-8 py-4 font-serif text-xl text-white transition hover:bg-[#242424] lg:self-start">
                      VER VIDEO
                    </a>
                  </div>
                  <img src={selectedProgram.videoImage} alt="ANDRES MUÑOZ ANTROPOSOFIA" className="w-full rounded-[1.5rem] object-cover shadow-lg ring-1 ring-black/5" />
                </div>
                <div className="border-t border-[#efe6cd] px-8 py-7 lg:px-12">
                  <a href={localizedHref("/programa-integral")} onClick={(event) => navigate(event, "/programa-integral")} className="inline-flex rounded-full border border-[#14261c]/20 px-6 py-3 font-semibold text-[#14261c] hover:bg-[#f4ead0]">
                    {t.programBack}
                  </a>
                </div>
              </article>
            ) : selectedProgram.slug === "arte-del-buen-comer-y-buen-beber" ? (
              <article className="overflow-hidden rounded-[2.7rem] bg-white shadow-xl ring-1 ring-black/5">
                <div className="p-8 text-center lg:p-12">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">{t.nav.program}</p>
                  <h1 className="mt-4 text-4xl font-semibold uppercase tracking-[-0.03em] text-[#14261c] md:text-6xl">EL ARTE DEL BUEN COMER Y BUEN BEBER</h1>
                  <p className="mx-auto mt-6 max-w-4xl text-xl font-semibold uppercase leading-8 text-[#607064]">{selectedProgram.intro}</p>
                  <img src={selectedProgram.image} alt="ARTE DEL COMER GOLDEN HEALTH MX.jpeg" className="mx-auto mt-10 aspect-square w-full max-w-2xl rounded-[1.5rem] object-cover shadow-lg ring-1 ring-black/5" />
                </div>

                <div className="border-t border-[#efe6cd] bg-[#fbf8ef] px-8 py-12 text-center lg:px-12">
                  <h2 className="text-4xl font-semibold uppercase tracking-[-0.03em] text-[#14261c]">{selectedProgram.programHeading}</h2>
                  <p className="mt-4 text-3xl font-semibold text-[#14261c]">{selectedProgram.questionHeading}</p>
                  <a
                    href={selectedProgram.menusHref}
                    onClick={(event) => navigate(event, selectedProgram.menusHref)}
                    className="mt-8 inline-flex text-4xl font-semibold text-[#9b7a2f] underline underline-offset-8"
                  >
                    MENUS
                  </a>
                </div>

                <div className="grid gap-5 p-8 md:grid-cols-2 lg:grid-cols-4 lg:p-12">
                  {selectedProgram.sections.map((section) => (
                    <section key={section.title} className="rounded-2xl bg-[#fbf8ef] p-6 text-center ring-1 ring-[#efe6cd]">
                      <h3 className="text-xl font-semibold uppercase text-[#14261c]">{section.title}</h3>
                      {section.kicker && <p className="mt-1 text-sm font-semibold uppercase text-[#9b7a2f]">{section.kicker}</p>}
                      <p className="mt-4 text-sm leading-7 text-[#607064]">{section.text}</p>
                    </section>
                  ))}
                </div>

                <div className="grid gap-10 border-t border-[#efe6cd] p-8 lg:grid-cols-[1fr_0.9fr] lg:p-12">
                  <div className="flex flex-col justify-center">
                    <p className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#14261c] md:text-4xl">{selectedProgram.finalText}</p>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {selectedProgram.gallery.map(([src, alt]) => (
                      <img key={src} src={src} alt={alt} className="h-full min-h-80 w-full rounded-[1.5rem] object-cover shadow-lg ring-1 ring-black/5" />
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#efe6cd] px-8 py-7 lg:px-12">
                  <a href={localizedHref("/programa-integral")} onClick={(event) => navigate(event, "/programa-integral")} className="inline-flex rounded-full border border-[#14261c]/20 px-6 py-3 font-semibold text-[#14261c] hover:bg-[#f4ead0]">
                    {t.programBack}
                  </a>
                </div>
              </article>
            ) : selectedProgram.slug === "menu-golden-health" ? (
              <article className="overflow-hidden rounded-[2.7rem] bg-white shadow-xl ring-1 ring-black/5">
                <div className="grid gap-10 p-8 lg:grid-cols-[1fr_0.8fr] lg:p-12">
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">{t.nav.program}</p>
                    <h1 className="mt-4 text-5xl font-semibold uppercase tracking-[-0.04em] text-[#14261c] md:text-7xl">{selectedProgram.intro}</h1>
                    <div className="mt-10 flex flex-col gap-4 sm:max-w-md">
                      {selectedProgram.downloads.map(([label, href]) => (
                        <a
                          key={href}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-between rounded-none bg-[#3f3f3f] px-8 py-4 font-serif text-xl text-white transition hover:bg-[#242424]"
                        >
                          <span>{label}</span>
                          <span aria-hidden="true">›</span>
                        </a>
                      ))}
                    </div>
                  </div>
                  <img src={selectedProgram.image} alt="ALIMENTOS GOLDENHEALTHMX.jpeg" className="mx-auto aspect-[2/3] max-h-[760px] w-full max-w-md rounded-[1.5rem] object-cover shadow-lg ring-1 ring-black/5" />
                </div>
                <div className="border-t border-[#efe6cd] px-8 py-7 lg:px-12">
                  <a href={localizedHref("/programa-integral")} onClick={(event) => navigate(event, "/programa-integral")} className="inline-flex rounded-full border border-[#14261c]/20 px-6 py-3 font-semibold text-[#14261c] hover:bg-[#f4ead0]">
                    {t.programBack}
                  </a>
                </div>
              </article>
            ) : selectedProgram.slug === "anti-aging" ? (
              <article className="overflow-hidden rounded-[2.7rem] bg-white shadow-xl ring-1 ring-black/5">
                <div className="p-8 text-center lg:p-12">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">{t.nav.program}</p>
                  <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-7xl">{selectedProgram.title}</h1>
                  <h2 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-[#14261c]">{t.whatItIncludes}</h2>
                  <p className="mx-auto mt-5 max-w-4xl text-xl leading-9 text-[#607064]">{selectedProgram.intro}</p>
                  <p className="mx-auto mt-4 max-w-4xl text-xl leading-9 text-[#607064]">{selectedProgram.introExtra}</p>
                </div>

                <div className="grid gap-10 px-8 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
                  <img src={selectedProgram.image} alt="Captura de Pantalla 2023-01-10 a la(s) 17.57.30.png" className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover shadow-lg ring-1 ring-black/5" />
                  <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#14261c]">Healthy Ageing</h2>
                    <p className="mt-6 text-xl leading-9 text-[#607064]">{selectedProgram.sections[0].text}</p>
                  </div>
                </div>

                <div className="grid gap-10 border-t border-[#efe6cd] bg-[#fbf8ef] p-8 lg:grid-cols-[1fr_0.95fr] lg:p-12">
                  <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#14261c]">{selectedProgram.diagnosticTitle}</h2>
                    <p className="mt-6 text-xl leading-9 text-[#607064]">{selectedProgram.diagnosticText}</p>
                    <a href={selectedProgram.reserveUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit rounded-none bg-[#3f3f3f] px-8 py-4 font-serif text-xl text-white transition hover:bg-[#242424]">
                      Reserva ahora
                    </a>
                  </div>
                  <img src={selectedProgram.secondaryImage} alt="ANTIAGINGCELULASMADREGOLDENHEALTHMX.jpeg" className="h-full min-h-[460px] w-full rounded-[1.5rem] object-cover shadow-lg ring-1 ring-black/5" />
                </div>

                <div className="grid gap-10 border-t border-[#efe6cd] p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
                  <img src={selectedProgram.tertiaryImage} alt="ANTIAGINGCELULASMADREGOLDENHEALTHMX.jpeg" className="h-full min-h-[460px] w-full rounded-[1.5rem] object-cover shadow-lg ring-1 ring-black/5" />
                  <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#14261c]">{selectedProgram.regenerationTitle}</h2>
                    <div className="mt-6 space-y-5 text-xl leading-9 text-[#607064]">
                      {selectedProgram.regenerationText.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <p className="mt-8 text-lg font-semibold text-[#9b7a2f]">{selectedProgram.expertName}</p>
                  </div>
                </div>

                <div className="border-t border-[#efe6cd] px-8 py-7 lg:px-12">
                  <a href={localizedHref("/programa-integral")} onClick={(event) => navigate(event, "/programa-integral")} className="inline-flex rounded-full border border-[#14261c]/20 px-6 py-3 font-semibold text-[#14261c] hover:bg-[#f4ead0]">
                    {t.programBack}
                  </a>
                </div>
              </article>
            ) : selectedProgram.slug === "ciencia-del-deporte" ? (
              <article className="overflow-hidden rounded-[2.7rem] bg-white shadow-xl ring-1 ring-black/5">
                <div className="p-8 text-center lg:p-12">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">{t.nav.program}</p>
                  <h1 className="mx-auto mt-4 max-w-5xl text-4xl font-semibold uppercase tracking-[-0.03em] text-[#14261c] md:text-6xl">PROGRAMA PARA DEPORTISTAS DE ALTO RENDIMIENTO</h1>
                  <blockquote className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-[#607064]">
                    <p>{selectedProgram.intro}</p>
                    <footer className="mt-2 font-semibold text-[#9b7a2f]">{selectedProgram.quoteAuthor}</footer>
                  </blockquote>
                </div>

                <div className="grid gap-10 px-8 pb-12 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
                  <img src={selectedProgram.image} alt="DEPORTEGOLDENHEALTHMX.jpeg" className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover shadow-lg ring-1 ring-black/5" />
                  <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#14261c]">{t.whatItIncludes}</h2>
                    <p className="mt-6 text-xl leading-9 text-[#607064]">{selectedProgram.description}</p>
                  </div>
                </div>

                <div className="grid gap-10 border-t border-[#efe6cd] bg-[#fbf8ef] p-8 lg:grid-cols-[1fr_0.9fr] lg:p-12">
                  <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#14261c]">{t.designedFor}</h2>
                    <ul className="mt-8 space-y-5 text-xl leading-8 text-[#607064]">
                      {selectedProgram.designedFor.map((item) => (
                        <li key={item} className="flex gap-4">
                          <span className="text-[#9b7a2f]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <img src={selectedProgram.secondaryImage} alt="240fbbcc54f5c9451ae6da4ddde9263e.jpeg" className="h-full min-h-[420px] w-full rounded-[1.5rem] object-cover shadow-lg ring-1 ring-black/5" />
                </div>

                <div className="border-t border-[#efe6cd] px-8 py-7 lg:px-12">
                  <a href={localizedHref("/programa-integral")} onClick={(event) => navigate(event, "/programa-integral")} className="inline-flex rounded-full border border-[#14261c]/20 px-6 py-3 font-semibold text-[#14261c] hover:bg-[#f4ead0]">
                    {t.programBack}
                  </a>
                </div>
              </article>
            ) : selectedProgram.slug === "equilibrio-mente-cuerpo-espiritu" ? (
              <article className="overflow-hidden rounded-[2.7rem] bg-white shadow-xl ring-1 ring-black/5">
                <div className="p-8 text-center lg:p-12">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">{t.nav.program}</p>
                  <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-7xl">Cuerpo, Mente y Espíritu</h1>
                  <p className="mt-6 text-xl leading-8 text-[#607064]">{selectedProgram.intro}</p>
                </div>

                <div className="grid gap-10 px-8 pb-12 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
                  <img src={selectedProgram.image} alt="5846111ef0cee33ce4b8986bfce78786.jpeg" className="h-full min-h-[480px] w-full rounded-[1.5rem] object-cover shadow-lg ring-1 ring-black/5" />
                  <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#14261c]">{t.whatIsProgram}</h2>
                    <p className="mt-6 text-xl leading-9 text-[#607064]">{selectedProgram.sections[0].text}</p>
                    <p className="mt-5 text-xl leading-9 text-[#607064]">{selectedProgram.sections[0].extra}</p>
                  </div>
                </div>

                <div className="grid gap-10 border-t border-[#efe6cd] bg-[#fbf8ef] p-8 lg:grid-cols-[1fr_0.85fr] lg:p-12">
                  <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#14261c]">{t.howTo}</h2>
                    <p className="mt-6 text-xl leading-8 text-[#607064]">{selectedProgram.objectivesIntro}</p>
                    <div className="mt-8 space-y-5 text-xl leading-8 text-[#607064]">
                      {selectedProgram.objectives.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                    <h3 className="mt-10 text-3xl font-semibold tracking-[-0.03em] text-[#14261c]">{t.objectives}</h3>
                  </div>
                  <img src={selectedProgram.secondaryImage} alt="9db7e64eee11ec1b341fffb2e7c00a79.jpeg" className="h-full min-h-[480px] w-full rounded-[1.5rem] object-cover shadow-lg ring-1 ring-black/5" />
                </div>

                <div className="border-t border-[#efe6cd] px-8 py-7 lg:px-12">
                  <a href={localizedHref("/programa-integral")} onClick={(event) => navigate(event, "/programa-integral")} className="inline-flex rounded-full border border-[#14261c]/20 px-6 py-3 font-semibold text-[#14261c] hover:bg-[#f4ead0]">
                    {t.programBack}
                  </a>
                </div>
              </article>
            ) : selectedProgram.slug === "salud-nutricional" ? (
              <article className="overflow-hidden rounded-[2.7rem] bg-white shadow-xl ring-1 ring-black/5">
                <div className="grid gap-10 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">{selectedProgram.eyebrow}</p>
                    <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-7xl">{selectedProgram.brandTitle}</h1>
                    <h2 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-[#14261c]">{selectedProgram.intro}</h2>
                    <div className="mt-6 space-y-5 text-lg leading-8 text-[#607064]">
                      {selectedProgram.brandText.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <a href={selectedProgram.buyUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit rounded-none bg-[#3f3f3f] px-8 py-4 font-serif text-xl text-white transition hover:bg-[#242424]">
                      COMPRAR
                    </a>
                  </div>
                  <img src={selectedProgram.image} alt="balance-oil-and-test-situational.webp" className="h-full min-h-[460px] w-full rounded-[1.5rem] object-cover shadow-lg ring-1 ring-black/5" />
                </div>

                <div className="border-t border-[#efe6cd] bg-[#fbf8ef] p-8 text-center lg:p-12">
                  <h2 className="mx-auto max-w-4xl text-4xl font-semibold tracking-[-0.03em] text-[#14261c] md:text-5xl">{selectedProgram.nutritionTitle}</h2>
                  <div className="mx-auto mt-8 max-w-4xl space-y-5 text-lg leading-8 text-[#607064]">
                    {selectedProgram.nutritionText.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                <div className="grid gap-10 border-t border-[#efe6cd] p-8 lg:grid-cols-[1fr_0.9fr] lg:p-12">
                  <div className="flex flex-col justify-center">
                    <h2 className="text-4xl font-semibold tracking-[-0.03em] text-[#14261c]">{selectedProgram.balanceTitle}</h2>
                    <p className="mt-6 text-xl leading-9 text-[#607064]">{selectedProgram.balanceText}</p>
                    <ul className="mt-8 space-y-4 text-lg leading-8 text-[#607064]">
                      {selectedProgram.deliveryItems.map((item) => (
                        <li key={item} className="flex gap-4">
                          <span className="text-[#9b7a2f]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={selectedProgram.buyUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit rounded-none bg-[#3f3f3f] px-8 py-4 font-serif text-xl text-white transition hover:bg-[#242424]">
                      COMPRAR
                    </a>
                  </div>
                  <img src={selectedProgram.secondaryImage} alt="Zinzino.png" className="h-full min-h-[460px] w-full rounded-[1.5rem] object-contain shadow-lg ring-1 ring-black/5" />
                </div>

                <div className="border-t border-[#efe6cd] px-8 py-7 lg:px-12">
                  <a href={localizedHref("/programa-integral")} onClick={(event) => navigate(event, "/programa-integral")} className="inline-flex rounded-full border border-[#14261c]/20 px-6 py-3 font-semibold text-[#14261c] hover:bg-[#f4ead0]">
                    {t.programBack}
                  </a>
                </div>
              </article>
            ) : (
              <article className="overflow-hidden rounded-[2.7rem] bg-white shadow-xl ring-1 ring-black/5">
                <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="bg-[#f3ead3]">
                    <img src={selectedProgram.image} alt={selectedProgram.title} className="h-full min-h-[360px] w-full object-cover" />
                  </div>
                  <div className="p-8 lg:p-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">{selectedProgram.eyebrow}</p>
                    <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-6xl">{selectedProgram.title}</h1>
                    <p className="mt-6 text-xl leading-9 text-[#607064]">{selectedProgram.intro}</p>
                    {selectedProgram.links && (
                      <div className="mt-8 flex flex-wrap gap-3">
                        {selectedProgram.links.map(([label, href]) => (
                          <a key={href} href={href} target="_blank" rel="noreferrer" className="inline-flex rounded-none bg-[#3f3f3f] px-7 py-3 font-serif text-lg text-white transition hover:bg-[#242424]">
                            {label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="grid gap-5 p-8 md:grid-cols-2 lg:p-12">
                  {selectedProgram.sections.map((section) => (
                    <section key={section.title} className="rounded-2xl bg-[#fbf8ef] p-6 ring-1 ring-[#efe6cd]">
                      <h2 className="text-2xl font-semibold text-[#14261c]">{section.title}</h2>
                      <p className="mt-3 leading-8 text-[#607064]">{section.text}</p>
                    </section>
                  ))}
                </div>
                <div className="border-t border-[#efe6cd] px-8 py-7 lg:px-12">
                  <a href={localizedHref("/programa-integral")} onClick={(event) => navigate(event, "/programa-integral")} className="inline-flex rounded-full border border-[#14261c]/20 px-6 py-3 font-semibold text-[#14261c] hover:bg-[#f4ead0]">
                    {t.programBack}
                  </a>
                </div>
              </article>
            )}
          </div>
        </section>
        )}

        {page === "historia" && (
        <section id="historia" className="px-5 py-32 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.7rem] bg-[#14261c] p-8 text-white lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d3aa45]">{t.historyEyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">Dra. Silvia del Moral</h2>
              <p className="mt-3 text-xl text-white/80">{t.historySubtitle}</p>
              <img
                src="/images/source/history/dra-silvia.webp"
                alt="Dra. Silvia del Moral, fundadora de Golden Health"
                className="aspect-[4/5] w-full max-w-sm rounded-[2rem] object-cover shadow-2xl shadow-black/25"
              />
            </div>
            <div className="space-y-5 leading-8 text-white/74">
              {t.historyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <img src="/images/source/history/certificado.webp" alt="Certificado Dra. Silvia del Moral" className="aspect-[4/3] w-full rounded-xl object-cover" />
                  <p className="mt-3 text-sm font-semibold text-[#d3aa45]">{t.continuingEducation}</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <img src="/images/source/history/bid-group.webp" alt="International Star for Quality 2017" className="mx-auto h-24 w-24 rounded-full object-cover" />
                  <p className="mt-3 text-sm font-semibold text-[#d3aa45]">International Star for Quality 2017</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <img src="/images/source/history/bizz-awards.webp" alt="Excelencia empresarial 2019" className="mx-auto h-24 w-24 object-contain" />
                  <p className="mt-3 text-sm font-semibold text-[#d3aa45]">{t.businessExcellence}</p>
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
	              <p className="mt-5 text-lg leading-8 text-[#3f493f]">{t.shopIntro}</p>
	              <a href="#productos" className="mt-8 inline-flex rounded-full bg-[#14261c] px-6 py-4 font-semibold text-white shadow-lg shadow-[#14261c]/20">{t.shopProducts}</a>
            </div>
            <div id="productos" className="grid gap-5 p-8 md:grid-cols-2 lg:p-12">
	              {localizedProducts.map((product) => (
                <a
                  key={product.slug}
	                  href={localizedHref(`/producto/${product.slug}`)}
                  onClick={(event) => navigate(event, `/producto/${product.slug}`)}
                  className="group overflow-hidden rounded-3xl border border-[#efe6cd] bg-[#fbf8ef] transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#1f3b2c]/10"
                >
                  <img src={product.image} alt={product.name} className="aspect-[4/3] w-full bg-white object-contain p-4" />
                  <div className="p-6">
                    <p className="text-lg font-semibold text-[#14261c]">{product.name}</p>
                    <p className="mt-2 text-sm leading-6 text-[#6a756d]">{product.summary}</p>
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <p className="text-xl font-semibold text-[#9b7a2f]">{product.price}</p>
	                      <span className="rounded-full bg-[#14261c] px-4 py-2 text-sm font-semibold text-white">{t.viewSheet}</span>
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
              <a href={localizedHref("/tienda")} onClick={(event) => navigate(event, "/tienda")} className="font-semibold text-[#9b7a2f]">{t.nav.shop}</a>
              <span> / {selectedProduct.name}</span>
            </div>
            <div className="grid gap-10 rounded-[2.7rem] bg-white p-8 shadow-xl ring-1 ring-black/5 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
              <div className="rounded-[2rem] bg-[#fbf8ef] p-6">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="aspect-square w-full object-contain" />
              </div>
              <div>
	                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">{t.productSheet}</p>
                <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-6xl">{selectedProduct.name}</h1>
                <p className="mt-5 text-3xl font-semibold text-[#9b7a2f]">{selectedProduct.price}</p>
                <p className="mt-6 text-lg leading-8 text-[#607064]">{selectedProduct.summary}</p>
                <div className="mt-8 rounded-3xl bg-[#14261c] p-6 text-white">
	                  <p className="font-semibold text-[#d3aa45]">{t.includes}</p>
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
	                  <p className="text-sm font-semibold text-[#607064]">{t.quantity}</p>
                  <div className="mt-3 inline-flex h-14 items-center overflow-hidden border border-[#14261c]/25 bg-white">
                    <button type="button" className="h-full w-14 text-2xl text-[#9b9b9b]">−</button>
                    <span className="flex h-full w-14 items-center justify-center border-x border-[#14261c]/15 text-[#14261c]">1</span>
                    <button type="button" className="h-full w-14 text-2xl text-[#14261c]">+</button>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
	                  <button type="button" className="inline-flex justify-center rounded-none bg-[#3f3f3f] px-10 py-4 font-serif text-xl text-white transition hover:bg-[#242424] sm:min-w-80">{t.addToCart}</button>
	                  <a href={localizedHref("/tienda")} onClick={(event) => navigate(event, "/tienda")} className="inline-flex justify-center rounded-none border border-[#14261c]/20 px-7 py-4 font-semibold text-[#14261c]">{t.backToShop}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}

        {page === "consultas" && (
        <section id="consultas" className="px-5 py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
	              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b7a2f]">{t.medicalConsultations}</p>
	              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#14261c] md:text-5xl">{t.ourServices}</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
	              {localizedConsultations.map(([name, meta, duration, price, image, slug]) => (
                <div key={name} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5">
                  <img src={image} alt={name} className="aspect-[4/2.7] w-full object-cover" />
                  <div className="p-7">
                    <p className="text-xl font-semibold text-[#14261c]">{name}</p>
                    <p className="mt-2 text-sm text-[#9b7a2f]">{meta}</p>
                    <div className="mt-6 flex items-end justify-between gap-4 border-t border-[#e5dfd1] pt-6">
                      <p className="text-[#607064]">{duration}</p>
                      <p className="text-3xl font-semibold text-[#14261c]">{price}</p>
                    </div>
	                    <a href={localizedHref(`/booking-calendar/${slug}`)} onClick={(event) => navigate(event, `/booking-calendar/${slug}`)} className="mt-6 inline-flex w-full justify-center rounded-full bg-[#1f3b2c] px-5 py-3 font-semibold text-white">{t.bookNow}</a>
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
            <a href={localizedHref("/consultas")} onClick={(event) => navigate(event, "/consultas")} className="inline-flex items-center gap-2 text-lg text-[#607064]">{t.back}</a>
            <div className="mt-16">
	              <h1 className="font-serif text-5xl text-[#3f3f3f]">{t.scheduleService}</h1>
	              <p className="mt-6 text-xl leading-8 text-[#607064]">{t.scheduleText}</p>
            </div>
            <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_0.55fr]">
              <div>
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#d6d2ca] pb-4">
	                  <h2 className="font-serif text-3xl text-[#3f3f3f]">{t.selectDateTime}</h2>
	                  <p className="text-[#aaa39b]">{t.timezone}</p>
                </div>
                <div className="mt-8 flex items-center justify-center gap-14 text-2xl text-[#777]">
                  <span>‹</span>
                  <span>May - Jun 2026</span>
                  <span>›</span>
                </div>
                <div className="mt-10 grid grid-cols-7 text-center text-[#c8c3bd]">
	                  {t.weekdays.map((day, index) => (
                    <div key={day} className="space-y-3">
                      <p>{day}</p>
                      <p className="text-2xl">{index === 0 ? "31" : index}</p>
                    </div>
                  ))}
                </div>
	                <p className="mt-28 text-center text-2xl text-[#8a8580]">{t.noAvailability}</p>
                <div className="mt-12 flex justify-center">
	                  <button type="button" className="bg-[#9e9e9e] px-24 py-5 font-serif text-2xl text-white">{t.nextSession}</button>
                </div>
              </div>
              <aside>
	                <h2 className="border-b border-[#d6d2ca] pb-4 font-serif text-3xl text-[#3f3f3f]">{t.serviceDetails}</h2>
                <div className="mt-8 space-y-5 text-xl text-[#607064]">
                  <p>{selectedConsultation[0]}</p>
                  <p>{selectedConsultation[2]}</p>
                  <p>{selectedConsultation[3]}</p>
                  <details className="border-t border-[#e2ddd4] pt-5">
	                    <summary className="cursor-pointer">{t.moreDetails}</summary>
	                    <p className="mt-4 text-base leading-7">{t.servicePlaceholder}</p>
                  </details>
                </div>
	                <button type="button" className="mt-10 w-full bg-[#c7c7c7] px-8 py-5 font-serif text-2xl text-white">{t.next}</button>
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
                    <a href="mailto:silvia.delmoral@goldenhealth.com.mx" className="select-text break-all font-semibold underline-offset-4 hover:underline">
                      silvia.delmoral@goldenhealth.com.mx
                    </a>
                    <p className="text-white/70 break-words">{t.emailMeta}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-[#d3aa45]">☎</span>
                  <div className="min-w-0">
                    <a href="tel:+525554178009" className="select-text break-words font-semibold underline-offset-4 hover:underline">
                      +55 55 5417 8009
                    </a>
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
              <a href="mailto:silvia.delmoral@goldenhealth.com.mx" className="block select-text break-all underline-offset-4 hover:underline">
                silvia.delmoral@goldenhealth.com.mx
              </a>
              <a href="tel:+525554178009" className="block select-text underline-offset-4 hover:underline">
                +55 55 5417 8009
              </a>
            </div>
            <div className="mt-7 flex justify-center gap-3 md:justify-start">
              {socialLinks.map(([label, href, icon]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a8a8a8] text-lg font-semibold text-white transition hover:bg-[#14261c] focus:outline-none focus:ring-2 focus:ring-[#9b7a2f] focus:ring-offset-2"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="font-serif text-5xl font-semibold tracking-normal text-black">{t.strategicPartners}</h2>
            <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-4">
              <img src="/images/source/footer/enagic.png" alt="Enagic" className="max-h-24 w-auto object-contain" />
              <img src="/images/source/footer/incruises.png" alt="inCruises" className="max-h-16 w-auto object-contain" />
              <div aria-label="ZINZINO" className="text-3xl font-black uppercase tracking-normal text-black">ZINZINO</div>
              <img src="/images/source/footer/royal-prestige.webp" alt="Royal Prestige" className="max-h-24 w-auto object-contain" />
            </div>
          </div>
        </div>
      </footer>

      <a href={localizedHref("/contacto")} onClick={(event) => navigate(event, "/contacto")} className="fixed bottom-5 right-5 z-50 rounded-full bg-[#1f3b2c] px-5 py-4 text-sm font-semibold text-white shadow-2xl shadow-[#1f3b2c]/30">{t.whatsapp}</a>
    </div>
  );
}
