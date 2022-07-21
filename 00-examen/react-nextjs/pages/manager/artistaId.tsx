import Layout from "../../components/Layout";

export default function Artista(){
    return(
        <>
            <Layout title="Formulario Editar Artista">
                <form className="seccion1">
                    <h1 className="titulo">Formulario Editar Artista</h1>
                    <div className="mb-3 campo">
                        <label htmlFor="id" className="form-label">ID</label>
                        <input type="text"
                               className="form-control"
                               placeholder="EJ: 1"
                               id="id"
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa el ID.
                        </div>
                    </div>
                    <div className="mb-3 campo">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text"
                               className="form-control"
                               placeholder="EJ: Christian"
                               id="nombre"
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa el nombre.
                        </div>
                    </div>
                    <div className="mb-3 campo">
                        <label htmlFor="apellido" className="form-label">Apellido</label>
                        <input type="text"
                               className="form-control"
                               placeholder="EJ: Morán"
                               id="apellido"
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa el apellido.
                        </div>
                    </div>
                    <div className="mb-3 campo">
                        <label htmlFor="direccion" className="form-label">Dirección</label>
                        <input type="text"
                               className="form-control"
                               placeholder="EJ: Conocoto"
                               id="direccion"
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa la dirección.
                        </div>
                    </div>
                    <div className="mb-3 campo">
                        <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
                        <input type="text"
                               className="form-control"
                               placeholder="EJ: 19/02/1998"
                               id="fechaNacimiento"
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa la fecha de nacimiento.
                        </div>
                    </div>
                    <div className="mb-3 campo">
                        <label htmlFor="fechaDebut" className="form-label">Fecha Debut</label>
                        <input type="text"
                               className="form-control"
                               placeholder="EJ: 19/04/2021"
                               id="fechaDebut"
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa la fecha de debut.
                        </div>
                    </div>
                    <div className="mb-3">
                        <a href="/manager">
                            <input type="button"
                                   className="btn btn-primary botonIzquierda"
                                   value="CANCELAR"/>
                        </a>
                        <a href="/manager">
                            <input type="button"
                                   className="btn btn-primary botonDerecha"
                                   value="CREAR"/>
                        </a>
                    </div>
                </form>
            </Layout>
        </>
    )
}