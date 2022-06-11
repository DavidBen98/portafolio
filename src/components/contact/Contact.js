import Form from "./Form";
import AOSFunction from "../../helpers/AOSLibrary";
import { useEffect } from "react";
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOSFunction();
    }, []);

    return ( 
        <section className="contact" data-aos="fade-left">
            <div className="contact-container">
                <div className="contact-container__div">
                    <h2>Contacta conmigo</h2>
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