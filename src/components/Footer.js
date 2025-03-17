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
            <p className="favicon-attr">
                <a target="_blank" href="https://icons8.com/icon/85715/pottery">Pottery</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            </p>
        </div>
    )
}

export default Footer;