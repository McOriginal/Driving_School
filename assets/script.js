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
