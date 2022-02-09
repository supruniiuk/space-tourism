const menu = document.getElementsByClassName("nav__list")[0];
const main = document.getElementsByTagName("main")[0];
const links = menu.children;

const pages = {
  home: home,
  destination: destination,
  crew: crew,
  technology: technology,
};

function setBackgrounds(address) {
  document.documentElement.style.setProperty(
    "--background-home-desktop",
    `url(../assets/${address}/background-${address}-desktop.jpg)`
  );
  document.documentElement.style.setProperty(
    "--background-home-tablet",
    `url(../assets/${address}/background-${address}-tablet.jpg)`
  );
  document.documentElement.style.setProperty(
    "--background-home-mobile",
    `url(../assets/${address}/background-${address}-mobile.jpg)`
  );
}

function setPage() {
  let path = window.location.hash.slice(1);
  if (path === "") {
    path = "home";
  }

  main.innerHTML = pages[path];
}

for (let i = 0; i < links.length; i++) {
  const link = links[i].textContent.trim().split(/\d/g).pop();

  links[i].onclick = () => {
    window.location.assign(`#${link}`);
    setBackgrounds(link);
    setPage();
  };
}

window.addEventListener("popstate", (e) => {
  setPage();
});

setPage();
