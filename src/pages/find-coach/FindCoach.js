import classes from './FindCoach.module.css';
import React, {useCallback, useEffect, useState} from "react";
import useHttpClient from "../../hooks/useHttpClient";
import CoachCard from "../../components/coach-card/CoachCard";
import Footer from "../../components/footer/Footer";
import PlaceHolder from "./placeholder/PlaceHolder";

const FindCoach = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [coaches, setCoaches] = useState([]);
    const {httpClient} = useHttpClient();

    const initialize = useCallback(async () => {
        setIsLoading(true);
        try {
            const coaches = await httpClient.listCoaches();
            setCoaches(coaches);
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, [httpClient]);

    useEffect(() => {
        initialize();
    }, [initialize]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes.Container}>
            <div className={classes.Content}>
                <div className={classes.Title}>
                    Choose your expert coach
                </div>
                <div className={classes.Subtitle}>
                    Receive a custom training plan with videos for each drill.<br />
                    Submit videos to your coach and get expert feedback.
                </div>
                <div className={classes.Coaches}>
                    {isLoading && (
                        <PlaceHolder />
                    )}
                    {!isLoading && coaches.map(coach => (
                        <div className={classes.CoachCardWrapper}>
                            <CoachCard coach={coach} shouldConvertToLandscapeOnMobile={true}/>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FindCoach;