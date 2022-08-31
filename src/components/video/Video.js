import {useRef, useState} from "react";
import classes from './Video.module.css'

import PlayIcon from '../../assets/Play.png';

const Video = ({source}) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const videoRef = useRef();

    const togglePlayback = () => {
        if (!isPlaying) {
            setIsPlaying(true);
            videoRef.current.play();
        } else {
            setIsPlaying(false);
            videoRef.current.pause();
        }
    }

    return (
        <div className={classes.Container} onClick={togglePlayback}>
            <video className={classes.Video} ref={videoRef}>
                <source src={source}
                        type="video/mp4" />
            </video>
            {!isPlaying && (
                <div className={classes.PlayIconOverlay}>
                    <img src={PlayIcon} />
                </div>
            )}
        </div>
    )
}

export default Video;
