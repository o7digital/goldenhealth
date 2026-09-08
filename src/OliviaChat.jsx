import { useEffect, useMemo, useRef, useState } from "react";

const CLIENT_CODE = "goldenhealth";
const API_BASE = "https://olivia-ai.o7digital.com/api";
const REQUEST_TIMEOUT = 25000;

const COPY = {
  es: {
    title: "Olivia", version: "v2", subtitle: "Asistente de Golden Health", online: "En línea",
    launcher: "Habla con Olivia", launcherHint: "Orientación personalizada",
    welcome: "Hola, soy Olivia. Puedo orientarte sobre los programas, consultas y servicios de Golden Health.",
    disclaimer: "La información es general y no sustituye una consulta médica.",
    placeholder: "Escribe tu pregunta…", send: "Enviar mensaje", close: "Cerrar Olivia", minimize: "Minimizar Olivia",
    retry: "Reintentar", error: "Ahora mismo no puedo responder. Puedes reintentarlo o contactar directamente a Golden Health.",
    typing: "Olivia está escribiendo",
    suggestions: ["¿Qué programa me conviene?", "Quiero agendar una valoración", "¿Dónde está la clínica?"],
    contact: "Contactar a Golden Health",
    leadTitle: "Te ponemos en contacto con el equipo", leadText: "Déjanos tus datos y Golden Health podrá dar seguimiento a tu solicitud.",
    firstName: "Nombre", lastName: "Apellido", email: "Correo electrónico", phone: "Teléfono", need: "¿Qué necesitas?",
    consent: "Acepto que Golden Health use estos datos para responder a mi solicitud.", sendDetails: "Enviar mis datos",
    detailsSent: "Gracias. El equipo de Golden Health recibió tus datos y podrá dar seguimiento a tu solicitud.",
    leadError: "No pude enviar tus datos. Revisa los campos e inténtalo de nuevo.",
    required: "Completa los campos obligatorios y acepta el uso de tus datos.", powered: "Olivia v2 · IA de Golden Health",
  },
  en: {
    title: "Olivia", version: "v2", subtitle: "Golden Health assistant", online: "Online",
    launcher: "Chat with Olivia", launcherHint: "Personalized guidance",
    welcome: "Hi, I’m Olivia. I can guide you through Golden Health programs, consultations, and services.",
    disclaimer: "Information is general and does not replace medical consultation.",
    placeholder: "Write your question…", send: "Send message", close: "Close Olivia", minimize: "Minimize Olivia",
    retry: "Try again", error: "I can’t answer right now. You can try again or contact Golden Health directly.",
    typing: "Olivia is typing",
    suggestions: ["Which program is right for me?", "I want to book an assessment", "Where is the clinic?"],
    contact: "Contact Golden Health",
    leadTitle: "Let us connect you with the team", leadText: "Leave your details so Golden Health can follow up on your request.",
    firstName: "First name", lastName: "Last name", email: "Email address", phone: "Phone", need: "How can we help?",
    consent: "I agree that Golden Health may use these details to respond to my request.", sendDetails: "Send my details",
    detailsSent: "Thank you. The Golden Health team received your details and can follow up on your request.",
    leadError: "I couldn’t send your details. Check the fields and try again.",
    required: "Complete the required fields and accept the use of your details.", powered: "Olivia v2 · Golden Health AI",
  },
};

function detectLanguage() {
  if (typeof window === "undefined") return "es";
  return window.location.pathname === "/en" || window.location.pathname.startsWith("/en/") ? "en" : "es";
}

function getVisitorId() {
  const storageKey = "olivia_goldenhealth_visitor_v2";
  try {
    let visitorId = window.localStorage.getItem(storageKey);
    if (!visitorId) {
      visitorId = typeof globalThis.crypto?.randomUUID === "function"
        ? `goldenhealth-${globalThis.crypto.randomUUID()}`
        : `goldenhealth-${Date.now()}-${Math.random().toString(16).slice(2)}`;
      window.localStorage.setItem(storageKey, visitorId);
    }
    return visitorId;
  } catch {
    return `goldenhealth-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    window.clearTimeout(timeout);
  }
}

function formatBold(text) {
  return text.split(/(\*\*.+?\*\*)/g).filter(Boolean).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? <strong key={index}>{part.slice(2, -2)}</strong> : part,
  );
}

function RichReply({ text }) {
  return text.split(/\r?\n/).filter((line) => line.trim()).map((line, index) => {
    const clean = line.trim();
    const bullet = /^[-•]\s+/.test(clean);
    return bullet
      ? <div className="gh-olivia-v2-reply-line" key={index}><i aria-hidden="true" />{formatBold(clean.replace(/^[-•]\s+/, ""))}</div>
      : <p key={index}>{formatBold(clean)}</p>;
  });
}

export default function OliviaChat() {
  const language = useMemo(() => detectLanguage(), []);
  const t = COPY[language] || COPY.es;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const [leadError, setLeadError] = useState("");
  const [consent, setConsent] = useState(false);
  const [panelPosition, setPanelPosition] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [lead, setLead] = useState({ firstName: "", lastName: "", email: "", phone: "", need: "" });
  const identityRef = useRef("");
  const visitorRef = useRef("");
  const conversationRef = useRef("");
  const endRef = useRef(null);
  const leadRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);
  const dragRef = useRef(null);

  useEffect(() => { visitorRef.current = getVisitorId(); }, []);

  useEffect(() => {
    if (!open) return;
    window.setTimeout(() => inputRef.current?.focus(), 120);
  }, [open]);

  useEffect(() => {
    if (!open || showLeadForm) return;
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, loading, showLeadForm, open]);

  useEffect(() => {
    if (showLeadForm) leadRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [showLeadForm]);

  useEffect(() => {
    const closeOnEscape = (event) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    const keepPanelVisible = () => {
      if (window.innerWidth <= 560) {
        setPanelPosition(null);
        return;
      }
      setPanelPosition((current) => {
        if (!current || !panelRef.current) return current;
        const rect = panelRef.current.getBoundingClientRect();
        return {
          left: Math.max(12, Math.min(current.left, window.innerWidth - rect.width - 12)),
          top: Math.max(12, Math.min(current.top, window.innerHeight - rect.height - 12)),
        };
      });
    };
    window.addEventListener("resize", keepPanelVisible);
    return () => window.removeEventListener("resize", keepPanelVisible);
  }, []);

  function startDragging(event) {
    if (window.innerWidth <= 560 || event.button !== 0 || event.target.closest("button, a, input, textarea")) return;
    const rect = panelRef.current?.getBoundingClientRect();
    if (!rect) return;
    dragRef.current = { pointerId: event.pointerId, offsetX: event.clientX - rect.left, offsetY: event.clientY - rect.top };
    setPanelPosition({ left: rect.left, top: rect.top });
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    event.preventDefault();
  }

  function movePanel(event) {
    const drag = dragRef.current;
    const panel = panelRef.current;
    if (!drag || !panel || event.pointerId !== drag.pointerId) return;
    setPanelPosition({
      left: Math.max(12, Math.min(event.clientX - drag.offsetX, window.innerWidth - panel.offsetWidth - 12)),
      top: Math.max(12, Math.min(event.clientY - drag.offsetY, window.innerHeight - panel.offsetHeight - 12)),
    });
  }

  function stopDragging(event) {
    if (!dragRef.current || event.pointerId !== dragRef.current.pointerId) return;
    dragRef.current = null;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }

  const pageContext = () => {
    const mainContent = (document.querySelector("main")?.textContent || "").replace(/\s+/g, " ").slice(0, 4000);
    const contactContent = (document.querySelector("footer")?.textContent || "").replace(/\s+/g, " ").slice(0, 900);
    return {
      page: window.location.pathname,
      pageUrl: window.location.href,
      pageTitle: document.title,
      pageContent: `${mainContent}\nContact and location: ${contactContent}`,
      language,
      source: "goldenhealth-olivia-v2",
    };
  };

  async function getIdentity(refresh = false) {
    if (refresh) identityRef.current = "";
    if (identityRef.current) return identityRef.current;
    const response = await fetchWithTimeout(`${API_BASE}/widget/identity`, { cache: "no-store" });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.clientCode !== CLIENT_CODE || !data.identity) throw new Error("identity_failed");
    identityRef.current = data.identity;
    return data.identity;
  }

  async function authenticatedFetch(path, options = {}, canRetry = true) {
    const identity = await getIdentity();
    const response = await fetchWithTimeout(`${API_BASE}${path}`, {
      ...options,
      headers: { "Content-Type": "application/json", ...(options.headers || {}), "X-Olivia-Widget-Identity": identity },
    });
    if (response.status === 401 && canRetry) {
      await getIdentity(true);
      return authenticatedFetch(path, options, false);
    }
    return response;
  }

  async function persistVisitorMessage(content, metadata = {}) {
    const response = await authenticatedFetch("/widget/conversations", {
      method: "POST",
      body: JSON.stringify({
        clientCode: CLIENT_CODE,
        visitorId: visitorRef.current || getVisitorId(),
        visitorName: `${lead.firstName} ${lead.lastName}`.trim() || "Golden Health Visitor",
        email: lead.email || undefined,
        phone: lead.phone || undefined,
        source: "website-chat",
        language,
        content,
        metadata: { ...pageContext(), ...metadata },
      }),
    });
    if (!response.ok) throw new Error("conversation_failed");
    const data = await response.json();
    conversationRef.current = data?.conversation?.id || conversationRef.current;
  }

  async function persistAssistantMessage(content) {
    if (!content) return;
    const response = await authenticatedFetch("/widget/conversations", {
      method: "PATCH",
      body: JSON.stringify({ clientCode: CLIENT_CODE, visitorId: visitorRef.current, content, model: "olivia-v2" }),
    });
    if (!response.ok) throw new Error("assistant_persist_failed");
  }

  function openChat() {
    setOpen(true);
    void getIdentity().catch(() => undefined);
  }

  async function sendMessage(event, suggestedMessage) {
    event?.preventDefault();
    const text = (suggestedMessage || input).trim();
    if (!text || loading) return;
    const history = messages.filter((message) => !message.error).slice(-10).map(({ role, content }) => ({ role, content }));
    setInput("");
    setMessages((items) => [...items, { role: "user", content: text }]);
    setLoading(true);
    try {
      await persistVisitorMessage(text, { type: "question" });
      const response = await authenticatedFetch("/olivia/chat", {
        method: "POST",
        body: JSON.stringify({
          clientCode: CLIENT_CODE,
          visitorId: visitorRef.current,
          conversationId: conversationRef.current || undefined,
          message: text,
          language,
          history,
          metadata: pageContext(),
        }),
      });
      if (!response.ok) throw new Error("chat_failed");
      const data = await response.json();
      const reply = data.reply || t.error;
      setMessages((items) => [...items, { role: "assistant", content: reply }]);
      if (data.action === "show_lead_form" || data.handoffRecommended) {
        setLead((current) => ({ ...current, need: current.need || data.leadForm?.initialDetails || text }));
        setShowLeadForm(true);
      }
      void persistAssistantMessage(reply).catch(() => undefined);
    } catch {
      setMessages((items) => [...items, { role: "assistant", content: t.error, error: true, retryText: text }]);
    } finally {
      setLoading(false);
    }
  }

  async function sendLead(event) {
    event.preventDefault();
    setLeadError("");
    if (!lead.firstName.trim() || !lead.email.trim() || !lead.phone.trim() || !lead.need.trim() || !consent) {
      setLeadError(t.required);
      return;
    }
    setLoading(true);
    try {
      await persistVisitorMessage(lead.need.trim(), {
        type: "lead", leadStatus: "captured", firstName: lead.firstName.trim(), lastName: lead.lastName.trim(),
        email: lead.email.trim(), phone: lead.phone.trim(), need: lead.need.trim(), consent: true,
      });
      setLeadSent(true);
      setShowLeadForm(false);
      setMessages((items) => [...items, { role: "assistant", content: t.detailsSent }]);
    } catch {
      setLeadError(t.leadError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="gh-olivia-v2" data-client-code={CLIENT_CODE}>
      {open && (
        <section
          ref={panelRef}
          className={`gh-olivia-v2-panel${dragging ? " is-dragging" : ""}`}
          style={panelPosition ? { position: "fixed", left: panelPosition.left, top: panelPosition.top, right: "auto", bottom: "auto" } : undefined}
          aria-label={`${t.title} ${t.version}`}
        >
          <header
            className="gh-olivia-v2-header"
            onPointerDown={startDragging}
            onPointerMove={movePanel}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
            title={language === "en" ? "Drag to move Olivia" : "Arrastra para mover a Olivia"}
          >
            <div className="gh-olivia-v2-brand">
              <span className="gh-olivia-v2-avatar" aria-hidden="true">✦</span>
              <div><div className="gh-olivia-v2-title"><strong>{t.title}</strong><small>{t.version}</small></div><span>{t.subtitle}</span></div>
            </div>
            <div className="gh-olivia-v2-actions">
              <span className="gh-olivia-v2-status"><i />{t.online}</span>
              <button type="button" onClick={() => setOpen(false)} aria-label={t.minimize}>×</button>
            </div>
          </header>

          <div className="gh-olivia-v2-body" aria-live="polite">
            <div className="gh-olivia-v2-message assistant welcome">
              <span className="gh-olivia-v2-mini-avatar" aria-hidden="true">✦</span>
              <div><p>{t.welcome}</p><small>{t.disclaimer}</small></div>
            </div>

            {messages.length === 0 && <div className="gh-olivia-v2-suggestions">{t.suggestions.map((suggestion) => (
              <button type="button" key={suggestion} onClick={(event) => sendMessage(event, suggestion)}>{suggestion}<span>→</span></button>
            ))}</div>}

            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`gh-olivia-v2-message ${message.role}${message.error ? " error" : ""}`}>
                {message.role === "assistant" && <span className="gh-olivia-v2-mini-avatar" aria-hidden="true">✦</span>}
                <div><RichReply text={message.content} />{message.error && <button type="button" className="gh-olivia-v2-retry" onClick={(event) => sendMessage(event, message.retryText)}>{t.retry}</button>}</div>
              </div>
            ))}

            {loading && <div className="gh-olivia-v2-message assistant typing" aria-label={t.typing}>
              <span className="gh-olivia-v2-mini-avatar" aria-hidden="true">✦</span><div><i /><i /><i /></div>
            </div>}

            {showLeadForm && !leadSent && <form ref={leadRef} className="gh-olivia-v2-lead" onSubmit={sendLead}>
              <div className="gh-olivia-v2-lead-heading"><span aria-hidden="true">↗</span><div><strong>{t.leadTitle}</strong><p>{t.leadText}</p></div></div>
              <div className="gh-olivia-v2-grid">
                <label><span>{t.firstName} *</span><input required value={lead.firstName} onChange={(event) => setLead({ ...lead, firstName: event.target.value })} autoComplete="given-name" /></label>
                <label><span>{t.lastName}</span><input value={lead.lastName} onChange={(event) => setLead({ ...lead, lastName: event.target.value })} autoComplete="family-name" /></label>
                <label className="wide"><span>{t.email} *</span><input required type="email" value={lead.email} onChange={(event) => setLead({ ...lead, email: event.target.value })} autoComplete="email" /></label>
                <label className="wide"><span>{t.phone} *</span><input required value={lead.phone} onChange={(event) => setLead({ ...lead, phone: event.target.value })} autoComplete="tel" /></label>
                <label className="wide"><span>{t.need} *</span><textarea required rows={3} value={lead.need} onChange={(event) => setLead({ ...lead, need: event.target.value })} /></label>
              </div>
              <label className="gh-olivia-v2-consent"><input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} /><span>{t.consent}</span></label>
              {leadError && <p className="gh-olivia-v2-form-error" role="alert">{leadError}</p>}
              <button className="gh-olivia-v2-lead-submit" type="submit" disabled={loading}>{t.sendDetails}<span>→</span></button>
            </form>}
            <div ref={endRef} />
          </div>

          <form className="gh-olivia-v2-compose" onSubmit={sendMessage}>
            <textarea ref={inputRef} rows={1} value={input} onChange={(event) => setInput(event.target.value)} placeholder={t.placeholder} aria-label={t.placeholder} />
            <button type="submit" disabled={loading || !input.trim()} aria-label={t.send}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4 20-7Z" /><path d="M22 2 11 13" /></svg>
            </button>
          </form>
          <footer className="gh-olivia-v2-footer"><span>{t.powered}</span><a href={language === "en" ? "/en/contact" : "/contacto"}>{t.contact} →</a></footer>
        </section>
      )}

      <button type="button" className={`gh-olivia-v2-launcher${open ? " is-open" : ""}`} onClick={open ? () => setOpen(false) : openChat} aria-label={open ? t.close : t.launcher}>
        {open ? <span className="gh-olivia-v2-launcher-close">×</span> : <>
          <span className="gh-olivia-v2-launcher-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" /><path d="M8 9h8M8 13h5" /></svg></span>
          <span className="gh-olivia-v2-launcher-copy"><strong>{t.launcher}</strong><small>{t.launcherHint}</small></span><i aria-hidden="true" />
        </>}
      </button>
    </div>
  );
}
