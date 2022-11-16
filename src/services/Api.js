async function pokemonName(nome) {
  try {
    const content = document.getElementById("content");
    content.innerHTML = `<p class="carregando">Carregando...</p>`;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
    const data = await response.json();

    return data;
  } catch (error) {
    if (
      error.message === `Unexpected token 'N', "Not Found" is not valid JSON`
    ) {
      return "not found";
    }
  }
}

export {pokemonName};
