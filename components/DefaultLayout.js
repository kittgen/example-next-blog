import { Footer } from "./Footer"
import { Header } from "./Header"
import Head from 'next/head'

const DefaultLayout = ({ children }) => (
  <>
    <Head>
      <title>Next Example Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col min-h-screen">

      <Header></Header>
      <main className="flex-grow container max-w-6xl mx-auto">{children}</main>
      <Footer></Footer>
    </div>
  </>
)

export const getLayout = page => <DefaultLayout>{page}</DefaultLayout>

export default DefaultLayout