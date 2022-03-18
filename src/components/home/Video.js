import "./video.css";
import spaceVideo from "../../assets/space.mp4";
import photo from "../../assets/fondo.png";
import 'animate.css';
import foto from "../../assets/perfil.jpg";

const Video = () => {
    return ( 
        <div className="hero" data-aos="fade-left" data-aos-duration="2000">
            <video autoPlay loop muted id="video">
                <source src={spaceVideo} type="video/mp4" />
            </video>
            <div className="content">
                <div className="content-photo">
                    <img src={foto} className="photo"/>
                </div>
                <div className="text animate__animated animate__bounceInDown">
                    <h1 className="">David Benedette</h1>
                    <p>Frontend Developer</p>
                    <p style={{font: "1.1rem Smooch"}}>React | JavaScript | CSS </p>
                </div>
            </div>
        </div>
    );
}
 
export default Video;

