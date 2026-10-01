const seoContentByRoute = {
  "/": {
    es: {
      eyebrow: "Antes de elegir una terapia",
      title: "Información para solicitar tu primera consulta",
      intro: "La consulta permite revisar tu motivo, antecedentes y preguntas antes de decidir si necesitas otro servicio. Las modalidades y precios publicados son los siguientes.",
      highlights: [
        ["Consulta en línea", "30 minutos · $500 MXN. Permite conversar y revisar antecedentes, sin exploración física."],
        ["Consulta presencial", "1 hora · $1,500 MXN. Se realiza en Lago Zúrich 96, Ampliación Granada, Miguel Hidalgo, Ciudad de México."],
        ["Qué preparar", "Anota tus preguntas y ten disponibles medicamentos, suplementos y estudios recientes, si los tienes."],
      ],
      faqs: [
        ["¿La solicitud confirma la cita?", "No. Envía el formulario o llama al equipo para confirmar disponibilidad y modalidad."],
        ["¿Hay atención para personas en Madrid?", "El sitio anuncia una consulta en línea de 1 hora para personas en Madrid. Confirma el horario local y la disponibilidad antes de agendar."],
      ],
    },
    en: {
      eyebrow: "Before choosing a therapy",
      title: "Information for your first consultation request",
      intro: "A consultation reviews your reason for visiting, history, and questions before you decide whether another service is appropriate. The published formats and prices are below.",
      highlights: [
        ["Online consultation", "30 minutes · MXN $500. Discuss your concerns and history without a physical examination."],
        ["In-person consultation", "One hour · MXN $1,500. At Lago Zúrich 96, Ampliación Granada, Miguel Hidalgo, Mexico City."],
        ["What to prepare", "Write down your questions and bring medication, supplements, and recent test results if you have them."],
      ],
      faqs: [
        ["Does a request confirm the appointment?", "No. Send the form or call the team to confirm availability and format."],
        ["Is there a format for people in Madrid?", "The site lists a one-hour online consultation for people in Madrid. Confirm the local time and availability before scheduling."],
      ],
    },
  },
  "/consultas": {
    es: {
      eyebrow: "Elige la modalidad",
      title: "Qué permite cada tipo de consulta",
      intro: "La opción en línea sirve para conversar sobre tu motivo y revisar información a distancia. Si el caso requiere exploración física o un procedimiento en la clínica, solicita la modalidad presencial.",
      highlights: [
        ["En línea", "Consulta de 30 minutos. No permite exploración física; precio publicado: $500 MXN."],
        ["Presencial", "Consulta de 1 hora en Miguel Hidalgo, CDMX; precio publicado: $1,500 MXN."],
        ["Para personas en Madrid", "Consulta en línea de 1 hora; precio publicado: $1,500 MXN. Confirma el horario local antes de agendar."],
      ],
      faqs: [
        ["¿Dónde se realiza la consulta presencial?", "En Lago Zúrich 96, Ampliación Granada, Miguel Hidalgo, CP 11529, Ciudad de México."],
        ["¿Qué hago si no sé qué modalidad elegir?", "Describe brevemente el motivo de consulta al contactar al equipo para que pueda orientarte antes de confirmar la cita."],
      ],
    },
    en: {
      eyebrow: "Choose a format",
      title: "What each consultation format allows",
      intro: "An online visit lets you discuss your concern and review information remotely. If a physical examination or an in-clinic procedure is needed, request an in-person visit.",
      highlights: [
        ["Online", "30-minute consultation without a physical examination; published price: MXN $500."],
        ["In person", "One-hour consultation in Miguel Hidalgo, Mexico City; published price: MXN $1,500."],
        ["For people in Madrid", "One-hour online consultation; published price: MXN $1,500. Confirm the local time before scheduling."],
      ],
      faqs: [
        ["Where is the in-person visit?", "At Lago Zúrich 96, Ampliación Granada, Miguel Hidalgo, ZIP 11529, Mexico City."],
        ["What if I am unsure which format to choose?", "Briefly explain your reason for visiting when you contact the team so they can guide you before confirming the appointment."],
      ],
    },
  },
  "/contacto": {
    es: {
      eyebrow: "Solicitar una cita",
      title: "Qué información enviar",
      intro: "Usa el formulario, el teléfono o el correo para solicitar una consulta. El envío del formulario no es una reserva confirmada.",
      highlights: [
        ["Motivo", "Explica en una o dos frases por qué deseas consultar."],
        ["Modalidad", "Indica si prefieres una consulta presencial en CDMX o en línea."],
        ["Disponibilidad", "Propón horarios en los que puedas atender la llamada o realizar la consulta."],
      ],
      faqs: [
        ["¿Cómo contacto al equipo?", "Llama al +52 55 5417 8009 o escribe a silvia.delmoral@goldenhealth.com.mx."],
        ["¿Debo enviar estudios médicos en el formulario?", "No envíes documentos ni información médica sensible que no sea necesaria para solicitar la cita."],
      ],
    },
    en: {
      eyebrow: "Request an appointment",
      title: "What to include in your request",
      intro: "Use the form, phone, or email to request a consultation. Sending the form does not confirm a booking.",
      highlights: [
        ["Reason", "Explain in one or two sentences why you would like to consult."],
        ["Format", "Say whether you prefer an in-person visit in Mexico City or an online consultation."],
        ["Availability", "Suggest times when you can take a call or attend the consultation."],
      ],
      faqs: [
        ["How do I contact the team?", "Call +52 55 5417 8009 or email silvia.delmoral@goldenhealth.com.mx."],
        ["Should I send test results through the form?", "Do not send documents or sensitive medical information that is not needed to request an appointment."],
      ],
    },
  },
};

export function getSeoContent(routePath, isEnglish) {
  return seoContentByRoute[routePath]?.[isEnglish ? "en" : "es"];
}
