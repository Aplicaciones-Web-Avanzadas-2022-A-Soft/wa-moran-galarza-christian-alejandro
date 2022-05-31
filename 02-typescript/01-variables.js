// 01-variables.ts
var nombre = 'Chris'; // Primitivo
var nombre2 = 'Chris2'; // Clase String
// nombre = 1;
nombre = 'Alejandro';
var edad = 24;
var casado = false;
var fecha = new Date();
var sueldo;
sueldo = 12.4;
// Duck Typing
var apellido = 'Moran'; // string
apellido = 'Chris'; // igual a otros string
apellido.toUpperCase(); // métodos string
// apellido = 1; // Error, no es un string
var marihuana = 2;
marihuana = '2';
marihuana = true;
marihuana = function () { return '2'; };
var edadMultiple = '2'; // o 2 o new Date();
edadMultiple = '2';
edadMultiple = 2222;
var numeroUnico = 1; // para igualar a otros se castea
numeroUnico = edadMultiple;
edadMultiple = 'dos';
edadMultiple = new Date();
// edadMultiple = true;
// edadMultiple as Date;
// edadMultiple as string;
// edadMultiple as number;
