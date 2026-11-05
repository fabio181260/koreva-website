/* KONEKTA — interacções locais da primeira etapa pública. */
(() => {
  const form = document.getElementById("searchForm");
  const input = document.getElementById("serviceSearch");
  const location = document.getElementById("locationSelect");
  const cards = [...document.querySelectorAll(".pro-card")];
  const count = document.getElementById("resultsCount");
  const empty = document.getElementById("emptyState");
  const toast = document.getElementById("toast");
  const menu = document.getElementById("mainNav");
  const toggle = document.getElementById("menuToggle");

  function notify(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(notify.timer);
    notify.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
  }
  function filter(query = "") {
    const raw = query.toLocaleLowerCase("pt-PT").trim();
    const places = ["Talatona", "Maianga", "Kilamba", "Viana", "Ingombota", "Camama", "Benfica"];
    const detectedPlace = places.find(place => raw.includes(place.toLocaleLowerCase("pt-PT")));
    if (detectedPlace) location.value = detectedPlace;
    const loc = location.value.toLocaleLowerCase("pt-PT");
    const aliases = [
      {match: /ar condicionado|climatiza|reparar|reparação|reparacoes|electricista|eletricista|electricidade|eletricidade|manutenção/, terms: ["reparações", "electricidade", "climatização"]},
      {match: /canaliza|canalizador|canos|fuga de água/, terms: ["canalização"]},
      {match: /limpeza|limpar|empregada doméstica|doméstic/, terms: ["limpeza", "serviços domésticos"]},
      {match: /construção|construcao|pedreiro|pintura|remodelação|remodelacao/, terms: ["construção"]},
      {match: /informática|informatica|computador|tecnologia|software/, terms: ["tecnologia"]},
      {match: /transporte|motorista|mudança|mudanca/, terms: ["transportes"]},
      {match: /saúde|saude|bem-estar|massagem/, terms: ["saúde"]}
    ];
    const semantic = aliases.find(item => item.match.test(raw));
    const cleaned = raw.replace(/\b(preciso|necessito|quero|de|um|uma|o|a|para|por|favor|em|no|na|meu|minha|técnico|tecnico|profissional|serviço|servico)\b/g, " ").replace(/\s+/g," ").trim();
    let visible = 0;
    cards.forEach(card => {
      const category = (card.dataset.category || "").toLocaleLowerCase("pt-PT");
      const haystack = `${card.dataset.name} ${category} ${card.dataset.location}`.toLocaleLowerCase("pt-PT");
      const locationMatches = loc === "luanda" || (card.dataset.location || "").toLocaleLowerCase("pt-PT") === loc;
      const queryMatches = !raw || haystack.includes(cleaned) || (semantic && semantic.terms.some(term => category.includes(term))) || (raw.includes("ar condicionado") && category.includes("reparações"));
      const show = queryMatches && locationMatches;
      card.hidden = !show;
      if (show) visible++;
    });
    count.textContent = `${visible} ${visible === 1 ? "profissional" : "profissionais"}`;
    empty.hidden = visible !== 0;
    document.getElementById("profissionais").scrollIntoView({behavior:"smooth",block:"start"});
  }
  form.addEventListener("submit", event => {
    event.preventDefault();
    const query = input.value;
    filter(query);
    if (query.trim()) notify("Pesquisa demonstrativa aplicada. Os resultados são ilustrativos.");
  });
  document.querySelectorAll("[data-query]").forEach(button => button.addEventListener("click", () => {
    input.value = button.dataset.query;
    filter(button.dataset.query);
  }));
  document.querySelectorAll(".category[data-category]").forEach(link => link.addEventListener("click", () => {
    const category = link.dataset.category;
    input.value = category === "Todas" ? "" : category;
    if (category === "Todas") location.value = "Luanda";
    filter(input.value);
  }));
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded","false");
  }));
})();


/* Navegação móvel comum: menu inferior e alternância entre ambientes */
(() => {
  const sheet = document.getElementById("mobileMenuSheet");
  const backdrop = document.getElementById("mobileMenuBackdrop");
  if (!sheet || !backdrop) return;
  const open = () => { sheet.classList.add("is-open"); backdrop.classList.add("is-visible"); document.body.classList.add("mobile-menu-open"); };
  const close = () => { sheet.classList.remove("is-open"); backdrop.classList.remove("is-visible"); document.body.classList.remove("mobile-menu-open"); };
  document.querySelectorAll(".mobile-nav-menu,#mobileDashboardMenu").forEach(btn => btn.addEventListener("click", open));
  document.querySelectorAll(".mobile-menu-close").forEach(btn => btn.addEventListener("click", close));
  backdrop.addEventListener("click", close);
  sheet.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
})();
