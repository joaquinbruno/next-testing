import { Inter } from 'next/font/google'
import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout'


const inter = Inter({ subsets: ['latin'] })

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
        <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/Contact.tsx</code>
          </p>
          
          <>
            <Link href="/" className={'code'}> Home </Link>
          </>
          </div>
    </MainLayout>
  )
}