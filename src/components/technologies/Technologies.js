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
import  AOS  from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Tech = () => {
    useEffect(() => {
        AOS.init({
            duration: 2400,
            disable: "mobile",
        });
    }, []);

    return ( 
        <section className="tech" data-aos="fade-left">
            <div className="tech-container">
                <h1 className="tech-container__h1">Tecnologías</h1>

                <article className="tech-container__article">
                    <img alt="Logo de JavaScript" src={javascript} className="tech-container__logo"/>
                    <h2 className="tech-container__h2">JavaScript</h2>
                </article>

                <article className="tech-container__article">
                    <img src={react} className="tech-container__logo" title=""/>
                    <h2 className="tech-container__h2">React</h2>
                </article>

                <article className="tech-container__article">
                    <img src={html} className="tech-container__logo" title=""/>
                    <h2 className="tech-container__h2">HTML</h2>
                </article>

                <article className="tech-container__article">
                    <img src={css} className="tech-container__logo" title=""/>
                    <h2 className="tech-container__h2">CSS</h2>
                </article>

                <article className="tech-container__article">
                    <img src={php} className="tech-container__logo tech-container__logo--php" title=""/>
                    <h2 className="tech-container__h2 tech-container__h2--php" style={{textAlign:"center", width:"100%"}}>PHP</h2>
                </article>

                <article className="tech-container__article">
                    <img src={Mysql} className="tech-container__logo" title=""/>
                    <h2 className="tech-container__h2">MySQL</h2>
                </article>

                <article className="tech-container__article">
                    <img src={sqlServer} className="tech-container__logo" title=""/>
                    <h2 className="tech-container__h2">SQLServer</h2>
                </article>

                <article className="tech-container__article">
                    <img src={cSharp} className="tech-container__logo" title=""/>
                    <h2 className="tech-container__h2">C#</h2>
                </article> 

                <article className="tech-container__article">
                    <img src={git} className="tech-container__logo" title=""/>
                    <h2 className="tech-container__h2">Git</h2>
                </article> 

                <article className="tech-container__article">
                    <img src={github} className="tech-container__logo" title=""/>
                    <h2 className="tech-container__h2">Github</h2>
                </article>              
            </div>
        </section>
    );
}
 
export default Tech;