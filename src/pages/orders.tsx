import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Goji FE test</title>
        <meta name="description" content="Goji at home test submission" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-6 flex justify-center items-center h-screen">
        <div className="max-w-xl">Table should be displayed here and call /api/order with a GET request to load the data</div>
      </main>
    </>
  )
}
