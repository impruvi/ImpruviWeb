import classes from './BecomeACoach.module.css';
import Footer from "../../components/footer/Footer";
import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import Quotes from "./quotes/Quotes";
import useGlobalPopup, {popups} from "../../hooks/useGlobalPopup";
import SubmitButton from "../../components/submit-button/SubmitButton";


const BecomeACoach = () => {

    const {setOpenPopup} = useGlobalPopup();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes.Container}>
            <Helmet>
                <title>Become a coach - Impruvi</title>
                <meta name="description" content="Work with your current client base, find new markets, and expand your business. Apply to become a coach here."/>
            </Helmet>
            <div className={classes.Header}>
                <div className={classes.HeaderContent}>
                    <div className={classes.HeaderTitle}>
                        Work with your current athletes, find new clients, and expand your business
                    </div>
                    <SubmitButton className={classes.HeaderApplyButton} onClick={() => setOpenPopup(popups.CoachApplication)}>
                        Apply
                    </SubmitButton>
                </div>
            </div>
            <div className={classes.Goal}>
                <div className={classes.GoalContent}>
                    <div className={classes.GoalLeft}>
                        <div className={classes.GoalLeftTitle}>Anywhere, anytime</div>
                        <SubmitButton className={classes.GoalApplyButton} onClick={() => setOpenPopup(popups.CoachApplication)}>
                            Apply
                        </SubmitButton>
                    </div>
                    <div className={classes.GoalRight}>
                        Our goal is to provide a platform for you to grow your business and help players improve without
                        having to deal with the physical  constraints of in-person training. Whether you offer imprüvi
                        as a supplement to your current clients, or look to work with players outside of your geographic
                        region, we are here for you.
                    </div>
                </div>
            </div>
            <div className={classes.Quotes}>
                <div className={classes.QuotesContent}>
                    <Quotes />
                </div>
            </div>
            <div className={classes.FooterWrapper}>
                <Footer />
            </div>
        </div>
    )
}

export default BecomeACoach;
