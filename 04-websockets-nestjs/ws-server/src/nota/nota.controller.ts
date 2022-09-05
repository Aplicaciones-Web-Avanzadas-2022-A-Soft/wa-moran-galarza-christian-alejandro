import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from '@nestjs/common';
import {validate} from "class-validator";
import {NotaService} from "./nota.service";
import {NotaCreateDto} from "./dto/nota-create.dto";
import {NotaUpdateDto} from "./dto/nota-update.dto";

@Controller('nota')
export class NotaController {
    constructor(private readonly notaService: NotaService) {}

    @Get("/")
    @HttpCode(200)
    find(
        @Query() queryParams,
        @Param() params
    ){
        return this.notaService.find({});
    }

    @Get("/:id")
    @HttpCode(200)
    findOneById(
        @Query() queryParams,
        @Param() params
    ){
        return this.notaService.findOneById(+params.id);
    }

    @Post("/")
    @HttpCode(201)
    async create(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        const nuevoRegistro = new NotaCreateDto();
        nuevoRegistro.usuario = bodyParams.usuario;
        nuevoRegistro.notaPrimerBimestre = bodyParams.notaPrimerBimestre;
        nuevoRegistro.notaSegundoBimestre= bodyParams.notaSegundoBimestre;
        nuevoRegistro.notaExamenFinal= bodyParams.notaExamenFinal;
        nuevoRegistro.comentario= bodyParams.comentario;

        const errores = await validate(nuevoRegistro);
        if(errores.length > 0){
            console.error({errores});
            throw new BadRequestException({mensaje:'Envío mal datos'});
        }
        return this.notaService.create(bodyParams);
    }

    @Put("/:id")
    @HttpCode(200)
    async update(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        const nuevoRegistro = new NotaUpdateDto();
        nuevoRegistro.usuario = bodyParams.usuario;
        nuevoRegistro.notaPrimerBimestre = bodyParams.notaPrimerBimestre;
        nuevoRegistro.notaSegundoBimestre= bodyParams.notaSegundoBimestre;
        nuevoRegistro.notaExamenFinal= bodyParams.notaExamenFinal;
        nuevoRegistro.comentario= bodyParams.comentario;

        const errores = await validate(nuevoRegistro);
        if(errores.length > 0){
            console.error({errores});
            throw new BadRequestException({mensaje:'Envío mal datos'});
        }
        return this.notaService.update(bodyParams, +params.id);
    }

    @Delete("/:id")
    @HttpCode(200)
    delete(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        return this.notaService.delete(+params.id);
    }
}