import "./contact.css";
import Form from "./Form";
import Social from "../home/Social";

const Contact = () => {
    return ( 
        <div className="contact" data-aos="fade-right" data-aos-duration="2000">
            <div className="contact-container">
                <div className="left">
                    <h2>Contact me</h2>
                    <p className="message">Thanks for getting here. 
                        If you consider that I can contribute to your team, 
                        do not hesitate to write to me, 
                        otherwise I would love to receive your feedback to continue learning.
                    </p>
                </div>
                <div className="right">
                    <Form/>
                </div>
                
            </div>
        </div>
    );
}
 
export default Contact;