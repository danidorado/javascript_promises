
import {buscarHeroe as buscarHeroeCallback} from './js/componente'
import {buscarHeroe} from './js/promesas'
import './css/global.css';

const heroeId1 = 'iron';
const heroeId2 = 'spider2';

//el primer argumento siempre debe ser err para interceptar los errores
buscarHeroeCallback(heroeId1, (err, heroe) => {
    (err) ? console.error(err) : console.log({heroe});
});

// buscarHeroe(heroeId1).then( heroe => {
//     console.log(`retornado promesa con heroe ${heroe.nombre}`);
// }).catch( err => {
//     console.log(` catch ${err}`);
// });


Promise.all([buscarHeroe(heroeId1),buscarHeroe(heroeId2)])
    .then(([heroe1,heroe2]) => {
        console.log(heroe1.nombre,heroe2.nombre );
    }).catch( err => {
        console.error(err);
    }).finally( () => {
        console.log('Termina promise.all');
    });