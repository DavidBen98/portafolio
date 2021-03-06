import react from "../../assets/logo-react.svg";
import javascript from "../../assets/logo-javascript.png";
import html from "../../assets/logo-html.svg";
import css from "../../assets/logo-css.svg";
import php from "../../assets/logo-php.svg";
import Mysql from "../../assets/logo-mysql.svg";
import sqlServer from "../../assets/logo-sqlserver.svg";
import cSharp from "../../assets/logo-c.svg";
import git from "../../assets/logo-git.svg";
import typescript from "../../assets/logo-typescript.svg";
import 'aos/dist/aos.css';

const Tech = () => {
    return ( 
        <section className="tech" data-aos="fade-left">
            <div className="tech-container">
                <h1 className="tech-container__h1">Tecnologías</h1>

                <article className="tech-container__article">
                    <img alt="Logo de JavaScript" src={javascript} className="tech-container__logo"/>
                    <h2 className="tech-container__h2">JavaScript</h2>
                </article>

                <article className="tech-container__article">
                    <img alt="Logo de github" src={typescript} className="tech-container__logo" title=""/>
                    <h2 className="tech-container__h2">Typescript</h2>
                </article>  

                <article className="tech-container__article">
                    <img alt="Logo de React" src={react} className="tech-container__logo" title=""/>
                    <h2 className="tech-container__h2">React</h2>
                </article>

                <article className="tech-container__article">
                    <img alt="Logo de HTML" src={html} className="tech-container__logo" title=""/>
                    <h2 className="tech-container__h2">HTML</h2>
                </article>

                <article className="tech-container__article">
                    <img alt="Logo de CSS" src={css} className="tech-container__logo" title=""/>
                    <h2 className="tech-container__h2">CSS</h2>
                </article>

                <article className="tech-container__article">
                    <img alt="Logo de PHP" src={php} className="tech-container__logo" title=""/>
                    <h2 className="tech-container__h2 tech-container__h2--php" style={{textAlign:"center", width:"100%"}}>PHP</h2>
                </article>

                <article className="tech-container__article">
                    <img alt="Logo de MySQL" src={Mysql} className="tech-container__logo" title=""/>
                    <h2 className="tech-container__h2">MySQL</h2>
                </article>

                <article className="tech-container__article">
                    <img alt="Logo de SQLServer" src={sqlServer} className="tech-container__logo" title=""/>
                    <h2 className="tech-container__h2">SQLServer</h2>
                </article>

                <article className="tech-container__article">
                    <img alt="Logo de C#" src={cSharp} className="tech-container__logo" title=""/>
                    <h2 className="tech-container__h2">C#</h2>
                </article> 

                <article className="tech-container__article">
                    <img alt="Logo de git" src={git} className="tech-container__logo" title=""/>
                    <h2 className="tech-container__h2">Git</h2>
                </article>          
            </div>
        </section>
    );
}
 
export default Tech;