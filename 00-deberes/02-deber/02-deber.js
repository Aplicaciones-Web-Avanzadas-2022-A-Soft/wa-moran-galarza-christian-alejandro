// 02-deber.js
const fs = require('fs');
const inquirer = require("inquirer");
const path1 = './02-datos-managers.txt';
const path2 = './02-datos-artistas.txt';
let arregloDatos = []

function leerArchivo(path){
    return new Promise(
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
}

function escribirArchivo(path, contenido){
    return new Promise(
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
}

async function guardarDatos(path){
    try{
        await escribirArchivo(path, JSON.stringify(arregloDatos));
    }catch (e) {
        console.log('Error en la escritura de los datos', e);
    }
}

async function extraerDatos(path){
    let contenido = undefined;
    try{
        contenido = await escribirArchivo(path);
        if(contenido !== undefined){
            arregloDatos = JSON.parse(contenido);
        }else{
            arregloDatos = [];
        }
    }catch(e){
        console.log('Error en la lectura de los datos', e);
    }
}

let manager = {
    id: 0,
    nombre: '',
    apellido: '',
    direccion: '',
    fechaNacimiento: '',
    disquera: '',
    sueldo: 0,
    artistas: []
}

async function crearManager(){
    try{
        const respuestas = inquirer.prompt([
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingresa el nombre del manager:'
            },
            {
                type: 'input',
                name: 'apellido',
                message: 'Ingresa el apellido del manager:'
            },
            {
                type: 'input',
                name: 'direccion',
                message: 'Ingresa la direccion del manager:'
            },
            {
                type: 'input',
                name: 'fechaNacimiento',
                message: 'Ingresa la fecha de nacimiento del manager:'
            },
            {
                type: 'input',
                name: 'disquera',
                message: 'Ingresa la disquera del manager:'
            },
            {
                type: 'number',
                name: 'sueldo',
                message: 'Ingresa el sueldo del manager:'
            },
        ])
        const indice = arregloDatos.findIndex(
            elemento => elemento.nombre === respuestas.nombre
        )
        if(indice !== -1){
            console.log('Indice incorrecto.')
        }else{
            respuestas.artistas = [];
            arregloDatos.push(respuestas);
        }
    }catch (e) {
        console.log('Error al crear un Manager', e);
    }
}

let artista = {
    id: 0,
    nombre: '',
    apellido: '',
    direccion: '',
    fechaNacimiento: '',
    disponibilidad: false,
    discos: []
}