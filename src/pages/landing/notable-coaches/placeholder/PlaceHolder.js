import React from 'react';

import classes from './PlaceHolder.module.css';

const PlaceHolder = () => {
    return (
        <div className={classes.Container}>
            <div className={classes.LinearBackground} />
            <div className={classes.LinearBackground} />
            <div className={[classes.LinearBackground, classes.MobilHidden].join(' ')} />
            <div className={[classes.LinearBackground, classes.MobilHidden].join(' ')} />
        </div>
    );
}

export default PlaceHolder;
