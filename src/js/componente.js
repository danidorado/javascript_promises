
import '../css/componente.css';

const heroes = {
    capi:{
        nombre: 'Capitan America',
        poder: 'fuerza',
    },
    iron:{
        nombre: 'Ironman',
        poder: 'dinero',
    },
    spider:{
        nombre:'Spider Man',
        poder:'flexible',
    },
}

export const buscarHeroe = (id, callback) => {

    const heroe = heroes[id];

    // Controlamos los errores y si no hay error devolvemos null como primer argumento
    (heroe) ? callback( null, heroe ) : callback( `No existe el id ${id}` );   

}