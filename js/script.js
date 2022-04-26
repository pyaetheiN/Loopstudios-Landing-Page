const navMenu = document.getElementById('nav-menu'),
      navList = document.getElementById('nav-list'),
      navLinks = document.querySelectorAll('.nav__link'),
      overlay = document.querySelector('.hero__overlay'),
      heroContent = document.querySelector('.hero__content');

navMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navList.classList.toggle('active');
  overlay.classList.toggle('active');
  heroContent.classList.toggle('active');
})

// removing menu upon clicking links
navLinks.forEach(n => n.addEventListener('click', () => {
  navMenu.classList.remove('active');
  navList.classList.remove('active');
  overlay.classList.remove('active');
  heroContent.classList.remove('active');
}))