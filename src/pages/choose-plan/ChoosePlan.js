import classes from './ChoosePlan.module.css';
import useHttpClient from "../../hooks/useHttpClient";
import {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PlaceHolder from "./placeholder/PlaceHolder";
import PlanCategories from "../../components/plan-categories/PlanCategories";

const ChoosePlan = () => {

    const {slug} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [coach, setCoach] = useState();

    const {httpClient} = useHttpClient();

    const initialize = useCallback(async () => {
        if (!slug) {
            return;
        }
        setIsLoading(true);
        try {
            const coach = await httpClient.getCoachBySlug(slug);
            setCoach(coach);
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, [httpClient, slug]);


    useEffect(() => {
        initialize();
    }, [initialize]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes.Container}>
            <div className={classes.Title}>Choose your plan</div>
            {!!coach && (
                <div className={classes.Subtitle}>Choose from one of the plans offered by {coach.firstName} {coach.lastName}</div>
            )}
            {isLoading && (
                <div className={classes.Plans}>
                    <PlaceHolder />
                </div>
            )}
            {!isLoading && <PlanCategories coach={coach}/>}
        </div>
    )
};

export default ChoosePlan;
