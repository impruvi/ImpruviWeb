import Footer from "../../components/footer/Footer";
import HowItWorksSlides from "../../components/how-it-works-slides/HowItWorksSlides";
import {useEffect} from "react";
import classes from './HowItWorks.module.css';

const HowItWorks = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <HowItWorksSlides />
            <div className={classes.FooterWrapper}>
                <Footer />
            </div>
        </div>
    )
}

export default HowItWorks;
