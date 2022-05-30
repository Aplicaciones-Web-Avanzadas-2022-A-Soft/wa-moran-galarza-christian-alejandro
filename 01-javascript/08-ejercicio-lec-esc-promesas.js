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
                //{flag: 'a+'},
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

function crearNuevoArchivo(path1, path2, path3){
    const promesaCrear = new Promise(
        (
            resolve,
            reject
        )=>{
            leerArchivo(path1)
                .then(
                    (contenido1)=>{
                        return escribirArchivo(path3,contenido1);
                    }
                )
                .then(
                    (mensaje)=>{
                        console.log(mensaje);
                    }
                );
            leerArchivo(path2)
                .then(
                    (contenido2)=>{
                        return escribirArchivo(path3,contenido2);
                    }
                )
                .then(
                    (mensaje)=>{
                        console.log(mensaje);
                    }
                );
            resolve('Archivo creado con éxito');
        }
    )
    return promesaCrear;
}

crearNuevoArchivo('./01-variables.js','02-arreglos.js','./08-nuevo-archivo.txt')
    .then(
        (respuesta)=>{
            console.log(respuesta);
        }
    );