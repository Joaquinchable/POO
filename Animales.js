// // abstraccion  igual  a  crear uns class
// //  Encapsulamiento

// class Animales {             // class es igual a crear una platilla / molde
//     constructor(nombre , sonido ){    // crear y defino el model

//    this.nombre = nombre;
//    this.sonido = sonido;                  //  Encapsulamiento

// }

// sonidoDelAnimal(){

//     return ` El  ${this.nombre} hace .... ${this.sonido}   `       // las funciones dentro de objetos y class son llamadas  metodos
// }

// }

// //  creo mi objeto

// const Pajaro = new Animales(" Paloma" ,  "Uh!gugugu" );      // es crear con new un nuevo Animal apartir del molde /realmente estoy creando un nuevo objeto
// const Gallina = new Animales("Gallina", "kikiriki");

// console.log(Pajaro.sonidoDelAnimal());
// console.log(Gallina.sonidoDelAnimal());

//  Ejemplo Herencia

// Abstraccion y tambien  mi encapsulamiento

class SonidoDeAnimales {
  constructor(name, sonido) {
    // solo puedo tener un constructor por class
    this.name = name;
    this.sonido = sonido;
  }

  Sonido() {
    return `  El sonido del animal . `; // ya tengo listo Molde e informacion agrupada  (Abstraccion y encapsulamiento)
    // puedo tener infinidad de metodos en una class
  }
}

// pajaros  tambien moldes de pajaros // submoldes que herada de un molde padre

class Pajaros extends SonidoDeAnimales {
  // ya creamos nuestra herencia con la palabra reservada extends
  constructor(name, sonido) {
    // usamos constructor para terminar de crear mi molde
    // super para traer la propiedades que heredamos

    super(name, sonido);
  }

  Sonido() {
    return `  El sonido del animal ${this.name}  ${this.sonido} . `;
  } //  polimorfismo es pasarle los mismos metodos a diferentes objetos
}

const Paloma = new Pajaros("Paloma", "Uh!gugugu"); // creo el objeto

console.log(Paloma.Sonido()); // pinto en consola el metodo y mi objeto que cree o apartir de la classn Pajaros con new Pajaros




// Perros  


class Perro extends SonidoDeAnimales {
    constructor(name, sonido) {
      super(name, sonido); // herencia
    }

    Sonido() {
        // polimorfismo
        return `  El sonido del  ${this.name}  ${this.sonido} . `;
      }
    }


    const PastorAleman = new Perro("Pastor ALeman", "Wof wof wof");



    console.log(PastorAleman.Sonido());




    // RETO crear mas Animales  