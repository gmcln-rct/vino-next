import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
    <h1>Homepage</h1>
      {/* <Head>
        <title>Wineography Next</title>
        <meta name="description" content="Winopgraphy by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main className={styles.main}>
        <p>Main Section</p>
      </main>
    </>
  )
}
