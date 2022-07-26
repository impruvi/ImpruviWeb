import classes from './CoachCard.module.css';
import {useEffect, useRef, useState} from "react";
import {useHistory} from "react-router-dom";

const CoachCard = ({coach}) => {

    const [height, setHeight] = useState();
    const [width, setWidth] = useState();
    const history = useHistory();
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef();

    useEffect(() => {
        if (!!ref.current) {
            setHeight(ref.current.offsetWidth * 1.75);
            setWidth(ref.current.offsetWidth);
        }
    }, [ref]);

    return (
        <div className={classes.Container}
             style={!!height ? {height: height} : {}}
             ref={ref}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)} onClick={() => history.push(`/coaches/${coach.coachId}`)}>
            <img src={coach.cardImage.fileLocation}
                 className={isHovered ? classes.ImageHovered : classes.Image}
            />
            <div className={classes.Overlay}>
                <div className={classes.Name} style={{fontSize: width/ 8}}>{coach.firstName}</div>
                <div className={classes.Name} style={{fontSize: width/ 8}}>{coach.lastName}</div>
                <div className={classes.Bar}/>
                <div className={classes.Location} style={{fontSize: width/ 14}}>{coach.location}</div>
                <div className={classes.Team} style={{fontSize: width/ 14}}>{coach.team}</div>
            </div>
        </div>
    );
};

export default CoachCard;