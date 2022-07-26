import classes from './QuestionnaireSlide.module.css';
import MultiSelect from "../../../components/multi-select/MultiSelect";
import ActionButtons from "../action-buttons/ActionButtons";

const options = [
    'balls',
    'cones',
    'goal',
    'agility ladder'
]

const Equipment = ({availableEquipment, setAvailableEquipment, advance, goBack}) => {
    return (
        <div>
            <div className={classes.Title}>What equipment do you have access to?</div>
            <div className={classes.Subtitle}>Select all that apply</div>
            <MultiSelect options={options} values={availableEquipment} onChange={setAvailableEquipment}/>
            <ActionButtons onPrimaryClick={advance}
                           onSecondaryClick={goBack}/>
        </div>
    )
}

export default Equipment;