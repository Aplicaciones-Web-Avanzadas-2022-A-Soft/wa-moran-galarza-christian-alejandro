// 04-clases.ts
class Persona{
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string='Humano';
    protected nombreYApellido = ''; // Duck Typing -> string
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ){
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombreParametro + ' ' + apellidoParametro;
    }

    private mostrarNombreApellido(): string{
        return this.nombreYApellido;
    }
}

class Usuario extends Persona{
    constructor(
        nombreParametro: string, // Parámetros del constructor
        apellidoParametro: string, // Parámetros del constructor
        public cedula: string, // Modificar acceso -> Propiedad de la clase
        public estadoCivil: string, // Modificar acceso -> Propiedad de la clase
    ){
        super(nombreParametro, apellidoParametro);
    }
}

const chris = new Usuario(
    'Chris',
    'Moran',
    '1721795811',
    'soltero'
);
chris.nombre;
chris.apellido;
chris.cedula;
chris.estadoCivil;