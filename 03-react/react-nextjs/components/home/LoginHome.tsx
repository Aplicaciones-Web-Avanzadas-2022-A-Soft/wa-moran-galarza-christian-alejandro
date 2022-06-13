import styles from './login-home.module.css'

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

const LoginHome = (props: LoginProperties) => {
    const misEstilos = {
        color: props.color,
        backgroundColor: props.backgroundColor,
        borderBottom: '5px solid brown',
        };
        return (
        <>
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