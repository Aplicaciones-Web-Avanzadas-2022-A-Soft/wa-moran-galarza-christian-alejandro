import {IsNotEmpty, IsNumber, IsString, IsOptional} from "class-validator";

export class NotaCreateDto{
    @IsNotEmpty()
    @IsNumber()
    notaPrimerBimestre: number;

    @IsNotEmpty()
    @IsNumber()
    notaSegundoBimestre: number;

    @IsNotEmpty()
    @IsNumber()
    notaExamenFinal: number;

    @IsOptional()
    @IsString()
    comentario: string;

    @IsNotEmpty()
    @IsNumber()
    usuario: number;
}