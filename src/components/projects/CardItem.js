import { Link } from "react-router-dom";
import "./cards.css";
import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const CardItem = (props) => {
    return (
        <div className="card" data-aos="fade-right" data-aos-duration="2000">
            <div className="card__body">
                <img src={props.img} class="card__image" />
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.description}</p>
            </div>
            <button className="card__btn">View Project</button>
        </div>
    );
}

 
export default CardItem;