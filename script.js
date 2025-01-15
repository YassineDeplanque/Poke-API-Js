const url = "https://pokeapi.co/api/v2/pokemon";
const area = document.getElementById("area");
const form = document.getElementById("form");
//ajoute un écouteur d'évènement sur le formulaire, ici, sa soumission
form.addEventListener("submit", (event) => {
    event.preventDefault(); //empêche le rechargement de la page


const pokemonName = document.getElementById("pokemonName").value;
fetch(`${url}/${pokemonName}`) //effectue une requête http avec fetch
.then((response) => response.json()) //réponse de la requête au format json
.then((newPokemon) => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    const name = document.createElement("h1");
    div.className = "card";
    image.src = newPokemon.sprites.other.dream_world.front_default;
    name.textContent = newPokemon.name;
    div.appendChild(name);
    div.appendChild(image);
    area.appendChild(div);
});
});
