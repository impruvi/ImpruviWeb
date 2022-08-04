import classes from './QuestionnaireSlide.module.css';
import MultiSelect from "../../../components/multi-select/MultiSelect";
import ActionButtons from "../action-buttons/ActionButtons";

const options = [
    'Park',
    'Backyard',
    'Inside (garage, living room etc.)',
    'Other'
]

const Location = ({trainingLocations, setTrainingLocations, advance, goBack}) => {
    return (
        <div>
            <div className={classes.Title}>Where will you train?</div>
            <div className={classes.Subtitle}>Select all that apply</div>
            <MultiSelect options={options} values={trainingLocations} onChange={setTrainingLocations}/>
            <ActionButtons onPrimaryClick={advance}
                           onSecondaryClick={goBack}/>
        </div>
    )
}

export default Location;