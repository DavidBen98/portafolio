import foto from "../../assets/perfil.jpg";
import cv from "../../assets/CV.pdf";

const Hero = () => {
    return ( 
        <div className="background-video" >
            <div className="background-video__content">
                <div className="background-video__photo">
                    <img src={foto} alt="Foto de perfil" className="background-video__img"/>
                </div>
                <div className="background-video__text background-video__text--animate">
                    <h1 className="background-video__title">David Benedette</h1>
                    <p className="background-video__description">Desarrollador Frontend</p>
                    <a href={cv} className="btn-cv" download="CV.pdf">Descargar CV</a>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;

