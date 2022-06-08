interface LoginProperties{
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
    // const propiedadesImagen = {
    //     width: 200,
    //     height: 100,
    //     urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGcNLA-TryQn54W4tVNLr8E2n_ADvRF5oW4pbmTnMxF3S-YnB8zAV9GMNl5O8HoaS43d4&usqp=CAU'
    // };
    return (
        <>
            <h1>Login home</h1>
            <img src={props.propiedadesImagen.urlImagen}
                 width={props.propiedadesImagen.width}
                 height={props.propiedadesImagen.height}/>
        </>
    )
}

export default LoginHome