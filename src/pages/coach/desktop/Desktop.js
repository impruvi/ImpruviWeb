import classes from "./Desktop.module.css";
import Spinner from "../../../components/spinner/Spinner";
import RedCircleCheck from "../../../assets/RedCircleCheck.png";
import ArrowRight from "../../../assets/ArrowRightWhiteThick.png";
import Tabs from "../tabs/Tabs";
import FrequentlyAskedQuestions from "../../../components/faq/FrequentlyAskedQuestions";
import Footer from "../../../components/footer/Footer";
import {useHistory} from "react-router-dom";
import SubmitButton from "../../../components/submit-button/SubmitButton";

const Desktop = ({coach, player, isLoading, onChooseCoach}) => {

    const history = useHistory();

    return (
        <div className={classes.Container} style={!!coach ? {
            backgroundImage: `url(${coach.backgroundImage.fileLocation})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        } : {}}>
            <div className={classes.Content}>
                {isLoading && (
                    <div className={classes.SpinnerContainer}>
                        <Spinner />
                    </div>
                )}
                {!isLoading && (
                    <>
                        <div className={classes.Overview}>
                            <div className={classes.Title}>{coach.firstName} {coach.lastName}</div>
                            <div className={classes.Subtitle}>Specializes in {!!coach.focusAreas && coach.focusAreas.join(', ').replace(/, ([^,]*)$/, ' and $1')}</div>

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
                                <SubmitButton className={classes.ButtonPrimary} onClick={onChooseCoach}>
                                    Choose coach
                                    <img src={ArrowRight} />
                                </SubmitButton>

                                <div className={classes.ButtonSecondary} onClick={() => history.push('/how-it-works')}>
                                    How it works
                                </div>
                            </div>
                        </div>

                        <div className={classes.TabsWrapper}>
                            <Tabs coach={coach} player={player}/>
                        </div>
                        <FrequentlyAskedQuestions />
                    </>
                )}
                <Footer mode={'dark'}/>
            </div>
        </div>
    )
}

export default Desktop;