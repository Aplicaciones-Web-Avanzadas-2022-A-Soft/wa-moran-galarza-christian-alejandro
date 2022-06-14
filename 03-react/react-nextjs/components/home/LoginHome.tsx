import styles from './login-home.module.css'
import styled from '@emotion/styled';

interface LoginProperties{
    color: string;
    backgroundColor: string;
    borderBottom: string;
    propiedadesImagen:{
        width: number,
        height: number,
        urlImagen: string;
    };
}

type LoginPropertiesType = {
    propiedadesImagen:{
        width: number,
        height: number,
        urlImagen: string;
    };
}

const Titulo = styled.h1`
    font-size: 2rem;
    text-transform: uppercase;
    color: orange;
`
const TituloRojo = styled.h1`
  font-size: 1.5rem;
  text-transform: capitalize;
  color: red;
`

const Subtitulo = styled.h2`
    font-size: 1.5rem;
    text-transform: capitalize;
    color: green;
`

const LoginHome = (props: LoginProperties) => {
    const misEstilos = {
        color: props.color,
        backgroundColor: props.backgroundColor,
        borderBottom: '5px solid brown',
        };
        return (
        <>
            <Titulo>Hola Título</Titulo>
            <TituloRojo>Hola Título Rojo</TituloRojo>
            <Subtitulo>Hola subtítulo</Subtitulo>
            <h1 style={misEstilos}>Login home</h1>
            <h2 className={styles.azul}>AZUL</h2>
            <h2 className={styles.rojo}>ROJO</h2>
            <img src={props.propiedadesImagen.urlImagen}
                 width={props.propiedadesImagen.width}
                 height={props.propiedadesImagen.height}/>
        </>
    )
}

export default LoginHome