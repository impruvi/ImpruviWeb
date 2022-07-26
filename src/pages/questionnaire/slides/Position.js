import classes from './QuestionnaireSlide.module.css';
import BasicTextInput from "../../../components/basic-text-input/BasicTextInput";
import ActionButtons from "../action-buttons/ActionButtons";

const Position = ({position, setPosition, advance, goBack}) => {
    return (
        <div className={classes.Container}>
            <div className={classes.Title}>What position do you play?</div>
            <div className={classes.TextInputWrapper}>
                <BasicTextInput value={position} onChange={setPosition} placeholder={'Enter your position'}/>
            </div>
            <ActionButtons onPrimaryClick={advance}
                           onSecondaryClick={goBack}
                           isPrimaryDisabled={!position}/>
        </div>
    )
}

export default Position;