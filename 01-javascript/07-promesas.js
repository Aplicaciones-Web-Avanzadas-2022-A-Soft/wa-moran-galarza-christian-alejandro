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

function promesaElevarAlCuadrado(numero){
    const miPrimerPromesa = new Promise(
        (resolve,reject) =>{
            const numeroElevadoAlCuadrado = Math.pow(numero,2);
            resolve(numeroElevadoAlCuadrado);
        }
    );
    return miPrimerPromesa;
}

promesaEsPar(4)
    .then(
        (numeroPar)=>{
            return promesaElevarAlCuadrado(numeroPar) // OTRA PROMESA
        }
    )
    .then(
        (numeroParElevadoAlCuadrado)=>{
            console.log('numeroParElevadoAlCuadrado', numeroParElevadoAlCuadrado);
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