import Popup from "../../../../components/popup/Popup";
import classes from "./ChangePopup.module.css";
import useAuth from "../../../../hooks/useAuth";
import {useState} from "react";
import {useCallback, useEffect} from "react";
import useHttpClient from "../../../../hooks/useHttpClient";
import Plan from "../../../../components/plan/Plan";
import Spinner from "../../../../components/spinner/Spinner";

const ChangePopup = ({close}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [player, setPlayer] = useState();
    const [coach, setCoach] = useState();
    const [subscriptionPlans, setSubscriptionPlans] = useState([]);

    const {httpClient} = useHttpClient();
    const {playerId} = useAuth();

    const initialize = useCallback(async () => {
        if (!playerId) {
            return;
        }
        setIsLoading(true);
        try {
            const player = await httpClient.getPlayer(playerId);
            setPlayer(player);
            const coach = await httpClient.getCoach(player.coachId);
            setCoach(coach);
            const plans = await Promise.all(
                coach.subscriptionPlanRefs.map(subscriptionPlanRef => httpClient.getSubscriptionPlan(subscriptionPlanRef))
            );
            setSubscriptionPlans(plans);
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
                            {subscriptionPlans.map(subscriptionPlan => (
                                <Plan player={player} plan={subscriptionPlan} coach={coach} />
                            ))}
                    </>
                )}
            </div>
        </Popup>
    )
}

export default ChangePopup;