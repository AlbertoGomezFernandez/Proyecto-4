import "./Card.css";


export const Card = ({ parentNode = "body", className, url = "javascript:void(0)", imageSrc = "#", imgDisplay = "none", tittle = "Tittle here", text = "Text here", textColor = "black" }) => {
  const Card = document.createElement("div");
  Card.className = "card";
  Card.classList.add(className);
  const a = document.createElement("a");
  a.className = "a" + className;
  a.href = url;
  if (a.href !== "javascript:void(0)") {
    a.target = "_blank";
  }
  a.style.color = textColor;
  Card.appendChild(a);
  const img = document.createElement("img");
  img.className = "cardImg";
  img.src = imageSrc;
  img.style.display = imgDisplay;
  const h3 = document.createElement("h3");
  h3.className = "cardH3";
  h3.innerText = tittle;
  const p = document.createElement("p");
  p.className = "cardP";
  p.innerText = text;
  a.appendChild(img);
  a.appendChild(h3);
  a.appendChild(p);
  parentNode.appendChild(Card);
};