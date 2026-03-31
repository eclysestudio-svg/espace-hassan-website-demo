const revealItems = document.querySelectorAll('.card, .dish-card, .stat-card, .gallery-card, .cta-box');

revealItems.forEach((item) => item.classList.add('reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.14,
  }
);

revealItems.forEach((item) => observer.observe(item));
