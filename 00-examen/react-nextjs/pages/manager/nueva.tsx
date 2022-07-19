import Layout from "../../components/Layout";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useForm, Controller} from "react-hook-form";

export default function Nueva(){
    return (
        <>
            <Layout title="Formulario Crear Manager">
                <form>
                    <div className="mb-3">
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
                    <div className="mb-3">
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
                    <div className="mb-3">
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
                    <div className="mb-3">
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
                    <div className="mb-3">
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
                    <div className="mb-3">
                        <label htmlFor="disquera" className="form-label">Disquera</label>
                        <input type="text"
                               className="form-control"
                               placeholder="EJ: Sony Music"
                               id="disquera"
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa la disquera.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="sueldo" className="form-label">Sueldo</label>
                        <input type="text"
                               className="form-control"
                               placeholder="EJ: 4000"
                               id="sueldo"
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa el sueldo.
                        </div>
                    </div>
                    <div className="mb-3">
                        <button type="submit"
                            // disabled={!isValid}
                                className="btn btn-primary align-self-center">
                            CANCELAR
                        </button>
                        <button type="submit"
                            // disabled={!isValid}
                                className="btn btn-primary align-self-center">
                            CREAR
                        </button>
                    </div>
                </form>
            </Layout>
        </>
    )
}