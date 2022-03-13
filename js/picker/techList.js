const techList = document.getElementsByClassName("tech__list")[0];
let currentTech = null;

const techImgPortrait = document.getElementsByClassName("portrait")[0];
const techImgLandscape = document.getElementsByClassName("landscape")[0];
const techName = document.getElementsByClassName("tech__name")[0];
const techDescr = document.getElementsByClassName("tech__descr")[0];

function setTech(technology) {
  techImgPortrait.src = technology.portrait;
  techImgLandscape.src = technology.landscape;
  techName.textContent = technology.name;
  techDescr.textContent = technology.description;
}

for (let i = 0; i < tech.length; i++) {
  const technology = document.createElement("li");
  technology.setAttribute("data-tech", tech[i].name.toLowerCase());
  technology.textContent = i + 1;
  techList.appendChild(technology);

  technology.onclick = () => {
    if (currentTech) {
      currentTech.classList.remove("active-tech");
    }
    currentTech = technology;
    currentTech.classList.add("active-tech");

    setTech(tech[i]);
  };
}

if (!currentTech) {
  setTech(tech[0]);
}
