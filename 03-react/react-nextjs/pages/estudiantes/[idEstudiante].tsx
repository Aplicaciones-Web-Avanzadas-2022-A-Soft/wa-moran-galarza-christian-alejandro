import Layout from "../../components/Layout";
import {GetStaticPaths, GetStaticProps} from "next";
import {sampleUserData} from "../../utils/sample-data";

export default function IdEstudiante(){
    return(
        <Layout title={'Id estudiante'}>
            Hola id estudiante
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
        const id = params?.idEstudiante
        const estudiante = {id: id, nombre: 'Chris'}
        return { props: { estudiante } }
    } catch (err: any) {
        return { props: { errors: err.message } }
    }
}