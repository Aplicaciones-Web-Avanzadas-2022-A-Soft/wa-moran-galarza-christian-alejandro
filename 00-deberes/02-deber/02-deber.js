// 02-deber.js
const fs = require('fs');
const inquirer = require('inquirer');
const path = './02-datos.txt';
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
                        reject('Error leyendo archivo.');
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
                        reject('Error escribiendo archivo.');
                    }else{
                        resolve('Archivo escrito.');
                    }
                }
            );
        }
    )
}

async function guardarDatos(){
    try{
        await escribirArchivo(path, JSON.stringify(arregloDatos));
    }catch (e) {
        console.log('Error en la escritura de los datos.', e);
    }
}

async function extraerDatos(){
    let contenido = undefined;
    try{
        contenido = await leerArchivo(path);
        if(contenido !== undefined){
            arregloDatos = JSON.parse(contenido);
        }else{
            arregloDatos = [];
        }
    }catch(e){
        console.log('Error en la lectura de los datos', e);
    }
}

async function recibirId(nombreEntidad){
    try{
        const respuesta = await inquirer.prompt(
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese el id del'+ nombreEntidad +'que quiere actualizar o eliminar: '
            }
        )
        return respuesta.id;
    }catch (e) {
        console.log('No se pudo recibir el id', e);
    }
}

// let manager = {
//     id: 0,
//     nombre: '',
//     apellido: '',
//     direccion: '',
//     fechaNacimiento: '',
//     disquera: '',
//     sueldo: 0,
//     artistas: []
// }

async function crearManager(){
    try{
        const respuestas = await inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingresa el id del manager:'
            },
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
                message: 'Ingresa la dirección del manager:'
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
            elemento => elemento.id === respuestas.id
        )
        if(indice !== -1){
            console.log('\n\nYa existe un manager con ese identificador.\n')
        }else{
            respuestas.artistas = [];
            respuestas.tipo = 'Manager';
            arregloDatos.push(respuestas);
            console.log('\n\nManager creado con éxito.\n')
            await leerManager();
        }
    }catch (e) {
        console.log('\n\nError al crear un Manager.', e);
    }
}

const leerManager = () => {
    const arregloManagers = arregloDatos
        .filter(
            (valorActual, indiceActual, arregloCompleto)=>{
                return valorActual.tipo === 'Manager';
            }
        );
    if(arregloManagers.length !== 0){
        console.log('\n\n\t\tListado de Managers');
        console.log(arregloManagers);
    }else{
        console.log('\n\nNo existen managers.\n');
    }
}

async function actualizarManager(){
    let idManager = await recibirId(' manager ');
    const indice = arregloDatos.findIndex(
        elemento => elemento.id === idManager
    )
    if(indice !== -1){
        try{
            const respuestas = await inquirer.prompt([
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
                    message: 'Ingresa la dirección del manager:'
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
            arregloDatos[indice].nombre = respuestas.nombre;
            arregloDatos[indice].apellido = respuestas.apellido;
            arregloDatos[indice].direccion = respuestas.direccion;
            arregloDatos[indice].fechaNacimiento = respuestas.fechaNacimiento;
            arregloDatos[indice].disquera = respuestas.disquera;
            arregloDatos[indice].sueldo = respuestas.sueldo;
            console.log('\n\nManager actualizado con éxito.\n')
            await leerManager();
        }catch (e) {
            console.log('\n\nNo se pudo actualizar al manager.',e)
        }
    }else{
        console.log('\n\nNo existe un manager con ese identificador.\n')
    }
}

async function borrarManager(){
    let idManager = await recibirId(' manager ');
    const indice = arregloDatos.findIndex(
        elemento => elemento.id === idManager
    )
    if(indice !== -1){
        try{
            const respuesta = await inquirer.prompt(
                {
                    type: "confirm",
                    name: "confirmacion",
                    message: "¿Seguro desea eliminar al manager?"
                }
            )
            if(respuesta.confirmacion){
                arregloDatos.splice(indice, 1);
                console.log('\n\nManager eliminado con éxito.\n');
                await leerManager();
            }else{
                console.log('\n\nSe canceló la eliminación del manager.\n');
            }
        }catch (e) {
            console.log('\n\nNo se pudo eliminar al manager.',e)
        }
    }else{
        console.log('\n\nNo existe un manager con ese identificador.\n')
    }
}

// let artista = {
//     id: 0,
//     nombre: '',
//     apellido: '',
//     direccion: '',
//     fechaNacimiento: '',
//     disponibilidad: false,
//     discos: []
// }

async function crearArtista(){
    try{
        const respuestas = await inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingresa el id del artista:'
            },
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingresa el nombre del artista:'
            },
            {
                type: 'input',
                name: 'apellido',
                message: 'Ingresa el apellido del artista:'
            },
            {
                type: 'input',
                name: 'direccion',
                message: 'Ingresa la dirección del artista:'
            },
            {
                type: 'input',
                name: 'fechaNacimiento',
                message: 'Ingresa la fecha de nacimiento del artista:'
            },
            {
                type: 'input',
                name: 'disponibilidad',
                message: 'Ingresa la disponibilidad del artista:'
            },
            {
                type: 'number',
                name: 'numeroDiscos',
                message: 'Ingresa el numero de discos del artista:'
            },
        ])
        const indice = arregloDatos.findIndex(
            elemento => elemento.id === respuestas.id
        )
        if(indice !== -1){
            console.log('\n\nYa existe un artista con ese identificador.\n')
        }else{
            respuestas.discos = [];
            respuestas.tipo = 'Artista';
            arregloDatos.push(respuestas);
            console.log('\n\nArtista creado con éxito.\n')
            await leerArtista();
        }
    }catch (e) {
        console.log('\n\nError al crear un Artista.', e);
    }
}

const leerArtista = () => {
    const arregloArtistas = arregloDatos
        .filter(
            (valorActual, indiceActual, arregloCompleto)=>{
                return valorActual.tipo === 'Artista';
            }
        );
    if(arregloArtistas.length !== 0){
        console.log('\n\n\t\tListado de Artistas');
        console.log(arregloArtistas);
    }else{
        console.log('\n\nNo existen artistas.\n');
    }
}

async function actualizarArtista(){
    let idArtista = await recibirId(' artista ');
    const indice = arregloDatos.findIndex(
        elemento => elemento.id === idArtista
    )
    if(indice !== -1){
        try{
            const respuestas = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingresa el nombre del artista:'
                },
                {
                    type: 'input',
                    name: 'apellido',
                    message: 'Ingresa el apellido del artista:'
                },
                {
                    type: 'input',
                    name: 'direccion',
                    message: 'Ingresa la dirección del artista:'
                },
                {
                    type: 'input',
                    name: 'fechaNacimiento',
                    message: 'Ingresa la fecha de nacimiento del artista:'
                },
                {
                    type: 'input',
                    name: 'disponibilidad',
                    message: 'Ingresa la disponibilidad del artista:'
                },
                {
                    type: 'number',
                    name: 'numeroDiscos',
                    message: 'Ingresa el numero de discos del artista:'
                },
            ])
            arregloDatos[indice].nombre = respuestas.nombre;
            arregloDatos[indice].apellido = respuestas.apellido;
            arregloDatos[indice].direccion = respuestas.direccion;
            arregloDatos[indice].fechaNacimiento = respuestas.fechaNacimiento;
            arregloDatos[indice].disponibilidad = respuestas.disponibilidad;
            arregloDatos[indice].numeroDiscos = respuestas.numeroDiscos;
            console.log('\n\nArtista actualizado con éxito.\n')
            await leerArtista();
        }catch (e) {
            console.log('\n\nNo se pudo actualizar al artista.',e)
        }
    }else{
        console.log('\n\nNo existe un manager con ese identificador.\n')
    }
}

async function borrarArtista(){
    let idManager = await recibirId(' artista ');
    const indice = arregloDatos.findIndex(
        elemento => elemento.id === idManager
    )
    if(indice !== -1){
        try{
            const respuesta = await inquirer.prompt(
                {
                    type: "confirm",
                    name: "confirmacion",
                    message: "¿Seguro desea eliminar al artista?"
                }
            )
            if(respuesta.confirmacion){
                arregloDatos.splice(indice, 1);
                console.log('\n\nArtista eliminado con éxito.\n');
                await leerArtista();
            }else{
                console.log('\n\nSe canceló la eliminación del artista.\n');
            }
        }catch (e) {
            console.log('\n\nNo se pudo eliminar al artista.',e)
        }
    }else{
        console.log('\n\nNo existe un artista con ese identificador.\n')
    }
}

async function menu(){
    await extraerDatos();
    let opcion = -1;
    while(opcion !== 0){
        console.log(
            '\t\tMenu Principal\n'
            +'\n1. Crear manager.'
            +'\n2. Listar managers.'
            +'\n3. Actualizar manager.'
            +'\n4. Borrar manager.'
            +'\n5. Crear artista.'
            +'\n6. Listar  artistas.'
            +'\n7. Actualizar artista.'
            +'\n8. Borrar artista.');
        try{
            const respuesta = await inquirer.prompt(
                {
                    type: 'number',
                    name: 'opcion',
                    messaje: 'Escoja una opción: '
                }
            )
            opcion = respuesta.opcion;
            switch (opcion) {
                case 0:
                    await guardarDatos();
                    return;
                case 1:
                    await crearManager();
                    break;
                case 2:
                    leerManager();
                    break;
                case 3:
                    await actualizarManager();
                    break;
                case 4:
                    await borrarManager();
                    break;
                case 5:
                    await crearArtista();
                    break;
                case 6:
                    leerArtista();
                    break;
                case 7:
                    await actualizarArtista();
                    break;
                case 8:
                    await borrarArtista();
                    break;
                default:
                    console.log('No es una orden del menú.')
                    break;
            }
        }catch (e) {
            console.log('No se puede acceder al menú.', e);
        }
    }
}

menu();