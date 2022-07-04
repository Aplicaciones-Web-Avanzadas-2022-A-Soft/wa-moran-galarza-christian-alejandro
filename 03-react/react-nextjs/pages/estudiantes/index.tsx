import Layout from "../../components/Layout";
import {useEffect, useState} from "react";

export interface EstudianteInterface{
    id: number;
    nombre:string;
}

export default function Estudiantes(){
    const [arregloEstudiantes, setarregloEstudiantes] = useState([] as EstudianteInterface[])
    useEffect(
        () => {
            const arregloConsultado = [
                {id:1, nombre:'Christian'},
                {id:2, nombre:'Alejandro'},
            ] as EstudianteInterface[];
            setarregloEstudiantes([...arregloEstudiantes,...arregloConsultado])
        },
        []
    )
    return(
        <Layout title={'Estudiantes'}>
            <ul>
                {arregloEstudiantes.map(
                    (estudiante)=>{
                        return (<li key= {estudiante.id}> {estudiante.nombre} </li>)
                    }
                )}
            </ul>
        </Layout>
    )
}