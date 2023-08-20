import Image from 'next/image';
import monitor from '../../images/logohch.png'
import background from "../../images/backgroundpre.jpg"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Presentation() {

  return (
    <section className='PresentationContainer'>
      <Image 
      src={background}
      alt={"image d'arriere plan représentant du développement web en ReactJS"}
      className='backgroundIMG'
      />
      <figure className='LogoContainer'>
      <Image 
         src={monitor}
         alt={''}
         width={260}
         height={250}
      />
      <figcaption>
    <h1 className="h1">
      Hassan Cheikh Hussein
    </h1>
    <h2 className="h2">
    Développeur Web
    </h2>
    <div className='FaIcones'>
      <a href='https://www.linkedin.com/in/hassan-cheikh-hussein-5907a0227/' target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} size="xl" className='icone'/>
    <span className='hide'>Lien Linkedin</span>
    </a>
    <a href='https://github.com/hasshuss' target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faGithub} size="xl" className='icone'/>
    <span className='hide'>Lien Github</span>
    </a>
    </div>
    </figcaption>
    </figure>
    </section>

  );
}