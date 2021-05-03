import { buscarHeroeAwaitMejorado, buscarHeroe } from "./promesas";


const heroesIds = ['capi','iron','spider'];

const heroesPromesas = heroesIds.map(id => buscarHeroeAwaitMejorado (id));

export const heroesClico = async() => {

console.time('heroesCiclo');

    for await (const heroe of heroesPromesas){
        console.log(heroe);
    }

console.timeEnd('heroesCiclo');

// const heroes = await Promise.all(heroesPromesas);
// heroes.forEach(heroe => console.log({heroe}));
}

export const heroesIfAwait = async(id) =>{

    if ( (await buscarHeroeAwaitMejorado(id)).nombre === 'Ironman'){
        const heroe = await buscarHeroe(id);
        console.log(heroe.poder);
    } else {
        console.log('NO');
    }

} 