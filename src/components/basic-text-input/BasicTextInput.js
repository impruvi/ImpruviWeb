import React, {useState} from 'react';
import classes from './BasicTextInput.module.css';
import emailRegex from 'email-regex';
import urlRegex from 'url-regex';
import {InputType} from '../../constants/inputTypes.constants';

const BasicTextInput = ({isDisabled, type, value, error, onChange, placeholder, maxLength}) => {

    const containerClasses = [classes.Container];
    if (!!error) {
        containerClasses.push(classes.ContainerError);
    }

    return (
        <div className={classes.ContainerOuter}>
            <div className={containerClasses.join(' ')}>
                <input type={type}
                       value={value}
                       onChange={e => onChange(e.target.value)}
                       disabled={isDisabled}
                       placeholder={placeholder}
                       maxLength={maxLength}/>
            </div>
            {!!maxLength &&
            <div className={classes.CharacterCounter}>
                {!!value ? value.length : 0} of {maxLength} characters used
            </div>
            }
            {!!error &&
            <div className={classes.Error}>
                <i className="fas fa-exclamation-circle"/> {error}
            </div>
            }
        </div>
    );
}

export default BasicTextInput;
