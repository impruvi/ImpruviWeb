import React from 'react';
import classes from './SubmitButton.module.css';
import Spinner from "../spinner/Spinner";

const SubmitButton = ({isSubmitting, isDisabled, isFullWidth, className, children, onClick}) => {

    const handleClick = (e) => {
        e.stopPropagation();
        if (!isSubmitting && !isDisabled) {
            onClick();
        }
    };

    const containerClasses = [classes.Container];
    if (isSubmitting) {
        containerClasses.push(classes.ContainerSubmitting);
    }
    if (isDisabled) {
        containerClasses.push(classes.ContainerSubmitting);
    }
    if (isFullWidth) {
        containerClasses.push(classes.FullWidth);
    }
    if (className) {
        containerClasses.push(className);
    }
    return (
        <div className={containerClasses.join(' ')} onClick={handleClick}>
            <div className={classes.Label}>
                {children}
            </div>
            {isSubmitting &&
            <div className={classes.SpinnerContainer}>
                <Spinner/>
            </div>
            }
        </div>
    );
}

export default SubmitButton;
