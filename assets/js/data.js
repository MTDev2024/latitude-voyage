/*=============== DONNÉES DESTINATIONS ===============*/
/* Source de données partagée entre la page d'accueil, la page
   destinations (liste + filtres) et la page de détail. */

const destinations = [
  {
    id: "plitvice",
    nom: "Lacs de Plitvice",
    pays: "Croatie",
    categorie: "nature",
    image: "assets/img/home-trees.jpg",
    resume:
      "Une mosaïque de lacs turquoise reliés par des cascades, au cœur d'une forêt dense.",
    description:
      "Les Lacs de Plitvice forment l'un des parcs naturels les plus spectaculaires d'Europe. Des passerelles en bois serpentent entre seize lacs aux eaux turquoise, reliés par des dizaines de cascades. C'est une destination idéale pour les amateurs de randonnée tranquille et de photographie.",
    duree: "3 à 4 jours",
    budget: "À partir de 450€",
    saison: "Mai à septembre",
  },
  {
    id: "jokulsarlon",
    nom: "Lagune de Jökulsárlón",
    pays: "Islande",
    categorie: "nature",
    image: "assets/img/home-lake.jpg",
    resume:
      "Un lagon glaciaire où dérivent des icebergs, entre terre et mer.",
    description:
      "La lagune glaciaire de Jökulsárlón est un paysage presque irréel : d'immenses blocs de glace détachés du glacier Breiðamerkurjökull y dérivent lentement avant de rejoindre l'océan. Un passage obligé sur la route circulaire islandaise, particulièrement saisissant au lever et au coucher du soleil.",
    duree: "2 à 3 jours",
    budget: "À partir de 650€",
    saison: "Juin à août",
  },
  {
    id: "dolomites",
    nom: "Les Dolomites",
    pays: "Italie",
    categorie: "montagne",
    image: "assets/img/home-mountain.jpg",
    resume:
      "Des sommets dentelés et des vallées verdoyantes, paradis des randonneurs.",
    description:
      "Classées au patrimoine mondial de l'UNESCO, les Dolomites offrent un terrain de jeu exceptionnel pour la randonnée et l'alpinisme. Leurs parois calcaires prennent des teintes roses et orangées au coucher du soleil, un phénomène surnommé l'enrosadira.",
    duree: "5 à 7 jours",
    budget: "À partir de 700€",
    saison: "Juin à septembre",
  },
  {
    id: "costa-brava",
    nom: "Costa Brava",
    pays: "Espagne",
    categorie: "plage",
    image: "assets/img/home-beach.jpg",
    resume:
      "Des criques sauvages et des eaux cristallines le long d'une côte escarpée.",
    description:
      "La Costa Brava alterne petites criques cachées, falaises abruptes et villages de pêcheurs pittoresques. Entre baignade, plongée et dégustation de tapas en bord de mer, c'est une destination idéale pour un séjour détente au rythme méditerranéen.",
    duree: "4 à 6 jours",
    budget: "À partir de 400€",
    saison: "Mai à octobre",
  },
  {
    id: "mont-logan",
    nom: "Mont Logan",
    pays: "Canada",
    categorie: "montagne",
    image: "assets/img/popular-mountain.jpg",
    resume:
      "Le plus haut sommet du Canada, entouré de glaciers immaculés.",
    description:
      "Point culminant du Canada, le Mont Logan domine un paysage de glaciers et de vallées sauvages dans le parc national Kluane, au Yukon. Une destination d'exception pour les amoureux de grands espaces et d'aventure en altitude.",
    duree: "7 à 10 jours",
    budget: "À partir de 1200€",
    saison: "Juillet à août",
  },
  {
    id: "killarney",
    nom: "Forêt de Killarney",
    pays: "Irlande",
    categorie: "nature",
    image: "assets/img/popular-forest.jpg",
    resume:
      "Des lacs et des bois centenaires au pied des montagnes de Kerry.",
    description:
      "Le parc national de Killarney abrite les derniers vestiges de forêt native d'Irlande. Entre lacs paisibles, cerfs sauvages et ruines de vieilles abbayes, c'est une parenthèse verdoyante idéale pour la randonnée et le vélo.",
    duree: "2 à 3 jours",
    budget: "À partir de 380€",
    saison: "Avril à septembre",
  },
  {
    id: "lac-de-garde",
    nom: "Lac de Garde",
    pays: "Italie",
    categorie: "nature",
    image: "assets/img/popular-lake.jpg",
    resume:
      "Le plus grand lac d'Italie, bordé de villages colorés et d'oliviers.",
    description:
      "Entouré de montagnes et de villages pittoresques, le Lac de Garde séduit par la douceur de son climat et la beauté de ses rives. Sports nautiques, villages médiévaux et dégustation de vins locaux en font une escale complète.",
    duree: "3 à 5 jours",
    budget: "À partir de 420€",
    saison: "Mai à septembre",
  },
  {
    id: "santorin",
    nom: "Plages de Santorin",
    pays: "Grèce",
    categorie: "plage",
    image: "assets/img/about-beach.jpg",
    resume:
      "Falaises volcaniques, villages blancs et couchers de soleil mythiques.",
    description:
      "Santorin doit son relief spectaculaire à son passé volcanique : plages de sable noir, falaises abruptes et villages blancs accrochés à la caldeira. Un classique des Cyclades, aussi romantique que photogénique.",
    duree: "4 à 5 jours",
    budget: "À partir de 550€",
    saison: "Mai à octobre",
  },
  {
    id: "phuket",
    nom: "Baie de Phuket",
    pays: "Thaïlande",
    categorie: "plage",
    image: "assets/img/explore-beach.jpg",
    resume:
      "Eaux turquoise, îles karstiques et vie nocturne animée.",
    description:
      "Entre plages de sable fin, excursions vers les îles karstiques de la baie de Phang Nga et marchés nocturnes animés, Phuket offre un parfait équilibre entre farniente et dépaysement culturel.",
    duree: "7 à 10 jours",
    budget: "À partir de 900€",
    saison: "Novembre à avril",
  },
  {
    id: "bora-bora",
    nom: "Île de Bora Bora",
    pays: "Polynésie française",
    categorie: "ile",
    image: "assets/img/join-island.jpg",
    resume:
      "Bungalows sur pilotis et lagon turquoise au pied d'un volcan éteint.",
    description:
      "Bora Bora incarne l'image même du paradis tropical : un lagon aux nuances de bleu infinies, des bungalows sur pilotis et le mont Otemanu veillant sur l'ensemble. Snorkeling, plongée avec les raies et détente absolue au programme.",
    duree: "6 à 8 jours",
    budget: "À partir de 2200€",
    saison: "Mai à octobre",
  },
];

const categoriesLabels = {
  plage: "Plage",
  montagne: "Montagne",
  nature: "Nature",
  ile: "Île",
};
