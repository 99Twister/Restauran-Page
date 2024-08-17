import "./styles.css";
import "./about.css";

export default function loadAboutPage() {
  const content = document.getElementById("content");
  const info = document.createElement("div");
  info.setAttribute("id", "info")
  const p1 = document.createElement("p");
  p1.innerHTML = "Welcome to <span>Royal India</span>, where we bring the vibrant flavors of India to Warsaw. Founded in 2012, our restaurant celebrates the rich culinary traditions of India, offering a menu that blends <span>authentic</span> recipes with a modern touch.";
  info.appendChild(p1);
  const p2 = document.createElement("p");
  p2.innerHTML = "Our chefs use the freshest ingredients and <span>traditional</span> spices to create dishes that capture the essence of India, from the spicy curries of the south to the savory tandooris of the north.";
  info.appendChild(p2);
  const p3 = document.createElement("p");
  p3.innerHTML = "Step into our warm and inviting space, <span>perfect</span> for any occasion. Whether you're a longtime fan of Indian cuisine or trying it for the first time, we promise a memorable dining experience.";
  info.appendChild(p3);
  const h3 = document.createElement("h3");
  h3.innerHTML = "Contact Us";
  info.appendChild(h3);
  const contact = document.createElement("p");
  contact.innerHTML = "Visit us at <span>17 Aksamitna, Warsaw</span><br>Call us at <span>512 895 765</span><br>Follow us on <a>Instagram</a> and <a>Facebook</a>";
  info.appendChild(contact);
  content.appendChild(info);
}