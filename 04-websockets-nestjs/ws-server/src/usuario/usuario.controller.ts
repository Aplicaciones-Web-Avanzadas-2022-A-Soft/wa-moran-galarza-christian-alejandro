import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from '@nestjs/common';
import {UsuarioService} from "./usuario.service";
import {UsuarioCreateDto} from "./dto/usuario-create.dto";
import {validate} from "class-validator";
import {UsuarioUpdateDto} from "./dto/usuario-update.dto";
import {FindManyOptions} from "typeorm/find-options/FindManyOptions";
import {UsuarioEntity} from "./usuario.entity";
import {FindOptionsWhere, Like, Not} from "typeorm";

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

    // 1 Informativo
    // 2 OK
    // 3 redireccion
    // 4 Error Cliente
    // 5 Error Servidor

    // Parametros
        // 1 QueryParams
        // 2 BodyParams (viajan en el formulario)
        // 3 Parametros de ruta /usuario/:id/notas

    @Get("/")
    @HttpCode(200)
    find(
        @Query() queryParams,
        @Param() params
    ){
        return this.usuarioService.find({});
    }

    @Get("/:id")
    @HttpCode(200)
    findOneById(
        @Query() queryParams,
        @Param() params
    ){
        const consulta: FindManyOptions<UsuarioEntity> = {
            // select: ['id'], // Select
            // relations: { //  Relaciones
            //     notas: true
            // },
            skip: queryParams.skip ? +queryParams.skip : 0 , // 2 * 0 = 0 ; 2 * 1 = 2; 2 * 2 = 4;
            take: queryParams.take ? +queryParams.take : 10
        };
        const consultaWhere = [] as FindOptionsWhere<UsuarioEntity>[]
        if(queryParams.nombres){
            consultaWhere.push({
                nombre: Like('%' + queryParams.nombres + '%'),
                rol: queryParams.rol ? queryParams.rol : undefined,
            })
        }
        if(queryParams.apellidos){
            consultaWhere.push({
                apellido: Like('%' + queryParams.apellidos + '%'),
                rol: queryParams.rol ? queryParams.rol : undefined,
            })
        }
        if(consultaWhere.length > 0){
            consulta.where = consultaWhere
        }
        // if(queryParams.rol){
        //     consultaWhere.push({
        //         rol: queryParams.rol
        //     })
        // }
        return this.usuarioService.find(consulta);
    }

    @Post("/")
    @HttpCode(201)
    async create(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        const nuevoRegistro = new UsuarioCreateDto();
        nuevoRegistro.rol = bodyParams.rol;
        nuevoRegistro.nombre = bodyParams.nombre;
        nuevoRegistro.apellido= bodyParams.apellido;

        const errores = await validate(nuevoRegistro);
        if(errores.length > 0){
            console.error({errores});
            throw new BadRequestException({mensaje:'Envío mal datos'});
        }
        return this.usuarioService.create(bodyParams);
    }

    @Put("/:id")
    @HttpCode(200)
    async update(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        const nuevoRegistro = new UsuarioUpdateDto();
        nuevoRegistro.rol = bodyParams.rol;
        nuevoRegistro.nombre = bodyParams.nombre;
        nuevoRegistro.apellido= bodyParams.apellido;

        const errores = await validate(nuevoRegistro);
        if(errores.length > 0){
            console.error({errores});
            throw new BadRequestException({mensaje:'Envío mal datos'});
        }
        return this.usuarioService.update(bodyParams, +params.id);
    }

    @Delete("/:id")
    @HttpCode(200)
    delete(
        @Query() queryParams,
        @Param() params,
        @Body() bodyParams
    ){
        return this.usuarioService.delete(+params.id);
    }
}
