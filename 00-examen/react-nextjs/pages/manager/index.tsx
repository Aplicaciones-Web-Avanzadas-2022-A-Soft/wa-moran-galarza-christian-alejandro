import Layout from "../../components/Layout";
import {useState, useEffect} from "react";
import {TodosHttp} from "../../functions/http/todos.http";

export interface ManagerInterface{
    id?: number;
    nombre?: string;
    cedula?: string;
    artistas?: Artista[];
    // fechaNacimiento?: string;
    // disquera?: string;
    // sueldo?: number;
}

export interface Artista{
    nombre?: string;
}

export default function Managers(){
    const [arregloManagers, setArregloManagers] = useState([] as ManagerInterface[])
    useEffect(
        () => {
            // Consulta API
            consultarTodos();
        },
        []
    )

    const consultarTodos = async () => {
        const resultado = await TodosHttp();
        const res = resultado.result as ManagerInterface[];
        setArregloManagers([...res])
    }

    return(
        <Layout title={'CRUD Manager'}>
            <h1>CRUD Manager</h1>
            <form action='/manager/nueva'>
                <input type="submit" className="btn btn-primary" value="CREAR" />
            </form>
            <table>
                {arregloManagers.map(
                    (manager) => {
                        return (<tr key={manager.id}>
                            <td>Nombre: {manager.nombre}</td>
                            <td>Apellido: {manager.cedula}</td>
                            {/*<td>Dirección: {manager.direccion}</td>*/}
                            {/*<td>Fecha de Nacimiento: {manager.fechaNacimiento}</td>*/}
                            {/*<td>Disquera: {manager.disquera}</td>*/}
                            {/*<td>Sueldo: {manager.sueldo}</td>*/}
                            <td><a href={''}>Artistas</a></td>
                            <td><a href={''}>Eliminar</a></td>
                            <td><a href={''}>Editar</a></td>
                        </tr>)
                    }
                )}
                <tr>
                    <td>Nombre: Christian</td>
                    <td>Apellido: Morán</td>
                    <td>Dirección: Conocoto</td>
                    <td>Fecha de Nacimiento: 19/02/1998</td>
                    <td>Disquera: Columbia</td>
                    <td>Sueldo: 4000</td>
                    <td><a href={''}>Artistas</a></td>
                    <td><a href={''}>Eliminar</a></td>
                    <td><a href={''}>Editar</a></td>
                </tr>
            </table>
        </Layout>
    )
}