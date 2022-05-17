import { Link } from "react-scroll";
import { BsArrowUpSquare } from "react-icons/bs";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.screenY > 300) {
                setShowScrollTopButton(false);
            } else {
                setShowScrollTopButton(true);
            }
        })
    }, []);

    return ( 
        <>
            {showScrollTopButton &&
                <Link className="btn__goHome" to="home" smooth={true} duration={500}>
                    <BsArrowUpSquare />
                </Link> 
            }
        </>
    );
}
 
export default ScrollToTop;