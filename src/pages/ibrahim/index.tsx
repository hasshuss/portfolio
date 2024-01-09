import Head from 'next/head';
import Nav from '../../Components/nav/nav';
import PresentationIbrahim from "../../Components/Presentation/PresentationIbrahim"
import ContactIbrahim from '@/Components/Contact/ContactIbrahim';
import Footer from '@/Components/Footer/Footer';
import Spitch from '@/Components/Spitch/Spitch';


export default function Ibrahim() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Ibrahim Cheikh Hussein",
    "familyName":"Cheikh Hussein",
    "givenName":"Ibrahim",
    "url": "https://www.cheikh-hussein.com/ibrahim/",
    "image": "https://www.cheikh-hussein.com/data/Ibrahim-Cheikh-Hussein.png"
  };
  return (
    <>
      <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <title>Ibrahim Cheikh Hussein - Avocat - Paris</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="canonical" href="https://www.cheikh-hussein.com/ibrahim/" />
        <meta name="description" content="Ibrahim Cheikh-Hussein - Avocat en droit du travail - Paris" />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://www.cheikh-hussein.com/ibrahim/" />
        <meta property="og:image" content="https://www.cheikh-hussein.com/data/Ibrahim-Cheikh-Hussein.png" />
        <meta property="og:description" content="Ibrahim Cheikh-Hussein - Avocat en droit du travail" />
        <meta property="profile:first_name" content="Ibrahim" />
        <meta property="profile:last_name" content="Cheikh Hussein" />
        <meta property="profile:gender" content="male" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Ibrahim Cheikh Hussein - Avocat droit du travail - Paris" />
        <meta name="twitter:description" content="Ibrahim Cheikh Hussein - Avocat droit du travail - Paris" />
        <meta name="twitter:image" content="https://www.cheikh-hussein.com/data/Ibrahim-Cheikh-Hussein.png" />
      </Head>
      <Nav />
      <main className='name'>
        <PresentationIbrahim />
        <Spitch />
        <ContactIbrahim />
      </main>
      <Footer />

    </>
  );
}