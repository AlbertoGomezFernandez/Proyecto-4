import { Button } from './public/src/components/Button/Button';
import { Card } from './public/src/components/Card/Card';
import { nav_button_content } from './public/src/data/button_content';
import { personalInfo } from './public/src/data/personal_content';
import './style.css';


const infoData = { ...personalInfo };
const navContent = [...nav_button_content];

const body = document.querySelector("body");
const divApp = document.querySelector("#app");


/* Nav Bar elements and Buttons */
const navBar = document.createElement("nav");
const navImg = document.createElement("img");
navImg.src = "./public/src/assets/ALBERTO GOMEZ Logo - Original with Transparent Background.svg";
navBar.appendChild(navImg);

navContent.forEach(button => {
  Button({ parentNode: navBar, text: button.text });
});


/* Top div elements and Home*/
const topDiv = document.createElement("div");
topDiv.className = "top-container";
topDiv.id = "Home";
Card({ parentNode: topDiv, className: "top", tittle: ` Hi my name is ${infoData.name}`, text: infoData.introduction });

const topImg = document.createElement("img");
topImg.className = "topImg";
topImg.src = infoData.image;

topDiv.appendChild(topImg);

/* mid div elements  and About me */
const midDiv = document.createElement("div");
midDiv.className = "mid-container";
midDiv.id = "About me";


Card({ parentNode: midDiv, className: "mid", tittle: "About Me", text: infoData.aboutMe, textColor: "#dbdbdb" });

const midSection = document.createElement("section");
midSection.className = "mid-section";

midDiv.appendChild(midSection);

Card({
  parentNode: midSection,
  className: "mid",
  imageSrc: "./public/src/assets/editar.png",
  imgDisplay: "block",
  tittle: "Product Design",
  text: "Turn what you have in mind of a digital product into reality.",
  textColor: "#dbdbdb"
});
Card({
  parentNode: midSection,
  className: "mid",
  imageSrc: "./public/src/assets/coleccion-de-albumes white.png",
  imgDisplay: "block",
  tittle: "Responsive Development",
  text: "With a keen eye for design and attention to detail, I specialize in creating user-friendly interfaces and responsive websites that cater to the needs of my clients.",
  textColor: "#dbdbdb"
});
Card({
  parentNode: midSection,
  className: "mid",
  imageSrc: "./public/src/assets/api white.png",
  imgDisplay: "block",
  tittle: "Technologies",
  text: "From front-end development using HTML, CSS, React and JavaScript to back-end development with Node and MongoDB, my skills are diverse and adaptable to any project.",
  textColor: "#dbdbdb"
});

const skills = document.createElement("div");
skills.className = "skills";
const h2Element = document.createElement("h2");
h2Element.className = "h2Skills";
h2Element.innerText = "Skills";
skills.appendChild(h2Element);
const skillsList = document.createElement("ul");

infoData.skills.forEach(skill => {
  const liElement = document.createElement("li");
  liElement.innerText = skill;
  skillsList.appendChild(liElement);
});

skills.appendChild(skillsList);


midDiv.appendChild(skills);


/* Bottom mid elements and Proyects */

const bottomMidDiv = document.createElement("div");
bottomMidDiv.className = "bottom-container";
bottomMidDiv.id = "Proyects";

const h3Element = document.createElement("h3");
h3Element.className = "h3Bottom";
h3Element.innerText = "Proyects";
bottomMidDiv.appendChild(h3Element);


infoData.proyects.forEach(proyect => {
  Card({ parentNode: bottomMidDiv, className: "bottom", url: proyect.url, imageSrc: proyect.image, imgDisplay: "block", tittle: proyect.name, text: proyect.usage });
});


/* Footer and Contacts */

const footer = document.createElement("footer");
footer.id = "Contact";
const h4Element = document.createElement("h4");
h4Element.className = "h4Footer";
h4Element.innerText = "Contacts";
footer.appendChild(h4Element);
const contactList = document.createElement("ul");

for (const contact in infoData.contacts) {
  const liElement = document.createElement("li");
  liElement.innerText = `${contact}: ${infoData.contacts[contact]}`;
  contactList.appendChild(liElement);
}

footer.appendChild(contactList);

const p = document.createElement("p");
p.className = "pFooter";
p.innerText = "Alberto Gomez. 2024";

footer.appendChild(p);



/* --------------------------------------- */


divApp.appendChild(navBar);
divApp.appendChild(topDiv);
divApp.appendChild(midDiv);
divApp.appendChild(bottomMidDiv);
divApp.appendChild(footer);





/* Dark Mode */
const toggleDark = (e) => {
  if (e) {
    body.classList.toggle("dark");
  }
};

const themeButton = document.querySelector(".theme");
themeButton.addEventListener("click", toggleDark);


/* button funtionalities */

const allButtons = document.querySelectorAll("button");

allButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    button.lastChild.href = `#${e.target.innerText}`;
  });
});







