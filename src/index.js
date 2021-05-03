


//import {getHeroesArr, getHeroesArrAsyncMejorado, manejorErrAwait} from './js/await.js';

import {heroesClico, heroesIfAwait} from './js/for-if-await';

heroesClico();
heroesIfAwait('iron');
// getHeroesArr().then( console.table );

// console.time('await');
// getHeroesArrAsyncMejorado().then( heroes => {
//     console.table(heroes);
//     console.timeEnd('await');
// } );

// //el catch tira el error que recibe del try catch implementado en la promesa
// manejorErrAwait('capi2')
//     .then(console.log)
//     .catch(console.warn);

