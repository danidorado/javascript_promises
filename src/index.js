
import {getHeroesArr, getHeroesArrAsyncMejorado, manejorErrAwait} from './js/await.js';

getHeroesArr().then( console.table );

console.time('await');
getHeroesArrAsyncMejorado().then( heroes => {
    console.table(heroes);
    console.timeEnd('await');
} );

manejorErrAwait('capi2')
    .then(console.log)
    .catch(console.warn);

