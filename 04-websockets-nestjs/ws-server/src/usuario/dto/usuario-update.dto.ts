import {IsIn, IsNotEmpty, IsOptional, IsString} from "class-validator";

export class UsuarioUpdateDto{
    @IsOptional()
    @IsString()
    nombre: string;

    @IsOptional()
    @IsString()
    apellido: string;

    @IsOptional()
    @IsIn(['U', 'A'])
    rol: string;
}