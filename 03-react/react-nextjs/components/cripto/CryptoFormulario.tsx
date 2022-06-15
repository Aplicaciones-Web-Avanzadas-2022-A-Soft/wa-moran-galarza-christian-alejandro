import {MONEDAS} from "../constantes/monedas"

export const CryptoFormulario = () => {
    const generarSelecMonedas = () => {
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
                    {generarSelecMonedas()}
                </select>
            </form>
        </>
    )
}

export default CryptoFormulario