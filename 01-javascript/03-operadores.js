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

// for(){
//
//
// FOREACH
// Itera el arreglo
const respuestaForEach = arreglo
    .forEach(
        function(valorActual, indiceActual, arregloCompleto){
            console.log('valorActual',valorActual);
        }
    );
console.log('respuestaForEach',respuestaForEach); // undefined

// MAP (Modificar o MUTAR el arreglo y devuelve un nuevo arreglo)
// enviamos los datos del nuevo arreglo
// devuelve el nuevo arreglo
const respuestaMap = arreglo
    .map(
        (valorActual, indiceActual, arregloCompleto) => {
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual. nombre,
                nota: valorActual.nota +1,
                casado: false
            };
            return nuevoElemento;
        }
    );
console.log('respuestaMap',respuestaMap);
console.log('arreglo', arreglo);

// FILTER (filtrar el arreglo)
// enviamos EXPRESION TRUTY FALSY
// devuelve los elementos que cumplen esa condición
const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual, arregloCompleto)=>{
            return valorActual.nota >= 14;
        }
    );
console.log('respuestaFilter',respuestaFilter);
console.log('arreglo', arreglo);

// SOME -> expresion
// DEVUELVE BOOLEANO
// OR
const respuestaSome = arreglo
    .some(
        function(valorActual, indiceActual, arregloCompleto){
            return valorActual.nota < 9;
        }
    );
console.log('respuestaSome',respuestaSome);

// EVERY -> expresion
// DEVUELVE BOOLEANO
// Todas las notas son mayores a 14? SI NO
// AND
const respuestaEvery = arreglo
    .every(
        function(valorActual, indiceActual, arregloCompleto){
            return valorActual.nota > 14;
        }
    );
console.log('respuestaEvery',respuestaEvery);

// REDUCE izq -> der
// REDUCE RIGHT der -> izq
// 100 <3 Puntos de vida
// 100 -1 -2 -3 -5 -6 -5 -4 -3 -1=
// 0 1 +2 +3 +4 +6 +5 +4 +3 +1=
// [1,2,3,5,6,5,4,3,1]
const respuestaReduce = arreglo
    .reduce(
        function(valorAcumulado,valorActual, indiceActual, arregloCompleto){
            return valorAcumulado+valorActual.nota;
        },
        0 // Acumulador
    );
console.log('Promedio', respuestaReduce/arreglo.length);