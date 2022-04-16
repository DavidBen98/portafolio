import react from "../../assets/logo-react.svg";
import javascript from "../../assets/logo-javascript.png";
import html from "../../assets/logo-html.svg";
import css from "../../assets/logo-css.svg";
import php from "../../assets/logo-php.svg";
import Mysql from "../../assets/logo-mysql.svg";
import sqlServer from "../../assets/logo-sqlserver.svg";
import cSharp from "../../assets/logo-c.svg";
import git from "../../assets/logo-git.svg";
import github from "../../assets/logo-github.svg";

const Tech = () => {
    return ( 
        <section className="tech" data-aos="fade-left" data-aos-duration="2000">
            <div className="tech-contain">
                <h1 className="tech-contain__h1">Tecnologías</h1>

                <article className="tech-contain__article">
                    <img alt="Logo de JavaScript" src={javascript} className="tech-contain__logo"/>
                    <h2 className="tech-contain__h2">JavaScript</h2>
                </article>

                <article className="tech-contain__article">
                    <img src={react} className="tech-contain__logo" title=""/>
                    <h2 className="tech-contain__h2">React</h2>
                </article>

                <article className="tech-contain__article">
                    <img src={html} className="tech-contain__logo" title=""/>
                    <h2 className="tech-contain__h2">HTML</h2>
                </article>

                <article className="tech-contain__article">
                    <img src={css} className="tech-contain__logo" title=""/>
                    <h2 className="tech-contain__h2">CSS</h2>
                </article>

                <article className="tech-contain__article">
                    <img src={php} className="tech-contain__logo tech-contain__logo--php" title=""/>
                    <h2 className="tech-contain__h2 tech-contain__h2--php" style={{textAlign:"center", width:"100%"}}>PHP</h2>
                </article>

                <article className="tech-contain__article">
                    <img src={Mysql} className="tech-contain__logo" title=""/>
                    <h2 className="tech-contain__h2">MySQL</h2>
                </article>

                <article className="tech-contain__article">
                    <img src={sqlServer} className="tech-contain__logo" title=""/>
                    <h2 className="tech-contain__h2">SQLServer</h2>
                </article>

                <article className="tech-contain__article">
                    <img src={cSharp} className="tech-contain__logo" title=""/>
                    <h2 className="tech-contain__h2">C#</h2>
                </article> 

                <article className="tech-contain__article">
                    <img src={git} className="tech-contain__logo" title=""/>
                    <h2 className="tech-contain__h2">Git</h2>
                </article> 

                <article className="tech-contain__article">
                    <img src={github} className="tech-contain__logo" title=""/>
                    <h2 className="tech-contain__h2">Github</h2>
                </article>              
            </div>
        </section>
    );
}
 
export default Tech;