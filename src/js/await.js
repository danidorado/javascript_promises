
import {buscarHeroeAsync, buscarHeroeAwaitMejorado} from './promesas.js';

const heroesIds = ['capi','iron','spider'];

export const getHeroesArr = async() => {

    const heroArr = [];

    for(const id of heroesIds){
        const heroe = await buscarHeroeAsync(id);
        heroArr.push(heroe);
    }

    //console.table(heroArr);
    return heroArr;

}

export const getHeroesArrAsyncMejorado = async() => {

    // FORMA ELEGANTE
    return await Promise.all(heroesIds.map( buscarHeroeAwaitMejorado ))

    // FORMA DE LOS MORTALES
    // const heroArrMejorado = [];
    // for(const id of heroesIds)
    //     heroArrMejorado.push(buscarHeroeAwaitMejorado(id));

    // return await Promise.all(heroArrMejorado);
}

export const manejorErrAwait = async(id) => {
    try {
        const heroe = await buscarHeroeAwaitMejorado(id);
        return heroe;  
    } catch (error) {
       throw `try-catch: ${error}`;
    } 
}