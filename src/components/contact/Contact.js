import Form from "./Form";
import 'aos/dist/aos.css';

const Contact = () => {
    return ( 
        <section className="contact" data-aos="fade-left">
            <div className="contact-container">
                <div className="contact-container__div">
                    <h2 className="contact-container__h1">Contacta conmigo</h2>
                    <p className="contact-container__text">
                        Gracias por llegar hasta aquí.
                        Si consideras que puedo aportar a tu equipo,
                        no dudes en escribirme.
                        De lo contrario, me encantaría recibir tus comentarios y sugerencias para seguir creciendo profesionalmente. 
                    </p>
                </div>
                <div className="contact-container__div contact-container__div--right">
                    <Form/>
                </div>
                
            </div>
        </section>
    );
}
 
export default Contact;