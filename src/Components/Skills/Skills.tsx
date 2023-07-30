import Collapse from '../Collapse/Collapse'
import css from '../../images/icones/css.png'
import html from '../../images/icones/html.png'
import js from '../../images/icones/javascript.png'
import ts from '../../images/icones/typescript.png'
import react from '../../images/icones/react.png'
import next from '../../images/icones/next.png'
import sass from '../../images/icones/sass.png'
import Image from 'next/image';



export default function Skills() {



    return (

        <div>
            <h1 className='h1Skills'>Compétences</h1>

            <section className="skillsListContainer">
                <article className='skillContainer'>
                    <h2 className='h2Skills'>Intégration web</h2>
                    <Collapse
                        title="Stack Technique"
                        content={<div className='TechContainer'><figure className='SkillNameContainer'>
                            <Image
                                src={html}
                                alt='html5'
                                width={20}
                                height={20}
                            /><figcaption className='TechName'>Html</figcaption></figure>
                            <div className='SkillNameContainer'>
                            <Image
                                src={css}
                                alt='css3'
                                width={20}
                                height={20}
                            /><div className='TechName'>Css</div></div>
                                                        <div className='SkillNameContainer'>
                            <Image
                                src={sass}
                                alt='sass'
                                width={20}
                                height={20}
                            /><div className='TechName'>Sass</div></div>
                            </div>
                        }
                        isOpen={false}
                    />
                </article>
                <article className='skillContainer'>
                    <h2 className='h2Skills'>Developpement web</h2>
                    <Collapse
                        title="Stack Technique"
                        content={<div className='TechContainer'><div className='SkillNameContainer'>
                            <Image
                                src={js}
                                alt='javascript'
                                width={20}
                                height={20}
                            /><div className='TechName'>Javascript</div></div>
                            <div className='SkillNameContainer'>
                                <Image
                                    src={ts}
                                    alt='typescript'
                                    width={20}
                                    height={20}
                                /><div className='TechName'>Typescript</div></div>
                            <div className='SkillNameContainer'>
                                <Image
                                    src={react}
                                    alt='reactJS'
                                    width={20}
                                    height={20}
                                /><div className='TechName'>ReactJS</div></div>
                            <div className='SkillNameContainer'>
                                <Image
                                    src={next}
                                    alt='NextJS'
                                    width={20}
                                    height={20}
                                /><div className='TechName'>NextJS</div></div>

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