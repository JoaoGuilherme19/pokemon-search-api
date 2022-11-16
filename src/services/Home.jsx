import {pokemonHome} from "./ApiHome";

async function Home() {
  document.querySelector(".content").classList.add("showing");
  const content = document.getElementById("content");
  content.innerHTML = `<p class="carregando">Carregando...</p>`
  const random = Math.round(Math.random() * 1154);
  const data = await pokemonHome(random);

  return (content.innerHTML = data.join(""));
}
export {Home};
