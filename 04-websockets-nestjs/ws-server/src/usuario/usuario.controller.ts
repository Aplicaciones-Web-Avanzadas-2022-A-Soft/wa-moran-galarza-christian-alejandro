import {Controller, Get, HttpCode} from '@nestjs/common';
import {UsuarioService} from "./usuario.service";

@Controller()
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
    find(){
        return this.usuarioService.find({});
    }

    @Get("/:id")
    @HttpCode(200)
    findOneById(){
        return this.usuarioService.findOneById();
    }
}
