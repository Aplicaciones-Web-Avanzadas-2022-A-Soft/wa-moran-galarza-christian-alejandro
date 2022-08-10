import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";

@Entity({name: 'user_nota'})
export class NotaEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'user_nota_primer_bimestre',
        type: 'integer',
        nullable: false,
    })
    notaPrimerBimestre: number;

    @Column({
        name: 'user_nota_segundo_bimestre',
        type: 'integer',
        nullable: false,
    })
    notaSegundoBimestre: number;

    @Column({
        name: 'user_nota_examen_final',
        type: 'integer',
        nullable: false,
    })
    notaExamenFinal: number;

    @Column({
        name: 'user_comentario',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    comentario: string;

    @ManyToOne(
        () => UsuarioEntity,
        (user) => user.notas)
    usuario: UsuarioEntity;
}