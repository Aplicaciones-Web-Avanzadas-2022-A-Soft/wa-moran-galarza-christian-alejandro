// 05-destructuracion.js

// Destructuración de objetos
const chris = {
    nombre: "Chris",
};
const alex = {
    nombre: "Alex",
    apellido: "Moran"
};

const chrisAlex ={ // Creando una nueva referencia
    ...chris, // 1 El orden es importante para propiedades que se repiten
    ...alex,  // 2 El último reemplaza a los anteriores
};
console.log('chrisAlex', chrisAlex);

// Destructuracion de arreglos
const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [1, 2, 3, 4, 5];
const superArreglo = [
    ...arregloUno, // El orden importa
    ...arregloDos,
];
console.log('superArreglo', superArreglo);
console.log(...superArreglo); //console.log(1,2,3,4,5...,10);