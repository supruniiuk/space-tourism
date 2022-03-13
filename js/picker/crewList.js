const crewList = document.getElementsByClassName("member__list")[0].children[0];
let currentMember = null;

const memberImg = document.getElementsByClassName("member__img")[0].children[0];
const memberName = document.getElementsByClassName("member__name")[0];
const memberDescr = document.getElementsByClassName("member__descr")[0];
const memberRole = document.getElementsByClassName("member__role")[0];

function setMember(member) {
  memberImg.src = member.url;
  memberName.textContent = member.name;
  memberDescr.textContent = member.description;
  memberRole.textContent = member.role;
}

for (let i = 0; i < crew.length; i++) {
  const member = document.createElement("li");
  member.setAttribute("data-role", crew[i].role.toLowerCase());
  crewList.appendChild(member);

  member.onclick = () => {
    console.log("click");
    if (currentMember) {
      currentMember.classList.remove("active-member");
    }
    currentMember = member;
    currentMember.classList.add("active-member");

    setMember(crew[i]);
  };
}

if (!currentMember) {
  setMember(crew[0]);
}
