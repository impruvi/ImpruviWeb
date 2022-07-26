import classes from './QuestionnaireSlide.module.css';
import ActionButtons from "../action-buttons/ActionButtons";

const Done = ({advance}) => {
    return (
        <div className={classes.Container}>
            <div className={classes.Title}>Done!</div>
            <div className={classes.Subtitle}>Once you checkout, your coach will start putting together your initial plan</div>
            <ActionButtons onPrimaryClick={advance} shouldShowSecondary={false}/>
        </div>
    )
}

export default Done;