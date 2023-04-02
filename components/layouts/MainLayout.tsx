import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Navbar from '../Navbar'
import { FC, PropsWithChildren } from 'react'


export const MainLayout: FC<PropsWithChildren>  = ({children}) => {
  return (
    <div>
        <>
      <Head>
        <title>Home - Joaco</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={styles.main}>
       {children}
      </main>
    </>
    </div>
  )
}

export default MainLayout