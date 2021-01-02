import Head from 'next/head'
import { getLayout } from '../components/DefaultLayout'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Test Page</title>
      </Head>
        Test Page
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  )
}

Home.getLayout = getLayout
export default Home