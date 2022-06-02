import classes from './Drill.module.css';
import Angle1 from "../../assets/videos/ToeTouches1.mov";
import Angle2 from "../../assets/videos/ToeTouches2.mov";

import {useHistory} from "react-router-dom";
import {useRef, useState} from "react";
import Video from "../video/Video";

const AngleEnum = {
    Angle1: 'Angle1',
    Angle1Slow: 'Angle1Slow',
    Angle2: 'Angle2',
    Angle2Slow: 'Angle2Slow'
}

const Angle = ({text, icon, isSelected, onClick}) => {
    return (
        <div className={isSelected ? classes.OptionSelected : classes.Option} onClick={onClick}>
            <div className={classes.Icon}>
                <i className={icon} />
            </div>
            <div className={classes.ButtonText}>
                {text}
            </div>
        </div>
    )
}

const Drill = ({text}) => {
    const [selected, setSelected] = useState(AngleEnum.Angle1);
    const [playbackRate, setPlaybackRate] = useState(1);

    const toggleSlowMotion = () => {
        if (playbackRate === 1) {
            setPlaybackRate(.5);
        } else {
            setPlaybackRate(1);
        }
    }

    return (
        <div className={classes.Container}>
            <div className={classes.Title}>{text} <span className={classes.Duration}>(15 minutes)</span></div>
            <div className={classes.Content}>
                <div>
                    <div className={classes.Video}>
                        <Video src={Angle1} muted={true} autoPlay={true} isHidden={selected !== AngleEnum.Angle1} playbackRate={playbackRate}/>
                        <Video src={Angle2} muted={true} autoPlay={true} isHidden={selected !== AngleEnum.Angle2} playbackRate={playbackRate}/>
                        <div className={classes.SlowMotionContainer}>
                            <div className={playbackRate === 1 ? classes.SlowMotion : classes.SlowMotionActive} onClick={toggleSlowMotion}>
                                Slow motion
                            </div>
                        </div>
                        <div className={classes.Options}>
                            <div>
                                <Angle text={'Front view'} icon={"fa-light fa-video"} onClick={() => setSelected(AngleEnum.Angle1)} isSelected={selected === AngleEnum.Angle1}/>
                                <Angle text={'Side view'} icon={"fa-light fa-video"} onClick={() => setSelected(AngleEnum.Angle2)} isSelected={selected === AngleEnum.Angle2}/>
                            </div>
                        </div>
                        <div className={classes.Buttons} >
                            <div className={classes.ButtonPrimary}>
                                <i className="fa-regular fa-plus" />
                                Submit your video
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.TextContent}>
                    <div className={classes.DrillName}>
                        Name of drill
                    </div>
                    <div className={classes.DrillTextSection}>
                        <div className={classes.DrillTextSubtitle}>Description</div>
                        <div className={classes.DrillTextContent}>
                            This drill requires you to run around in a circle. Run around in the circle as fast as you
                            can like a maniac.
                        </div>
                    </div>
                    <div className={classes.DrillTextSection}>
                        <div className={classes.DrillTextSubtitle}>Why this drill?</div>
                        <div className={classes.DrillTextContent}>
                            I want you doing this drill to focus on keeping your head up while you dribble. This will increase
                            your awareness
                        </div>
                    </div>
                    <div className={classes.DrillTextSection}>
                        <div className={classes.DrillTextSubtitle}>Number of repetitions</div>
                        <div className={classes.DrillTextContent}>
                            <div>Repeat this drill 4 times</div>
                        </div>
                    </div>
                    <div className={classes.DrillTextSection}>
                        <div className={classes.DrillTextSubtitle}>Tips</div>
                        <div className={classes.DrillTextContent}>
                            <div>Focus on keeping your knees up</div>
                            <div>Keep you head down</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drill;
