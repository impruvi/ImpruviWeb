import React, {useCallback, useEffect, useRef} from 'react';
import classes from './Popup.module.css';

const Popup = ({onClickOutside, children}) => {

    const wrapperRef = useRef();

    const handleClick = useCallback((event) => {
        if (!!wrapperRef && !!wrapperRef.current && !wrapperRef.current.contains(event.target) && !!onClickOutside) {
            onClickOutside();
        }
    }, [wrapperRef, onClickOutside]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
        }
    }, [handleClick]);


    return (
        <div className={classes.PopUp}>
            <div className={classes.PopUpInner} ref={wrapperRef}>
                {children}
            </div>
        </div>
    );
}

export default Popup;
