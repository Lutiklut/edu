document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const menu = document.querySelector('.burger-menu');
  const overlay = document.querySelector('.burger-menu_overlay');
  const links = document.querySelectorAll('.burger__links .header__link');
  
  burger.addEventListener('click', () => {
    menu.classList.toggle('burger-menu_active');
    burger.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    menu.classList.remove('burger-menu_active');
    burger.classList.remove('active');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('burger-menu_active');
      burger.classList.remove('active');
    });
  });
});

window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
