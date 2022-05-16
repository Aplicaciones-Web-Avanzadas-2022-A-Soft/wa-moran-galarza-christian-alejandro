// 01-javascript/
// Mutables e Inmutables

// Mutables
var numeroUno= 1;
let numeroDos= 2; // Siempre usar tipo let
numeroUno=5;
numeroDos=8;
numeroUno=false;
numeroDos=true;

// Inmutables
const configuracionArchivo = "XML";
// configuracionArchivo = "XML";
// Vamos a preferir CONST > LET > NUNCA VAR!

// Tipos de Variables
const numero = 1; // number
const sueldo = 1.2; // number
const texto = "Christian"; // string
const apellido = 'Morán'; // string
const booleano = false; //boolean
const hijos = null; // object
const zapatos = undefined; // undefined

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof Number("asd")); // number
console.log(Number("asd")); // NaN

//Truty Falsy
if(true === true){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

if(true === true){
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

if(""){
    console.log("String vacío es verdadero");
}else{
    console.log("String vacío es falsy");
}

if("Chris"){
    console.log("String con datos es truty");
}else{
    console.log("String con datos es falsy");
}

if(-1){
    console.log("Negativo es truty");
}else{
    console.log("Negativo es falsy");
}

if(0){
    console.log("Cero es truty");
}else{
    console.log("Cero es falsy");
}

if(1){
    console.log("Positivo es truty");
}else{
    console.log("Positivo es falsy");
}

// Orden de importancia
// 1) const
// 2) let
// 3) X -> "var"
// Objetos Js (JSON)
const chris = {
    "nombre": "Christian",// llave: valor,
    apellido: "Morán",
    edad: 24,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa:{
        color: 'plomo',
        talla: 'S',
    },
    mascotas:["Lua", "Nat"],
};

console.log(chris);

// Acceder a las propiedades del objeto
chris.nombre;
chris.apellido;
chris["nombre"];
// Cambiar valores
chris.nombre="Alejandro";
console.log(chris);
chris["nombre"]="Christian";
// Crear nuevos atributos o métodos dentro del objeto
chris.sueldo; //undefined
console.log(chris.sueldo);
chris.sueldo= 1.2;
console.log(chris.sueldo);
chris["gastos"]= 0.8;
console.log(chris.gastos);
console.log(chris.sueldo);
// Borrar el valor de una propiedad
chris.nombre = undefined;
console.log(chris);
console.log(Object.keys(chris));
console.log(Object.values(chris));
// Delete la llave y el valor dentro del objeto
delete chris.nombre; // Eliminar la llave "nombre"
console.log(chris);

// Variables por valor o referencia?
// Variables por valor en JS son las primitivas: number, string, boolean
edadChris = 24;
edadChris = edadAlex; // Guardamos una primitiva en otra variable
                      // Variables por valor
console.log(edadAdrian); // 24
console.log(edadAdrian); // 22
