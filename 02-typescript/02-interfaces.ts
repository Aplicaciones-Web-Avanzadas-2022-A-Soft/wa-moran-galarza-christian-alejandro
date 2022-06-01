// 02-interfaces.ts
interface Usuario{
    nombre: string;
    apellido: string;
    edad?: number|undefined; //opcional
    sueldo?: number; //opcional
    casado: boolean |0 |1;
    estado: 'AC' | 'IN' | 'BN';
    // funciones
    imprimirUsuario: (mensaje: string) => string |'BN';
    calcularImpuesto: (impuesto: number) => number;
    estadoActual: () => 'AP' | 'AF' | 'AT';
    // calcularImpuesto parámetro número impuesto, sueldo + sueldo * impuesto
    // estadoActual no recibe parámetros , 'AP' 'AF' 'AT'
}

let user: Usuario = {
    nombre: 'Chris',
    apellido: 'Morán',
    sueldo: 11.2,
    casado: 0,
    estado: 'AC',
    // funciones
    imprimirUsuario: (mensaje: string) => {
        return 'El mensaje es: '+mensaje;
    },
    calcularImpuesto: impuesto => {
        return this.sueldo+this.sueldo*impuesto;
    },
    estadoActual: () => {
        switch (this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
}
