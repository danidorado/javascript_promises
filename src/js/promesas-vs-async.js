

import {buscarHeroeAsync, promesaMedia, promesaLenta, promesaRapida, buscarHeroe} from './js/promesas'
import './css/global.css';

// promesaLenta.then( console.log );
// promesaMedia.then( console.log );
// promesaRapida.then( console.log );


// Ejecuta un conjunto de promesas y devulve la que se ejecuta mas rapido.
// Si las mas lentas devuelven error se ignoran.
// Si las mas rapida devuelve un reject es lo que .race muestra

Promise.race([promesaLenta, promesaMedia, promesaRapida])
    .then(console.log)
    .catch(console.warn);

buscarHeroeAsync('iron1')
    .then(heroe => console.log(heroe))
    .catch(err => console.warn(err));

buscarHeroe('capi1')
    .then(heroe => console.log(heroe))
    .catch(err => console.warn(err));

  