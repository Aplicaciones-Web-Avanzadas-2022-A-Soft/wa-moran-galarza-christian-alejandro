import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Examen">
    <p>
      <Link href="/manager">
        <a>Tema: Manager - Artista</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
