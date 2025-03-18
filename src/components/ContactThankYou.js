import './ContactThankYou.css';
import { useLocation } from 'react-router-dom';

const ContactThankYou = () => {
    const location = useLocation();
    const info = location.state;

    return (
        <div className="contactThankYou">
            <p>Thank you for your message</p>
            <p>You have submitted the following:</p>
            <p>Name: {info.name}</p>
            <p>Email: {info.email}</p>
            <p>Message: {info.message}</p>
        </div>
    )
};

export default ContactThankYou;