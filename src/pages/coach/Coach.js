import classes from './Coach.module.css';
import {useHistory, useParams} from "react-router-dom";
import useHttpClient from "../../hooks/useHttpClient";
import {useCallback, useEffect, useState} from "react";
import RedCircleCheck from "../../assets/RedCircleCheck.png";
import Tabs from "./tabs/Tabs";
import FrequentlyAskedQuestions from "../../components/faq/FrequentlyAskedQuestions";
import Footer from "../../components/footer/Footer";
import ArrowRight from '../../assets/ArrowRightWhiteThick.png'
import useAuth from "../../hooks/useAuth";
import {hasPlayerCompletedQuestionnaire} from "../../util/playerUtil";
import Spinner from "../../components/spinner/Spinner";

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
        <div className={classes.Container}>
            <div className={classes.ContentOuter} style={!!coach ? {
                backgroundImage: `url(${coach.backgroundImage.fileLocation})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
            } : {}}>
                <div className={classes.Content}>
                    {isLoading && (
                        <Spinner />
                    )}
                    {!isLoading && (
                        <>
                            <div className={classes.Title}>{coach.firstName} {coach.lastName}</div>
                            <div className={classes.Subtitle}>Improves your finishing, dribbling, ball mastery and speed</div>

                            <div className={classes.Bullets}>
                                <div className={classes.Bullet}>
                                    <img src={RedCircleCheck} />
                                    Customized at home training plan
                                </div>
                                <div className={classes.Bullet}>
                                    <img src={RedCircleCheck} />
                                    Personalized notes for each drill
                                </div>
                                <div className={classes.Bullet}>
                                    <img src={RedCircleCheck} />
                                    Expert feedback for each drill you submit
                                </div>
                                <div className={classes.Bullet}>
                                    <img src={RedCircleCheck} />
                                    Drill bank and progress tracking
                                </div>
                            </div>

                            <div className={classes.ActionButtons}>
                                <div className={classes.ButtonPrimary} onClick={onChooseCoach}>
                                    Choose coach
                                    <img src={ArrowRight} />
                                </div>
                                <div className={classes.ButtonSecondary} onClick={() => history.push('/how-it-works')}>
                                    How it works
                                </div>
                            </div>

                            <div className={classes.TabsWrapper}>
                                <Tabs coach={coach} />
                            </div>
                            <FrequentlyAskedQuestions />
                        </>
                    )}
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Coach;