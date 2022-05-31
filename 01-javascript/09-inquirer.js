// 11-inquirer.js
// npm init -> package.json -> dependencias -> scripts
// npm install inquirer -> npm i inquirer
// node_modules -> están las dependencias

const inquirer = require('inquirer');
async function main(){
    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'apellido',
                    message: 'Ingrese su nombre'
                },
                {
                    type: 'input',
                    name: 'edad',
                    message: 'Ingrese su edad'
                }
            ]);
    }catch (e) {
        console.error(e);
    }
}

//main();

// Stringify y Parse
const arregloUsuarios=[{
    id:1,
    nombre: 'Chris',
}];

const arregloGuardado = JSON.stringify(arregloUsuarios);
console.log('arregloGuardado',arregloGuardado);
const arregloRestaurado = JSON.parse(arregloGuardado);
console.log('arregloRestaurado',arregloRestaurado);