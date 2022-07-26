import classes from "./Mobile.module.css";
import Spinner from "../../../components/spinner/Spinner";
import RedCircleCheck from "../../../assets/RedCircleCheck.png";
import ArrowRight from "../../../assets/ArrowRightWhiteThick.png";
import Tabs from "../tabs/Tabs";
import FrequentlyAskedQuestions from "../../../components/faq/FrequentlyAskedQuestions";
import Footer from "../../../components/footer/Footer";
import {useHistory} from "react-router-dom";

const Mobile = ({coach, player, isLoading, onChooseCoach}) => {

    return (
        <div className={classes.Container}>
            <div className={classes.Overview} style={!!coach ? {
                backgroundImage: `url(${coach.cardImagePortrait.fileLocation})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            } : {}}>
                {!isLoading && (
                    <>
                        <div className={classes.Title}>{coach.firstName} {coach.lastName}</div>
                        <div className={classes.Subtitle}>Improves your finishing, dribbling, ball mastery and speed</div>

                        <div className={classes.ActionButtons}>
                            <div className={classes.ButtonPrimary} onClick={onChooseCoach}>
                                Choose coach
                                <img src={ArrowRight} />
                            </div>
                        </div>
                    </>
                )}
            </div>

            {isLoading && (
                <div className={classes.SpinnerContainer}>
                    <Spinner />
                </div>
            )}

            {!isLoading && (
                <div className={classes.TabsWrapper}>
                    <Tabs coach={coach} player={player}/>
                </div>
            )}
            <div className={classes.FrequentlyAskedQuestionsContainer}>
                <FrequentlyAskedQuestions />
            </div>
            <div className={classes.PaddedContainer}>
                <Footer />
            </div>
        </div>
    )
}

export default Mobile;