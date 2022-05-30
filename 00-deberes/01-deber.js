// 01-deber.js
const fs = require('fs');
const path1= 'C:/Users/IntelHPi5/Documents/Software/Octavo Semestre/Aplicaciones Web Avanzadas/wa-moran-galarza-christian-alejandro/01-javascript/06-ejemplo.txt';
const path2= 'C:/Users/IntelHPi5/Documents/Software/Octavo Semestre/Aplicaciones Web Avanzadas/wa-moran-galarza-christian-alejandro/01-javascript/01-variables.js';
let contenido1;
let contenido2;
let contenidoFinal;

function leerArchivo(path){
    const promesaLeer = new Promise(
        (
            resolve,
            reject
        ) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if(error){
                        console.error(error);
                        throw new Error('Error leyendo archivo');
                    }else{
                        resolve(contenido);
                    }
                }
            );
        }
    )
    return promesaLeer;
}

/*leerArchivo(path1).then(
    (respuesta)=>{
        console.log('Contenido primer archivo: ', respuesta);
    }
);*/

leerArchivo(path2).then(
    /*(respuesta)=>{
        //console.log('Contenido segundo archivo: ', respuesta);
    }*/
);

contenidoFinal = contenido1 + contenido2;
function escribirArchivo(path){
    const promesaEscribir = new Promise(
        (
            resolve,
            reject
        ) => {
            fs.writeFile(
                path,
                contenidoFinal,
                (errorEscritura)=>{
                    if(errorEscritura){
                        console.log(errorEscritura);
                        throw new Error('Error escribiendo archivo');
                    }else{
                        console.log('Archivo creado con éxito');
                    }
                }
            );
        }
    )
    return promesaEscribir;
}

/*escribirArchivo('./01-nuevo-archivo.txt').finally(
    ()=>{
        console.info('Fin');
    }
);*/

