document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.querySelector('.menu-toggle');
  var menuIcon = document.querySelector('.menu-icon');
  var slideMenu = document.querySelector('.slide-menu');

  menuToggle.addEventListener('click', function() {
    menuIcon.classList.toggle('open');
    slideMenu.classList.toggle('show');
  });
});