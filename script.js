const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.querySelector(".overlay");
const mobileLinks = document.querySelectorAll(".mobile-nav a");

// ABRIR / FECHAR MENU
menuBtn.addEventListener("click", () => {

  menuBtn.classList.toggle("active");
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("menu-open");

});

// FECHAR AO CLICAR NO OVERLAY
overlay.addEventListener("click", closeMenu);

// FECHAR AO CLICAR NOS LINKS
mobileLinks.forEach(link => {

  link.addEventListener("click", closeMenu);

});

// FUNÇÃO FECHAR MENU
function closeMenu() {

  menuBtn.classList.remove("active");
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("menu-open");

}