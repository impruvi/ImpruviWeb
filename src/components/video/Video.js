import {useEffect, useRef, useState} from "react";
import classes from './Video.module.css';

const Video = ({src, isHidden, muted, autoPlay, loop = true, playbackRate = 1}) => {
    const ref = useRef();
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [shouldShowPlayIcon, setShouldShowPlayIcon] = useState(false);

    const onClick = () => {
        if (isPlaying) {
            ref.current.pause();
            setIsPlaying(false);
            setShouldShowPlayIcon(true);
        } else {
            ref.current.play();
            setIsPlaying(true);
            setShouldShowPlayIcon(false);
        }
    }

    useEffect(() => {
        ref.current.playbackRate = playbackRate;
    }, [ref, playbackRate])

    return (
        <div className={classes.Container} onClick={onClick} style={isHidden ? {display: 'none'} : {}}>
            {shouldShowPlayIcon && (
                <div className={classes.PlayIconContainer}>
                    <i className="fa-solid fa-play" />
                </div>
            )}
            <video ref={ref} src={src} muted={muted} autoPlay={autoPlay} loop={loop} playsInline/>
        </div>
    )
}

export default Video;
