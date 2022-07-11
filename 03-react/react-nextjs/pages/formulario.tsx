import Layout from "../components/Layout";
import {useState} from "react";
import {useForm} from "react-hook-form";

type FormularioEjemplo = {
    nombre: string;
}

export default function Formulario(){
    const [nombre, setNombre] = useState('Christian');

    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormularioEjemplo>(
        {
            defaultValues:{
                nombre: 'Chris'
            },
            mode: 'onTouched'
        }
    )

    const controlarSubmit = (eventoSubmit) => {
        eventoSubmit.preventDefault();
        console.log('Submit', eventoSubmit);
        console.log('nombre', nombre);
    }

    const controlarSubmitRHF = (data) => {
        console.log('data', data);
    }

    return(
        <>
            <Layout title="Formulario">
                <h1>Formulario con React Hook Form</h1>
                <form onSubmit={handleSubmit(controlarSubmitRHF)}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text"
                               className="form-control"
                               placeholder="EJ: Christian"
                               id="nombre"
                            {...register('nombre',{
                                required: {value: true, message: 'Requerido'},
                                maxLength: {value: 20, message: 'Longitud máxima 20'},
                                minLength: {value: 5, message: 'Longitud mínima 5'},
                                validate:{
                                    soloNumeros: (valorActual)=>{
                                        if(Number.isNaN(+valorActual)){
                                            return 'Ingrese solo números';
                                        }else{
                                            return true;
                                        }
                                    }
                                }
                            })}
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa tu nombre.
                        </div>
                        {errors.nombre &&
                            <div className="alert alert-warning" role="alert">
                                Errores: {errors.nombre.message}
                            </div>
                        }
                    </div>
                    <button type="submit"
                            disabled={!isValid}
                            className="btn btn-primary">
                        Submit
                    </button>
                </form>
                <br/>
                <h1>Formulario con React</h1>
                <form onSubmit={controlarSubmit}>
                    {/*<form onSubmit={controlarSubmit}>*/}
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text"
                               className="form-control"
                               onChange={(e) => setNombre(e.target.value)}
                               placeholder="EJ: Christian"
                               value = {nombre}
                               id="nombre"
                               aria-describedby="nombreHelp"/>
                        <div id="nombreHelp" className="form-text">
                            Ingresa tu nombre.
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Layout>
        </>
    )
}