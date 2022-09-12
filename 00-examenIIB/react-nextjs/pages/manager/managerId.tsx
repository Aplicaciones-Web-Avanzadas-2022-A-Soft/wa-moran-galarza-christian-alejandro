import Layout from "../../components/Layout";
import {useEffect, useState} from "react";
import {borrarArtista, listarArtista} from "../../artistaAPI";

export interface ArtistaInterface{
    id?: number;
    nombre?: string;
    apellido?: string;
    fechaNacimiento?: string;
    fechaDebut?: string;
}

export default function ManagerId(props: {artista: ArtistaInterface}){
    const [arregloArtistas, setArregloArtistas] = useState([] as ArtistaInterface[])
    useEffect(
        () => {
            consultarArtistas();
        },
        []
    )

    const consultarArtistas = async () => {
        const resultado = await listarArtistas();
        const res = resultado.result as ArtistaInterface[];
        setArregloArtistas([...res])
    }

    const eliminarArtista = (e: any, id: number) => {
        const request = borrarArtista(id)
    }

    return(
        <Layout title={'Artistas'}>
            <div className="seccion">
                <a href="/manager/artista">
                    <input type="button"
                           className="btn btn-primary botonDerecha"
                           value="CREAR ARTISTA"/>
                </a>
                <h1>CRUD Artistas</h1>
                <table className="tabla">
                    {arregloArtistas.map(
                        (artista) => {
                            return (<tr className="fila"  key={artista.id}>
                                <td className="columna">Nombre: {artista.nombre}</td>
                                <td className="columna">Apellido: {artista.apellido}</td>
                                <td>Fecha de Nacimiento: {artista.fechaNacimiento}</td>
                                <td>Fecha de Debut: {artista.fechaDebut}</td>
                                <input type="submit" value="Eliminar"/>
                                <td className="columna">
                                    <button className="btn btn-primary">Eliminar</button>
                                </td>
                                <td className="columna">
                                    <a href="/manager/editar">
                                        <input type="button" className="btn btn-primary" value="Editar"/>
                                    </a>
                                </td>
                            </tr>
                        )
                    }
                )}
                </table>
            </div>
        </Layout>
    )
}