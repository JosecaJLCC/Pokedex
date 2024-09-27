/* import { Pokemon } from "./src/models/pokemon.js" */
let pokemons=[]

export const createNewPokemon=(pokemon)=>{
    /* console.log(pokemon) */
    pokemons.push(pokemon);
}

export const buscarPokemon=(nombre)=>{
    return pokemons.find(element=> element.nombre==nombre);     
}

export const buscarObjPokemon=(pokemon)=>{
    return pokemons.find(element=> element.nombre==pokemon.nombre);     
}

export const mostrarPokemons=()=>{
    return pokemons
}