import classes from './Select.module.css';
import {useState} from "react";

const Select = ({options}) => {
    const [selected, setSelected] = useState('');

    return (
        <div className={classes.Container}>
            {options.map(option => (
                <div className={option === selected ? [classes.Option, classes.OptionSelected].join(' ') : classes.Option} onClick={() => setSelected(option)}>
                    {option}
                </div>
            ))}
        </div>
    )
}

export default Select;
