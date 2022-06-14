export const CryptoFormulario = () => {
    return(
        <>
            <form>
                <label className="form-label" htmlFor="moneda">Moneda </label>
                <select className="form-select" name="moneda" id="moneda">
                    <option value="">Seleccione opción</option>
                </select>
            </form>
        </>
    )
}

export default CryptoFormulario