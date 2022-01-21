import { getPokedex } from './fetch.js';

// import functions
console.log('Its ALIVE!');
// grab DOM elements
const template = document.querySelector('#template');
const list = document.querySelector('#list');
const audio = document.querySelector('#audio');
const response = document.querySelector('#response');
const input = document.querySelector('#Answer');

console.log('test', template, list, audio, response, input);
// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state

input.addEventListener('submit', () => {

    const inputValue = input.value;
    console.log(inputValue);
    
    if ('Answer' === 'Yes') {

        response.textContent = 'You have good taste.';

    } 
    else {

        response.textContent = 'Please answer correctly.';
    
    }

});




    
async function getPokemon() {
    const pokemons = await getPokedex();
    for (let pokemon of pokemons) {
        const clone = template.content.cloneNode(true);
        const pokemonName = clone.querySelector('#pokemon');
        const pokemonImg = clone.querySelector('#image');
        const defense = clone.querySelector('#defense');
        const weight = clone.querySelector('#weight');
        const speed = clone.querySelector('#speed');
        const hp = clone.querySelector('#hp');
       // audio.src = '/assets/pokemon.wav';
       // audio.play();
        
        
       

        pokemonName.textContent = 'Name: ' + pokemon.pokemon;
        pokemonImg.src = pokemon.url_image;
        defense.textContent = 'Defense: ' + pokemon.defense;
        list.append(clone);
        weight.textContent = 'Weight: ' + pokemon.weight;
        list.append(clone);
        speed.textContent = 'speed: ' + pokemon.speed;
        list.append(clone);
        hp.textContent = 'HP: ' + pokemon.hp;
        list.append(clone);

       
    }
}
window.addEventListener('load', async() => {
    await getPokemon();
});
