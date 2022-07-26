import classes from './Coach.module.css';
import {useHistory, useParams} from "react-router-dom";
import useHttpClient from "../../hooks/useHttpClient";
import {useCallback, useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth";
import {hasPlayerCompletedQuestionnaire} from "../../util/playerUtil";
import Desktop from "./desktop/Desktop";
import Mobile from "./mobile/Mobile";

const Coach = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [player, setPlayer] = useState();
    const [coach, setCoach] = useState();

    const history = useHistory();
    const {coachId} = useParams();
    const {playerId} = useAuth();

    const {httpClient} = useHttpClient();

    const onChooseCoach = () => {
        if (hasPlayerCompletedQuestionnaire(player)) {
            history.push(`/coaches/${coachId}/choose-plan`)
        } else {
            history.push(`/coaches/${coachId}/questionnaire`)
        }
    }

    const initialize = useCallback(async () => {
        if (!coachId) {
            return;
        }
        setIsLoading(true);
        try {
            const [coach, player] = await Promise.all([
                httpClient.getCoach(coachId),
                !!playerId ? httpClient.getPlayer(playerId) : Promise.resolve()
            ]);
            setCoach(coach);
            setPlayer(player)
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, [httpClient, coachId, playerId]);

    useEffect(() => {
        window.scrollTo(0, 0);
        initialize();
    }, [initialize]);

    return (
        <>
            <div className={classes.Desktop}>
                <Desktop coach={coach}
                         player={player}
                         isLoading={isLoading}
                         onChooseCoach={onChooseCoach}/>
            </div>
            <div className={classes.Mobile}>
                <Mobile coach={coach}
                        player={player}
                        isLoading={isLoading}
                        onChooseCoach={onChooseCoach}/>
            </div>
        </>
    )
}

export default Coach;