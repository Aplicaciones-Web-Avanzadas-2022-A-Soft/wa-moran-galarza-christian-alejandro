import Layout from "../components/Layout";
import {useState} from "react";
import {useForm, Controller} from "react-hook-form";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {toast} from "react-hot-toast";
import {List,ListInput} from "konsta/react";
import AccesibilityIcon from "@mui/icons-material/Accessibility";

type FormularioEjemplo = {
    nombre: string;
    estadoCivil: string;
    tvShow: string;
}

export default function Formulario(){
    const [nombre, setNombre] = useState('Christian');

    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm<FormularioEjemplo>(
        {
            defaultValues:{
                nombre: 'Chris',
                estadoCivil: '',
                tvShow: '',
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
        toast('Good Job!',{
            icon: '🤬',
        });
        toast.success('Bien');
        toast.error('Mal');
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
                    <div className="mb-3">
                        <List >
                            <FormControl fullWidth>
                                <Controller
                                    control={control}
                                    rules={{ required: {value: true, message: 'TV Show requerido'}}}
                                    name="tvShow"
                                    render={({field: {onChange, value, onBlur,}}) => {
                                        return <ListInput
                                            label="TV Show"
                                            type="text"
                                            placeholder="Your favorite TV show"
                                            info="Type something to see clear button"
                                            media = {<AccesibilityIcon/>}
                                            onBlur={onBlur}
                                            value={value}
                                            onChange={onChange}
                                        />
                                    }}
                                />
                                {errors.tvShow &&
                                    <div className="alert alert-warning" role="alert">
                                        Tiene errores {errors.tvShow.message}
                                    </div>
                                }
                            </FormControl>
                        </List>
                    </div>
                    <div className="mb-3">
                        <FormControl fullWidth>
                            <InputLabel id="estadoCivilLabelId">Estado Civil</InputLabel>
                            <Controller
                                control={control}
                                rules = {{required: {value: true, message: 'Estado Civil Requerido'}}}
                                name="estadoCivil"
                                render={({ field: { onChange, value, onBlur} }) => {
                                    return <Select
                                        labelId="estadoCivilLabelId"
                                        id="estadoCivilId"
                                        onBlur={onBlur}
                                        value={value}
                                        label="Estado Civil"
                                        onChange={onChange}
                                    >
                                        <MenuItem value={'casado'}>Casado</MenuItem>
                                        <MenuItem value={'soltero'}>Soltero</MenuItem>
                                    </Select>
                                }}
                            />
                            {errors.estadoCivil &&
                                <div className="alert alert-warning" role="alert">
                                    Errores: {errors.estadoCivil.message}
                                </div>
                            }
                        </FormControl>
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