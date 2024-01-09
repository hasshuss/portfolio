import Image from 'next/image';
import monitor from '../../images/logohch.webp'
import background from "../../images/backgroundpre1.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const Presentation: React.FC = () => {
  



  return (
    <>

    <section className='PresentationContainer'>
      <Image 
      src={background}
      alt={"image d'arriere plan représentant un IDE de développement web en ReactJS"}
      className='backgroundIMG'
      priority={true}
      />
      <figure className='LogoContainer' id="logo">
      <Image 
         src={monitor}
         alt={'Logo Cheikh Hussein représentant un C et un H'}
         width={260}
         height={250}
         priority={true}
      />
      <figcaption>
    <h1 className="h1">
      Ibrahim Cheikh Hussein
    </h1>
    <h2 className="h2">
    Avocat en droit du travail
    </h2>
    <div className='FaIcones'>
      <a href='https://www.linkedin.com/in/ibrahim-cheikh-hussein-199773169/?originalSubdomain=fr' target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} size="xl" className='icone'/>
    <span className='hide'>Lien Linkedin</span>
    </a>

    </div>
    </figcaption>
    </figure>
    </section>
    </>
  );
}

export default Presentation;