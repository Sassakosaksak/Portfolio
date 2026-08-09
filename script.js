document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.setAttribute('tabindex', '-1');
  });
});

const cards = document.querySelectorAll('.work-card');
cards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    card.style.transform = `translateY(-5px) rotateX(${y * -1.5}deg) rotateY(${x * 1.5}deg)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});
