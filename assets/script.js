const menu_bar = document.querySelector('nav .menu');
const close_menu = document.querySelector('nav .close');
const nav_items = document.querySelector('.nav_items');

// ---------------------------------------------------
// -------------- nav_items Visibily -------------------------------------
// ---------------------------------------------------
menu_bar.addEventListener('click', () => {
  nav_items.style.visibility = 'visible';
  nav_items.style.opacity = 1;
});
close_menu.addEventListener('click', () => {
  nav_items.style.visibility = 'hidden';
  nav_items.style.opacity = 0;
});

// ---------------------------------------------------
// -------------- nav_items Scrool Effet -------------------------------------
// ---------------------------------------------------

const navBar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  // navBar.style.transform = `translateY(${scroll}px)`;

  if (scroll >= 40) {
    navBar.classList.add('scrollbar');
  } else {
    navBar.classList.remove('scrollbar');
  }
});

//  ------------------------------------------
//  ------------ Galerie Slider ------------------------------
//  ------------------------------------------
//  ------------------------------------------

var swiper = new Swiper('.mySwiper', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper('.mySwiper2', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
  autoplay: {
    delay: 3000, // Délai en millisecondes entre les slides
    disableOnInteraction: false, // Continue l'autoplay même après interaction utilisateur
  },
});
