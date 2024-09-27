export class Pokemon {
    constructor(nombre, habilidades, peso, debilidad, altura, img, tipo){
        this.nombre=nombre;
        this.habilidades=habilidades;
        this.peso=peso;
        this.debilidad=debilidad;
        this.altura=altura;
        this.tipo=tipo;
        this.img=img;
    }

    createHTML(){
        const tarjeta=`
            <div class="post-card">
                <h2>${this.nombre.toUpperCase()}</h2>
                <img src="${this.img}" alt="${this.name}">
                <ul>
                    <li>Tipo: ${this.tipo}</li>
                </ul>    
            </div>`
        return tarjeta;

    }
}
