// 01-variables.ts

let nombre:string = 'Chris'; // Primitivo
let nombre2: String = 'Chris2'; // Clase String
// nombre = 1;
nombre = 'Alejandro';
let edad: number = 24;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;

// Duck Typing
let apellido = 'Moran'; // string
apellido = 'Chris'; // igual a otros string
apellido.toUpperCase(); // métodos string
// apellido = 1; // Error, no es un string

let marihuana: any = 2;
marihuana= '2';
marihuana = true;
marihuana = () => '2';

let edadMultiple: number | string | Date ='2'; // o 2 o new Date();
edadMultiple='2';
edadMultiple = 2222;
let numeroUnico: number =1; // para igualar a otros se castea
numeroUnico = edadMultiple as number;
edadMultiple = 'dos';
edadMultiple = new Date();
// edadMultiple = true;
// edadMultiple as Date;
// edadMultiple as string;
// edadMultiple as number;