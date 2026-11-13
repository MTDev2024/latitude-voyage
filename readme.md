# Latitude - Agence de voyage (projet portfolio)

Site vitrine fictif pour une agence de voyage, en français, avec un
catalogue de destinations filtrable et des fiches détaillées générées
dynamiquement en JavaScript.

Ce projet part de la base statique [responsive_travel_website](../responsive_travel_website-1)
(exercice d'apprentissage), traduite et enrichie pour devenir une pièce de
portfolio plus aboutie.

## Pages

- `index.html` : Accueil, avec hero, présentation, destinations phares,
  témoignages et newsletter (démo).
- `destinations.html` : Catalogue complet avec filtres par ambiance
  (plage, montagne, nature, île) et recherche par nom/pays.
- `destination.html?id=...` : Fiche détaillée générée dynamiquement à
  partir de `assets/js/data.js` (description, durée, budget, saison,
  destinations similaires).
- `contact.html` : Formulaire de contact, démonstration front-end
  uniquement, aucun envoi réel.
- `mentions-legales.html` : Mentions légales du site.

## Stack

HTML / CSS / JavaScript vanilla, [RemixIcon](https://remixicon.com/) et
[ScrollReveal](https://scrollrevealjs.org/) pour les animations.

## Lancer le projet

Aucune dépendance : ouvrir `index.html` dans un navigateur, ou servir le
dossier avec un serveur statique (ex. `npx serve`).
