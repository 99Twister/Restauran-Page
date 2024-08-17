import "./styles.css";
import "./home.css";

export default function loadHomePage() {
  const content = document.getElementById("content");
  const container = document.createElement("div");
  container.setAttribute("id", "homeScreen")

  const header = document.createElement("h1");
  header.textContent = "Royal India";
  container.appendChild(header);

  const para = document.createElement("p");
  para.innerHTML = "Welcome to Royal India! Savor the <span>authentic</span> flavors of India with our <span>vibrant</span>, <span>spice-infused</span> dishes. Experience the <span>true taste</span> of Indian cuisine today!";
  container.appendChild(para);

  const cta = document.createElement("button");
  cta.textContent = "See the menu";
  container.appendChild(cta);

  content.appendChild(container);
}