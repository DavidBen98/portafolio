import foto from "../../assets/about.png";
import { useEffect } from "react";
import AOSFunction from "../../helpers/AOSLibrary";
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOSFunction();
    }, []);

    return ( 
        <section className="about" data-aos="fade-right">
            <div className="about-container">
                <div className="about-container__div">
                    <img 
                        src={foto} 
                        className="about-container__photo" 
                        alt="Foto decorativa sobre mí"
                    />
                </div>
                <div className="about-container__div about-container__div--right">
                    <h1 className="about-container__h1">Sobre mí</h1>
                    <p className="about-container__text">
                    Soy una persona entusiasta y apasionada por el desarrollo web y la tecnología. <br/>
                    Conocí este mundo hace un poco mas de 2 años a través de un amigo, y supe que me
                    quería dedicar a esto desde que ví los problemas que se podían solucionar 
                    por medio de código. <br/>
                    Por esta razón estudié Tecnicatura en Computación, en donde aprendí diferentes tecnologías 
                    como JavaScript, PHP y SQL. 
                    Además, sigo formándome de manera autodidacta para obtener mi primer empleo en la industria IT.
                    </p>
                </div>
            </div>
        </section>
    );
}
 
export default About;