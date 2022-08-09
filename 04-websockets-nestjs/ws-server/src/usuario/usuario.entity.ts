import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {NotaEntity} from "../nota/nota.entity";

@Entity({name: 'user_usuario'})
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'nombre',
        type: 'varchar',
        length: 60,
        nullable: false,
    })
    nombre: string;

    @Column({
        name: 'apellido',
        type: 'varchar',
        length: 60,
        nullable: false,
    })
    apellido: string;

    @Column({
        name: 'user_rol',
        type: 'varchar',
        length: 1,
        default: 'U',
        nullable: false,
        comment: 'U=usuario: A=administrador'
    })
    rol: string;

    @OneToMany(
        () => NotaEntity,
        (nota) => nota.usuario)
    notas: NotaEntity[]
}
