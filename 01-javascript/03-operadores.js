// 03-operadores.js
const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

// FUNCIONRS COMO PARAMETROS
// FIND
// enviamos una expresión ->  TRUTY FALSY
// devuelve el primero que cumpla esa condición
const respuestaFind = arreglo
    .find(
        function(valorActual,indiceActual,arregloCompleto){
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nombre === "Wendy"; // EXPRESION = = =
        }
    );
console.log('respuestaFind',respuestaFind); //Wendy // Si no encuentra devuelve undefined

// FINDINDEX
// enviamos una expresión -> TRUTY FALSY
// devuelve el primero que cumpla esa condición
const respuestaIndex = arreglo
    .findIndex(
        function(valorActual, indiceActual,  arregloCompleto){
            return valorActual.nombre === "Andrea";
        }
    );
console.log('respuestaIndex',respuestaIndex); //Andrea indice -> 6 // Si no encuentra devuelve -1