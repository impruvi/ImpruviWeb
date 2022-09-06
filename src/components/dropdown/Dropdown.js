import classes from './Dropdown.module.css';

const Dropdown = ({options, defaultOption, onSelect}) => {

    const isSelected = (option, idx) => {
        if (!defaultOption) {
            return idx === 0;
        } else {
            return defaultOption.displayValue === option.displayValue;
        }
    }

    return (
        <select className={classes.Container} onSelect={onSelect}>
            {options.map((option, idx) => (
                <option value={option.value}
                        selected={isSelected(option, idx)}
                        className={classes.Option}>
                    {option.displayValue}
                </option>
            ))}
        </select>
    )
}

export default Dropdown;
