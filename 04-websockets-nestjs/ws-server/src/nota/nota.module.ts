import {TypeOrmModule} from "@nestjs/typeorm";
import {Module} from "@nestjs/common";
import {NotaService} from "./nota.service"
import {NotaEntity} from "./nota.entity"
import {NotaController} from "./nota.controller";

@Module ({
    imports: [
        TypeOrmModule.forFeature(
            [NotaEntity],
            'default'
        )
    ],
    providers: [NotaService],
    exports: [NotaService],
    controllers:[
        NotaController
    ]
})

export class NotaModule{
}
