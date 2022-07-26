import classes from './FindCoach.module.css';
import React, {useEffect, useState} from "react";
import useHttpClient from "../../hooks/useHttpClient";
import RedCircleCheck from '../../assets/RedCircleCheck.png';
import CoachCard from "../../components/coach-card/CoachCard";
import Footer from "../../components/footer/Footer";

const FindCoach = () => {

    const [coaches, setCoaches] = useState([]);
    const {httpClient} = useHttpClient();

    useEffect(() => {
        httpClient.listCoaches().then(setCoaches);
    }, [httpClient]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes.Container}>
            <div className={classes.Content}>
                <div className={classes.Title}>
                    Find your perfect coach
                </div>
                <div className={classes.Subtitle}>
                    Receive a custom training plan with videos for each drill.<br />
                    Submit videos to your coach and get expert feedback.
                </div>
                <div className={classes.Coaches}>
                    {coaches.map(coach => (
                        <div className={classes.CoachCardWrapper}>
                            <CoachCard coach={coach}/>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FindCoach;