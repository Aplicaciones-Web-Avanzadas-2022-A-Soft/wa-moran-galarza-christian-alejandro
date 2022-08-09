import {TypeOrmModule} from "@nestjs/typeorm";
import {Module} from "@nestjs/common";
import {NotaService} from "./nota.service"
import {NotaEntity} from "./nota.entity"

@Module ({
    imports: [
        TypeOrmModule.forFeature(
            [NotaEntity],
            'default'
        )
    ],
    providers: [NotaService],
    exports: [],
})

export class NotaModule{
}
