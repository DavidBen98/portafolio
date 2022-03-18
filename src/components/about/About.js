import "./about.css";

const About = () => {
    return ( 
        <div className="about" data-aos="fade-left" data-aos-duration="2000">
            <div className="about-container">
                <div className="about-left">
                    <div className="circulo">

                    </div>
                    <div>

                    </div>
                </div>
                <div className="about-right">
                    <h1>Sobre mi</h1>
                    <p>
                    Soy una persona responsable y apasionada por el desarrollo web. <br/>
                    Conocí este mundo hace un poco mas de 2 años a través de un amigo. 
                    Desde el momento que vi los problemas que se podían solucionar por medio de código, 
                    supe que me quería dedicar a esto. 
                    Por esta razón estudié Tecnicatura en Computación, en donde aprendí diferentes tecnologías 
                    como C#, SQL y JavaScript. 
                    Además, sigo formándome de manera autodidacta para obtener mi primer empleo en la industria IT.
                    </p>
                </div>
            </div>

        </div>
    );
}
 
export default About;