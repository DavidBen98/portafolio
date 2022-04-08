import "./footer.css";
import Social from "../home/Social";

const Footer = () => {
    return ( 
        <section className="footer">
            <div className="contact-social">
                    <Social/>
                </div>
                <div className="low">
                    <p>David Benedette</p>
                    <p>Todos los derechos reservados ©</p>
                </div>
        </section>
    );
}
 
export default Footer;