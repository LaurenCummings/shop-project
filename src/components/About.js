import './About.css';
import aboutImg from '../images/about-img.jpg';

const About = () => {

    return (
        <div className="about">
            <h1>About the Shop</h1>
            <img src={aboutImg} alt="pottery image" />
            <p>
                Annie grew up on a farm in Montana. 
                As a child she would spend hours playing
                in the mud, making temporary creations
                that would soon be washed away. 
                She was gifted her first pottery wheel at age 15
                and the rest is history. 
            </p>
            <br />
            <p>
                After graduating with a degree in Fine Arts
                from the University of Montana, Annie 
                opened her studio in Faketown, Montana,
                where she can be seen regularly creating
                new pieces.
            </p>
        </div>
    )
};

export default About;