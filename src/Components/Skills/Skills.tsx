import Collapse from '../Collapse/Collapse'

export default function Skills() {
    return (

        <div>
            <h1 className='h1'>Compétences</h1>
            <section className="skillsContainer">
                <article>
                    <h2 className='h2'>Intégration web</h2>
                    <Collapse
                        title="Stack Technique"
                        content={"Html5, Css, Sass"}
                        isOpen={false}
                    />
                </article>
                <article>
                    <h2 className='h2'>Developpement web</h2>
                    <Collapse
                        title="Stack Technique"
                        content={"JavaScript, TypeScript, ReactJS, NextJS"}
                        isOpen={false}
                    />
                </article>
                <article>
                    <h2 className='h2'>Optimisation SEO</h2>
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