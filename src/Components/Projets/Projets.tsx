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
  ];

  const [autoScroll, setAutoScroll] = useState(true);

  const projectsLength = projects.length;

  const handleNext = () => {
    setAutoScroll(false);
    setCurrent((current + 1) % projectsLength);
  };

  const handlePrevious = () => {
    setAutoScroll(false);
    setCurrent((current - 1 + projectsLength) % projectsLength);
  };

  useEffect(() => {
    if (autoScroll) { // Vérifie si le défilement automatique est activé
      const timer = setInterval(() => {
        setCurrent((current + 1) % projectsLength);
      }, 5000); // Met à jour l'index toutes les 5 secondes
  
      return () => clearInterval(timer); // Nettoie l'intervalle lors du démontage du composant
    }
  }, [autoScroll, current, projectsLength]); // Dépendances de l'effet

  const leftIndex = (current - 1 + projectsLength) % projectsLength;
  const rightIndex = (current + 1) % projectsLength;

  return (
    <section className="SectionAppleStyle">
    <h2 className='h2'>Portfolio</h2>
    <div className="ProjetsContainer">
        <div
          className="ProjetContainer left transition-effect"
          onClick={handlePrevious}
        >
          {renderProject(projects[leftIndex])}
        </div>
        <div
          className="ProjetContainer center transition-effect"
        >
          {renderProject(projects[current])}
        </div>
        <div
          className="ProjetContainer right transition-effect"
          onClick={handleNext}
        >
          {renderProject(projects[rightIndex])}
        </div>
      </div>
    </section>
  );
};

const renderProject = (project: Project): JSX.Element => (
  <>
    <div className="ProjetImgContainer">
      <Image
        src={project.src}
        alt={project.alt}
        className="ProjetIMG"
        layout="fill" // S'assurer que l'image remplit le conteneur
      />
    </div>
    <br />
    <div className="ProjectSkillContainer">
      {project.skills}
    </div>
    <a className="link" href={project.link}><span>{"visiter le site >"}</span></a>
  </>
);

export default Projets;