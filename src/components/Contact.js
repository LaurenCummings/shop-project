import './Contact.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/contact-thank-you', { state: { 'name': name, 'email': email, 'message': message}});
    };

    return (
        <div className="contact">
            <form>
                <label>Name: </label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Name" 
                    onChange={(e) => setName(e.target.value)}
                    required/>

                <label>Email: </label>
                <input 
                    type="text" 
                    id="email" 
                    name="email" 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)}
                    required/>

                <label>Message: </label>
                <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Message" 
                    onChange={(e) => setMessage(e.target.value)}
                    required/>

                <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
            </form>
        </div>
    )
};

export default Contact;