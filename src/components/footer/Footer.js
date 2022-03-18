import "./footer.css";
import Social from "../home/Social";

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="contact-social">
                    <Social/>
                </div>
                <div className="low">
                    <p>David Benedette</p>
                    <p>All rights reserved ©</p>
                </div>
        </div>
    );
}
 
export default Footer;