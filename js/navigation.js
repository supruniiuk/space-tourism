const menu = document.getElementsByClassName("nav__list")[0];
const main = document.getElementsByTagName("main")[0];
const links = menu.children;

const pages = {
  home: "home",
  destination: "destination",
  crew: "crew",
  technology: "technology",
};

let currentLink = links[0];

for (let i = 0; i < links.length; i++) {
  const link = links[i].textContent.trim().split(/\d/g).pop();
  links[i].onclick = () => {
    if (link == "home") {
      window.location.assign(`index.html`);
    } else {
      window.location.assign(`${link}.html`);
    }
  };
}
