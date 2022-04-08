import "./cards.css";
// import * as React from "https://cdn.skypack.dev/react@17.0.1";
import { VscGithub } from 'react-icons/vsc';

const CardItem = (props) => {
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
                <button className="card__btn" onClick={props.project}>Visitar</button>
                <a
                    className="proyectGithub"
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <VscGithub className="icon"/>
                    Repo
                </a>
            </div>
        </div>
    );
}
 
export default CardItem;