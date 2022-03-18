import "./form.css";

const Form = () => {
    return ( 
        <form action="https://formspree.io/f/mqknlbyb" method="POST">
            <input 
                type="text" 
                name='name' 
                placeholder='Name' 
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
                placeholder='Message' 
            />
            <input type="submit" value="Submit"/>
        </form>
    );
}
 
export default Form;