import './ContactThankYou.css';
import { useLocation } from 'react-router-dom';

const ContactThankYou = () => {
    const location = useLocation();
    const info = location.state;

    return (
        <div className="contactThankYou">
            <p>Thank you for your message</p>
            <p>You have submitted the following:</p>
            <div className="contactInfo">
                <p><b>Name: </b>{info.name}</p>
                <p><b>Email: </b>{info.email}</p>
                <p><b>Message: </b>{info.message}</p>               
            </div>

        </div>
    )
};

export default ContactThankYou;