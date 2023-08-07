import CollapseStackTechClosed from '../Collapse/CollapseStackTechClosed'
import Collapse from '../Collapse/Collapse'
import SkillNameAndIconeHTML from '../SkillNameAndIcone/SkillNameAndIconeHTML'
import SkillNameAndIconeCSS from '../SkillNameAndIcone/SkillNameAndIconeCSS'
import SkillNameAndIconeReact from '../SkillNameAndIcone/SkillNameAndIconeREACT'
import SkillNameAndIconeNext from '../SkillNameAndIcone/SkillNameAndIconeNEXT'
import SkillNameAndIconeSASS from '../SkillNameAndIcone/SkillNameAndIconeSASS'
import SkillNameAndIconeJS from '../SkillNameAndIcone/SkillNameAndIconeJS'
import SkillNameAndIconeTS from '../SkillNameAndIcone/SkillNameAndIconeTS'
import Card from '../Cards/Card'

export default function Skills() {
    return (
      <section className="SkillSection" id="AncreSkills" >
        <h2 className='h2'>Compétences</h2>
        <section className="skillsListContainer">

          <Card
            title={"Intégration Web"}
            content={
              <CollapseStackTechClosed
                content={
                  <div className='TechContainer'>
                    <SkillNameAndIconeHTML />
                    <SkillNameAndIconeCSS />
                    <SkillNameAndIconeSASS />
                  </div>
                }
              />
            }
          />

          <Card
            title={"Front End"}
            content={
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
            }
            />

          <Card
            title={"Back End"}
            content={
            <CollapseStackTechClosed
              content={
                <div className='TechContainer'>
                  <SkillNameAndIconeHTML />
                  <SkillNameAndIconeCSS />
                  <SkillNameAndIconeReact />
                  <SkillNameAndIconeNext />
                </div>
              }
              />
            }
            />
            
          <article className='skillContainer'>
            <h2 className='h2Skills'>Optimisation SEO</h2>
            <Collapse
              title="Stack Technique"
              content={"Wave, LightHouse"}
              isOpen={false}
            />
          </article>
        </section>
      </section>
    );
  }

  
  