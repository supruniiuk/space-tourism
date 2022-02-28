const planetsList = document.getElementsByClassName("planet__list")[0].children;
let currentPlanet = null;

const planetImg = document.getElementsByClassName("planet__img")[0].children[0];
const planetName = document.getElementsByClassName("planet__name")[0];
const planetDescr = document.getElementsByClassName("planet__descr")[0];
const planetAvg = document.getElementsByClassName("planet__avg")[0];
const planetTtime = document.getElementsByClassName("planet__ttime")[0];

for (let i = 0; i < planetsList.length; i++) {
  const planet = planetsList[i];

  for (let j = 0; j < planets.length; j++) {
    console.log(
      planets[j].name.toLowerCase(),
      planet.textContent.toLowerCase()
    );

    if (planets[j].name.toLowerCase() === planet.textContent.toLowerCase()) {
      planetsList[i].onclick = () => {
        if (currentPlanet) {
          currentPlanet.classList.remove("active-link");
        }
        currentPlanet = planet;
        currentPlanet.classList.add("active-link");

        planetImg.src = planets[j].url;
        planetName.textContent = planets[j].name;
        planetDescr.textContent = planets[j].description;
        planetAvg.textContent = planets[j].distance;
        planetTtime.textContent = planets[j].travelTime;
      };
    }
  }
}
