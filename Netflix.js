//  Simulando Netflix

class Pelicula {           // abstraccion
  constructor(id, nombre, año) {
    // con contrutor para construir objetos y le pasamo los parametros solo podemos tener un constructos por clase
    this.nombre = nombre;
    this.id = id;
    this.año = año;
  }
                                      // encapsulamineto
  reproducir() {
    return `Repdroduciendo la pelicula ${this.nombre}  ${this.año}  ..... `;
  }
}

const RapidosYfuriosos = new Pelicula(1, "rapido y furioso", 1996);                // creo multiples objetos
const RapidosYfuriosos2 = new Pelicula(2, "rapido y furioso 2", 1997);
const RapidosYfuriosos3 = new Pelicula(3, "rapido y furioso 3", 1998);
const RapidosYfuriosos4 = new Pelicula(4, "rapido y furioso 4", 1999);
const RapidosYfuriosos5 = new Pelicula(5, "rapido y furioso 5", 1997);
const RapidosYfuriosos6 = new Pelicula(6, "rapido y furioso 6", 1998);
const RapidosYfuriosos7 = new Pelicula(7, "rapido y furioso 7", 1992);
const RapidosYfuriosos8 = new Pelicula(8, "rapido y furioso 8", 1993);
const RapidosYfuriosos9 = new Pelicula(9, "rapido y furioso 9", 1993);
const BatMan = new Pelicula(10, "BATMAN EL ....", 1993);

console.log(BatMan.reproducir());
console.log(RapidosYfuriosos.reproducir());
console.log(RapidosYfuriosos2.reproducir());
console.log(RapidosYfuriosos3.reproducir());
console.log(RapidosYfuriosos4.reproducir());
console.log(RapidosYfuriosos5.reproducir());
console.log(RapidosYfuriosos6.reproducir());
console.log(RapidosYfuriosos7.reproducir());
console.log(RapidosYfuriosos8.reproducir());
console.log(RapidosYfuriosos9.reproducir());



// Series animadas



class SeriesAnimadas extends Pelicula {
  // tsambien pudo crea multiples moles para otros objetos

  constructor(id, nombre, cap) {
    //  de esta manera agrego mas propiedades ejemplo cap == capitulos
    super(id, nombre); // Herencia
    this.cap = cap;
  }

  reproducir() {
    // polimorfismo
    return `Repdroduciendo la pelicula ${this.nombre}  ${this.cap}  ..... `;
  }
}

const DragonBallZ = new SeriesAnimadas(3, "DragonBall Z", " 5 Goku Muere ....");

console.log(DragonBallZ.reproducir());



// RETo creaer multiples generos de peliculas y series 




