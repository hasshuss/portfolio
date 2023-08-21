import Head from 'next/head';
import Nav from '../Components/nav/nav';
import Presentation from '../Components/Presentation/Presentation';
import Skills from '../Components/Skills/Skills';
import Projets from '../Components/Projets/Projets';
import Contact from '@/Components/Contact/Contact';
import Footer from '@/Components/Footer/Footer';




export default function Index() {
  return (
    <>
    <Head>
    <title>Web Developpeur - Hassan Cheikh Hussein</title>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
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