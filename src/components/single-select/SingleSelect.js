import classes from './SingleSelect.module.css';
import RadioButton from "../radio-button/RadioButton";

const SingleSelect = ({options, value, onChange}) => {
    return (
        <div>
            {options.map(option => (
                <div className={classes.OptionContainer}  onClick={() => onChange(option)}>
                    <RadioButton isActive={value === option} />
                    <div className={classes.Text}>{option}</div>
                </div>
            ))}
        </div>
    )
}

export default SingleSelect;