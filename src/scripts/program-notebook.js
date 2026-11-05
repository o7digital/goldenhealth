class ConsultationNotebook extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready) return;
    this.dataset.ready = "true";
    const boxes = Array.from(this.querySelectorAll('input[type="checkbox"]'));
    const count = this.querySelector("[data-notebook-count]");
    const status = this.querySelector("[data-notebook-status]");
    const download = this.querySelector("[data-notebook-download]");
    const copy = this.querySelector("[data-notebook-copy]");
    const selected = () => boxes.filter((box) => box.checked);
    const content = () => `${this.dataset.title}\nGolden Health\n\n${selected().map((box, index) => `${index + 1}. ${box.value}`).join("\n\n")}\n\n${this.dataset.footer}\n`;
    const update = () => {
      const total = selected().length;
      count.textContent = String(total);
      download.disabled = total === 0;
      copy.disabled = total === 0;
      status.textContent = "";
    };
    this.addEventListener("change", update);
    download.addEventListener("click", () => {
      const url = URL.createObjectURL(new Blob(["\uFEFF", content()], { type: "text/plain;charset=utf-8" }));
      const link = document.createElement("a");
      link.href = url;
      link.download = `golden-health-${this.lang === "en" ? "consultation-notebook" : "carnet-de-consulta"}.txt`;
      this.append(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      status.textContent = this.dataset.downloaded;
    });
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(content());
        status.textContent = this.dataset.copied;
      } catch {
        status.textContent = this.dataset.copyFailed;
      }
    });
    if (!navigator.clipboard?.writeText) copy.hidden = true;
    this.querySelector("[data-notebook-actions]").hidden = false;
    update();
  }
}

if (!customElements.get("gh-consultation-notebook")) {
  customElements.define("gh-consultation-notebook", ConsultationNotebook);
}
