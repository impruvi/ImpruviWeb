import classes from './ChoosePlan.module.css';
import Footer from "../../components/footer/Footer";
import useHttpClient from "../../hooks/useHttpClient";
import {useCallback, useEffect, useState} from "react";
import Plan from "../../components/plan/Plan";
import {useParams} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../components/spinner/Spinner";

const ChoosePlan = () => {

    const {coachId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [subscriptionPlans, setSubscriptionPlans] = useState([]);
    const [player, setPlayer] = useState();
    const [coach, setCoach] = useState();

    const {httpClient} = useHttpClient();
    const {playerId} = useAuth();

    const initialize = useCallback(async () => {
        if (!playerId || !coachId) {
            return;
        }
        setIsLoading(true);
        try {
            const [coach, player] = await Promise.all([
                httpClient.getCoach(coachId),
                httpClient.getPlayer(playerId)
            ]);
            setPlayer(player);
            setCoach(coach);
            const plans = await Promise.all(
                coach.subscriptionPlanRefs.map(subscriptionPlanRef => httpClient.getSubscriptionPlan(subscriptionPlanRef))
            );
            setSubscriptionPlans(plans);
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, [httpClient, coachId, playerId]);


    useEffect(() => {
        initialize();
    }, [initialize]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes.Container}>
            <div className={classes.Content}>
                <div className={classes.Title}>Choose your plan</div>
                {isLoading && (
                    <Spinner />
                )}
                {!isLoading && (
                    <div className={classes.Plans}>
                        {subscriptionPlans.map(plan => (
                            <div className={classes.PlanWrapper}>
                                <Plan player={player} plan={plan} coach={coach}/>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
};

export default ChoosePlan;