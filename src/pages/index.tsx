import Head from 'next/head'
import { Inter } from 'next/font/google'
import Nav from '../Components/nav/nav'
import Presentation from '../Components/Presentation'
import Image from 'next/image'
import huss from '../images/huss.jpg'
import backgroundIMG from "../images/Background.png"
import Skills from '@/Components/Skills/Skills'
import Projets from '@/Components/Projets/Projets'




export default function Index()
{
  return (
    <main className='name'>
      <Head>
        <title>Web Developpeur - Hassan Cheikh Hussein</title>
        <meta name="description" content="Web Developpeur - Hassan Cheikh-Hussein - Compétences, Portfolio, Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <Nav />
      <section className='PresentationContainer'>
<Image
src={huss}
alt={"Hassan Cheikh Hussein"}
className='hussIMG'
/>
<Image
src={backgroundIMG}
alt={"background image"}
className='backgroundIMG'
/>

        <article className='PresentationText'>
      <Presentation />
      </article>
      </section>
      <Skills />
      <Projets />

    </main>
  )
}


