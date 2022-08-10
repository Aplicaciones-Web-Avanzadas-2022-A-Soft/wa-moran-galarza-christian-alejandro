import {IsNotEmpty, IsNumber, IsString} from "class-validator";

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

    @IsNotEmpty()
    @IsString()
    comentario: string;
}