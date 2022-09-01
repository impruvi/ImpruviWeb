import classes from './Coach.module.css';
import {useHistory, useParams} from "react-router-dom";
import useHttpClient from "../../hooks/useHttpClient";
import React, {useCallback, useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth";
import {hasPlayerCompletedQuestionnaire} from "../../util/playerUtil";
import Desktop from "./desktop/Desktop";
import Mobile from "./mobile/Mobile";
import {isUUID} from "../../util/uuidUtil";
import {Helmet} from "react-helmet";

const Coach = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [player, setPlayer] = useState();
    const [coach, setCoach] = useState();

    const history = useHistory();
    const {slug} = useParams();
    const {playerId} = useAuth();

    const {httpClient} = useHttpClient();

    const onChooseCoach = () => {
        if (hasPlayerCompletedQuestionnaire(player)) {
            history.push(`/coaches/${coach.coachId}/choose-plan`)
        } else {
            history.push(`/coaches/${coach.coachId}/questionnaire`)
        }
    }

    const initialize = useCallback(async () => {
        if (!slug) {
            return;
        }
        setIsLoading(true);
        try {
            const [coach, player] = await Promise.all([
                isUUID(slug) ? httpClient.getCoach(slug) : httpClient.getCoachBySlug(slug), // kept for backwards compatibility if coaches had sent their link anywhere
                !!playerId ? httpClient.getPlayer(playerId) : Promise.resolve()
            ]);
            setCoach(coach);
            setPlayer(player)
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, [httpClient, slug, playerId]);

    useEffect(() => {
        window.scrollTo(0, 0);
        initialize();
    }, [initialize]);

    return (
        <>
            {!!coach && (
                <Helmet>
                    <title>Train with {coach.firstName} {coach.lastName} - Impruvi</title>
                    <meta name="description" content={`Train with ${coach.firstName} ${coach.lastName} from anywhere in the world. Receive custom training plans and video feedback for each drill you perform.`}/>
                </Helmet>
            )}
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
