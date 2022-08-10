import {IsIn, IsNotEmpty, IsString} from "class-validator";

export class UsuarioCreateDto{
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    apellido: string;

    @IsNotEmpty()
    @IsIn(['U', 'A'])
    rol: string;
}