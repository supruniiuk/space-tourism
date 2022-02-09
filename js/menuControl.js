const burgerMenu = document.getElementsByClassName("burger-menu")[0];
const closeMenu = document.getElementsByClassName("close-menu")[0];

const nav = document.getElementsByClassName("nav")[0];

burgerMenu.onclick = () => {
  burgerMenu.style.display = "none";
  nav.style.display = "block";
};

closeMenu.onclick = () => {
  burgerMenu.style.display = "block";
  nav.style.display = "none";
};
