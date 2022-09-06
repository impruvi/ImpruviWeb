import classes from './Dropdown.module.css';

const Dropdown = ({options, defaultOption, onSelect}) => {

    const isSelected = (option, idx) => {
        if (!defaultOption) {
            return idx === 0;
        } else {
            return defaultOption.label === option.label;
        }
    }

    const onChange = (event) => {
        onSelect(JSON.parse(event.target.value));
    }

    return (
        <select className={classes.Container} onChange={onChange}>
            {options.map((option, idx) => (
                <option value={JSON.stringify(option.value)}
                        selected={isSelected(option, idx)}
                        className={classes.Option}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default Dropdown;
