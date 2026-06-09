/* Ethan Connell — interactions (v3, restrained)
   - scroll reveals
   - dynamic year
*/

(() => {
  // ── footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── attach data-reveal to major blocks for scroll-in
  const revealSel = [
    ".section__head",
    ".about__prose",
    ".education",
    ".station",
    ".entry",
    ".honor",
    ".teaching li",
    ".hail__lede",
    ".hail__lines",
  ];
  revealSel.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.setAttribute("data-reveal", "");
      el.style.transitionDelay = `${Math.min(i * 60, 360)}ms`;
    });
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));
})();
