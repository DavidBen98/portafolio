import { useForm } from "../../hooks/useForm";
import Message from "./Message";

const initialForm = {
    name: "",
    email: "",
    comments: "",
}

const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if(!form.name.trim()){
        errors.name = "El campo 'Nombre' es requerido";
    } else if (!regexName.test(form.name.trim())){
        errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
    }

    if(!form.email.trim()){
        errors.email = "El campo 'Email' es requerido";
    } else if (!regexEmail.test(form.email.trim())){
        errors.email = "El campo 'Email' es incorrecto";
    }

    if(!form.comments.trim()){
        errors.comments = "El campo 'Mensaje' es requerido";
    } else if (!regexComments.test(form.comments.trim())){
        errors.comments = "El campo 'Mensaje' no debe exceder los 255 caracteres";
    }

    console.log(errors);

    return errors;
}

let styles = {
    fontWeight: "bold",
    color: "#dc3545",
    marginBottom: ".5rem",
}

const Form = () => {
    const {
        form,
        errors,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm, validationsForm);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Escribe tu nombre" 
                    onChange={handleChange} 
                    value={form.name} 
                    // required 
                    onBlur={handleBlur}
                />
                {errors.name && <p style={styles}>{errors.name}</p>}
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Escribe tu email" 
                    onChange={handleChange} 
                    value={form.email} 
                    // required 
                    onBlur={handleBlur}
                />
                {errors.email && <p style={styles}>{errors.email}</p>}

                <textarea 
                    name="comments" 
                    cols="50" 
                    rows="5" 
                    placeholder="Escribe tu mensaje"
                    onChange={handleChange} 
                    value={form.comments} 
                    // required 
                    onBlur={handleBlur}
                >
                    
                </textarea>
                {errors.comments && <p style={styles}>{errors.comments}</p>}

                <input type="submit" value="Enviar"/>
            </form>

            {response && <Message
                msg="Los datos han sido enviados"
                bgColor="#198754"
            />}
        </>
    );
}
 
export default Form;