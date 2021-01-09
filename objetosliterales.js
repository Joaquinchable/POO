// objetos literales 


const Pelicula1 = {

     nombre:"Batman el caballero de la noche..... ",
     id: 1,

     reproducionedoPelicula(){
         return `Reproduciendo Pelicula  ${this.nombre}.....`      // this nos ayuda a acceder a las propiedades de nuestro objeto
     }


};


console.log(Pelicula1.reproducionedoPelicula())




const Pelicula2 = {

    nombre:"joker..... ",
    id: 2,

    reproducionedoPelicula(){
        return `Reproduciendo Pelicula  ${this.nombre}.....`
    }


};


console.log(Pelicula2.reproducionedoPelicula())


