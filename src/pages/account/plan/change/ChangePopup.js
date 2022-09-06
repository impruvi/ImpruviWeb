import Popup from "../../../../components/popup/Popup";
import classes from "./ChangePopup.module.css";
import useAuth from "../../../../hooks/useAuth";
import {useCallback, useEffect, useState} from "react";
import useHttpClient from "../../../../hooks/useHttpClient";
import Spinner from "../../../../components/spinner/Spinner";
import XMark from '../../../../assets/XMarkBlack.png';
import {useHistory} from "react-router-dom";
import PlanCategories from "../../../../components/plan-categories/PlanCategories";

const ChangePopup = ({close}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [coach, setCoach] = useState();

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
            const coach = await httpClient.getCoach(player.coachId);
            setCoach(coach);
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
                        <PlanCategories coach={coach}/>
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
