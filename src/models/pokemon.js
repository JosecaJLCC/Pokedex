class Pokemon {
    constructor(nombre, habilidades, peso, debilidad, altura, img, tipo){
        this.nombre=nombre;
        this.habilidades=habilidades;
        this.peso=peso;
        this.debilidad=debilidad;
        this.altura=altura;
        this.tipo=tipo;
        this.img=img;

    }
}

const response = fetch('https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json')
.then(response => response.json())
.then(data =>{
    let postCard="";
    /* for(const datito of data){
        
          
    } */
    
    
});