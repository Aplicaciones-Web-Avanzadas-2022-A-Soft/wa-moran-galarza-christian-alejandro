// 08-ejercicio-lec-esc-promesas.js
const fs = require('fs');
/*
Hacer una funcion que me acepte como parametro una variable
con el path del primer archivo, el path del segundo archivo
y el path del nuevo archivo.
Vamos a crear dos funciona una promesaLectura y una promesaEscritura
promesaLectura va a aceptar path de lectura
promesaEscritura va a aceptar path nuevo archivo y el contenido
- Promesa de lectura
- Promesa de escritura
*/

function leerArchivo(path){
    const promesaLectura = new Promise(
        (
            resolve,
            reject
        ) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenido) => {
                    if(error){
                        reject('Error leyendo archivo');
                    }else{
                        resolve(contenido);
                    }
                }
            );
        }
    )
    return promesaLectura;
}

function escribirArchivo(path, contenido){
    const promesaEscritura = new Promise(
        (
            resolve,
            reject
        ) => {
            fs.writeFile(
                path,
                contenido,
                (errorEscritura)=>{
                    if(errorEscritura){
                        reject('Error escribiendo archivo');
                    }else{
                        resolve('Archivo escrito');
                    }
                }
            );
        }
    )
    return promesaEscritura;
}

//const path1= 'C:/Users/IntelHPi5/Documents/Software/Octavo Semestre/Aplicaciones Web Avanzadas/wa-moran-galarza-christian-alejandro/01-javascript/06-ejemplo.txt';
//const path1='C:\\Users\\SIGMA\\Documents\\wa-moran-galarza-christian-alejandro\\01-javascript\\06-ejemplo.txt';
//const path2= 'C:/Users/IntelHPi5/Documents/Software/Octavo Semestre/Aplicaciones Web Avanzadas/wa-moran-galarza-christian-alejandro/01-javascript/01-variables.js';
//const path2='C:\\Users\\SIGMA\\Documents\\wa-moran-galarza-christian-alejandro\\01-javascript\\01-variables.js';
function crearNuevoArchivo(path1, path2, path3){
    let contenido = '';
    leerArchivo(path1)
        .then(
               (contenido1)=> {
                   contenido = contenido + contenido1;
                   return leerArchivo(path2);
               }
        )
        .then(
              (contenido2)=>{
                  contenido = contenido + contenido2;
                  return escribirArchivo(path3, contenido);
              }
        )
        .then(
              (mensaje)=>{
                  console.log(mensaje);
              }
        )
        .catch(
            (error) => {
                console.error(error);
            }
        )
}

crearNuevoArchivo('C:\\Users\\SIGMA\\Documents\\wa-moran-galarza-christian-alejandro\\01-javascript\\06-ejemplo.txt',
    'C:\\Users\\SIGMA\\Documents\\wa-moran-galarza-christian-alejandro\\01-javascript\\01-variables.js',
    './08-nuevo-archivo.txt');
// ASYNC AWAIT
// REGLAS:
// 1) Estar dentro de una funcion (nombrada o anonima)
// 2) AGREGAR la palabra 'async' antes de la declaracion
//    de la funcion
// 3) AGREGAR la palabra 'await' antes de la declaracion
//    de una promesa
async function ejecutarPromesasAsyncAwait(pathUno, pathDos, pathTres) {
    try {
        const primerContenido = await promesaLectura(pathUno);
        const segundoContenido = await promesaLectura(pathUno);
        await promesaEscritura(pathTres, primerContenido + segundoContenido);
    } catch (error) {
        console.error(error);
    }
}