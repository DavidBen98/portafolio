import foto from "../../assets/about.png";
import  AOS  from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 2400,
            disable: "tablet",
        });

        AOS.init({
            duration: 2400,
            disable: "mobile",
        });
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
                    como C#, SQL y JavaScript. 
                    Además, sigo formándome de manera autodidacta para obtener mi primer empleo en la industria IT.
                    </p>
                </div>
            </div>
        </section>
    );
}
 
export default About;