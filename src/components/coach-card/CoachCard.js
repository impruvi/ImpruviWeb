import classes from './CoachCard.module.css';
import {useEffect, useRef, useState} from "react";
import {useHistory} from "react-router-dom";
import useGoogleAnalyticsClient from "../../hooks/useGoogleAnalyticsClient";

const CoachCard = ({coach, shouldConvertToLandscapeOnMobile}) => {

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const history = useHistory();
    const [isHovered, setIsHovered] = useState(false);

    const ref = useRef();
    const {gaClient} = useGoogleAnalyticsClient();

    const onResize = () => {
        const isMobile = window.innerWidth <= 700;

        if (!!ref.current) {
            if (isMobile && shouldConvertToLandscapeOnMobile) {
                setHeight(ref.current.offsetWidth * .45);
                setWidth(ref.current.offsetWidth);
            } else {
                setHeight(ref.current.offsetWidth * 1.75);
                setWidth(ref.current.offsetWidth);
            }
        }
        setIsMobile(isMobile);
    }

    const onClick = () => {
        gaClient.sendGeneralEvent("choose_coach");
        history.push(`/coaches/${coach.slug}`);
    }


    useEffect(() => {
        onResize();
    }, [onResize]);

    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize)
    }, [onResize]);

    return (
        <div className={classes.Container}
             style={!!height ? {height: height} : {}}
             ref={ref}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
             onClick={onClick}>
            {(!isMobile || !shouldConvertToLandscapeOnMobile) && (
                <img src={coach.cardImagePortrait?.fileLocation}
                     className={isHovered ? classes.ImageHovered : classes.Image}
                />
            )}
            {isMobile && shouldConvertToLandscapeOnMobile && (
                <img src={coach.cardImageLandscape?.fileLocation}
                     className={isHovered ? classes.ImageHovered : classes.Image}
                />
            )}
            <div className={shouldConvertToLandscapeOnMobile && isMobile ? classes.OverlayLandscape : classes.Overlay}>
                <div className={classes.Name} style={{fontSize: Math.min(height/ 6, width / 8)}}>{coach.firstName}</div>
                <div className={classes.Name} style={{fontSize: Math.min(height/ 6, width / 8)}}>{coach.lastName}</div>
                <div className={classes.Bar}/>
                <div className={classes.Location} style={{fontSize: Math.min(height/ 12, width / 14)}}>{coach.location}</div>
                <div className={classes.Team} style={{fontSize: Math.min(height/ 12, width / 14)}}>{coach.team}</div>
            </div>
        </div>
    );
};

export default CoachCard;
