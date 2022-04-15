import "./cards.css";
import { VscGithub } from 'react-icons/vsc';

const CardItem = (props) => {
    console.log(props);

    return (
        <div className="card" data-aos="fade-right" data-aos-duration="2000">
            <div className="card__body">
                    <img 
                        src={props.img} 
                        className="card__image" 
                        title={props.title}
                    />
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.description}</p>
            </div>
            <div className="btn">
                <button className="card__btn" target="_blank" onClick={() => window.open(props.project, "_blank")}>Visitar</button>
                <a
                    className="proyectGithub"
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{margin:"auto"}}
                >
                    <VscGithub className="icon"/>
                    Repo
                </a>
            </div>
        </div>
    );
}
 
export default CardItem;