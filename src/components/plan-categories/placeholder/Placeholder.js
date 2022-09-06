import React from 'react';

import classes from './Placeholder.module.css';

const PlaceHolder = () => {
    return (
        <>
            <div className={classes.LinearBackground} />
            <div className={classes.LinearBackground} />
            <div className={classes.LinearBackground} />
        </>
    );
}

export default PlaceHolder;
