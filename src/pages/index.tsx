import Nav from '../Components/nav/nav';
import Presentation from '../Components/Presentation/Presentation';
import Skills from '../Components/Skills/Skills';
import Projets from '../Components/Projets/Projets';
import Contact from '@/Components/Contact/Contact';
import Footer from '@/Components/Footer/Footer';
import Head from 'next/head';

export default function Index() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hassan Cheikh Hussein",
    "familyName":"Cheikh Hussein",
    "givenName":"Hassan",
    "additionalName": "hassou",
    "url": "https://www.cheikh-hussein.com",
    "birthPlace": "Colombes",
    "image": "https://www.cheikh-hussein.com/data/Hassan%20Cheikh%20Hussein.jpg"
  };

  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <title>Hassan Cheikh Hussein - Développeur Web - Bois-Colombes - ile de France</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="canonical" href="https://www.cheikh-hussein.com" />
        <meta name="description" content="Hassan Cheikh-Hussein - Web Développeur - Portfolio, Compétences, Contact - Bois-Colombes - Ile de France" />
        <meta property="og:type" content="website" />
        <meta property="profile:first_name" content="Hassan" />
        <meta property="profile:last_name" content="Cheikh Hussein" />
        <meta property="profile:username" content="hassou" />
        <meta property="profile:gender" content="male" />
        <meta property="og:url" content="https://www.cheikh-hussein.com" />
        <meta property="og:image" content="https://www.cheikh-hussein.com/data/Hassan%20Cheikh%20Hussein.jpg" />
        <meta property="og:description" content="Hassan Cheikh Hussein - Développeur Web - Bois-Colombes" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@hassoupoker" />
        <meta name="twitter:title" content="Hassan Cheikh-Hussein - Développeur Web - Bois-Colombes" />
        <meta name="twitter:description" content="Hassan Cheikh-Hussein - Développeur Web React/NextJS - Bois-Colombes - Ile de France" />
        <meta name="twitter:image" content="https://www.cheikh-hussein.com/data/Hassan%20Cheikh%20Hussein.jpg" />
      </Head>
      <Nav />
      <main className='name'>
        <Presentation />
        <Skills />
        <Projets />
        <Contact />
      </main>
      <Footer />
    </>
  );
}