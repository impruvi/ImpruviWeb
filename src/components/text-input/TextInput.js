import React, {useRef, useState} from 'react';
import classes from './TextInput.module.css';

const TextInput = ({value, isDisabled, error, type, onChange, onKeyDown, icon, label}) => {

    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef();

    const onFocusIn = () => {
        setIsFocused(true);
    };

    const onFocusOut = () => {
        setIsFocused(false);
    };

    const labelClass = isFocused || value
        ? classes.LabelFocused
        : classes.LabelUnfocused;

    const containerClasses = [classes.Container];
    if (isFocused && !isDisabled && !error) {
        containerClasses.push(classes.ContainerFocused);
    }
    if (!!error) {
        containerClasses.push(classes.ContainerError);
    }

    return (
        <div className={classes.ContainerOuter}>
            <div className={containerClasses.join(' ')}>
                <div className={labelClass} onClick={() => this.state.ref.current.focus()}>{label}</div>
                <input ref={ref}
                       type={type}
                       value={value}
                       onChange={onChange}
                       onFocus={onFocusIn}
                       onBlur={onFocusOut}
                       onKeyDown={onKeyDown}
                       disabled={isDisabled}/>
                <div className={classes.Icon}>
                    <i className={icon}/>
                </div>
            </div>
            {!!error &&
            <div className={classes.Error}>
                <i className="fas fa-exclamation-circle"/> {error}
            </div>
            }
        </div>
    );
}

export default TextInput;
