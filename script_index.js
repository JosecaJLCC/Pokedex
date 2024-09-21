
let contenedor = document.getElementById("contenido");
let lector = document.getElementById("lectura");
/* Para la tarjeta modal */
let modal = document.querySelector("#modal");
let titleNombre = document.getElementById("titulo-nombre");
let imgPokemon = document.getElementById("img-pokemon");
let tipoPokemon = document.getElementById("tipo-pokemon");
let buttonClose = document.getElementById("button-close");

const response = fetch('https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json')
.then(response => response.json())
.then(data =>{
    let postCard="";
    data.forEach( datito =>{
        console.log(datito);

        const tarjeta = document.createElement('div');
        tarjeta.classList.add('post-card'); 
        tarjeta.setAttribute('data-name', datito.name);
        tarjeta.setAttribute('data-img', datito.ThumbnailImage)
        tarjeta.setAttribute('data-type', datito.type);

        tarjeta.innerHTML = `
            <h2>${datito.name.toUpperCase()}</h2>
            <img src="${datito.ThumbnailImage}" alt="${datito.name}">
            <ul>
                <li>Tipo: ${datito.type}</li>
            </ul>
      `;
        contenedor.appendChild(tarjeta);

      // Añadir el event listener de clic a cada tarjeta
        tarjeta.addEventListener('click', function() {
            // Obtener los datos del Pokémon desde los atributos personalizados
            const name = this.getAttribute('data-name');
            const type = this.getAttribute('data-type');
            const imgPoke= this.getAttribute('data-img');
            // Mostrar una alerta o manejar los datos como quieras
            /* console.log(`Hiciste clic en ${name}, que es de tipo ${type}`); */
            /* alert(`Clic en el Pokémon: ${name} (Tipo: ${type})`); */

            modal.style.display="flex";
            titleNombre.innerText=name;
            imgPokemon.src=imgPoke;
            tipoPokemon.innerText=type;
            console.log(modal.style.display)
            console.log("aa")

            
        })

        buttonClose.addEventListener("click", e=>{
            modal.style.display="none"
        })    
    });
})
/* Para el modal */



/* Para el buscador */
lector.addEventListener("keyup", e=>{
    let keycode = e.keyCode
    if(keycode==13 && lector.value!="")
    {
        
        fetch('https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json')
        .then(response => response.json())
        .then(data =>{
            let postCard="";
            for(const datito of data){
                console.log(lector.value)
                if(datito.name.toUpperCase()==lector.value.toUpperCase()){
                    
                    /* console.log(datito.type); */
                    postCard+=`<div class="post-card">
                                    <h2>${datito.name.toUpperCase()}</h2>
                                    <img src=${datito.ThumbnailImage}></img>
                                    <ul>
                                        <li>Tipo:${datito.type}</li>
                                    </ul>
                                </div>`   
                }
                   
            }
            
            contenedor.innerHTML=postCard;
        });
    }
})
