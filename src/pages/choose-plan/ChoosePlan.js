import classes from './ChoosePlan.module.css';
import useHttpClient from "../../hooks/useHttpClient";
import {useCallback, useEffect, useState} from "react";
import Plan from "../../components/plan/Plan";
import {useParams} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PlaceHolder from "./placeholder/PlaceHolder";
import {getSubscriptionPlansForDisplay} from "../../util/subscriptionUtil";

const ChoosePlan = () => {

    const {coachId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [subscriptionPlans, setSubscriptionPlans] = useState([]);
    const [currentSubscription, setCurrentSubscription] = useState();
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
            const [coach, player, subscription, subscriptionHistory] = await Promise.all([
                httpClient.getCoach(coachId),
                httpClient.getPlayer(playerId),
                httpClient.getSubscription(playerId),
                httpClient.getSubscriptionHistory(playerId)
            ]);
            setPlayer(player);
            setCoach(coach);
            setCurrentSubscription(subscription);

            const plans = await Promise.all(
                coach.subscriptionPlanRefs.map(subscriptionPlanRef => httpClient.getSubscriptionPlan(subscriptionPlanRef))
            );

            setSubscriptionPlans(getSubscriptionPlansForDisplay(plans, subscription, subscriptionHistory));
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
            <div className={classes.Title}>Choose your plan</div>
            {!!coach && (
                <div className={classes.Subtitle}>Choose from one of the plans offered by {coach.firstName} {coach.lastName}</div>
            )}
            <div className={classes.Plans}>
                {isLoading && (
                    <PlaceHolder />
                )}
                {!isLoading && subscriptionPlans.map(plan => (
                    <div className={classes.PlanWrapper}>
                        <Plan player={player}
                              plan={plan}
                              coach={coach}
                              isActive={!!currentSubscription && currentSubscription.plan.stripePriceId === plan.stripePriceId}/>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ChoosePlan;