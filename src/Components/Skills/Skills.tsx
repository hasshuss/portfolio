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
              <CollapseStackTechClosed
                content={ <>
                  <div className='TechContainer'>
                    <SkillNameAndIconeHTML />
                    <SkillNameAndIconeCSS />
                    <SkillNameAndIconeSASS />
                  </div>
                  <Modal 
                  content={<div>lol ca puir</div>}
                  initialIsOpen={false}
                  contentLink={"mdr"}
                  
                  />
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
              <CollapseStackTechClosed
                content={
                  <div className='TechContainer'>
                    Bientôt :p
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
          <Collapse
            title="Stack Technique"
            content={"Wave, LightHouse, Google Search Console"}
            isOpen={false}
          />
        </article>
      </section>
    </section>
  );
}
