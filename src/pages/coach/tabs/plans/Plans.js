import classes from "./Plans.module.css";
import {useCallback, useEffect, useState} from "react";
import useHttpClient from "../../../../hooks/useHttpClient";
import Plan from "../../../../components/plan/Plan";
import useAuth from "../../../../hooks/useAuth";
import Spinner from "../../../../components/spinner/Spinner";

const Plans = ({coach}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [player, setPlayer] = useState();
    const [subscriptionPlans, setSubscriptionPlans] = useState([]);

    const {httpClient} = useHttpClient();
    const {playerId} = useAuth();

    const initialize = useCallback(async () => {
        setIsLoading(true);
        try {
            if (!!playerId) {
                const player = await httpClient.getPlayer(playerId);
                setPlayer(player);
            }
            const plans = await Promise.all(
                coach.subscriptionPlanRefs.map(subscriptionPlanRef => httpClient.getSubscriptionPlan(subscriptionPlanRef))
            );
            setSubscriptionPlans(plans);
        } catch (e) {

        }
        setIsLoading(false);
    }, [httpClient, coach, playerId]);

    useEffect(() => {
        initialize();
    }, [initialize])

    return (
        <div className={classes.Container}>
            {isLoading && <Spinner />}
            {!isLoading && (
                <>
                    {subscriptionPlans.map(plan => (
                        <div className={classes.PlanWrapper}>
                            <Plan player={player} plan={plan} coach={coach} />
                        </div>
                    ))}
                </>
            )}
        </div>

    )
}

export default Plans;