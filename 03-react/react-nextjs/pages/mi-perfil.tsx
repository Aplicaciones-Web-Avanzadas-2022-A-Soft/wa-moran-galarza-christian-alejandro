import Layout from "../components/Layout";
import LoginHome from "../components/home/LoginHome";
import BienvenidaHome from "../components/home/BienvenidaHome";

function mostrarLogin(){
    return (
        <>
            <h1>Login</h1>
            <p>Campos Login</p>
        </>
    )
}

function mostrarMensajeBienvenida(){
    return (
        <>
            <h1>Bienvenido</h1>
            <p>Registrate por favor</p>
        </>
    )
}

const MiPerfilPage = () =>{

    const arreglo = [1, 2, 3, 4, 5, 6, 7, 8];

    const listaNumeros = arreglo
        .filter((a)=> a<5 )
        .map((a)=>{
            return(
                <li>
                    {a}
                </li>
            )
        })

    const estaLogeado = false;

    const desplegarMensaje = ()=>{
        if(!estaLogeado){
            return LoginHome({
                propiedadesImagen:{
                    width: 200,
                    height: 100,
                    urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGcNLA-TryQn54W4tVNLr8E2n_ADvRF5oW4pbmTnMxF3S-YnB8zAV9GMNl5O8HoaS43d4&usqp=CAU'
                }
            })
        }else{
            return BienvenidaHome()
        }
    }

    return(
        <Layout>
            <p>Hello {'Chris'.toUpperCase()}</p>
            <ul>
                    {listaNumeros}
            </ul>
            {/*<p>{estaLogeado ? 'Bienvenido' : 'Ingresa a login'}</p>*/}
            {/*<p>{!estaLogeado ? mostrarLogin() : mostrarMensajeBienvenida()}</p>*/}
            <p>{desplegarMensaje()}</p>

            <ul>
                {(arreglo.length > 0) &&
                    <>
                        <li>Hola amigos</li>
                    </>
                }
            </ul>
            <ul>
                {(arreglo.length > 10 ) &&
                    listaNumeros
                }
            </ul>

            <div>{!estaLogeado?
                <LoginHome propiedadesImagen={{
                    width: 200,
                    height: 100,
                    urlImagen: 'data:image/jpeg;base64,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'
                }}></LoginHome> :
                <BienvenidaHome></BienvenidaHome>
            }</div>
        </Layout>
    )
}

export default MiPerfilPage