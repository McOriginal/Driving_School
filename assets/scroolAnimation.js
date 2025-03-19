const containers = document.querySelectorAll('.scrollView');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  },
  {
    threshold: 0.1, // Déclenche l'animation lorsque 10% de l'élément est visible
  }
);

containers.forEach((container) => {
  observer.observe(container);
});

// -----------------------------------------------------------
// -----------------------------------------------------------
// ------------------ View to Left -----------------------------------------
// -----------------------------------------------------------
const items = document.querySelectorAll('.itemsView');

const display = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('itemVisible');
      } else {
        entry.target.classList.remove('itemVisible');
      }
    });
  },
  {
    threshold: 0.1, // Déclenche l'animation lorsque 10% de l'élément est visible
  }
);

items.forEach((value) => {
  display.observe(value);
});
