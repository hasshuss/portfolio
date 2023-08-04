import Head from 'next/head'
import { Inter } from 'next/font/google'
import Nav from '../Components/nav/nav'
import Presentation from '../Components/Presentation'


export default function Projects() {
  return (
    <main>
      <Head>
        <title>Projets Web developpeur</title>
        <meta name="description" content="Portfolio Web developpeur - Hassan Cheikh-Hussein" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <section className='PresentationContainer'>
        <article className='PresentationText'>
      <Presentation />
      </article>
      </section>
    </main>
  )
}