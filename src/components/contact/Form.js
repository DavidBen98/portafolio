const Form = () => {
    return ( 
        <form className="contact-container__form" action="https://formspree.io/f/mqknlbyb" method="POST">
            <input 
                type="text" 
                name='name' 
                placeholder='Nombre' 
                // onChange={handleChange} 
                // value={form.name}
            />
            <input type="text" 
                name='email' 
                placeholder='Email'
                // onChange={handleChange} 
                // value={form.constellation}
            />
            <textarea 
                name='message'
                placeholder='Mensaje' 
            />
            <input type="submit" value="Enviar"/>
        </form>
    );
}
 
export default Form;