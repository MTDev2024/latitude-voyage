/*=============== PAGE DESTINATIONS : FILTRES + RECHERCHE ===============*/
const grid = document.getElementById("destinations-grid");
const filterButtons = document.querySelectorAll(".filter__btn");
const searchInput = document.getElementById("search-input");
const resultsCount = document.getElementById("results-count");
const emptyMessage = document.getElementById("empty-message");

let activeFilter = "tous";

const cardTemplate = (d) => `
  <article class="destination__card">
    <a href="destination.html?id=${d.id}" class="destination__image">
      <img src="${d.image}" alt="${d.nom}, ${d.pays}" />
      <span class="destination__badge">${categoriesLabels[d.categorie]}</span>
    </a>
    <div class="destination__body">
      <h3 class="destination__title">${d.nom}</h3>
      <div class="destination__location">
        <i class="ri-map-pin-line"></i>
        <span>${d.pays}</span>
      </div>
      <p class="destination__resume">${d.resume}</p>
      <a href="destination.html?id=${d.id}" class="destination__link">
        Voir la destination <i class="ri-arrow-right-line"></i>
      </a>
    </div>
  </article>`;

function render() {
  const query = searchInput.value.trim().toLowerCase();

  const results = destinations.filter((d) => {
    const matchFilter = activeFilter === "tous" || d.categorie === activeFilter;
    const matchQuery =
      !query ||
      d.nom.toLowerCase().includes(query) ||
      d.pays.toLowerCase().includes(query);
    return matchFilter && matchQuery;
  });

  grid.innerHTML = results.map(cardTemplate).join("");
  resultsCount.textContent = `${results.length} destination${
    results.length > 1 ? "s" : ""
  }`;
  emptyMessage.hidden = results.length !== 0;
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active-filter"));
    btn.classList.add("active-filter");
    activeFilter = btn.dataset.filter;
    render();
  });
});

searchInput.addEventListener("input", render);

render();
