/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*Menu Show*/
/* validate if constant exists*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*Menu Hidden*/
/* validate if constant exists*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //remove "show-menu" class when click on nav__link
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

// Change Header BG

const scrollHeader = () => {
  const header = document.getElementById("header");
};

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // when the scroll is greater than 50vh, add the blur-header class to te header tag
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};

window.addEventListener("scroll", blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  //when the scroll is higher than 350vh, add the show-scroll class to the a tag with the scrollup classs
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass?.classList.add('active-link');
        } else {
            sectionClass?.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*=============== LIEN ACTIF SELON LA PAGE (multi-pages) ===============*/
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

if (currentPage !== 'index.html' && currentPage !== '') {
  document.querySelectorAll('.nav__link').forEach((link) => {
    const linkPage = link.getAttribute('href').split('#')[0];
    if (linkPage === currentPage) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
}

/*=============== NEWSLETTER (démo, sans backend) ===============*/
const newsletterForm = document.getElementById('newsletter-form');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('.join__input');
    newsletterForm.innerHTML = `<p class="join__success"><i class="ri-checkbox-circle-line"></i> Merci ! Vous êtes inscrit·e avec ${input.value}.</p>`;
  });
}

/*=============== FORMULAIRE DE CONTACT ===============*/
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.reset();
  });
}

/*=============== ANNÉE COURANTE DANS LE FOOTER ===============*/
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 3000,
  delay: 400,
  //reset: true // Animations repeat
})

// Correction des guillemets sur cette ligne
sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`)
sr.reveal(`.home__card`, {delay: 600, distance: '100px', interval: 100})
sr.reveal(`.about__data, .join__image`, {origin: 'right'})
sr.reveal(`.about__image, .join__data`, {origin: 'left'})
sr.reveal(`.popular__card, .testimonial__card, .destination__card`, {interval: 200})
