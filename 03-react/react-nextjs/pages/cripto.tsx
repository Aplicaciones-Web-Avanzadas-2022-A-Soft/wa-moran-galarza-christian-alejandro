import Layout from '../components/Layout'
import styled from '@emotion/styled'
import CryptoFormulario from "../components/cripto/CryptoFormulario";

const ImagenPrincipal = styled.img`
  width: 300px;
  height: 200px;
`

const Cripto = () => (
  <Layout title="Cripto | Next.js + TypeScript Example">
    <div className="text-center">
        <h1>Cripto Exchange Calculator</h1>
        <ImagenPrincipal
            className="rounded"
            src={'https://www.prensalibre.com/wp-content/uploads/2021/10/criptomonedas-1.jpg?quality=52'}
            alt={'Texto Alternativo Criptomoneda'}>
        </ImagenPrincipal>
    </div>
    <h2>Seleccion</h2>
    <p>Selecciona tu moneda y criptomoneda</p>
    <CryptoFormulario></CryptoFormulario>
  </Layout>
)

export default Cripto