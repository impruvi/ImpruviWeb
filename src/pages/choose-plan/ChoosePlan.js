import classes from './ChoosePlan.module.css';
import Footer from "../../components/footer/Footer";
import useHttpClient from "../../hooks/useHttpClient";
import {useCallback, useEffect, useState} from "react";
import Plan from "../../components/plan/Plan";
import {useParams} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../components/spinner/Spinner";
import PlaceHolder from "./placeholder/PlaceHolder";

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
            const [coach, player, subscription] = await Promise.all([
                httpClient.getCoach(coachId),
                httpClient.getPlayer(playerId),
                httpClient.getSubscription()
            ]);
            setPlayer(player);
            setCoach(coach);
            setCurrentSubscription(subscription);
            const plans = await Promise.all(
                coach.subscriptionPlanRefs.map(subscriptionPlanRef => httpClient.getSubscriptionPlan(subscriptionPlanRef))
            );
            setSubscriptionPlans(plans.sort((p1, p2) => p1.unitAmount - p2.unitAmount));
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