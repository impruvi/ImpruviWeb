import useHttpClient from "../../../../hooks/useHttpClient";
import {useCallback, useEffect, useState} from "react";
import classes from './Previews.module.css';
import Video from "../../../../components/video/Video";

const Previews = ({coach}) => {

    const [previewDrills, setPreviewDrills] = useState([]);

    const {httpClient} = useHttpClient();

    const initialize = useCallback(async () => {
        const drills = (await httpClient.getDrillsForCoach(coach.coachId)).drills;
        setPreviewDrills(drills.slice(0,3))
    }, [httpClient]);

    useEffect(() => {
        console.log('initializing');
        initialize();
    }, []);

    return (
        <div className={classes.Container}>
            {previewDrills.map(drill => {
                return (
                    <div className={classes.Preview}>
                        <Video source={drill.demos.front.fileLocation} />
                    </div>
                )
            })}
        </div>
    )
}

export default Previews;
