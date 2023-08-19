import { useEffect, useState } from 'react';
import Image from 'next/image';
import monitor from '../../images/logohch.png'
import background from "../../images/backgroundpre.jpg"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Presentation() {
  const [isTyping, setIsTyping] = useState(true);
  const textToType: string[] = [
    "Bonjour !\nJe m'appelle",
    'Hassan Cheikh Hussein',
    'Je suis',
    'Web Developpeur',
  ];
  const typingDelay: number = 50; // Délai en millisecondes entre chaque caractère

  useEffect(() => {
    const typeNextCharacter = (elementIndex: number, charIndex: number) => {
      if (elementIndex >= textToType.length) {
        setIsTyping(false);
        return;
      }

      const currentElement: HTMLElement | null = document.getElementById(`element-${elementIndex}`);
      if (!currentElement) return;

      const currentText: string = textToType[elementIndex];
      const newText: string = currentText.slice(0, charIndex + 1);

      currentElement.innerHTML = newText;

      if (newText === currentText) {
        setTimeout(() => typeNextCharacter(elementIndex + 1, 0), typingDelay * 10);
      } else {
        setTimeout(() => typeNextCharacter(elementIndex, charIndex + 1), typingDelay);
      }
    };

    typeNextCharacter(0, 0);
  }, []);

  return (
    <section className='PresentationContainer'>
      <Image 
      src={background}
      alt={''}
      className='backgroundIMG'
      />
      <figure className='LogoContainer'>
      <Image 
         src={monitor}
         alt={''}
         width={250}
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
    <FontAwesomeIcon icon={faLinkedin} size="xl"/>
    <FontAwesomeIcon icon={faGithub} size="xl"/>
    </div>
    </figcaption>
    </figure>
    <article className='PresentationText'>
      <span id="element-0"></span>
      <h1 className="h1" id="element-1"></h1>
      <span id="element-2"></span>
      <h2 className="h2" id="element-3"></h2>
      <span id="element-4"></span>
      </article>
      </section>
  );
}