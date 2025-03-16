import './About.css';
import childImg from '../images/about-img.jpg';
import shopFrontImg from '../images/shop-front.jpg';

const About = () => {

    return (
        <div className="about">
            <h1>About the Shop</h1>
            <div className="about-content">
                <div className="shop-front-img">
                    <img src={shopFrontImg} alt="shop front" />
                </div>
                <p>
                    Annie grew up on a farm in Montana. 
                    As a child she would spend hours playing
                    in the mud, making temporary creations
                    that would soon be washed away. 
                    She was gifted her first pottery wheel at age 15
                    and the rest is history. 
                    <br />
                    <br />
                    After graduating with a degree in Fine Arts
                    from the University of Montana, Annie 
                    opened her studio in Faketown, Montana,
                    where she can be seen regularly creating
                    new pieces.
                </p>
                <img src={childImg} alt="child playing in mud" />
            </div>
        </div>
    )
};

export default About;