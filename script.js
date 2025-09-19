const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLink = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  nav.classList.add("show");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("show");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});




const cards = document.querySelectorAll('.card-3d div');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // remove active de todos
    cards.forEach(c => c.classList.remove('active'));

    // adiciona active no clicado
    card.classList.add('active');

    // fala o nome
    const tech = card.getAttribute('data-name');
    if ('speechSynthesis' in window) {
      const utter = new SpeechSynthesisUtterance(tech);
      speechSynthesis.speak(utter);
    }
  });
});

