import classes from './BecomeACoach.module.css';
import Footer from "../../components/footer/Footer";
import ContactOptions from "../../components/contact-options/ContactOptions";
import {useEffect} from 'react';

const BecomeACoach = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className={classes.Content}>
                <div className={classes.Title}>Become a coach</div>
                <div className={classes.Subtitle}>
                    Want to become a coach? Text or email us and we will start the process
                    within 24 hours.
                </div>
                <ContactOptions />
            </div>
            <Footer />
        </div>
    )
}

export default BecomeACoach;