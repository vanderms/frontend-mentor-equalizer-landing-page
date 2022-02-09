import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/hero';
import Pricing from '../components/pricing';
import Footer from '../components/footer';
import path from '../lib/path';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor: Equalizer Landing Page</title>
        <meta
          name="description"
          content="Frontend Mentor: Equalizer Landing Page"
        />
        {/* <!-- Site Name, Title, and Description to be displayed --> */}
        <meta
          property="og:site_name"
          content="Frontend Mentor | Equalizer Landing Page "
        />
        <meta property="og:title" content="Equalizer Landing Page" />
        <meta
          property="og:description"
          content="My solution to the challenge Equalizer Landing Page, by Frontend Mentor"
        />

        {/* <!-- Image to display -->  */}
        {/* <!-- Replace   «example.com/image01.jpg» with your own -->  */}
        <meta
          property="og:image"
          content={"https://vanderms.github.io/" + path('/preview.jpg')}
        />

        {/* <!-- No need to change anything here -->  */}
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />

        {/* <!-- Website to visit when clicked in fb or WhatsApp-->  */}
        <meta
          property="og:url"
          content={"https://vanderms.github.io/" + path('/')}
        ></meta>
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
