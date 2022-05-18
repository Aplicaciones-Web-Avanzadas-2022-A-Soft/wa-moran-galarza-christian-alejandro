// 04-funciones.js
function soloNumeros(a,b,c){
    return a - b + c;
}
// JS permite el uso de funciones isn validaciones
// soloNumeros('v', true,[1,2,3]);
// soloNumeros((a) => a, (a) => a, (a) => a);
// soloNumeros(1,2,3,4,5,6,7,8,9);
// soloNumeros();
function soloLetras(a,b,c){ //undefined
    console.log(a, b, c);
}

// Funciones nombradas - named functions
function funcionNombrada(){
}

// Funciones anónimas - Anonymous functions
const funcionSinNombre1 = function(){};
var funcionSinNombre2 = function(){};
let funcionSinNombre3 = function(){};

[].forEach(function(){})
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();

// Funciones anónimas - Fat Arrow Functions
const funcionFatArrow1 = () => {};
var funcionFatArrow2 = () => {};
let funcionFatArrow3 = () => {};