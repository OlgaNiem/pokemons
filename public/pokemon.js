const pokemonName = window.location.pathname.split('/').splice(-1)[0]
fetchPokemon();

async function fetchPokemon() { 
    try{
        const response = await fetch('/api/pokemons/' + pokemonName);
        const pokemon = await response.json();
       
        if(pokemon.error){
            throw new Error(pokemon.error);
        }

        document.querySelector('#pokemon').innerHTML = `
        <h1>${pokemon.name}</h1>
        <h3>Type: ${pokemon.pokemonType}</h3>
        <h3>Abilities: ${pokemon.abilities}</h3>
        <h3>Attack: ${pokemon.stats.attack}</h3>
        <h3>Hp: ${pokemon.stats.hp}</h3>
        <h3>Defense: ${pokemon.stats.defense}</h3>
        <h3>Special attack: ${pokemon.stats.specialAttack}</h3>
        <h3>Special defense: ${pokemon.stats.specialDefense}</h3>
        <h3>Speed: ${pokemon.stats.speed}</h3>
        `;
    }catch(error){
        document.querySelector('#pokemon').innerHTML = `
        <h1>Error</h1>
        <h3>${error.message}</h3>
        `;
    }
}
