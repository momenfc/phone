import HomeScreen from "./src/screens/HomeScreen.js";
import { scrollTop } from "./src/utilit.js";
const route = async () => {
  const main = document.getElementById("main-container");
  main.innerHTML = await HomeScreen.render();
  await HomeScreen.after_render();
};

window.addEventListener("load", route());
window.addEventListener("scroll", scrollTop);
