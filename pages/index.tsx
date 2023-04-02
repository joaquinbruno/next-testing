import { Inter } from 'next/font/google'
import Link from 'next/link'
import {MainLayout} from '../components/layouts/MainLayout'


const inter = Inter({ subsets: ['latin'] })


export default function HomePage() {
  return (
   <MainLayout>
      <h1>Home</h1>
        <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/index.tsx</code>
          </p>
          <>
            <Link href="/about" className={'code'}> About </Link>
          </>

        </div>
   </MainLayout>
  )
}
         
          
      


        
