import Collapse from '../Collapse/Collapse'
import SkillNameAndIconeHTML from '../SkillNameAndIcone/SkillNameAndIconeHTML'
import SkillNameAndIconeCSS from '../SkillNameAndIcone/SkillNameAndIconeCSS'
import SkillNameAndIconeReact from '../SkillNameAndIcone/SkillNameAndIconeREACT'
import SkillNameAndIconeNext from '../SkillNameAndIcone/SkillNameAndIconeNEXT'
import SkillNameAndIconeSASS from '../SkillNameAndIcone/SkillNameAndIconeSASS'
import SkillNameAndIconeJS from '../SkillNameAndIcone/SkillNameAndIconeJS';
import SkillNameAndIconeTS from '../SkillNameAndIcone/SkillNameAndIconeTS';

export default function Skills() {
    return (
        <div>
            <h1 className='h1Skills'>Compétences</h1>
            <section className="skillsListContainer">
                <article className='skillContainer'>
                    <h2 className='h2Skills'>Intégration web</h2>
                    <Collapse
                        title="Stack Technique"
                        content={<div className='TechContainer'>
                            <SkillNameAndIconeHTML />
                            <SkillNameAndIconeCSS />
                            <SkillNameAndIconeSASS />
                        </div>
                        }
                        isOpen={false}
                    />
                </article>
                <article className='skillContainer'>
                    <h2 className='h2Skills'>Developpement Web Frontend</h2>
                    <Collapse
                        title="Stack Technique"
                        content={<div className='TechContainer'>
                            <SkillNameAndIconeJS />
                            <SkillNameAndIconeTS />
                            <SkillNameAndIconeReact />
                            <SkillNameAndIconeNext />
                        </div>
                        }
                        isOpen={false}
                    />
                </article>
                <article className='skillContainer'>
                    <h2 className='h2Skills'>Developpement Web BackEnd</h2>
                    <Collapse
                        title="Stack Technique"
                        content={<div className='TechContainer'>
                            <SkillNameAndIconeHTML />
                            <SkillNameAndIconeCSS />
                            <SkillNameAndIconeReact />
                            <SkillNameAndIconeNext />
                        </div>
                        }
                        isOpen={false}
                    />
                </article>
                <article className='skillContainer'>
                    <h2 className='h2Skills'>Optimisation SEO</h2>
                    <Collapse
                        title="Stack Technique"
                        content={"Wave, LightHouse"}
                        isOpen={false}
                    />
                </article>
            </section>
        </div>
    )
}