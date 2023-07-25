import Head from 'next/head'
import { Inter } from 'next/font/google'
import Nav from '../Components/nav/nav'
import Presentation from '../Components/Presentation'


export default function Index()
{
  return (
    <main>
      <Head>
        <title>Portfolio Web Developper</title>
        <meta name="description" content="Web Developpeur" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../public/favicon.ico" />
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


