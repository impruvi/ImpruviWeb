import classes from "./Plans.module.css";
import {useCallback, useEffect, useState} from "react";
import useHttpClient from "../../../../hooks/useHttpClient";
import Plan from "../../../../components/plan/Plan";
import useAuth from "../../../../hooks/useAuth";
import PlaceHolder from "./placeholder/PlaceHolder";
import {getSubscriptionPlansForDisplay, isSameSubscriptionPlan} from "../../../../util/subscriptionUtil";

const Plans = ({coach, player}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [currentSubscription, setCurrentSubscription] = useState();
    const [subscriptionPlans, setSubscriptionPlans] = useState([]);

    const {httpClient} = useHttpClient();
    const {playerId} = useAuth();

    const initialize = useCallback(async () => {
        setIsLoading(true);
        try {
            let subscriptionHistory = []
            let activeSubscription = null;
            if (!!playerId) {
                const [subscription, subscriptions] = await Promise.all([
                    httpClient.getSubscription(playerId),
                    httpClient.getSubscriptionHistory(playerId)
                ])
                setCurrentSubscription(subscription);
                subscriptionHistory = subscriptions;
                activeSubscription = subscription;
            }

            const plans = await Promise.all(
                coach.subscriptionPlanRefs.map(subscriptionPlanRef => httpClient.getSubscriptionPlan(subscriptionPlanRef))
            );

            setSubscriptionPlans(getSubscriptionPlansForDisplay(plans, activeSubscription, subscriptionHistory));
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