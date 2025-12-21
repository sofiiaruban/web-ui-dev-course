const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-menu__close');

burger.addEventListener('click', () => {
 mobileMenu.classList.add('active');
 burger.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
 mobileMenu.classList.remove('active');
 burger.style.display = 'flex';
});


document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
   mobileMenu.classList.remove('active');
   burger.style.display = 'flex';
  });
});
