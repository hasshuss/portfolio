import React, { useState, useEffect, useLayoutEffect } from 'react';
import Image from "next/image";
import poktools from "../../images/projets/poktools.png";
import Kasa from "../../images/projets/Kasa.jpg";
import Booki from "../../images/projets/Booki.png"
import Nina from "../../images/projets/Nina.jpg"
import SkillNameAndIconeSASS from "../SkillNameAndIcone/SkillNameAndIconeSASS";
import SkillNameAndIconeTS from "../SkillNameAndIcone/SkillNameAndIconeTS";
import SkillNameAndIconeNext from "../SkillNameAndIcone/SkillNameAndIconeNEXT";
import SkillNameAndIconeJS from '../SkillNameAndIcone/SkillNameAndIconeJS';
import SkillNameAndIconeReact from '../SkillNameAndIcone/SkillNameAndIconeREACT';
import TextLink from '../TextLink/TextLink';
import SkillNameAndIconeHTML from '../SkillNameAndIcone/SkillNameAndIconeHTML';
import SkillNameAndIconeCSS from '../SkillNameAndIcone/SkillNameAndIconeCSS';

type Project = {
  src: any;
  alt: string;
  skills: JSX.Element[];
  link: string;
  gitlink: string;
};

const Projets: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const projects: Project[] = [
    {
      src: poktools,
      alt: "Image du site de logiciels et outils Poker Poktools",
      skills: [<SkillNameAndIconeSASS key="sass" />, <SkillNameAndIconeTS key="TS" />, <SkillNameAndIconeNext key="Next" />],
      link: "https://poktools.com",
      gitlink: ''
    },
    {
      src: Kasa,
      alt: "Image du site du Projet06 Kasa developpeur web OpenClassRoom",
      skills: [<SkillNameAndIconeSASS key="sass" />, <SkillNameAndIconeJS key="JS" />, <SkillNameAndIconeReact key="React" />],
      link: "#",
      gitlink: "https://github.com/hasshuss/openclassroom-projet06-dev-web"
    },
    {
      src: Booki,
      alt: "Image du site du Projet02 Booki developpeur web OpenClassRoom",
      skills: [<SkillNameAndIconeHTML key="sass" />, <SkillNameAndIconeCSS key="JS" />],
      link: "#",
      gitlink: 'https://github.com/hasshuss/openclassroom-projet-02-devweb-Booki',
    },
    {
      src: Nina,
      alt: "Image du site du Projet05 Nina Carducci developpeur web OpenClassRoom",
      skills: [<SkillNameAndIconeHTML key="sass" />, <SkillNameAndIconeJS key="JS" />],
      link: "#",
      gitlink: 'https://github.com/hasshuss/Projet-05-OpenClassRoom-dev-web'
    },
    {
      src: Kasa,
      alt: "une image cool",
      skills: [<SkillNameAndIconeSASS key="sass" />, <SkillNameAndIconeJS key="JS" />, <SkillNameAndIconeReact key="React" />],
      link: "#",
      gitlink: ''
    },
  ];

  const [autoScroll, setAutoScroll] = useState(true);
  const [animationClass, setAnimationClass] = useState('');
  const [previousIndex, setPreviousIndex] = useState(-1);
  const projectsLength = projects.length;

  const handleAnimation = (newIndex: number, animationClass: string) => {
    setPreviousIndex(current); // Mettre à jour l'indice de l'élément précédent
    setAnimationClass(animationClass);

    const timeoutDuration = 950;

    setTimeout(() => {
      setCurrent(newIndex);
      setAnimationClass('');
    }, timeoutDuration);
  };

  const handleNext = () => {
    const newIndex = (current + 1) % projectsLength;
    handleAnimation(newIndex, 'transition-effect-next-center');
  };

  const handlePrevious = () => {
    const newIndex = (current - 1 + projectsLength) % projectsLength;
    handleAnimation(newIndex, 'transition-effect-prev-center');
  };

  const NextAndStopAutoScroll = () => {
    handleNext();
    setAutoScroll(false);
  };

  const PrevAndStopAutoScroll = () => {
    handlePrevious();
    setAutoScroll(false);
  };


  useLayoutEffect(() => {
    if (autoScroll === true) {
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
    <section className="SectionAppleStyle" id="Portfolio">
      <h2 className='h2'>Portfolio</h2>
      <div className={`ProjetsContainer ${animationClass}`}>
        <div className={`ProjetContainer left ${animationClass === 'transition-effect-prev' ? 'previous' : ''}`}>
          <div className="ProjetImgContainer">
            <Image src={projects[xtremLeftIndex].src} alt={projects[xtremLeftIndex].alt} className="ProjetIMG" />
          </div>
          <br />
          <div className="ProjectSkillContainer">
            {projects[xtremLeftIndex].skills}
          </div>
          <div className='LinksContainer'>

            <TextLink
              link={projects[xtremLeftIndex].link}
              content={'visiter le site'}
            />
            <TextLink
              link={projects[xtremLeftIndex].gitlink}
              content={'visiter le github'}
            />
          </div>
        </div>
        <div className={`ProjetContainer left ${animationClass === 'transition-effect-prev' ? 'previous' : ''}`} onClick={PrevAndStopAutoScroll}>
          <div className="ProjetImgContainer">
            <Image src={projects[leftIndex].src} alt={projects[leftIndex].alt} className="ProjetIMG" />
          </div>
          <br />
          <div className="ProjectSkillContainer">
            {projects[leftIndex].skills}
          </div>
          <div className='LinksContainer'>

            <TextLink
              link={projects[leftIndex].link}
              content={'visiter le site'}
            />
            <TextLink
              link={projects[leftIndex].gitlink}
              content={'visiter le github'}
            />
          </div>
        </div>
        <div className={`ProjetContainer center ${animationClass === 'transition-effect-prev' || animationClass === 'transition-effect-next' ? 'center' : ''}`} >
          <div className="ProjetImgContainer">
            <Image src={projects[current].src} alt={projects[current].alt} className="ProjetIMG" />
          </div>
          <br />
          <div className="ProjectSkillContainer">
            {projects[current].skills}
          </div>
          <div className='LinksContainer'>

            <TextLink
              link={projects[current].link}
              content={'visiter le site'}
            />
            <TextLink
              link={projects[current].gitlink}
              content={'visiter le github'}
            />
          </div>
        </div>
        <div className={`ProjetContainer right ${animationClass === 'transition-effect-next' ? 'next' : ''}`} onClick={NextAndStopAutoScroll} data-index={rightIndex}>
          <div className="ProjetImgContainer">
            <Image src={projects[rightIndex].src} alt={projects[rightIndex].alt} className="ProjetIMG" />
          </div>
          <br />
          <div className="ProjectSkillContainer">
            {projects[rightIndex].skills}
          </div>
          <div className='LinksContainer'>

            <TextLink
              link={projects[rightIndex].link}
              content={'visiter le site'}
            />
            <TextLink
              link={projects[rightIndex].gitlink}
              content={'visiter le github'}
            />
          </div>
        </div>
        <div className={`ProjetContainer right ${animationClass === 'transition-effect-next' ? 'next' : ''}`} data-index={xtremRightIndex}>
          <div className="ProjetImgContainer">
            <Image src={projects[xtremRightIndex].src} alt={projects[xtremRightIndex].alt} className="ProjetIMG" />
          </div>
          <br />
          <div className="ProjectSkillContainer">
            {projects[xtremRightIndex].skills}
          </div>
          <div className='LinksContainer'>
            <TextLink
              link={projects[xtremRightIndex].link}
              content={'visiter le site'}
            />
            <TextLink
              link={projects[xtremRightIndex].gitlink}
              content={'visiter le github'}
            />
          </div>
        </div>
      </div>

    </section>
  );
}

export default Projets;

