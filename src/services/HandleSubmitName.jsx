import {pokemonName} from "./Api.js";

async function HandleSubmitName(nome) {
  if (pokemonName(nome) !== "not found") {
    const data = await pokemonName(nome).then((data) => data);

    function capitalizeFirstLetter(string) {
      return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
    }
    const dataName = await capitalizeFirstLetter(data.name).replaceAll(
      "-",
      " ",
    );
    var pokemonImg;

    if (data.types) {
      data.sprites.other["official-artwork"].front_default !== null
        ? (pokemonImg = data.sprites.other["official-artwork"].front_default)
        : (pokemonImg = data.sprites.other.home.front_default);

      data.sprites.other.home.front_default === null &&
      data.sprites.other["official-artwork"].front_default === null
        ? (pokemonImg = data.sprites.front_default)
        : console.log();

      if (data.types.length > 1) {
        setTimeout(() => {
          document
            .querySelector(".types")
            .classList.toggle(data.types[0].type.name);
          document
            .querySelector(".types2")
            .classList.toggle(data.types[1].type.name);
          document.querySelector(".content").classList.remove("showing");
        }, 0.1);
      } else {
        // retorna se so tiver um tipo de elemento
        setTimeout(() => {
          document
            .querySelector(".types")
            .classList.toggle(data.types[0].type.name);
          document.querySelector(".content").classList.remove("showing");
        }, 0.1);
        return `
        <div class="card">
          <div class="main">
            <h1 class="id">${data.id}</h1>
            <div class="imagem">
              <img src="${pokemonImg}" alt="pokemonIMG" />
            </div>
           <a style="text-decoration: none;" href="https://www.pokemon.com/br/pokedex/${dataName}" target="_blank"><h1 class="nome">${dataName}</h1></a>

            <div class="elements">
              <h1 class="types">${data.types[0].type.name.toUpperCase()}</h1>
            </div>
            <div class="stats">
              <div clas="life">
                <h1>${data.stats[0].stat.name.toUpperCase()}</h1>
                <p>${data.stats[0].base_stat}</p>
              </div>
              <div clas="attack">
                <h1>${data.stats[1].stat.name.toUpperCase()}</h1>
                <p>${data.stats[1].base_stat}</p>
              </div>
              <div clas="defense">
                <h1>${data.stats[2].stat.name.toUpperCase()}</h1>
                <p>${data.stats[2].base_stat}</p>
              </div>
              <div clas="special-attack">
                <h1>${data.stats[3].stat.name.toUpperCase()}</h1>
                <p>${data.stats[3].base_stat}</p>
              </div>
              <div clas="special-defense">
                <h1>${data.stats[4].stat.name.toUpperCase()}</h1>
                <p>${data.stats[4].base_stat}</p>
              </div>
              <div clas="speed">
                <h1>${data.stats[5].stat.name.toUpperCase()}</h1>
                <p>${data.stats[5].base_stat}</p>
              </div>
            </div>
          </div>
        </div>`;
      }
    } else {
      return (
        // retorna se nao encontrar o search
        setTimeout(() => {
          document.querySelector(".content").classList.remove("showing");
        }, 0.1),
        `
          <div class="card not-found">
            <h1 class="error">Desculpe Pokemon nao encontrado</h1>
          </div>
        `
      );
    }
    // retorna o pokemon normalmente
    return `
    <div class="card">
      <div class="main">
        <h1 class="id">${data.id}</h1>
        <div class="imagem">
          <img src="${pokemonImg}" alt="pokemonIMG" />
        </div>
        <a style="text-decoration: none;" href="https://www.pokemon.com/br/pokedex/${dataName}"target="_blank"><h1 class="nome">${dataName}</h1></a>

        <div class="elements">
          <h1 class="types">${data.types[0].type.name.toUpperCase()}</h1>
          <h1 class="types2">${data.types[1].type.name.toUpperCase()}</h1>
        </div>

        <div class="stats">
              <div clas="life">
                <h1>${data.stats[0].stat.name.toUpperCase()}</h1>
                <p>${data.stats[0].base_stat}</p>
              </div>
              <div clas="attack">
                <h1>${data.stats[1].stat.name.toUpperCase()}</h1>
                <p>${data.stats[1].base_stat}</p>
              </div>
              <div clas="defense">
                <h1>${data.stats[2].stat.name.toUpperCase()}</h1>
                <p>${data.stats[2].base_stat}</p>
              </div>
              <div clas="special-attack">
                <h1>${data.stats[3].stat.name.toUpperCase()}</h1>
                <p>${data.stats[3].base_stat}</p>
              </div>
              <div clas="special-defense">
                <h1>${data.stats[4].stat.name.toUpperCase()}</h1>
                <p>${data.stats[4].base_stat}</p>
              </div>
              <div clas="speed">
                <h1>${data.stats[5].stat.name.toUpperCase()}</h1>
                <p>${data.stats[5].base_stat}</p>
              </div>
            </div>
      </div>
    </div>`;
  }
}

export {HandleSubmitName};
