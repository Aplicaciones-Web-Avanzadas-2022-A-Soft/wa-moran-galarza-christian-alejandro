import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Examen">
    <p>
      <Link href="/tienda">
        <a>Tema: Tienda de Canciones</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
