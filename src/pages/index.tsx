import Head from 'next/head';
import Nav from '../Components/nav/nav';
import Presentation from '../Components/Presentation';
import Skills from '../Components/Skills/Skills';
import Projets from '../Components/Projets/Projets';
import Contact from '@/Components/Contact/Contact';


export default function Index() {
  return (
    <main className='name'>
      <Head>
        <title>Web Developpeur - Hassan Cheikh Hussein</title>
        <meta
          name='description'
          content='Web Developpeur - Hassan Cheikh-Hussein - Compétences, Portfolio, Services'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Nav />
      </header>
      <section className='PresentationContainer'>


        <article className='PresentationText'>
          <Presentation />
        </article>
      </section>
      <Skills />
      <Projets />
      <Contact />
    </main>
  );
}