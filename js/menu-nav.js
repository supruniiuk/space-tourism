const menu = document.getElementsByClassName("nav__list")[0];
const links = menu.children;

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

for (let i = 0; i < links.length; i++) {
  let link = links[i].textContent.trim().split(/\d/g).pop();
  links[i].onclick = () => {
    setBackgrounds(link);
  };
}
