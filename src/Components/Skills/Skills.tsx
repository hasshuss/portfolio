import CollapseStackTechClosed from '../Collapse/CollapseStackTechClosed'
import Collapse from '../Collapse/Collapse'
import SkillNameAndIconeHTML from '../SkillNameAndIcone/SkillNameAndIconeHTML'
import SkillNameAndIconeCSS from '../SkillNameAndIcone/SkillNameAndIconeCSS'
import SkillNameAndIconeReact from '../SkillNameAndIcone/SkillNameAndIconeREACT'
import SkillNameAndIconeNext from '../SkillNameAndIcone/SkillNameAndIconeNEXT'
import SkillNameAndIconeSASS from '../SkillNameAndIcone/SkillNameAndIconeSASS'
import SkillNameAndIconeJS from '../SkillNameAndIcone/SkillNameAndIconeJS'
import SkillNameAndIconeTS from '../SkillNameAndIcone/SkillNameAndIconeTS'
import SkillCard from '../Cards/SkillCard'
import Image from 'next/image'
import backend from '../../images/backend.png'
import frontend from '../../images/frontend.png'
import seo from '../../images/seo.png'
import int from '../../images/int.png'
import Modal from '../Modal/Modal'
import SkillNameAndIconeNode from '../SkillNameAndIcone/SkillNameAndIconeNode'
import SkillNameAndIconeExpress from '../SkillNameAndIcone/SkillNameAndIconeExpress'
import SkillNameAndIconeMongo from '../SkillNameAndIcone/SkillNameAndIconeMongo'


export default function Skills() {
  return (
    <section className="SkillSection" id="AncreSkills" >
      <h2 id='h2SkillsSection'  >Compétences</h2>
      <section className="skillsListContainer">

        <SkillCard
          title={<>Intégration<br></br>Web</>}
          content={
            <>
              <Image
                src={int}
                className={"icone"}
                alt="image d'un écran d'ordinateur affichant de l'intégration web"
                width={300}
                height={300}
              />
              <div className='SkillText'>L'intégration web transforme les maquettes graphiques en interfaces web fonctionnelles. Elle est cruciale car elle concrétise la vision créative en garantissant que les designs sont fidèlement retranscrits en code, tout en assurant la réactivité pour divers dispositifs. Un travail d'intégration de qualité assure la fondation solide sur laquelle les autres couches fonctionnelles sont construites.</div>
              <CollapseStackTechClosed
                content={ <>
                  <div className='TechContainer'>
                    <SkillNameAndIconeHTML />
                    <SkillNameAndIconeCSS />
                    <SkillNameAndIconeSASS />
                  </div>

                  </>
                }
              />
            </>
          }
        />

        <SkillCard
          title={<>Développement <br></br>FrontEnd</>}
          content={
            <>
              <Image
                src={frontend}
                className={"icone"}
                alt="image d'un écran d'ordinateur affichant du développement web FrontEnd"
                width={300}
                height={300}
              />
              <div className='SkillText'>Le développement front-end est la couche d'interaction directe avec l'utilisateur. Au-delà de la simple présentation, il englobe des fonctionnalités telles que l'ajout de formulaires de paiement, la gestion des paniers d'achat pour les sites e-commerce, l'intégration d'APIs pour récupérer ou envoyer des données, et la mise en œuvre d'interactions dynamiques pour enrichir l'expérience utilisateur. C'est cette couche qui rend un site vivant, interactif et adapté aux besoins spécifiques des utilisateurs.</div>
              <CollapseStackTechClosed
                content={
                  <div className='TechContainer'>
                    <SkillNameAndIconeJS />
                    <SkillNameAndIconeTS />
                    <SkillNameAndIconeReact />
                    <SkillNameAndIconeNext />
                  </div>
                }
              />
            </>}

        />

        <SkillCard
          title={<>Développement <br></br>BackEnd</>}
          content={
            <>
              <Image
                src={backend}
                className={"icone"}
                alt="image d'un écran d'ordinateur affichant du développement web Backend"
                width={300}
                height={300}
              />
              <div className='SkillText'>Le développement back-end constitue la charpente structurelle d'une application web. C'est lui qui gère les requêtes, traite les données, et communique avec les bases de données. Chaque interaction utilisateur, qu'il s'agisse d'une simple inscription ou d'une transaction e-commerce complexe, est gérée en coulisse par le back-end. Sa robustesse et sa fiabilité définissent la solidité et la sécurité de l'ensemble de l'application.</div>
              <CollapseStackTechClosed
                content={
                  <div className='TechContainer'>
                    <SkillNameAndIconeNode />
                    <SkillNameAndIconeExpress />
                    <SkillNameAndIconeMongo />
                  </div>
                }
              />
            </>
          }

        />

        <article className='skillContainer'>
          <h2 className='h2Skills'>Optimisation <br></br> SEO</h2>
          <Image
            src={seo}
            className={"icone"}
            alt="image d'un écran d'ordinateur affichant du SEO"
            width={300}
            height={300}
          />
          <div className='SkillText'> L'optimisation des performances et le SEO sont des éléments essentiels pour assurer la visibilité et la réactivité d'un site. Dans un écosystème numérique compétitif, un site doit non seulement être performant, mais aussi optimisé pour les moteurs de recherche. C'est cette discipline qui garantit que le site est à la fois rapide à charger et bien positionné sur les moteurs de recherche.</div>
          <Collapse
            title="Stack Technique"
            content={"Wave, LightHouse, Google Search Console"}
            isOpen={true}
          />
        </article>
      </section>
    </section>
  );
}
