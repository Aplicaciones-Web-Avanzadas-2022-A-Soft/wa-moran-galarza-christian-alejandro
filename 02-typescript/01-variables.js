// 01-variables.ts
let nombre = 'Chris'; // Primitivo
let nombre2 = 'Chris2'; // Clase String
// nombre = 1;
nombre = 'Alejandro';
let edad = 24;
let casado = false;
let fecha = new Date();
let sueldo;
sueldo = 12.4;
// Duck Typing
let apellido = 'Moran'; // string
apellido = 'Chris'; // igual a otros string
apellido.toUpperCase(); // métodos string
// apellido = 1; // Error, no es un string
let marihuana = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';
let edadMultiple = '2'; // o 2 o new Date();
edadMultiple = '2';
edadMultiple = 2222;
let numeroUnico = 1; // para igualar a otros se castea
numeroUnico = edadMultiple;
edadMultiple = 'dos';
edadMultiple = new Date();
// edadMultiple = true;
// edadMultiple as Date;
// edadMultiple as string;
// edadMultiple as number;
