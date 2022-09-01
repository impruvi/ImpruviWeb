import React from 'react';
import classes from './TextAreaSimple.module.css';

const TextAreaSimple = ({error, value, placeholder, onChange}) => {

    const containerClasses = [classes.TextArea];
    if (!!error) {
        containerClasses.push(classes.TextAreaError);
    }

    return (
        <div className={classes.Container}>
            <textarea className={containerClasses.join(' ')}
                      value={value}
                      placeholder={placeholder}
                      onChange={e => onChange(e.target.value)}/>
            {!!error &&
            <div className={classes.Error}>
                <i className="fas fa-exclamation-circle"/> {error}
            </div>
            }
        </div>
    );
}

export default TextAreaSimple;
