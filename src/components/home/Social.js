import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Social = () => {
    return ( 
        <>
            <li>
                <a
                    className="github"
                    href="https://github.com/DavidBen98"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiFillGithub className="icon"/>
                </a>
            </li>

            <li>
                <a
                    className="github"
                    href="https://www.linkedin.com/in/david-benedette"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiFillLinkedin className="icon"/>
                </a>
            </li>

            <li>
                <a 
                    aria-label="Enviar un correo a davidbenedette@gmail.com" 
                    rel="noreferrer noopener" 
                    href="mailto: davidbenedette@gmail.com"
                >
                    <AiTwotoneMail className="icon"/>
                </a>
            </li>   
        </>
    );
}
 
export default Social;