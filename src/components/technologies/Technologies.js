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

import "./technologies.css";

const Tech = () => {
    return ( 
        <section className="tech" data-aos="fade-left" data-aos-duration="2000">
            <h1>Tecnologías</h1>
            <div className="tech-contain">
                <article>
                    <img alt="Logo de JavaScript" src={javascript} className="img-logo"/>
                    <h2>JavaScript</h2>
                </article>
                <article>
                    <img src={react} className="img-logo" title=""/>
                    <h2>React</h2>
                </article>
                <article>
                    <img src={html} className="img-logo" title=""/>
                    <h2>HTML</h2>
                </article>
                <article>
                    <img src={css} className="img-logo" title=""/>
                    <h2>CSS</h2>
                </article>
                <article>
                    <img src={php} className="img-logo" title="" style={{height: "60%",width: "60%", paddingTop: "25px"}}/>
                    <h2 style={{textAlign:"center", width:"100%"}}>PHP</h2>
                </article>
                <article>
                    <img src={Mysql} className="img-logo" title=""/>
                    <h2>MySQL</h2>
                </article>
                <article>
                    <img src={sqlServer} className="img-logo" title=""/>
                    <h2>SQLServer</h2>
                </article>
                <article>
                    <img src={cSharp} className="img-logo" title=""/>
                    <h2>C#</h2>
                </article>     
                <article>
                    <img src={git} className="img-logo" title=""/>
                    <h2>Git</h2>
                </article>       
                <article>
                    <img src={github} className="img-logo" title=""/>
                    <h2>Github</h2>
                </article>              
            </div>
        </section>
    );
}
 
export default Tech;