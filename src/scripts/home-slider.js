document.querySelectorAll("[data-gh-slider]").forEach((slider) => {
  const slides = Array.from(slider.querySelectorAll("[data-gh-slide]"));
  const buttons = Array.from(slider.querySelectorAll("[data-gh-slide-button]"));
  const desktop = window.matchMedia("(min-width: 1024px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activeIndex = 0;
  let timer;
  let selectedManually = false;
  let inView = true;
  let renderRequest = 0;

  const showSlide = async (index) => {
    const request = ++renderRequest;
    try {
      await slides[index].decode();
    } catch {
      return;
    }
    if (request !== renderRequest) return;
    activeIndex = index;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === activeIndex;
      slide.classList.toggle("opacity-100", active);
      slide.classList.toggle("opacity-0", !active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    buttons.forEach((button, buttonIndex) => {
      button.setAttribute("aria-pressed", String(buttonIndex === activeIndex));
    });
  };

  const stop = () => window.clearInterval(timer);
  const syncAutoplay = () => {
    stop();
    if (desktop.matches && !reducedMotion.matches && !document.hidden && inView &&
      !selectedManually && !slider.matches(":hover, :focus-within") && slides.length > 1) {
      timer = window.setInterval(() => showSlide((activeIndex + 1) % slides.length), 7000);
    }
  };

  buttons.forEach((button, index) => button.addEventListener("click", () => {
    selectedManually = true;
    stop();
    showSlide(index);
  }));

  desktop.addEventListener("change", syncAutoplay);
  reducedMotion.addEventListener("change", syncAutoplay);
  document.addEventListener("visibilitychange", syncAutoplay);
  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", syncAutoplay);
  slider.addEventListener("focusin", stop);
  slider.addEventListener("focusout", () => window.setTimeout(syncAutoplay, 0));
  new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    syncAutoplay();
  }, { threshold: 0.25 }).observe(slider);

  showSlide(0);
  syncAutoplay();
});
