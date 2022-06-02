import { Link } from "react-scroll";
import { BsArrowUpSquare } from "react-icons/bs";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    function scrollToTop() {
        if (window.scrollY > 300) {
            setShowScrollTopButton(true);
        } else {
            setShowScrollTopButton(false);
        }

        console.log (window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollToTop);

        return () => {
            window.removeEventListener('scroll', scrollToTop)
        }

    }, [showScrollTopButton]);

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