
async function pokemonHome(num) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${num}&limit=12`,
  );
  const data = await response.json();

  const urlPoke = [];

  const pokemonData = [];

  for (let i = 0; i < data.results.length; i++) {
    urlPoke.push(data.results[i].url);
  }

  for (let i = 0; i < urlPoke.length; i++) {
    const results = await fetch(urlPoke[i]);
    const dados = await results.json();
    pokemonData.push(dados);
  }
  function capitalizeFirstLetter(string) {
    const capital = string
      ? string.charAt(0).toUpperCase() + string.slice(1)
      : "";
    return capital;
  }
  var pokemonImg;


  const html = pokemonData.map((data) => {
    data.sprites.other["official-artwork"].front_default !== null
      ? (pokemonImg = data.sprites.other["official-artwork"].front_default)
      : (pokemonImg = data.sprites.other.home.front_default);
    data.sprites.other.home.front_default === null &&
    data.sprites.other["official-artwork"].front_default === null
      ? (pokemonImg = data.sprites.front_default)
      : console.log();
    return `<div class="card">
          <div class="pokemon">
            <img
              src='${pokemonImg}'
              alt=""
            />
          </div>
          <div>
            <h1 class="title" >${capitalizeFirstLetter(data.name).replaceAll(
              "-",
              " ",
            )}</h1>
            <h2>${data.stats[0].stat.name.toUpperCase()}</h2>
            <p>${data.stats[0].base_stat}</p>
            <p class='id'>${data.id}</p>
          </div>
        </div>`;
  });

  return html;
}

export {pokemonHome};
