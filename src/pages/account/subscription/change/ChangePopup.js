import Popup from "../../../../components/popup/Popup";
import classes from "./ChangePopup.module.css";
import useAuth from "../../../../hooks/useAuth";
import {useCallback, useEffect, useState} from "react";
import useHttpClient from "../../../../hooks/useHttpClient";
import Plan from "../../../../components/plan/Plan";
import Spinner from "../../../../components/spinner/Spinner";
import XMark from '../../../../assets/XMarkBlack.png';
import {useHistory} from "react-router-dom";

const ChangePopup = ({close}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [player, setPlayer] = useState();
    const [coach, setCoach] = useState();
    const [currentSubscription, setCurrentSubscription] = useState();
    const [subscriptionPlans, setSubscriptionPlans] = useState([]);

    const {httpClient} = useHttpClient();
    const {playerId} = useAuth();
    const history = useHistory();

    const initialize = useCallback(async () => {
        if (!playerId) {
            return;
        }
        setIsLoading(true);
        try {
            const player = await httpClient.getPlayer(playerId);
            setPlayer(player);
            const [subscription, coach] = await Promise.all([
                httpClient.getSubscription(playerId),
                httpClient.getCoach(player.coachId)
            ]);
            setCurrentSubscription(subscription);
            setCoach(coach);
            const plans = await Promise.all(
                coach.subscriptionPlanRefs.map(subscriptionPlanRef => httpClient.getSubscriptionPlan(subscriptionPlanRef))
            );
            setSubscriptionPlans(plans.sort((p1, p2) => p1.unitAmount - p2.unitAmount));
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, [httpClient, playerId]);

    useEffect(() => {
        initialize();
    }, [initialize]);

    return (
        <Popup onClickOutside={close}>
            <div className={classes.Container}>
                {isLoading && (
                    <Spinner />
                )}
                {!isLoading && (
                    <>
                        <div className={classes.Title}>Change subscription</div>
                        <div className={classes.Subtitle}>
                            <div>{coach.firstName}'s plans</div>
                            <div className={classes.FindNewButton}
                                 onClick={() => history.push('/coaches')}>Find a new coach</div>
                        </div>
                        {subscriptionPlans.map(subscriptionPlan => (
                            <div className={classes.PlanWrapper}>
                                <Plan player={player}
                                      plan={subscriptionPlan}
                                      coach={coach}
                                      isActive={!!currentSubscription && currentSubscription.plan.stripePriceId === subscriptionPlan.stripePriceId}/>
                            </div>
                        ))}
                        <div onClick={close} className={classes.Close}>
                            <img src={XMark} />
                        </div>
                    </>
                )}
            </div>
        </Popup>
    )
}

export default ChangePopup;
