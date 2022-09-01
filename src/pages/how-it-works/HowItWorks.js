import Footer from "../../components/footer/Footer";
import HowItWorksSlides from "../../components/how-it-works-slides/HowItWorksSlides";
import React, {useEffect} from "react";
import classes from './HowItWorks.module.css';
import {Helmet} from "react-helmet";

const HowItWorks = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>How it works - Impruvi</title>
                <meta name="description" content="Train with expert coaches from anywhere in the world. Receive custom training plans and video feedback for each drill you perform."/>
            </Helmet>
            <HowItWorksSlides />
            <div className={classes.FooterWrapper}>
                <Footer />
            </div>
        </div>
    )
}

export default HowItWorks;
