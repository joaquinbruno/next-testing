import { Inter } from 'next/font/google'
import Link from 'next/link'
import {MainLayout} from '../components/layouts/MainLayout'
import DarkLayout from '../components/layouts/DarkLayout'
const inter = Inter({ subsets: ['latin'] })
import type {ReactElement} from 'react'

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
        <div className={'description'}>
          
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/About.tsx</code>
          </p>
          <>
            <Link href="/" className={'code'}> Home </Link>
          </>

        </div>
    </>
  )
}



AboutPage.getLayout = function getLayout (page: ReactElement) {
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}