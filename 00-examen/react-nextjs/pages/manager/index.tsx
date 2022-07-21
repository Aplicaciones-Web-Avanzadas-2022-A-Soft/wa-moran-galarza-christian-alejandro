import Layout from "../../components/Layout";
import {useState, useEffect} from "react";
import {borrarManager, listarManagers} from "../../managerAPI";

export interface ManagerInterface{
    id?: number;
    nombre?: string;
    apellido?: string;
    fechaNacimiento?: string;
    disquera?: string;
    sueldo?: number;
    //artistas: Artista[];
}

//export interface Artista{
//    nombre?: string;
//}

export default function Managers(){
    const [arregloManagers, setArregloManagers] = useState([] as ManagerInterface[])
    useEffect(
        () => {
            consultarManagers();
        },
        []
    )

    const consultarManagers = async () => {
        const resultado = await listarManagers();
        const res = resultado.result as ManagerInterface[];
        setArregloManagers([...res])
    }

    const eliminarManager = (e: any, id: number) => {
        const request = borrarManager(id)
    }

    return(
        <Layout title={'CRUD Manager'} >
            <div className="seccion">
                <a href="/manager/nueva">
                    <input type="button"
                           className="btn btn-primary botonDerecha"
                           value="CREAR MANAGER"/>
                </a>
                <h1>CRUD Manager</h1>
                <table className="tabla">
                    {arregloManagers.map(
                        (manager) => {
                            return (<tr className="fila"  key={manager.id}>
                                    <td className="columna">Nombre: {manager.nombre}</td>
                                    <td className="columna">Apellido: {manager.apellido}</td>
                                    {/*<td>Dirección: {manager.artistas}</td>*/}
                                    <td className="columna">Fecha de Nacimiento: {manager.fechaNacimiento}</td>
                                    <td className="columna">Disquera: {manager.disquera}</td>
                                    <td className="columna">Sueldo: {manager.sueldo}</td>
                                    <td className="columna">
                                        <a href="/manager/managerId">
                                            <input type="button" className="btn btn-primary" value="Artistas"/>
                                        </a>
                                    </td>
                                    <td className="columna">
                                        <button className="btn btn-primary" onClick={(e:any) => eliminarManager(e,manager.id)}>Eliminar</button>
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
                    {/*<tr className="fila" key={1}>*/}
                    {/*    <td className="columna">Nombre: {"Christian"}</td>*/}
                    {/*    <td className="columna">Apellido: {"Morán"}</td>*/}
                    {/*    /!*<td>Dirección: {manager.artistas}</td>*!/*/}
                    {/*    /!*<td>Fecha de Nacimiento: {manager.fechaNacimiento}</td>*!/*/}
                    {/*    /!*<td>Disquera: {manager.disquera}</td>*!/*/}
                    {/*    /!*<td>Sueldo: {manager.sueldo}</td>*!/*/}
                    {/*    /!*<td><a href={''}>Artistas</a></td>*!/*/}
                    {/*    /!*<td><a href={''}>Eliminar</a></td>*!/*/}
                    {/*    <td className="columna">*/}
                    {/*        <a href="/manager/[managerId]]">*/}
                    {/*            <input type="button" className="btn btn-primary" value="Artistas"/>*/}
                    {/*        </a>*/}
                    {/*    </td>*/}
                    {/*    <td className="columna">*/}
                    {/*        <button className="btn btn-primary">Eliminar</button>*/}
                    {/*    </td>*/}
                    {/*    <td className="columna">*/}
                    {/*        <a href="/manager/editar">*/}
                    {/*            <input type="button" className="btn btn-primary" value="Editar"/>*/}
                    {/*        </a>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                </table>
            </div>
        </Layout>
    )
}