import {MONEDAS} from "../constantes/monedas"
import useSelectMoneda from "../hooks/useSelectMoneda";

export const CryptoFormulario = () => {
    const[SelectMonedaComponente] = useSelectMoneda()
    const generarSelectMonedas = () => {
        return MONEDAS.map((moneda) =>(
                <option id={moneda.id} value={moneda.id}> {moneda.nombre}</option>
            )
        )
    }

    return(
        <>
            <form>
                <label className="form-label" htmlFor="moneda">Moneda </label>
                <select className="form-select" name="moneda" id="moneda">
                    <option value="">Seleccione opción</option>
                    {generarSelectMonedas()}
                </select>
                <SelectMonedaComponente/>
            </form>
        </>
    )
}

export default CryptoFormulario