/* Loads Head Info */
document.getElementById("headInfo").innerHTML =
  "<title>Struklji</title>" +
  "<link rel='stylesheet' href='/Struklji/css/main.css' />" +
  "<link rel='preconnect' href='https://fonts.googleapis.com' />" +
  "<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />" +
  "<link rel='icon' type='image/x-icon' href='/Struklji/favicon.ico'>" +
  "<link href='https://fonts.googleapis.com/css2?family=Viga&display=swap' rel='stylesheet'></link>" +
  "<link href='https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap' rel='stylesheet'>";

/* Loads Navigation Bar */
document.getElementById("navBar").innerHTML =
  "<nav class='navbar'>" +
  "<div class='navbar__container'><a href='/Struklji/index.html'><img src='/Struklji/images/Logo.png' class='navbar__logo'/></a>" +
  "<div class='navbar__toggle' id='mobile-menu'>" +
  "<span class='bar'></span>" +
  "<span class='bar'></span>" +
  "<span class='bar'></span>" +
  "</div>" +
  "<ul class='navbar__menu'>" +
  "<li class='navbar__item'><a href='/Struklji/index.html' class='navbar__links'>Domov</a></li>" +
  "<li class='navbar__item'><a href='/Struklji/categories/recept.html' class='navbar__links'>Recept</a></li>" +
  "<li class='navbar__item'><a href='https://muzejslakpavcek.si/' class='navbar__links' target='_blank'>Muzej</a></li>" +
  "</ul>" +
  "</div>" +
  "</nav>";

/* Loads Footer */
document.getElementById("footer").innerHTML =
  "<div class='footer__container'>" +
  "<div class='footer__cards'>" +
  "<div class='footer__cards--wrapper'>" +
  "<div class='footer__cards--items'>" +
  "</div>" +
  "<div class='footer__cards--items'>" +
  "</div>" +
  "</div>" +
  "<div class='footer__cards--wrapper'>" +
  "<div class='footer__cards--items'>" +
  "</div>" +
  "</div>" +
  "</div>" +
  "<div class='footer__copyright'>" +
  "</div>" +
  "</div>";

/* Mobile Menu */
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})