import type { NextPage } from 'next';
import Head from 'next/head';
import path from '../lib/path';
import Hero from '../components/hero';
import Pricing from '../components/pricing';


const Home: NextPage = () => {
  return (
   <>
       <Head>
        <title>Frontend Mentor: Equalizer Landing Page</title>
        <meta name="description" content="Frontend Mentor: Equalizer Landing Page" />       
      </Head>
      <main>       
        <Hero/>
        <Pricing/>
      </main>
       
     
   </>  
  )
}

export default Home
