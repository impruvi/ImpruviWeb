import classes from './FindCoach.module.css';
import React, {useCallback, useEffect, useState} from "react";
import useHttpClient from "../../hooks/useHttpClient";
import CoachCard from "../../components/coach-card/CoachCard";
import Footer from "../../components/footer/Footer";
import PlaceHolder from "./placeholder/PlaceHolder";
import {Helmet} from "react-helmet";

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
            <Helmet>
                <title>For players - Impruvi</title>
                <meta name="description" content="Find your perfect soccer coach. Work with coaches from anywhere in the world. Receive custom training plans and video feedback for each drill you perform."/>
            </Helmet>

            <div className={classes.Content}>
                <h1 className={classes.Title}>
                    Choose your expert coach
                </h1>
                <div className={classes.Subtitle}>
                    Select a coach, download the app, and get started training.
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
