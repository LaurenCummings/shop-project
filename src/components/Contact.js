import './Contact.css';

const Contact = () => {

    return (
        <div className="contact">
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Name" />

                <label for="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="Email" />

                <label for="message">Message:</label>
                <textarea id="message" name="message" placeholder="Message" />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default Contact;