import classes from './NotableCoaches.module.css';
import CoachesList from "./coaches-list/CoachesList";
import useHttpClient from "../../../hooks/useHttpClient";
import {useCallback, useEffect, useState} from 'react';
import PlaceHolder from "./placeholder/PlaceHolder";

const NotableCoaches = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [coaches, setCoaches] = useState([]);
    const {httpClient} = useHttpClient();

    const getCoaches = async () => {
        setIsLoading(true);
        try {
            const coaches = await httpClient.listCoaches();
            setCoaches(coaches);
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        getCoaches();
    }, []);

    return (
        <div className={classes.Container}>
            <div className={classes.Content}>
                <div className={classes.Title}>
                    <span className={classes.Highlight}>Notable coaches</span> on Impruvi
                </div>
                <div className={classes.Subtitle}>
                    Our collection of coaches includes current and former professional and division 1 players
                </div>
            </div>
            {isLoading && (
                <PlaceHolder />
            )}
            {!isLoading && (
                <CoachesList coaches={coaches}/>
            )}
        </div>
    )
}

export default NotableCoaches;