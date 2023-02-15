const express = require('express')
const pokemons = require('./data/pokemons.json')
const path = require('path');
const app = express();


app.use(express.static(__dirname + '/../public'))

app.get('/pokemon/:name', (request, response) =>{
    response.status(200).sendFile(path.resolve('public/pokemons.html'));
});

app.get('/api/pokemons', (request, response) =>{
    response.status(200).json(pokemons);
});

app.get('/api/pokemons/:name', (request, response) =>{
    const pokemon = pokemons.pokemons.find(item => item.name == request.params.name);
    if(!pokemon) {
        return response.status(200).json({error: `Pokemon with that name ${request.params.name} not found`});
    }
    response.status(200).json(pokemon);
});

app.listen(3000, () => {
    console.log('Server is listening on localhost:3000');
})