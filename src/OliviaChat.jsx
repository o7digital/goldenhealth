import { useEffect, useMemo, useRef, useState } from "react";

const CLIENT_CODE = "goldenhealth";
const API_BASE = "https://olivia-ai.o7digital.com";

const TEXT = {
  es: {
    title: "Olivia AI",
    subtitle: "Asistente de Golden Health MX · En línea",
    bubble: "¿Necesitas orientación?",
    intro: "Hola, soy Olivia AI. Puedo orientarte sobre longevidad, nutrición funcional, terapias biológicas y consultas Golden Health. No sustituyo una consulta médica.",
    placeholder: "Escribe tu pregunta...",
    details: "Para que el equipo pueda dar seguimiento, déjame tus datos.",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Email",
    phone: "Teléfono",
    need: "Necesidad",
    sendDetails: "Enviar datos",
    detailsSent: "Gracias. Tus datos fueron enviados. Ahora puedo ayudarte con tus preguntas sin volver a pedirlos.",
    error: "No pude enviar el mensaje. Intenta de nuevo o contacta directamente a Golden Health.",
    consent: "Acepto el Aviso de Privacidad para recibir atención de Golden Health.",
    privacy: "Aviso de Privacidad",
  },
  en: {
    title: "Olivia AI",
    subtitle: "Golden Health MX assistant · Online",
    bubble: "Need guidance?",
    intro: "Hi, I’m Olivia AI. I can guide you on longevity, functional nutrition, biological therapies, and Golden Health consultations. I do not replace medical consultation.",
    placeholder: "Write your question...",
    details: "To let the team follow up, please leave your details.",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Phone",
    need: "Need",
    sendDetails: "Send details",
    detailsSent: "Thank you. Your details were sent. I can now help with your questions without asking for them again.",
    error: "I could not send the message. Please try again or contact Golden Health directly.",
    consent: "I accept the Privacy Notice to receive attention from Golden Health.",
    privacy: "Privacy Notice",
  },
  fr: {
    title: "Olivia AI",
    subtitle: "Assistante Golden Health MX · En ligne",
    bubble: "Besoin d’orientation ?",
    intro: "Bonjour, je suis Olivia AI. Je peux vous orienter sur la longévité, la nutrition fonctionnelle, les thérapies biologiques et les consultations Golden Health. Je ne remplace pas une consultation médicale.",
    placeholder: "Écrivez votre question...",
    details: "Pour que l’équipe puisse faire le suivi, laissez vos coordonnées.",
    firstName: "Prénom",
    lastName: "Nom",
    email: "Email",
    phone: "Téléphone",
    need: "Besoin",
    sendDetails: "Envoyer",
    detailsSent: "Merci. Vos coordonnées ont été envoyées. Je peux maintenant répondre sans les redemander.",
    error: "Je n’ai pas pu envoyer le message. Réessayez ou contactez Golden Health directement.",
    consent: "J’accepte l’Avis de confidentialité pour recevoir l’attention de Golden Health.",
    privacy: "Avis de confidentialité",
  },
};

function detectLanguage() {
  if (typeof window === "undefined") return "es";
  const path = window.location.pathname.toLowerCase();
  if (path === "/en" || path.startsWith("/en/")) return "en";
  const htmlLang = document.documentElement.lang?.slice(0, 2).toLowerCase();
  if (["en", "fr", "es"].includes(htmlLang)) return htmlLang;
  const browser = navigator.language?.slice(0, 2).toLowerCase();
  return ["en", "fr", "es"].includes(browser) ? browser : "es";
}

function initials(firstName, lastName) {
  return `${firstName?.[0] || ""}${lastName?.[0] || ""}`.toUpperCase() || "GH";
}

export default function OliviaChat() {
  const language = useMemo(detectLanguage, []);
  const t = TEXT[language] || TEXT.es;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: t.intro }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [lead, setLead] = useState({ firstName: "", lastName: "", email: "", phone: "", need: "" });
  const [leadSent, setLeadSent] = useState(true);
  const visitorRef = useRef(null);
  const conversationRef = useRef(null);
  const endRef = useRef(null);

  useEffect(() => {
    let id = localStorage.getItem("olivia_goldenhealth_visitor");
    if (!id) {
      id = `goldenhealth-${Date.now()}-${Math.random().toString(16).slice(2)}`;
      localStorage.setItem("olivia_goldenhealth_visitor", id);
    }
    visitorRef.current = id;
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const pageContext = () => ({
    pageUrl: window.location.href,
    pageTitle: document.title,
    language,
    lead,
    siteCode: CLIENT_CODE,
    source: "website-chat",
  });

  async function saveVisitorMessage(content, extra = {}) {
    const name = `${lead.firstName} ${lead.lastName}`.trim() || "Golden Health Visitor";
    const res = await fetch(`${API_BASE}/api/widget/conversations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        clientCode: CLIENT_CODE,
        visitorId: visitorRef.current || `goldenhealth-${Date.now()}`,
        visitorName: name,
        email: lead.email || undefined,
        phone: lead.phone || undefined,
        source: "website-chat",
        language,
        content,
        metadata: {
          ...pageContext(),
          name,
          firstName: lead.firstName,
          lastName: lead.lastName,
          email: lead.email,
          phone: lead.phone,
          need: lead.need,
          necesidad: lead.need,
          ...extra.metadata,
        },
      }),
    });
    if (!res.ok) throw new Error("conversation_failed");
    const data = await res.json();
    conversationRef.current = data?.conversation?.id || conversationRef.current;
    return data;
  }

  async function saveAiMessage(content) {
    if (!content) return;
    await fetch(`${API_BASE}/api/widget/conversations`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ clientCode: CLIENT_CODE, visitorId: visitorRef.current, content, model: "olivia-ai" }),
    }).catch(() => undefined);
  }

  async function sendLead(event) {
    event.preventDefault();
    if (!lead.firstName || !lead.email || !lead.phone || !lead.need) return;
    setLoading(true);
    try {
      await saveVisitorMessage(`Lead Golden Health: ${lead.firstName} ${lead.lastName} · ${lead.email} · ${lead.phone} · ${t.need}: ${lead.need}`, {
        metadata: { type: "lead", leadStatus: "captured" },
      });
      setLeadSent(true);
      setMessages((items) => [...items, { role: "user", content: `${lead.firstName} ${lead.lastName} · ${lead.email} · ${lead.phone} · ${t.need}: ${lead.need}` }, { role: "assistant", content: t.detailsSent }]);
    } catch {
      setMessages((items) => [...items, { role: "assistant", content: t.error }]);
    } finally {
      setLoading(false);
    }
  }

  async function sendMessage(event) {
    event.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages((items) => [...items, { role: "user", content: text }]);
    setLoading(true);
    try {
      await saveVisitorMessage(text, { metadata: { type: "question" } });
      const res = await fetch(`${API_BASE}/api/olivia/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientCode: CLIENT_CODE,
          message: text,
          language,
          conversationId: conversationRef.current,
          metadata: pageContext(),
        }),
      });
      if (!res.ok) throw new Error("chat_failed");
      const data = await res.json();
      const reply = data.reply || t.error;
      setMessages((items) => [...items, { role: "assistant", content: reply }]);
      await saveAiMessage(reply);
    } catch {
      setMessages((items) => [...items, { role: "assistant", content: t.error }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="gh-olivia" data-client-code={CLIENT_CODE}>
      {open && (
        <section className="gh-olivia-panel" aria-label="Olivia AI chat">
          <header className="gh-olivia-header">
            <div>
              <strong>{t.title}</strong>
              <span>{t.subtitle}</span>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close Olivia AI">×</button>
          </header>

          <div className="gh-olivia-messages">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`gh-olivia-message ${message.role}`}>
                {message.content}
              </div>
            ))}
            {loading && <div className="gh-olivia-message assistant">...</div>}
            <div ref={endRef} />
          </div>

          {!leadSent && (
            <form className="gh-olivia-lead" onSubmit={sendLead}>
              <p>{t.details}</p>
              <div className="gh-olivia-grid">
                <input placeholder={t.firstName} value={lead.firstName} onChange={(e) => setLead({ ...lead, firstName: e.target.value })} autoComplete="given-name" />
                <input placeholder={t.lastName} value={lead.lastName} onChange={(e) => setLead({ ...lead, lastName: e.target.value })} autoComplete="family-name" />
                <input placeholder={t.email} value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} autoComplete="email" type="email" />
                <input placeholder={t.phone} value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} autoComplete="tel" />
                <textarea className="gh-olivia-need" rows={2} placeholder={t.need} value={lead.need} onChange={(e) => setLead({ ...lead, need: e.target.value })} />
              </div>
              <label className="gh-olivia-consent">
                <input type="checkbox" defaultChecked />
                <span>{t.consent} <a href="/aviso-de-privacidad">{t.privacy}</a></span>
              </label>
              <button type="submit" disabled={loading}>{t.sendDetails}</button>
            </form>
          )}

          <form className="gh-olivia-compose" onSubmit={sendMessage}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={t.placeholder} />
            <button type="submit" disabled={loading || !input.trim()}>›</button>
          </form>
        </section>
      )}

      <button type="button" className="gh-olivia-bubble" onClick={() => setOpen((value) => !value)} aria-label="Open Olivia AI">
        <span>{initials(lead.firstName, lead.lastName)}</span>
        <strong>Olivia</strong>
        <em>{t.bubble}</em>
      </button>
    </div>
  );
}
