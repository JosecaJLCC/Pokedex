import { Pokemon } from "./src/models/pokemon.js"
import { createNewPokemon, buscarPokemon, buscarObjPokemon, mostrarPokemons } from "./src/controllers/controller.js";
/* Para el contenedor de las tarjetas */
let contenedor = document.getElementById("contenido");
/* Para el buscador  */
let lector = document.getElementById("lectura");
/* Para la tarjeta modal */
let modal = document.getElementById("modal");
let titleNombre = document.getElementById("titulo-nombre");
let imgPokemon = document.getElementById("img-pokemon");
let tipoPokemon = document.getElementById("tipo-pokemon");
let pesoPokemon = document.getElementById("peso-pokemon");
let alturaPokemon = document.getElementById("altura-pokemon");
let habilidadPokemon = document.getElementById("habilidad-pokemon");
let debilidadPokemon = document.getElementById("debilidad-pokemon");
let buttonClose = document.getElementById("button-close");

function principal(){
    fetch('https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json')
    .then(response => response.json())
    .then(data =>{
        let postCard="";
        data.forEach( datito =>{
            const pokemon = new Pokemon(datito.name.toUpperCase(), datito.abilities , datito.weight, datito.weakness, datito.height, datito.ThumbnailImage, datito.type);
            /* Para evitar la duplicacion de pokemons */
            const pokes=buscarObjPokemon(pokemon)
            if(pokes==undefined){
                createNewPokemon(pokemon);
                postCard+=pokemon.createHTML();
            }
        })
        contenedor.innerHTML=postCard;  
        const dato=mostrarPokemons();
        createModal(dato);
    })
}
principal();

function createModal(data){
    const visitButton =  [...document.querySelectorAll(".post-card")]/* ... se llaman spreat operator */    
    visitButton.forEach((element, index) => {
        element.addEventListener("click", e=>{        
            modal.style.display="flex";
            titleNombre.innerHTML=data[index].nombre;
            tipoPokemon.innerHTML=` Tipo: ${data[index].tipo}`;
            imgPokemon.src=data[index].img;
            habilidadPokemon.innerHTML=` Habilidades: ${data[index].habilidades}`;
            alturaPokemon.innerHTML=`Altura: ${data[index].altura}`;
            pesoPokemon.innerHTML=` Peso: ${data[index].peso}`;
            debilidadPokemon.innerHTML= `Debilidad: ${data[index].debilidad}`;
        })
    })
    buttonClose.addEventListener("click", e=>{
        modal.style.display="none";
        
    })
}
/* Para el buscador */
lector.addEventListener("keyup", e=>{
    let keycode = e.keyCode
    let postCard="";
    if(keycode==13 && lector.value!="")
    {      
        let response=buscarPokemon(lector.value.toUpperCase())
        if(response!=undefined) {
            postCard=response.createHTML();
            contenedor.innerHTML=postCard; 
            createModal([response])           
            lector.value="";
        }
        else{
            alert("No se encontro ningun pokemon con ese nombre");
            lector.value="";
        }
    }
    else if(lector.value==""){
        const data=mostrarPokemons();
        let postCard="";
        data.forEach( datito =>{
            const pokemon = new Pokemon(
                datito.nombre.toUpperCase(), 
                datito.habilidades , 
                datito.peso, 
                datito.debilidad, 
                datito.altura, 
                datito.img, 
                datito.tipo);          
                postCard+=pokemon.createHTML();          
        })
        contenedor.innerHTML=postCard;  
        const dato=mostrarPokemons();
        createModal(dato);
    }
                
})
