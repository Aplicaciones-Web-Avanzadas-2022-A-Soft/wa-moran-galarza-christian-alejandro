import Layout from "../../components/Layout";
import {GetStaticPaths, GetStaticProps} from "next";
import {sampleUserData} from "../../utils/sample-data";
import {TodosHttp} from "../../functions/http/todos.http";
import {EstudianteInterface} from "./index";

export default function IdEstudiante( props: {estudiante: EstudianteInterface}){
    return(
        <Layout title={'Id estudiante'}>
            Hola { props.estudiante.title}
        </Layout>
    )
}

// Definir las rutas permitidas
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        {
            params: { idEstudiante: '1' },
        },
        {
            params: { idEstudiante: '2' },
        }
    ];
    return { paths, fallback: false }
}

// Código para cargar información en el servidor y enviar al cliente.
export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        // fetch
        const id = params?.idEstudiante
        const resultado = await TodosHttp(id as string)
        return { props: { estudiante: resultado } }
    } catch (err: any) {
        return { props: { errors: err.message } }
    }
}