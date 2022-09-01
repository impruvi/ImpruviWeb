import classes from './QuestionnaireSlide.module.css';
import TextAreaSimple from "../../../components/text-area-simple/TextAreaSimple";
import ActionButtons from "../action-buttons/ActionButtons";

const LongTermGoal = ({longTermGoal, setLongTermGoal, advance, goBack, isSubmitting}) => {
    return (
        <div className={classes.Container}>
            <div className={classes.Title}>What are your long term goals?</div>
            <div className={classes.Subtitle}>ex. make the select team, play soccer in college</div>
            <div className={classes.TextInputWrapper}>
                <TextAreaSimple value={longTermGoal} placeholder={'Type here...'} onChange={setLongTermGoal}/>
            </div>
            <ActionButtons onPrimaryClick={advance}
                           isPrimarySubmitting={isSubmitting}
                           onSecondaryClick={goBack}
                           isPrimaryDisabled={!longTermGoal}/>
        </div>
    )
}

export default LongTermGoal;
