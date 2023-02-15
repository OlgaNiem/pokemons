fetchPokemons();

async function fetchPokemons() {
    const response = await fetch('/api/pokemons');
    const data = await response.json();
    console.log(data);

    document.querySelector('#pokemons').innerHTML = `
    <ul>
    ${data.pokemons.map(pokemon => `
    <li>
        <b>Pokemon </b> ${pokemon.name}, 
        <b>type:</b> ${pokemon.pokemonType}      
    </li>`).join('')}
    </ul>
    `;
}

 