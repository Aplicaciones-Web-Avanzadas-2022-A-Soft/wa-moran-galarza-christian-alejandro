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
[].forEach(()=>{})
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow2();

const funcionFatArrow4 = () => {};
const funcionFatArrow5 = (x) => {
    return x+1;
};
const funcionFatArrow6 = (x) => x+1; //FAT ARROW FUNCTIONS
                                     // Una sola línea
                                     // Omito Return
                                     // Omito llaves
const funcionFatArrow7 = x => x+1;   // SI SOLO TENEMOS UN PARÁMETRO
                                     // Omito los paréntesis
const funcionFatArrow8 = (x,y,z) => x+y+z;

// ...=> Parámetros infinitos que llegan en un arreglo
//       Solo se puede tener una de estas por función
function sumarNumeros(...otrosNumeros){ //Parametros Inf [2,3,4,5,... ]
    let total = 0;
    otrosNumeros.forEach(
        (valorActual) => {
            total = total + valorActual;
        }
    );
    return total;
    // return otrosNumeros.reduce((a, v) => a+v, 0);
}
sumarNumeros(1,2,3,4,5,6,7,8,9,10,11,12,13)
