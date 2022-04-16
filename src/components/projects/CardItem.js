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
            <div className="card__btn">
                <button className="card__button" target="_blank" onClick={() => window.open(props.project, "_blank")}>Visitar</button>
                <a
                    className="card__link"
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{margin:"auto"}}
                >
                    <VscGithub className="card__icon"/>
                    <p>Repo</p>
                </a>
            </div>
        </div>
    );
}
 
export default CardItem;