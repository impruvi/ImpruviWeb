import classes from './QuestionnaireSlide.module.css';
import SingleSelect from "../../../components/single-select/SingleSelect";
import ActionButtons from "../action-buttons/ActionButtons";

const options = [
    '5-10',
    '10-15',
    '15-20',
    '20+'
]

const Age = ({ageRange, setAgeRange, advance, goBack}) => {
    return (
        <div className={classes.Container}>
            <div className={classes.Title}>How old are you</div>
            <SingleSelect options={options} value={ageRange} onChange={setAgeRange}/>
            <ActionButtons isPrimaryDisabled={!ageRange}
                           onPrimaryClick={advance}
                           onSecondaryClick={goBack}/>
        </div>
    )
}

export default Age;