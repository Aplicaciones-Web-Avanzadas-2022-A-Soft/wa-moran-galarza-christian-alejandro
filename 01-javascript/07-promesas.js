// 07-promesas.js
const fs = require('fs');

function promesaEsPar(numero){
    const miPrimerPromesa = new Promise(// Definicón de la promesa
        (
            resolve, // funcion return
            reject // funcion throw
        )=>{
            if(numero % 2 == 0){
                resolve(numero); // return numero -> resolve(): return undefined
            }else{
                reject('No es par');// Throw 'No es par'
            }
        }
    )
    return miPrimerPromesa;
}

promesaEsPar(3)
    .then(
        (respuesta)=>{
            console.log('Respuesta: ', respuesta);
        }
    )
    .catch(
        (error)=>{
            console.error('Error: ', error);
        }
    )
    .finally(
        ()=>{
            console.info('Fin');
        }
    );