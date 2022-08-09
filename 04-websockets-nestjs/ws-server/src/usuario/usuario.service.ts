import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {Repository} from "typeorm";
import {FindManyOptions} from "typeorm/find-options/FindManyOptions";

@Injectable()
export class UsuarioService{
    constructor(
        @InjectRepository(UsuarioEntity,'default')
        public usuarioRepository: Repository<UsuarioEntity>
    ){
    }

    find(opciones: FindManyOptions<UsuarioEntity>){
        return this.usuarioRepository.find(opciones)
    }
}