import classes from "./TextArea.module.css";
import React, {useRef, useState} from "react";


const TextArea = ({error, value, label, onChange, isDisabled}) => {

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
                <textarea ref={ref}
                       value={value}
                       onChange={onChange}
                       onFocus={onFocusIn}
                       onBlur={onFocusOut}
                       disabled={isDisabled}/>
            </div>
            {!!error &&
                <div className={classes.Error}>
                    <i className="fas fa-exclamation-circle"/> {error}
                </div>
            }
        </div>
    );
}

export default TextArea;
