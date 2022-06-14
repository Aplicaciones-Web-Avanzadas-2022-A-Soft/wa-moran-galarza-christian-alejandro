import Layout from '../components/Layout'
import styled from '@emotion/styled'
import CryptoFormulario from "../components/cripto/CryptoFormulario";

const ImagenPrincipal = styled.img`
  width: 300px;
  height: 200px;
`

const Cripto = () => (
  <Layout title="Cripto | Next.js + TypeScript Example">
    <ImagenPrincipal
        src={'https://www.prensalibre.com/wp-content/uploads/2021/10/criptomonedas-1.jpg?quality=52'}
        alt={'Texto Alternativo Criptomoneda'}>
    </ImagenPrincipal>
    <h1>Hola desde Cripto</h1>
    <CryptoFormulario></CryptoFormulario>
  </Layout>
)

export default Cripto