import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/hero';
import Pricing from '../components/pricing';
import Footer from '../components/footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor: Equalizer Landing Page</title>
        <meta
          name="description"
          content="Frontend Mentor: Equalizer Landing Page"
        />
      </Head>
      <main>
        <Hero />
        <Pricing />
      </main>
      <Footer />
    </>
  );
};

export default Home;
