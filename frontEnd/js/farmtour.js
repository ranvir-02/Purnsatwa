document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const farmTourLink = document.querySelector('nav li.active a');

  if (farmTourLink) {
    farmTourLink.setAttribute('aria-current', 'page');
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      if (link.textContent.trim() === 'Farm Tour') {
        const activeItem = document.querySelector('nav li.active');
        if (activeItem && activeItem !== link.parentElement) {
          activeItem.classList.remove('active');
        }
        link.parentElement.classList.add('active');
      }
    });
  });
});
