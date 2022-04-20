import foto from "../../assets/about.png";

const About = () => {
    return ( 
        <section className="about" data-aos="fade-right" data-aos-duration="2000">
            <div className="about-container">
                <div className="about-container__div">
                    <img 
                        src={foto} 
                        className="about-container__photo" 
                    />
                </div>
                <div className="about-container__div about-container__div--right">
                    <h1 className="about-container__h1">Sobre mí</h1>
                    <p className="about-container__text">
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
        </section>
    );
}
 
export default About;