
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

export const buscarHeroe = (id) => {

    const heroe = heroes[id];

    return new Promise( (resolve, reject) => {
        (heroe) ? resolve(heroe) : reject (` Devuelto en reject No existe id ${id}`);
    } );
}

export const buscarHeroeAwaitMejorado = (id) => {

    const heroe = heroes[id];

    return new Promise( (resolve, reject) => {
        (heroe) ? setTimeout( resolve(heroe),3000 ) : reject (` Devuelto en reject No existe id ${id}`);
    } );
}

export const buscarHeroeAsync = async (id) => {

    const heroe = heroes[id];
    if(heroe)
        return heroe;
    else
        throw `Devuelto en async no existe id ${id}`;

}

 const promesaLenta = new Promise((resolve, reject) => {
    setTimeout( () => {resolve('respuesta lenta 2s.')},2000);
});

 const promesaMedia = new Promise((resolve, reject) => {
    setTimeout( () => {resolve('respuesta media 1s.')},1500);
});

 const promesaRapida = new Promise((resolve, reject) => {
    setTimeout( () => {resolve('respuesta rapida 0.5s.')},1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}