import Social from "../home/Social";

const Footer = () => {
    return ( 
        <section className="footer">
            <div className="footer__social">
                <Social/>
            </div>
            <div className="footer__text">
                <p>David Benedette</p>
                <p>Todos los derechos reservados ©</p>
            </div>
        </section>
    );
}
 
export default Footer;