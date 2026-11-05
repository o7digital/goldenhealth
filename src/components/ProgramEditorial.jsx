import { editorialCopy, references } from "../data/program-editorial.js";
import "./ProgramEditorial.css";

function Source({ id, ui }) {
  const reference = references[id];
  return reference ? <a className="ghp-source" href={reference.href} target="_blank" rel="noreferrer" aria-label={`${ui.source}: ${reference.title}`}>{reference.name} ↗</a> : null;
}

function SectionHeading({ number, eyebrow, title, intro }) {
  return <div className="ghp-section-heading">
    {number && <span className="ghp-number" aria-hidden="true">{number}</span>}
    <div>{eyebrow && <p className="ghp-eyebrow">{eyebrow}</p>}<h2>{title}</h2>{intro && <p className="ghp-lead">{intro}</p>}</div>
  </div>;
}

function Notebook({ ui, language }) {
  return <section className="ghp-notebook ghp-section" id="carnet" aria-labelledby="ghp-notebook-title">
    <div className="ghp-notebook-intro">
      <span className="ghp-notebook-mark" aria-hidden="true">GH<span>01 / 07</span></span>
      <p className="ghp-eyebrow">{ui.notebookEyebrow}</p>
      <h2 id="ghp-notebook-title">{ui.notebookTitle}</h2>
      <p>{ui.notebookIntro}</p>
      <p className="ghp-private">{ui.private}</p>
    </div>
    <gh-consultation-notebook lang={language} data-title={ui.notebook} data-footer={ui.notebookFooter} data-copied={ui.copied} data-copy-failed={ui.copyFailed} data-downloaded={ui.downloaded}>
      <fieldset>
        <legend className="ghp-sr-only">{ui.notebookTitle}</legend>
        {ui.questionsList.map((question, index) => <label className="ghp-question" key={question}>
          <input type="checkbox" value={question} defaultChecked />
          <span className="ghp-question-number" aria-hidden="true">0{index + 1}</span><span>{question}</span>
        </label>)}
      </fieldset>
      <div className="ghp-notebook-actions" data-notebook-actions hidden>
        <p className="ghp-count"><span data-notebook-count>{ui.questionsList.length}</span> {ui.selected}</p>
        <div className="ghp-actions"><button className="ghp-button" type="button" data-notebook-download>{ui.download} <span aria-hidden="true">↓</span></button><button className="ghp-text-button" type="button" data-notebook-copy>{ui.copy}</button></div>
        <p className="ghp-status" data-notebook-status role="status" aria-live="polite" />
      </div>
    </gh-consultation-notebook>
  </section>;
}

function Sources({ ids, ui }) {
  return <aside className="ghp-sources" aria-label={ui.sources}>
    <div><p className="ghp-eyebrow">{ui.sources}</p><p>{ui.sourcesText}</p></div>
    <ul>{ids.map((id) => <li key={id}><a href={references[id].href} target="_blank" rel="noreferrer"><span>{references[id].name}</span>{references[id].title} <span aria-hidden="true">↗</span></a></li>)}</ul>
  </aside>;
}

function Consultation({ ui, localizedHref }) {
  return <section className="ghp-consultation">
    <div><p className="ghp-eyebrow">Golden Health · CDMX / Online</p><h2>{ui.consultationTitle}</h2><p>{ui.consultationText}</p></div>
    <a className="ghp-button" href={localizedHref("/consultas")}>{ui.consultationCta} <span aria-hidden="true">↗</span></a>
  </section>;
}

export function ProgramOverview({ language, programs, localizedHref }) {
  const { overview: content, ui } = editorialCopy[language];
  return <div className="gh-program ghp-overview" id="programa-integral">
    <div className="ghp-shell">
      <section className="ghp-hero ghp-overview-hero">
        <div className="ghp-hero-copy">
          <p className="ghp-eyebrow">{content.eyebrow}</p><h1>{content.title}</h1><p className="ghp-lead">{content.intro}</p>
          <div className="ghp-actions"><a className="ghp-button" href="#punto-de-partida">{content.primary} <span aria-hidden="true">↓</span></a><a className="ghp-text-button" href="#areas">{content.secondary} ↗</a></div>
          <p className="ghp-hero-note"><span aria-hidden="true">✦</span>{content.note}</p>
        </div>
        <figure className="ghp-hero-image"><img src="/images/golden-health/consulta-medica.webp" alt={content.imageAlt} width="1024" height="1024" fetchPriority="high" /><figcaption>{content.caption}</figcaption></figure>
      </section>

      <section className="ghp-section" id="punto-de-partida">
        <SectionHeading number="01" eyebrow={content.goalsEyebrow} title={content.goalsTitle} intro={content.goalsIntro} />
        <div className="ghp-goals">{content.goals.map((goal, index) => <details key={goal.title} className="ghp-goal" name="ghp-goals">
          <summary><span className="ghp-goal-index" aria-hidden="true">0{index + 1}</span><h3>{goal.title}</h3><span className="ghp-plus" aria-hidden="true">+</span></summary>
          <div className="ghp-goal-content"><p>{goal.text} {goal.ref && <Source id={goal.ref} ui={ui} />}</p><a className="ghp-text-button" href={localizedHref(goal.href)}>{goal.link} ↗</a></div>
        </details>)}</div>
      </section>

      <section className="ghp-section" id="areas">
        <SectionHeading number="02" eyebrow={content.areasEyebrow} title={content.areasTitle} />
        {content.groups.map((group, groupIndex) => <div className="ghp-area-group" key={group.title}>
          <div className="ghp-group-heading"><span className="ghp-group-index" aria-hidden="true">0{groupIndex + 1}</span><div><h3>{group.title}</h3><p>{group.text}</p></div></div>
          <div className={`ghp-program-grid ${groupIndex === 0 ? "ghp-program-grid-medical" : ""}`}>
            {group.slugs.map((slug) => {
              const program = programs.find((item) => item.slug === slug);
              return <a className="ghp-program-card" href={localizedHref(`/programa-integral/${slug}`)} key={slug}>
                <div className="ghp-card-image"><img src={editorialCopy[language].medical[slug]?.image || program.image} alt="" width="640" height="480" loading="lazy" /></div>
                <div className="ghp-card-copy"><h4>{program.title}</h4><p>{editorialCopy[language].medical[slug]?.intro || program.intro}</p><span className="ghp-card-link">{ui.details}<span aria-hidden="true">↗</span></span></div>
              </a>;
            })}
          </div>
        </div>)}
      </section>

      <section className="ghp-section ghp-route">
        <SectionHeading number="03" eyebrow={content.routeEyebrow} title={content.routeTitle} />
        <ol>{content.steps.map(([title, text], index) => <li key={title}><span aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      </section>
      <Notebook ui={ui} language={language} />
      <Sources ids={content.sources} ui={ui} />
      <Consultation ui={ui} localizedHref={localizedHref} />
      <p className="ghp-educational">{ui.educational}</p>
    </div>
  </div>;
}

export default function MedicalProgram({ slug, language, localizedHref }) {
  const { medical, ui } = editorialCopy[language];
  const content = medical[slug];
  const anchors = [["comprender", ui.understand], ["valorar", ui.assess], ["evidencia", ui.evidence], ["preguntas", ui.questions], ["carnet", ui.notebook]];
  return <article className="gh-program ghp-medical">
    <div className="ghp-shell">
      <nav className="ghp-breadcrumb" aria-label={ui.overview}><a href={localizedHref("/programa-integral")}>{ui.overview}</a><span aria-hidden="true">/</span><span>{content.eyebrow}</span></nav>
      <header className="ghp-hero">
        <div className="ghp-hero-copy"><p className="ghp-eyebrow">{content.eyebrow}</p><h1>{content.title}</h1><p className="ghp-lead">{content.intro}</p><div className="ghp-meta"><span>{ui.guide}</span><span>{ui.read}</span></div><a href="#comprender" className="ghp-text-button">{ui.understand} <span aria-hidden="true">↓</span></a></div>
        <figure className="ghp-hero-image"><img src={content.image} alt={content.imageAlt} style={{ objectPosition: content.imagePosition }} width="900" height="1000" fetchPriority="high" /><figcaption>{content.imageCaption}</figcaption></figure>
      </header>
      <nav className="ghp-toc" aria-label={ui.inPage}>{anchors.map(([id, label], index) => <a key={id} href={`#${id}`}><span aria-hidden="true">0{index + 1}</span>{label}</a>)}</nav>

      <section className="ghp-section" id="comprender">
        <SectionHeading number="01" title={content.definitionTitle} intro={content.definitionIntro} />
        <div className="ghp-definition-grid">{content.definitions.map(([title, text, ref], index) => <div className="ghp-definition" key={title}><span className="ghp-small-number" aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{text}</p>{ref && <Source id={ref} ui={ui} />}</div>)}</div>
      </section>

      <aside className="ghp-takeaway"><span aria-hidden="true">✦</span><p>{content.takeaway}</p></aside>

      <section className="ghp-section" id="valorar">
        <SectionHeading number="02" title={content.assessmentTitle} intro={content.assessmentIntro} />
        <div className="ghp-assessment">{content.assessment.map(([title, text, ref], index) => <div key={title}><span aria-hidden="true">0{index + 1}</span><div><h3>{title}</h3><p>{text} {ref && <Source id={ref} ui={ui} />}</p></div></div>)}</div>
        <div className="ghp-example"><p className="ghp-eyebrow">{ui.example}</p><div className="ghp-example-change"><p>{content.example.from}</p><span aria-hidden="true">→</span><p>{content.example.to}</p></div><p>{content.example.text} {content.example.ref && <Source id={content.example.ref} ui={ui} />}</p></div>
      </section>

      <section className="ghp-section ghp-evidence" id="evidencia">
        <SectionHeading number="03" title={content.evidenceTitle} intro={content.evidenceIntro} />
        <div className="ghp-evidence-grid">{content.evidence.map(([title, text, ref], index) => <div key={title}><span className="ghp-evidence-dot" aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{text}</p><Source id={ref} ui={ui} /></div>)}</div>
      </section>

      <section className="ghp-section ghp-follow">
        <SectionHeading title={content.followTitle} intro={content.followIntro} />
        <ol>{content.follow.map(([title, text], index) => <li key={title}><span aria-hidden="true">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      </section>

      <section className="ghp-section ghp-knowledge">
        <SectionHeading title={content.knowledgeTitle} intro={content.knowledgeIntro} />
        <div className="ghp-knowledge-grid">{content.knowledge.map(([value, title, text, ref]) => <div key={value}><p className="ghp-knowledge-value">{value}</p><h3>{title}</h3><p>{text}</p><Source id={ref} ui={ui} /></div>)}</div>
      </section>

      <section className="ghp-section ghp-faqs" id="preguntas">
        <SectionHeading number="04" title={ui.questions} />
        <div>{content.faqs.map(([question, answer]) => <details className="ghp-faq" key={question}><summary>{question}<span className="ghp-plus" aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>
      <Notebook ui={ui} language={language} />
      <Sources ids={content.sources} ui={ui} />
      <a className="ghp-related" href={localizedHref(`/programa-integral/${content.relatedSlug}`)}><div><span className="ghp-eyebrow">{ui.related}</span><h3>{content.relatedTitle}</h3></div><span aria-hidden="true">↗</span></a>
      <Consultation ui={ui} localizedHref={localizedHref} />
      <p className="ghp-educational">{ui.educational}</p>
    </div>
  </article>;
}
