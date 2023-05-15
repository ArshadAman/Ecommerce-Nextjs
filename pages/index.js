import Cards from '@/components/Cards'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Code-Kapde - Code Karo, Code Pehno</title>
      <meta name='description' content='“Get the latest and most stylish clothes and accessories for developers at CodeKapde. From t-shirts and hoodies to mugs and more, we have everything you need to show off your love for coding. Shop now and get free shipping on orders over ₹999!'></meta>
    </Head>
    <main>
      <Image src='/b.jpg' width={1980} height={720} className='w-full h-[60vh]' ></Image>
      <Cards/>
    </main>
    </>
  )
}
