const planetsList = document.getElementsByClassName("planet__list")[0];
let currentPlanet = null;

const planetImg = document.getElementsByClassName("planet__img")[0].children[0];
const planetName = document.getElementsByClassName("planet__name")[0];
const planetDescr = document.getElementsByClassName("planet__descr")[0];
const planetAvg = document.getElementsByClassName("planet__avg")[0];
const planetTtime = document.getElementsByClassName("planet__ttime")[0];

function setPlanet(planet) {
  planetImg.src = planet.url;
  planetName.textContent = planet.name;
  planetDescr.textContent = planet.description;
  planetAvg.textContent = planet.distance;
  planetTtime.textContent = planet.travelTime;
}

for (let i = 0; i < planets.length; i++) {
  const planet = document.createElement("li");
  planet.setAttribute("data-name", planets[i].name.toLowerCase());
  planet.textContent = planets[i].name;
  planetsList.appendChild(planet);

  planet.onclick = () => {
    if (currentPlanet) {
      currentPlanet.classList.remove("active-link");
    }
    currentPlanet = planet;
    currentPlanet.classList.add("active-link");

    setPlanet(planets[i]);
  };
}

if (!currentPlanet) {
  setPlanet(planets[0]);
}
