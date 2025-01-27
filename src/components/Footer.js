import './Footer.css';
import { FacebookLogo, TwitterLogo, InstagramLogo} from 'phosphor-react';

const Footer = () => {

    return (
        <div className="footer">
            <div className="logos">
                <FacebookLogo size={32} />
                <TwitterLogo size={32} />
                <InstagramLogo size={32} />
            </div>
            <p>
                Disclaimer: This website was created as a 
                practice project. The shop and its owner
                are works of fiction.
            </p>
        </div>
    )
}

export default Footer;