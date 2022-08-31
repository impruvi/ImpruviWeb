import classes from './Contact.module.css';
import Footer from "../../components/footer/Footer";
import ContactOptions from "../../components/contact-options/ContactOptions";
import {useEffect} from "react";

const Contact = () => {

    useEffect(() => {
        document.title = 'Contact us - Impruvi';

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes.Container}>
            <div className={classes.Title}>Contact us</div>
            <div className={classes.Subtitle}>
                Any issues or questions? Text or email us and our team will
                get back to you within 24 hours.
            </div>
            <div className={classes.ContactOptionsWrapper}>
                <ContactOptions />
            </div>
            <Footer />
        </div>
    )
}

export default Contact;
