import foto from "../../assets/perfil.jpg";
import cv from "../../assets/CV.pdf";

const Hero = () => {
    return ( 
        <div className="hero" >
            <div className="hero__content">
                <div className="hero__photo">
                    <img src={foto} alt="Foto de perfil" className="hero__img"/>
                </div>
                <div className="hero__text">
                    <div className="hero__content--title">
                        <h1 className="hero__title">David Benedette</h1>
                    </div>
                    <div className="hero__content--description">
                        <p className="hero__description">Desarrollador Frontend</p>
                    </div>
                    <div className="hero__content--button">
                        <a href={cv} className="btn-cv" download="CV.pdf">Descargar CV</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;

