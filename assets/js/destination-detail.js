/*=============== PAGE DE DÉTAIL D'UNE DESTINATION ===============*/
const params = new URLSearchParams(window.location.search);
const destinationId = params.get("id");
const destination = destinations.find((d) => d.id === destinationId);
const content = document.getElementById("destination-content");

function relatedCards(current) {
  const related = destinations
    .filter((d) => d.categorie === current.categorie && d.id !== current.id)
    .slice(0, 3);

  if (related.length === 0) return "";

  return `
    <section class="related section">
      <div class="container">
        <h2 class="section__title">Dans la même ambiance</h2>
        <div class="related__grid grid">
          ${related
            .map(
              (d) => `
            <a href="destination.html?id=${d.id}" class="related__card">
              <img src="${d.image}" alt="${d.nom}, ${d.pays}" />
              <div class="related__info">
                <h3>${d.nom}</h3>
                <span>${d.pays}</span>
              </div>
            </a>`
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

if (!destination) {
  content.innerHTML = `
    <section class="page-hero section">
      <div class="container">
        <h1 class="page-hero__title">Destination introuvable</h1>
        <p class="page-hero__description">
          Cette destination n'existe pas ou n'est plus disponible.
        </p>
        <a href="destinations.html" class="button" style="margin-top: 1.5rem;">
          Voir toutes les destinations <i class="ri-arrow-right-line"></i>
        </a>
      </div>
    </section>`;
} else {
  document.title = `${destination.nom} — Latitude`;

  content.innerHTML = `
    <section class="detail-hero">
      <img src="${destination.image}" alt="${destination.nom}, ${destination.pays}" class="detail-hero__img" />
      <div class="detail-hero__shadow"></div>
      <div class="detail-hero__content container">
        <a href="destinations.html" class="detail-hero__back">
          <i class="ri-arrow-left-line"></i> Toutes les destinations
        </a>
        <span class="destination__badge">${categoriesLabels[destination.categorie]}</span>
        <h1 class="detail-hero__title">${destination.nom}</h1>
        <div class="popular__location">
          <i class="ri-map-pin-line"></i>
          <span>${destination.pays}</span>
        </div>
      </div>
    </section>

    <section class="detail section">
      <div class="detail__container container grid">
        <div class="detail__description">
          <h2 class="section__title" style="text-align:left;">Présentation</h2>
          <p>${destination.description}</p>

          <a href="contact.html?destination=${encodeURIComponent(destination.nom)}" class="button" style="margin-top: 1.5rem;">
            Réserver ce voyage <i class="ri-arrow-right-line"></i>
          </a>
        </div>

        <aside class="detail__info">
          <h3 class="detail__info-title">Infos pratiques</h3>
          <ul class="detail__info-list">
            <li>
              <i class="ri-time-line"></i>
              <div><span>Durée conseillée</span><strong>${destination.duree}</strong></div>
            </li>
            <li>
              <i class="ri-sun-line"></i>
              <div><span>Meilleure saison</span><strong>${destination.saison}</strong></div>
            </li>
            <li>
              <i class="ri-wallet-3-line"></i>
              <div><span>Budget indicatif</span><strong>${destination.budget}</strong></div>
            </li>
          </ul>
        </aside>
      </div>
    </section>

    ${relatedCards(destination)}`;
}
