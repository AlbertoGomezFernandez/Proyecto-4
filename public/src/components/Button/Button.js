import "./Button.css";


export const Button = ({ parentNode = "body", text = "Text here", bgColor = "white", textColor }) => {
  const Button = document.createElement("button");
  Button.className = text.toLowerCase();
  Button.classList.add("button");
  const a = document.createElement("a");
  a.innerText = text;
  Button.appendChild(a);
  parentNode.appendChild(Button);
};