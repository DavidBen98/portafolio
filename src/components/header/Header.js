import { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import Social from "../home/Social";
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';
import { Link } from "react-scroll";

const Header = () => {
    const [click, setClick] = useState(false);
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setClick (!click);
        setActive (!active);
    };

    return ( 
        <header className="header">
            <Link className="header__logo" to="home" smooth={true} duration={500}>
                <h1>David Benedette</h1>
            </Link>

            <ul className={click ? "header__nav-menu--active header__nav-menu " : "header__nav-menu"}>
                <li className="header__item">
                    <Link to="home" smooth={true} duration={500}>
                        Inicio
                    </Link>
                </li>
                <li className="header__item">
                    <Link to="projects" offset={-110} smooth={true} duration={500}>
                        Proyectos
                    </Link>
                </li>
                <li className="header__item">
                    <Link to="about" offset={-100} smooth={true} duration={500}>
                        Acerca de
                    </Link>
                </li>
                <li className="header__item">
                    <Link to="contact" offset={-100} smooth={true} duration={500}>
                        Contacto
                    </Link>
                </li>

                {click && 
                    <li className="header__item header__item--social">
                        <Social />
                    </li>
                }
            </ul>

            {!click && 
                <div className="header__social">
                    <Social />
                </div>
            }

            <div className="header__hamburger" onClick={handleClick}>
                {click? 
                (<FaTimes size={20} style={{color: "#fff"}}/>
                ) : (
                <FaBars size={20} style={{color: "#fff"}}/>)
                }
            </div>
        </header>
    );
}
 
export default Header;