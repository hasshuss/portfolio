import React, { useState, useEffect } from 'react';
import Image from "next/image";
import poktools from "../../images/projets/poktools.png";
import Kasa from "../../images/projets/Kasa.jpg";
import IMG from "../../images/IMG.jpg"
import SkillNameAndIconeSASS from "../SkillNameAndIcone/SkillNameAndIconeSASS";
import SkillNameAndIconeTS from "../SkillNameAndIcone/SkillNameAndIconeTS";
import SkillNameAndIconeNext from "../SkillNameAndIcone/SkillNameAndIconeNEXT";
import SkillNameAndIconeJS from '../SkillNameAndIcone/SkillNameAndIconeJS';
import SkillNameAndIconeReact from '../SkillNameAndIcone/SkillNameAndIconeREACT';

type Project = {
  src: any;
  alt: string;
  skills: JSX.Element[];
  link: string;
};

const Projets: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const projects: Project[] = [
    {
      src: poktools,
      alt: "Image du site de logiciels Poker Poktools",
      skills: [<SkillNameAndIconeSASS key="sass" />, <SkillNameAndIconeTS key="TS" />, <SkillNameAndIconeNext key="Next" />],
      link: "https://poktools.com",
    },
    {
      src: Kasa,
      alt: "Image du site du Projet06 Kasa parcours developpeur web OpenClassRoom",
      skills: [<SkillNameAndIconeSASS key="sass" />, <SkillNameAndIconeJS key="JS" />, <SkillNameAndIconeReact key="React" />],
      link: "#",
    },
    {
      src: IMG,
      alt: "une image cool",
      skills: [<SkillNameAndIconeSASS key="sass" />, <SkillNameAndIconeJS key="JS" />, <SkillNameAndIconeReact key="React" />],
      link: "#",
    },
    {
      src: IMG,
      alt: "une image cool",
      skills: [<SkillNameAndIconeSASS key="sass" />, <SkillNameAndIconeJS key="JS" />, <SkillNameAndIconeReact key="React" />],
      link: "#",
    },
    {
      src: IMG,
      alt: "une image cool",
      skills: [<SkillNameAndIconeSASS key="sass" />, <SkillNameAndIconeJS key="JS" />, <SkillNameAndIconeReact key="React" />],
      link: "#",
    },
  ];

  const [autoScroll, setAutoScroll] = useState(true);
  const [animationClass, setAnimationClass] = useState('');
  const projectsLength = projects.length;

  const handleAnimation = (newIndex: number, animationClass: string) => {
    setAutoScroll(false);
    setAnimationClass(animationClass);
    
    const timeoutDuration = 1000;

    setTimeout(() => {
      setCurrent(newIndex);
      setAnimationClass('');
      setAutoScroll(true);
    }, timeoutDuration);
  };

  const handleNext = () => {
    const newIndex = (current + 1) % projectsLength;
    handleAnimation(newIndex, 'transition-effect-next');
  };

  const handlePrevious = () => {
    const newIndex = (current - 1 + projectsLength) % projectsLength;
    handleAnimation(newIndex, 'transition-effect-prev');
  };



  useEffect(() => {
    const handleTransitionEnd = () => {
      setAnimationClass(''); // Réinitialisez l'animationClass une fois que l'animation est terminée
      setAutoScroll(false); // Réactivez l'auto-défilement
    };
  
    const animatedElement = document.querySelector('.ProjetContainer.center') as HTMLElement;
    animatedElement.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      animatedElement.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);

  useEffect(() => {
    if (autoScroll) {
      const timer = setInterval(() => {
        const newIndex = (current + 1) % projectsLength;
        handleAnimation(newIndex, 'transition-effect-next');
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [autoScroll, current, projectsLength]);


  const xtremLeftIndex = (current - 2 + projectsLength) % projectsLength;
  const leftIndex = (current - 1 + projectsLength) % projectsLength;
  const rightIndex = (current + 1) % projectsLength;
  const xtremRightIndex = (current + 2) % projectsLength;




return (
  <section className="SectionAppleStyle">
    <h2 className='h2'>Portfolio</h2>
    <div className={`ProjetsContainer ${animationClass}`}>
      <div className={`ProjetContainer left ${animationClass === 'transition-effect-prev' ? 'previous' : ''}`} onClick={handlePrevious}>
        <div className="ProjetImgContainer">
          <Image src={projects[xtremLeftIndex].src} alt={projects[xtremLeftIndex].alt} className="ProjetIMG" />
        </div>
        <br />
        <div className="ProjectSkillContainer">
          {projects[xtremLeftIndex].skills}
        </div>
        <a className="link" href={projects[xtremLeftIndex].link}><span>{"visiter le site >"}</span></a>
      </div>
      <div className={`ProjetContainer left ${animationClass === 'transition-effect-prev' ? 'previous' : ''}`} onClick={handlePrevious}>
        <div className="ProjetImgContainer">
          <Image src={projects[leftIndex].src} alt={projects[leftIndex].alt} className="ProjetIMG" />
        </div>
        <br />
        <div className="ProjectSkillContainer">
          {projects[leftIndex].skills}
        </div>
        <a className="link" href={projects[leftIndex].link}><span>{"visiter le site >"}</span></a>
      </div>
      <div className={`ProjetContainer center ${animationClass === 'transition-effect-prev' || animationClass === 'transition-effect-next' ? 'center' : ''}`}>
        <div className="ProjetImgContainer">
          <Image src={projects[current].src} alt={projects[current].alt} className="ProjetIMG" />
        </div>
        <br />
        <div className="ProjectSkillContainer">
          {projects[current].skills}
        </div>
        <a className="link" href={projects[current].link}><span>{"visiter le site >"}</span></a>
      </div>
      <div className={`ProjetContainer right ${animationClass === 'transition-effect-next' ? 'next' : ''}`} onClick={handleNext}>
        <div className="ProjetImgContainer">
          <Image src={projects[rightIndex].src} alt={projects[rightIndex].alt} className="ProjetIMG" />
        </div>
        <br />
        <div className="ProjectSkillContainer">
          {projects[rightIndex].skills}
        </div>
        <a className="link" href={projects[rightIndex].link}><span>{"visiter le site >"}</span></a>
      </div>
      <div className={`ProjetContainer right ${animationClass === 'transition-effect-next' ? 'next' : ''}`} onClick={handleNext}>
        <div className="ProjetImgContainer">
          <Image src={projects[xtremRightIndex].src} alt={projects[xtremRightIndex].alt} className="ProjetIMG" />
        </div>
        <br />
        <div className="ProjectSkillContainer">
          {projects[xtremRightIndex].skills}
        </div>
        <a className="link" href={projects[xtremRightIndex].link}><span>{"visiter le site >"}</span></a>
      </div>
    </div>
  </section>
);
}

export default Projets;

