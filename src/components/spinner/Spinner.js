import React from 'react';
import classes from './Spinner.module.css';

const Spinner = () => {
    return (
        <div className={classes.Container}>
            <div className={classes.Spinner}/>
        </div>
    );
};

export default Spinner;