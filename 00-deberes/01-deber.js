// 01-deber.js
const fs = require('fs');
//const path1= 'C:/Users/IntelHPi5/Documents/Software/Octavo Semestre/Aplicaciones Web Avanzadas/wa-moran-galarza-christian-alejandro/01-javascript/06-ejemplo.txt';
const path1='C:\\Users\\SIGMA\\Documents\\wa-moran-galarza-christian-alejandro\\01-javascript\\06-ejemplo.txt';
//const path2= 'C:/Users/IntelHPi5/Documents/Software/Octavo Semestre/Aplicaciones Web Avanzadas/wa-moran-galarza-christian-alejandro/01-javascript/01-variables.js';
const path2='C:\\Users\\SIGMA\\Documents\\wa-moran-galarza-christian-alejandro\\01-javascript\\01-variables.js';

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
                (errorEscritura)=>{
                    if(errorEscritura){
                        console.log(errorEscritura);
                        throw new Error('Error escribiendo archivo');
                    }else{
                        resolve();
                    }
                }
            );
        }
    )
    return promesaEscribir;
}

leerArchivo(path1).then(
    (respuesta1)=>{
        escribirArchivo('./01-nuevo-archivo.txt',respuesta1).finally(
            ()=>{

                console.info('Primer archivo escrito');
            }
        );
    }
);

leerArchivo(path2).then(
    (respuesta)=>{
        escribirArchivo('./01-nuevo-archivo.txt',respuesta).finally(
            ()=>{
                console.info('Segundo archivo escrito');
            }
        );
    }
);



