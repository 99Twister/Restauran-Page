import "./styles.css";
import "./about.css";

export default function loadAboutPage() {
  const content = document.getElementById("content");
  const info = document.createElement("div");
  info.setAttribute("id", "info")
  info.innerHTML = `<p>Welcome to <span>Royal India</span>, where we bring the vibrant flavors of India to Warsaw. Founded in 2012, our restaurant celebrates the rich culinary traditions of India, offering a menu that blends <span>authentic</span> recipes with a modern touch.</p>
  <p>Our chefs use the freshest ingredients and <span>traditional</span> spices to create dishes that capture the essence of India, from the spicy curries of the south to the savory tandooris of the north.</p>
  <p>Step into our warm and inviting space, <span>perfect</span> for any occasion. Whether you're a longtime fan of Indian cuisine or trying it for the first time, we promise a memorable dining experience.</p>
  <h3>Contact Us</h3>
  <p>Visit us at <span>17 Aksamitna, Warsaw</span><br>Call us at <span>512 895 765</span><br>Follow us on <a>Instagram</a> and <a>Facebook</a></p>`;
  content.appendChild(info);
}