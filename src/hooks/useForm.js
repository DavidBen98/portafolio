import { useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const handleBlur = (e) => {
        handleChange(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));

        if (Object.keys(validateForm(form)).length === 0){
            helpHttp()
                .post("https://formsubmit.co/ajax/davidbenedette@gmail.com",{
                    body:form,
                    headers: {
                        "Content-Type":"application/json",
                        Accept:"application/json"
                    },
                })
                .then(res => {
                    setResponse(true);
                    setForm(initialForm);
                    setTimeout(()=>setResponse(false),5000);
                });
        } else {
            return;
        }
    }

    return {
        form,
        errors,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }
}
 