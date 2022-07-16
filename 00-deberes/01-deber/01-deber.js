// 01-deber.js
const fs = require('fs');
const path1= 'C:\\Users\\crisa\\WebstormProjects\\wa-moran-galarza-christian-alejandro\\01-javascript\\06-ejemplo.txt';
//const path1='C:\\Users\\SIGMA\\Documents\\wa-moran-galarza-christian-alejandro\\01-javascript\\06-ejemplo.txt';
const path2= 'C:\\Users\\crisa\\WebstormProjects\\wa-moran-galarza-christian-alejandro\\01-javascript\\01-variables.js';
//const path2='C:\\Users\\SIGMA\\Documents\\wa-moran-galarza-christian-alejandro\\01-javascript\\01-variables.js';

function leerArchivo(path1, path2){
    const promesaLeer = new Promise(
        (
            resolve,
            reject
        ) => {
            fs.readFile(
                path1,
                'utf-8',
                (errorPrimerArchivo, contenidoPrimerArchivo) => {
                    if(errorPrimerArchivo){
                        reject('Error leyendo primer archivo');
                    }else{
                        fs.readFile(
                            path2,
                            'utf-8',
                            (errorSegundoArchivo, contenidoSegundoArchivo) => {
                                if(errorSegundoArchivo){
                                    reject('Error leyendo segundo archivo');
                                }else{
                                    const contenido = contenidoPrimerArchivo + '\n\n' + contenidoSegundoArchivo;
                                    resolve(contenido);
                                }
                            }
                        );
                    }
                }
            );
        }
    )
    return promesaLeer;
}
/*
leerArchivo(path1).then(
    (respuesta)=>{
        console.log('Contenido primer archivo: ', respuesta);
    }
);

leerArchivo(path2).then(
    /*(respuesta)=>{
        //console.log('Contenido segundo archivo: ', respuesta);
    }
);*/

function escribirArchivo(path, contenidoFinal){
    const promesaEscribir = new Promise(
        (
            resolve,
            reject
        ) => {
            fs.writeFile(
                path,
                contenidoFinal,
                // {flag:'a+'},
                (errorEscritura)=>{
                    if(errorEscritura){
                        console.log(errorEscritura);
                        reject('Error escribiendo archivo');
                    }else{
                        resolve();
                    }
                }
            );
        }
    )
    return promesaEscribir;
}

leerArchivo(path1, path2).then(
    (respuesta)=>{
        escribirArchivo('./01-nuevo-archivo.txt',respuesta)
            .finally(
            ()=>{
                console.info('Archivo escrito con éxito');
            }
        )
    }
);

// leerArchivo(path2).then(
//     (respuesta2)=>{
//         escribirArchivo('./01-nuevo-archivo.txt',respuesta2).finally(
//             ()=>{
//                 console.info('Segundo archivo escrito');
//             }
//         );
//     }
// );