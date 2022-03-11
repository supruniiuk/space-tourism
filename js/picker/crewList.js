const crewList = document.getElementsByClassName("member__list")[0].children[0].children;
let currentMember = null;

const memberImg = document.getElementsByClassName("member__img")[0].children[0];
const memberName = document.getElementsByClassName("member__name")[0];
const memberDescr = document.getElementsByClassName("member__descr")[0];
const memberRole = document.getElementsByClassName("member__role")[0];

for (let i = 0; i < crewList.length; i++) {
  const member = crewList[i];

  for (let j = 0; j < crew.length; j++) {
    if (crew[j].role.toLowerCase() === member.getAttribute('data-role').toLowerCase()) {
      crewList[i].onclick = () => {

        console.log("click")
        if (currentMember) {
            currentMember.classList.remove("active-member");
        }
        currentMember = member;
        currentMember.classList.add("active-member");

        memberImg.src = crew[j].url;
        memberName.textContent = crew[j].name;
        memberDescr.textContent = crew[j].description;
        memberRole.textContent = crew[j].role;
      };
    }
  }
}
