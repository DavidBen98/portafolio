import spaceVideo from "../../assets/space.mp4";
import foto from "../../assets/perfil.jpg";
import cv from "../../assets/CV.pdf";

const Video = () => {
    return ( 
        <div className="background-video" >
            <video autoPlay loop muted className="background-video__video">
                <source src={spaceVideo} type="video/mp4" />
            </video>
            <div className="background-video__content">
                <div className="background-video__photo">
                    <img src={foto} alt="Foto de perfil" className="background-video__img"/>
                </div>
                <div className="background-video__text background-video__text--animate">
                    <h1 className="background-video__title">David Benedette</h1>
                    <p className="background-video__description">Desarrollador Frontend</p>
                    <a href={cv} className="btn-cv" download="cvdavidbenedette.pdf">Descargar CV</a>
                </div>
            </div>
        </div>
    );
}
 
export default Video;

