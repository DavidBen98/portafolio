import { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import Social from "../home/Social";
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

            <ul className={click? "header__nav-menu--active header__nav-menu" : "header__nav-menu"}>
                <div className="header__item" >
                    <Link to="home" smooth={true} duration={500} onClick={()=> {if (active) handleClick()}}>
                        Inicio
                    </Link>
                </div>
                <div className="header__item">
                    <Link to="projects" offset={active? -70 : -130} smooth={true} duration={500} onClick={()=> {if (active) handleClick()}}>
                        Proyectos
                    </Link>
                </div>
                <div className="header__item">
                    <Link to="about" offset={active? -50 : -50} smooth={true} duration={500} onClick={()=> {if (active) handleClick()}}>
                        Acerca de
                    </Link>
                </div>
                <div className="header__item">
                    <Link to="contact" offset={active? -50 : -50} smooth={true} duration={500} onClick={()=> {if (active) handleClick()}}>
                        Contacto
                    </Link>
                </div>

                {click && 
                    <div className="header__item header__item--social">
                        <Social />
                    </div>
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