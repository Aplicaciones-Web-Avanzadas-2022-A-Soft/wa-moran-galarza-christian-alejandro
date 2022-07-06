import Layout from "../../components/Layout";
import {useEffect, useState} from "react";
import {TodosHttp} from "../../functions/http/todos.http";

export interface EstudianteInterface{
    id: number;
    nombre:string;
    userId?: number;
    title?: string;
    completed?: boolean;
}

export default function Estudiantes(){
    const [arregloEstudiantes, setarregloEstudiantes] = useState([] as EstudianteInterface[])
    useEffect(
        () => {
            // Consulta API
            consultarTodos();
        },
        []
    )

    const consultarTodos = async () => {
        const resultado = await TodosHttp();
        setarregloEstudiantes([...arregloEstudiantes,...resultado])
    }

    return(
        <Layout title={'Estudiantes'}>
            <ul>
                {arregloEstudiantes.map(
                    (estudiante)=>{
                        return (<li key= {estudiante.id}>
                            <a href={'/estudiantes/' + estudiante.id}>
                                {estudiante.id} - {estudiante.title}
                            </a>
                        </li>)
                    }
                )}
            </ul>
        </Layout>
    )
}