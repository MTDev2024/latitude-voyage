/*=============== DESTINATIONS PHARES (page d'accueil) ===============*/
const popularContainer = document.getElementById("popular-container");

if (popularContainer) {
  const vedettes = ["mont-logan", "killarney", "lac-de-garde"];

  const cardsHTML = vedettes
    .map((id) => destinations.find((d) => d.id === id))
    .filter(Boolean)
    .map(
      (d) => `
      <article class="popular__card">
        <a href="destination.html?id=${d.id}" class="popular__image">
          <img
            src="${d.image}"
            alt="${d.nom}, ${d.pays}"
            class="popular__img"
          />
          <div class="popular__shadow"></div>
        </a>

        <h2 class="popular__title">${d.nom}</h2>
        <div class="popular__location">
          <i class="ri-map-pin-line"></i>
          <span>${d.pays}</span>
        </div>
      </article>`
    )
    .join("");

  popularContainer.innerHTML = cardsHTML;
}
