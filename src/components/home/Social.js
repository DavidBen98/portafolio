import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Social = () => {
    return ( 
        <>
            <li className='social-media'>
                <a
                    className="social-media__github"
                    href="https://github.com/DavidBen98"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiFillGithub className="social-media__icon"/>
                </a>
            </li>

            <li className='social-media'>
                <a
                    className="social-media__linkedin"
                    href="https://www.linkedin.com/in/david-benedette"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiFillLinkedin className="social-media__icon"/>
                </a>
            </li>

            <li className='social-media'>
                <a 
                    className='social-media__mail'
                    aria-label="Enviar un correo a davidbenedette@gmail.com" 
                    rel="noreferrer noopener" 
                    href="mailto: davidbenedette@gmail.com"
                >
                    <AiTwotoneMail className="social-media__icon"/>
                </a>
            </li>   
        </>
    );
}
 
export default Social;