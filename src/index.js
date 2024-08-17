import loadHomePage from "./home.js";
import loadMenuPage from "./menu.js";
import loadAboutPage from "./about.js";

function clearPage() {
  const content = document.getElementById("content");
  content.innerHTML = null;
}

loadHomePage();

document.getElementById("homeBtn").addEventListener("click", () => {
  clearPage();
  loadHomePage();
});

document.getElementById("menuBtn").addEventListener("click", () => {
  clearPage();
  loadMenuPage();
});

document.getElementById("aboutBtn").addEventListener("click", () => {
  clearPage();
  loadAboutPage();
});