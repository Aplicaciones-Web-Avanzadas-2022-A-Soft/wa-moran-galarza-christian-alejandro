import {useState} from "react";

const useSelectMoneda = () =>{
    // Usamos Hooks React (userState)
    // const [state, setState] = useState('VALOR')
    const [valorEjemplo, setValorEjemplo] = useState('Christian Moran')
    const SelectMonedas = () => (
        <>
            <label className="form-label" htmlFor="moneda">Moneda </label>
            <select className="form-select" name="moneda" id="moneda">
                <option value="">Seleccione opción</option>
            </select>
            <label className="form-label" htmlFor="moneda">Moneda </label>
            <label className="form-label" htmlFor="ejemplo">Ejemplo </label>
            <p>El valor es: {valorEjemplo}</p>
            <input className="form-control"
                   value={valorEjemplo}
                   id="ejemplo"
                   onChange={(e)=>{
                       e.preventDefault();
                       setValorEjemplo(e.target.value)
                   }}
                   type="text"/>
            <button onClick={
                (event)=>{
                    event.preventDefault();
                    setValorEjemplo('Christian '+new Date().getTime());
                }
            }
            >Cambiar ejemplo</button>
        </>
    )
    return [SelectMonedas]
}
export default useSelectMoneda