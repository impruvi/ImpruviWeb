import classes from './NotableCoaches.module.css';
import CoachesList from "./coaches-list/CoachesList";
import useHttpClient from "../../../hooks/useHttpClient";
import {useEffect, useState} from 'react';

const NotableCoaches = () => {

    const [coaches, setCoaches] = useState([]);
    const {httpClient} = useHttpClient();

    useEffect(() => {
        httpClient.listCoaches().then(setCoaches);
    }, [httpClient]);

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

            <CoachesList coaches={coaches}/>
        </div>
    )
}

export default NotableCoaches;