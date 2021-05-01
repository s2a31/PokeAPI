const apiData = {
  apiUrl: "https://pokeapi.co/api/v2/",
  endpoint: "pokemon/",
};

const randomPokemon = document.querySelector(".random-pokemon");
const pokeball = document.querySelector(".pokeball");

const generateRandomPokemon = () => {
  const url = apiData.apiUrl + apiData.endpoint + generateRandomNumber();
  fetch(url)
    .then((data) => data.json())
    .then((pokemon) =>
      displayPokemon(pokemon.name, pokemon.sprites.front_default)
    )
    .catch((err) => {
      console.error(err);
    });
};

const displayPokemon = (name, img) => {
  const html = `
    <h2>${name}</h2>
    <img src="${img}" alt="${name}" />
  `;
  randomPokemon.innerHTML = html;
};

const generateRandomNumber = () => Math.floor(Math.random() * 200 + 1);

pokeball.addEventListener("click", generateRandomPokemon);

generateRandomPokemon();
