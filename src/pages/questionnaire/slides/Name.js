import classes from './QuestionnaireSlide.module.css';
import BasicTextInput from "../../../components/basic-text-input/BasicTextInput";
import ActionButtons from "../action-buttons/ActionButtons";

const Name = ({firstName, setFirstName, lastName, setLastName, advance, goBack}) => {
    return (
        <div className={classes.Container}>
            <div className={classes.Title}>What is your name</div>
            <div className={classes.TextInputWrapper}>
                <BasicTextInput value={firstName} onChange={setFirstName} placeholder={'Enter your first name'}/>
            </div>
            <div className={classes.TextInputWrapper}>
                <BasicTextInput value={lastName} onChange={setLastName} placeholder={'Enter your last name'}/>
            </div>
            <ActionButtons onPrimaryClick={advance}
                           onSecondaryClick={goBack}
                           isPrimaryDisabled={!firstName || !lastName}/>
        </div>
    )
}

export default Name;