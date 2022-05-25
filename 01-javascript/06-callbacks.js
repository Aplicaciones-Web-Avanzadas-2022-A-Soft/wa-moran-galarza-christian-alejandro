const fs = require ('fs'); //file system
//importar el modulo fs
//06-ejemplo.txt -> Hola
console.log('PRIMERO');
// 1) Leer archivo :06-ejemplo.txt, luego imprimir en consola
// 2) Después del paso 1, leer archivo: 01-variables.js, luego imprimir en consola
// 3) Crear un nuevo archivo llamado 06-nuevo-archivo.txt con el contenido de los otros dos archivos.A
fs.readFile(
    './06-ejemplo.txt', //1
    'utf-8',
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
        if(errorLecturaPrimerArchivo){
            console.error(errorLecturaPrimerArchivo);
            throw new Error('Error leyendo primer archivo');
        }else{
            fs.readFile(
                './01-variables.js',
                'utf-8',
                (errorLecturaSegundoArchivo,contenidoSegundoArchivo) =>{
                    if(errorLecturaSegundoArchivo){
                        console.error(errorLecturaSegundoArchivo);
                        throw new Error('Error leyendo segundo archivo');
                    }else{
                        console.log(contenidoPrimerArchivo,contenidoSegundoArchivo);
                        const contenido = contenidoPrimerArchivo+contenidoSegundoArchivo;
                        fs.writeFile(
                            './06-nuevo-archivo.txt',
                            contenido,
                            (errorEscritura)=>{
                                if(errorEscritura){
                                    console.log(errorEscritura);
                                    throw new Error('Error escribiendo archivo');
                                }else{
                                    console.log('Archivo creado con éxito');
                                }
                            }
                        );
                    }
                }
            );
        }
    }
);
console.log('TERCERO');