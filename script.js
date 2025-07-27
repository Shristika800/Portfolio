document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      } else {
        entry.target.classList.remove('reveal');
      }
    });
  }, {
    threshold: 0.1
  });

  const revealElements = document.querySelectorAll('.hero, section');
  revealElements.forEach(el => observer.observe(el));
});
