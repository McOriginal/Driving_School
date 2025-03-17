//  ------------------------------------------
//  ------------ Galerie Slider ------------------------------
//  ------------------------------------------
//  ------------------------------------------
var swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction', // Affiche la pagination sous forme de fraction (ex: 1/5)
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000, // Délai en millisecondes entre les slides
    disableOnInteraction: false, // Continue l'autoplay même après interaction utilisateur
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1, // 1 slide visible sur les petits écrans
      spaceBetween: 10, // Espace entre les slides
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2, // 2 slides visibles sur les écrans moyens
      spaceBetween: 20,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3, // 3 slides visibles sur les grands écrans
      spaceBetween: 30,
    },
  },
});
