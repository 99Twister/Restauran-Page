import "./styles.css";
import "./menu.css";

export default function loadMenuPage() {
  const content = document.getElementById("content");
  const container = document.createElement("div");
  container.setAttribute("id", "container");

  for (let i = 0; i <= 9; i++) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    const image = document.createElement("div");
    image.setAttribute("class", "image");
    card.appendChild(image);
    const dishName = document.createElement("p");
    dishName.textContent = "Tikka Masala";
    card.appendChild(dishName);
    container.appendChild(card);
  }
  content.appendChild(container);
};