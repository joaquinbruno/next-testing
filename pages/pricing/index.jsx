import MainLayout from '../../components/layouts/MainLayout'
import { Inter } from 'next/font/google'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })


export default function HomePage() {
  return (
    <MainLayout>
      <h1>Pricing</h1>
        <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/Pricing.jsx</code>
          </p>
          <>
            <Link href="/about" className={'code'}> About </Link>
          </>
        </div>
    </MainLayout>
  )
}
         
          
      

