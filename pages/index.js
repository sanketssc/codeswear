import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div >
      <Head>
        <title>CodesWear - Wear the Code</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/codeswearcircle.png" />
      </Head>
      <Navbar />
      <div>
        <Image src="/home.jpg" height={200} width={2599} alt= "" priority={false}/>
      </div>
      <Footer />
    </div>
  )
}
