import classes from './QuestionnaireSlide.module.css';
import ActionButtons from "../action-buttons/ActionButtons";

const Intro = ({coach, advance}) => {
    return (
        <div className={classes.Container}>
            <div className={classes.Title}>Tell {coach.firstName} about yourself</div>
            <div className={classes.Subtitle}>Your coach will use this information to put together your custom training plan</div>
            <ActionButtons onPrimaryClick={advance}
                           shouldShowSecondary={false}/>
        </div>
    )
}

export default Intro;