import "./nav.css";
import { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import Social from "../home/Social";
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';
import { Link } from "react-scroll";

const Nav = () => {
    const [click, setClick] = useState(false);
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setClick (!click);
        setActive (!active);
    };

    return ( 
        <div className="header">
            <Link className="logo" to="hero" smooth={true} duration={500}><h1>David Benedette</h1></Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                <Link to="hero" smooth={true} duration={500}>
                    Inicio
                </Link>
                </li>
                <li>
                <Link to="wrapper" offset={-110} smooth={true} duration={500}>
                    Proyectos
                </Link>
                </li>
                <li>
                <Link to="about" offset={-100} smooth={true} duration={500}>
                    Acerca de
                </Link>
                </li>
                <li>
                    <Link to="contact" offset={-100} smooth={true} duration={500}>
                        Contacto
                    </Link>
                </li>
                {click && 
                    <div className="active socialResponsive">
                        <a
                            className="github"
                            href="https://github.com/DavidBen98"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillGithub className="icon"/>
                        </a>
                        <a
                            className="github"
                            href="https://www.linkedin.com/in/david-benedette"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillLinkedin className="icon"/>
                        </a>
                        <Link to="/contact" smooth={true}>
                            <AiTwotoneMail className="icon"/>
                        </Link>
                    </div>
                }
            </ul>
            <div className="social">
                <Social />
            </div>
            <div className="hamburger" onClick={handleClick}>
                {click? (<FaTimes size={20} style={{color: "#fff"}}/>): <FaBars size={20} style={{color: "#fff"}}/>}
            </div>
        </div>
    );
}
 
export default Nav;