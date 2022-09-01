import classes from './QuestionnaireSlide.module.css';
import TextAreaSimple from "../../../components/text-area-simple/TextAreaSimple";
import ActionButtons from "../action-buttons/ActionButtons";

const ShortTermGoal = ({shortTermGoal, setShortTermGoal, advance, goBack}) => {

    return (
        <div className={classes.Container}>
            <div className={classes.Title}>What are your goals for the next month?</div>
            <div className={classes.Subtitle}>ex. improve my left foot finishing</div>
            <div className={classes.TextInputWrapper}>
                <TextAreaSimple value={shortTermGoal} placeholder={'Type here...'} onChange={setShortTermGoal}/>
            </div>
            <ActionButtons onPrimaryClick={advance}
                           onSecondaryClick={goBack}
                           isPrimaryDisabled={!shortTermGoal}/>
        </div>
    )
}

export default ShortTermGoal;
