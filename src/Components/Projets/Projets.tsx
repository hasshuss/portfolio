import React, { useState, useRef, useEffect, MouseEventHandler } from 'react';

import Image from "next/image";
import poktools from "../../images/projets/poktools.webp";
import Kasa from "../../images/projets/Kasa.webp";
import Booki from "../../images/projets/Booki.webp"
import Nina from "../../images/projets/Nina.webp";
import portfolio from "../../images/projets/portfolio.webp"
import SkillNameAndIconeSASS from "../SkillNameAndIcone/SkillNameAndIconeSASS";
import SkillNameAndIconeTS from "../SkillNameAndIcone/SkillNameAndIconeTS";
import SkillNameAndIconeNext from "../SkillNameAndIcone/SkillNameAndIconeNEXT";
import SkillNameAndIconeJS from '../SkillNameAndIcone/SkillNameAndIconeJS';
import SkillNameAndIconeReact from '../SkillNameAndIcone/SkillNameAndIconeREACT';
import TextLink from '../TextEvent/TextLink/TextLink';
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
      gitlink: '',
    },
    {
      src: Kasa,
      alt: "Image du site du Projet06 Kasa developpeur web OpenClassRoom",
      skills: [<SkillNameAndIconeSASS key="sass" />, <SkillNameAndIconeJS key="JS" />, <SkillNameAndIconeReact key="React" />],
      link: '',
      gitlink: "https://github.com/hasshuss/openclassroom-projet06-dev-web"
    },
    {
      src: Booki,
      alt: "Image du site du Projet02 Booki developpeur web OpenClassRoom",
      skills: [<SkillNameAndIconeHTML key="sass" />, <SkillNameAndIconeCSS key="JS" />],
      link: '',
      gitlink: 'https://github.com/hasshuss/openclassroom-projet-02-devweb-Booki',
    },
    {
      src: Nina,
      alt: "Image du site du Projet05 Nina Carducci developpeur web OpenClassRoom",
      skills: [<SkillNameAndIconeHTML key="sass" />, <SkillNameAndIconeJS key="JS" />],
      link: '',
      gitlink: 'https://github.com/hasshuss/Projet-05-OpenClassRoom-dev-web'
    },
    {
      src: portfolio,
      alt: "Image du site portfolio de Hassan Cheikh Hussein",
      skills: [<SkillNameAndIconeSASS key="sass" />, <SkillNameAndIconeTS key="TS" />, <SkillNameAndIconeNext key="Next" />],
      link: "https://www.cheikh-hussein.com/",
      gitlink: 'https://github.com/hasshuss/portfolio'
    },
  ];

  const [autoScroll, setAutoScroll] = useState(true);
  const [animationClass, setAnimationClass] = useState('');
  const [previousIndex, setPreviousIndex] = useState(-1);
  const projectsLength = projects.length;

  const handleAnimation = (newIndex: number, animationClass: string) => {
    setPreviousIndex(current); 
    setAnimationClass(animationClass);

    const timeoutDuration = 990;

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

  const touchStartX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;

    const diffX = touchStartX.current - touchEndX;

    if (diffX > 70) {
      NextAndStopAutoScroll();
    } 
    else if (diffX < -70) {
      PrevAndStopAutoScroll();
    }
  };


  useEffect(() => {
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




  const renderProject = (projectIndex: number, position: 'left' | 'center' | 'right'): JSX.Element => {
    let animationModifier = '';
    if (animationClass === 'transition-effect-prev') {
      animationModifier = position === 'left' ? 'previous' : '';
    } else if (animationClass === 'transition-effect-next') {
      animationModifier = position === 'right' ? 'next' : '';
    }
    let clickHandler: MouseEventHandler<HTMLDivElement> | undefined;
    if (position === 'left') clickHandler = PrevAndStopAutoScroll;
    if (position === 'right') clickHandler = NextAndStopAutoScroll;
  
    return (
      <figure
      className={`ProjetContainer ${position} ${animationModifier}`}
      onClick={clickHandler}
      data-index={projectIndex}
      >
        <div className="ProjetImgContainer">
          <Image src={projects[projectIndex].src} alt={projects[projectIndex].alt} className="ProjetIMG" />
        </div>
        <figcaption className='ProjetsFigcaption'>
        <div className="ProjectSkillContainer">
          {projects[projectIndex].skills}
        </div>
        <div className='LinksContainer'>
          <TextLink
            link={projects[projectIndex].link}
            content={'visiter le site'}
          />
          <TextLink
            link={projects[projectIndex].gitlink}
            content={'visiter le github'}
          />
        </div>
        </figcaption>
      </figure>
    );
  }
  
  return (
    <section className="SectionAppleStyle" id="Portfolio">
      <h2 className='h2'>Portfolio</h2>
      <div className={`ProjetsContainer ${animationClass}`}       
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}>
        {renderProject(xtremLeftIndex, 'left')}
        {renderProject(leftIndex, 'left')}
        {renderProject(current, 'center')}
        {renderProject(rightIndex, 'right')}
        {renderProject(xtremRightIndex, 'right')}
      </div>
    </section>
  );
  }

export default Projets;

  