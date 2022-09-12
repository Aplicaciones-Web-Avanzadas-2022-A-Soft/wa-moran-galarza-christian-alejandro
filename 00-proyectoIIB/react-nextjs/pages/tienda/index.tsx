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
        <Layout title={'Tienda de Canciones'} >
            <div class="container">
                <aside>
                    <div class="menu">
                        <a class="active" href="#"><span><img src="img/home.svg" alt=""></span>Inicio</a>
                        <a href="#"><span><img src="img/search.svg" alt=""></span>Buscar</a>
                        <a href="#"><span><img src="img/library.svg" alt=""></span>Tu biblioteca</a> <br>
                        <a href="#"><span><img src="img/add.svg" alt=""></span>Crear lista</a>
                        <a href="#"><span><img src="img/heart.svg" alt=""></span>Canciones que te gustan</a>
                    </div>
                </nav>
            </aside>
            <section>
                <header>
                    <div class="botones_prev_next">
                        <span class="btn_prev"><img src="img/prev.svg" alt=""></span>
                        <span class="btn_next"><img src="img/next.svg" alt=""></span>
                    </div>

                    <div class="suscribcion">
                        <div class="mejora_cuenta">
                            <button>MEJORAR TU CUENTA</button>
                        </div>
                        <div class="perfil">
                            <span class="circulo"><img src="img/user.svg" alt=""></span>
                            <span class="nombre">Usuario</span>
                            <span><img src="img/salir.svg" alt=""></span>
                        </div>
                    </div>
                </header>
                <div class="contenedor_degradado">
                    <div class="banner">
                        <div class="cancion">
                            <figure>
                                <img src="img/person_01.png" alt="">
                            </figure>
                        </div>
                        <div class="cancion">
                            <figure>
                                <img src="img/person_02.png" alt="">
                            </figure>
                        </div>
                        <div class="cancion">
                            <figure>
                                <img src="img/person_03.png" alt="">
                            </figure>
                        </div>
                        <div class="cancion">
                            <figure>
                                <img src="img/person_04.png" alt="">
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="contenedor_contenido">
                    <div class="titulos">
                        <h1>¡Buenos días!</h1>
                    </div>
                    <div class="generos">
                        <div class="cards">
                            <div class="card_imagen"><img src="img/person_01.png" alt=""></div>
                            <div class="card_text">
                                <h4>Autor primero</h4>
                                <img src="img/play.svg" alt="">
                            </div>
                        </div>
                        <div class="cards">
                            <div class="card_imagen"><img src="img/person_02.png" alt=""></div>
                            <div class="card_text">
                                <h4>Autor primero</h4>
                                <img src="img/play.svg" alt="">
                            </div>
                        </div>
                        <div class="cards">
                            <div class="card_imagen"><img src="img/person_03.png" alt=""></div>
                            <div class="card_text">
                                <h4>Autor primero</h4>
                                <img src="img/play.svg" alt="">
                            </div>
                        </div>
                        <div class="cards">
                            <div class="card_imagen"><img src="img/person_04.png" alt=""></div>
                            <div class="card_text">
                                <h4>Autor primero</h4>
                                <img src="img/play.svg" alt="">
                            </div>
                        </div>
                        <div class="cards">
                            <div class="card_imagen"><img src="img/person_01.png" alt=""></div>
                            <div class="card_text">
                                <h4>Autor primero</h4>
                                <img src="img/play.svg" alt="">
                            </div>
                        </div>
                        <div class="cards">
                            <div class="card_imagen"><img src="img/person_02.png" alt=""></div>
                            <div class="card_text">
                                <h4>Autor primero</h4>
                                <img src="img/play.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="titulos">
                        <h2>Programas para probar</h2>
                        <span>Podcast que pensamos que te van a enganchar</span>
                    </div>

                    <div class="podcast">
                        <div class="card_podcast">
                            <img src="img/person_01.png" alt="">
                                <h4>Titulo</h4>
                                <p>Podcast primero</p>
                        </div>
                        <div class="card_podcast">
                            <img src="img/person_02.png" alt="">
                                <h4>Titulo</h4>
                                <p>Podcast primero</p>
                        </div>
                        <div class="card_podcast">
                            <img src="img/person_03.png" alt="">
                                <h4>Titulo</h4>
                                <p>Podcast primero</p>
                        </div>
                        <div class="card_podcast">
                            <img src="img/person_04.png" alt="">
                                <h4>Titulo</h4>
                                <p>Podcast primero</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div class="controles">
                    <img src="img/prev_footer.svg" alt="">
                        <img src="img/play_footer.svg" alt="">
                            <img src="img/next_footer.svg" alt="">
                </div>
                <div class="progreso">
                    <span>0:00</span>
                    <div class="barra_progreso"></div>
                    <span>5:00</span>
                </div>
            </footer>

        </div>
        </Layout>
    )
}