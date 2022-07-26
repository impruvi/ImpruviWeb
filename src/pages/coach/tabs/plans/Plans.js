import classes from "./Plans.module.css";
import {useCallback, useEffect, useState} from "react";
import useHttpClient from "../../../../hooks/useHttpClient";
import Plan from "../../../../components/plan/Plan";
import Spinner from "../../../../components/spinner/Spinner";
import useAuth from "../../../../hooks/useAuth";
import PlaceHolder from "./placeholder/PlaceHolder";

const Plans = ({coach, player}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [currentSubscription, setCurrentSubscription] = useState();
    const [subscriptionPlans, setSubscriptionPlans] = useState([]);

    const {httpClient} = useHttpClient();
    const {playerId} = useAuth();

    const initialize = useCallback(async () => {
        setIsLoading(true);
        try {
            if (!!playerId) {
                const subscription = await httpClient.getSubscription();
                setCurrentSubscription(subscription);
            }

            const plans = await Promise.all(
                coach.subscriptionPlanRefs.map(subscriptionPlanRef => httpClient.getSubscriptionPlan(subscriptionPlanRef))
            );
            setSubscriptionPlans(plans.sort((p1, p2) => p1.unitAmount - p2.unitAmount));
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, [httpClient, coach, playerId]);

    useEffect(() => {
        initialize();
    }, [initialize])

    return (
        <div className={classes.Container}>
            {isLoading && (
                <PlaceHolder />
            )}
            {!isLoading && (
                <>
                    {subscriptionPlans.map(plan => (
                        <div className={classes.PlanWrapper}>
                            <Plan player={player}
                                  plan={plan}
                                  coach={coach}
                                  isActive={!!currentSubscription && currentSubscription.plan.stripePriceId === plan.stripePriceId}/>
                        </div>
                    ))}
                </>
            )}
        </div>

    )
}

export default Plans;