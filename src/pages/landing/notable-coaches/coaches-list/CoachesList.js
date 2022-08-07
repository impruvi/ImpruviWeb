import React, {useEffect, useRef, useState} from "react";
import classes from "./CoachesList.module.css";
import ArrowRightIcon from '../../../../assets/ArrowRightWhite.png';
import ArrowLeftIcon from '../../../../assets/ArrowLeftWhite.png';
import CoachCard from "../../../../components/coach-card/CoachCard";

const CoachesList = ({coaches}) => {

    const [isOverflow, setIsOverflow] = useState(false);
    const [atStart, setAtStart] = useState(false);
    const [atEnd, setAtEnd] = useState(false);
    
    const wrapperRef = useRef();

    const refreshScrollControls = () => {
        handleScroll({target: wrapperRef.current});
    }

    const handleScroll = (e) => {
        if (!e.target) {
            return;
        }

        if (e.target.scrollWidth - e.target.scrollLeft <= e.target.clientWidth + 5) {
            setAtEnd(true);
        } else {
            setAtEnd(false);
        }

        if (e.target.scrollLeft <= 5) {
            setAtStart(true);
        } else {
            setAtStart(false);
        }

        checkForOverflow();
    };

    const checkForOverflow = () => {
        let childrenWidth = 0;
        for (let i = 0; i < wrapperRef.current?.children.length; i++) {
            const childElt = wrapperRef.current?.children[i];
            childrenWidth += childElt.clientWidth + getHorizontalMargin(childElt);
        }
        if (childrenWidth > wrapperRef.current?.clientWidth) {
            setIsOverflow(true);
        } else {
            setIsOverflow(false);
        }
    }

    const getHorizontalMargin = (elt) => {
        const marginLeft = parseInt(getComputedStyle(elt).marginLeft.match(/(.*)px/)[0]);
        const marginRight = parseInt(getComputedStyle(elt).marginRight.match(/(.*)px/)[0]);
        return marginLeft + marginRight;
    }

    const scrollLeft = () => {
        wrapperRef.current?.scrollBy({left:-400, behavior: "smooth"});
        refreshScrollControls();
    }

    const scrollRight = () => {
        wrapperRef.current?.scrollBy({left:400, behavior: "smooth"});
        refreshScrollControls();
    }

    useEffect(() => {
        window.addEventListener('resize', refreshScrollControls);
        return () => {
            window.removeEventListener('resize', refreshScrollControls);
        }
    }, [refreshScrollControls]);

    useEffect(() => {
        refreshScrollControls();
    }, [refreshScrollControls, coaches]);
    
    return (
        <div className={classes.ScrollMenu}>
            <div className={classes.ScrollMenuContainer} onScroll={handleScroll} ref={wrapperRef}>
                {coaches.map(coach => (
                    <div className={classes.CoachCardWrapper} key={coach.coachId}>
                        <CoachCard coach={coach}/>
                    </div>
                    )
                )}
            </div>
            {!atStart && isOverflow &&
                <>
                    <div className={classes.ArrowLeftBackground} />
                    <div className={[classes.ArrowLeft, classes.Arrow].join(' ')} onClick={scrollLeft}>
                        <img src={ArrowLeftIcon} />
                    </div>
                </>
            }
            {!atEnd && isOverflow &&
                <>
                    <div className={classes.ArrowRightBackground} />
                    <div className={[classes.ArrowRight, classes.Arrow].join(' ')} onClick={scrollRight}>
                        <img src={ArrowRightIcon} />
                    </div>
                </>
            }
        </div>
    );
}

export default CoachesList;
