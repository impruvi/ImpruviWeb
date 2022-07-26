import classes from './MultiSelect.module.css';
import Check from '../../assets/CheckWhite.png';

const MultiSelect = ({options, values, onChange}) => {

    const optionClicked = (option) => {
        if (!!values && values.indexOf(option) >= 0) {
            onChange(values.filter(o => o !== option));
        } else {
            onChange([...values, option]);
        }
    }

    const isActive = (option) => {
        return !!values && values.indexOf(option) >= 0;
    }

    return (
        <div>
            {options.map(option => (
                <div className={classes.OptionContainer}  onClick={() => optionClicked(option)}>
                    <div className={isActive(option) ? [classes.OptionToggle, classes.OptionToggleActive].join(' ') : classes.OptionToggle}>
                        {isActive(option) && (
                            <img src={Check} />
                        )}
                    </div>
                    <div>{option}</div>
                </div>
            ))}
        </div>
    )
}

export default MultiSelect;