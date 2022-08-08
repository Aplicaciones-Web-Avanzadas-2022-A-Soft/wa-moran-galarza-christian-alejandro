import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EventosModule} from "./eventos/eventos.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario/usuario.entity";

// Modulo principal
@Module({
  imports: [
      EventosModule,
      TypeOrmModule.forRoot({
        name: 'default', // nombre de la conexion
        type: 'sqlite',
        database: './bdd/bdd.sqlite',
        entities: [UsuarioEntity], // entidades del aplicativo completo
        synchronize: true,
        dropSchema: true,
      }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
