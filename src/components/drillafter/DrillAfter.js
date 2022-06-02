import classes from './DrillAfter.module.css';
import Angle1 from "../../assets/videos/ToeTouches1.mov";
import Angle2 from "../../assets/videos/ToeTouches2.mov";
import Feedback from "../../assets/videos/Feedback.mov";
import {useState} from "react";
import Video from "../video/Video";

const Tab = {
    Demo: 'Demo',
    YourSubmission: 'YourSubmission',
    Feedback: 'Feedback',
}

const Drill = ({text, autoPlay}) => {

    const [selectedTab, setSelectedTab] = useState(Tab.Feedback);

    return (
        <div className={classes.Container}>
            <div className={classes.Title}>{text}</div>
            <div className={classes.Content}>
                <div>
                    <div className={classes.Video}>
                        <Video src={Angle1} muted={true} autoPlay={autoPlay} loop={true} isHidden={selectedTab !== Tab.Demo} />
                        <Video src={Angle2} muted={true} autoPlay={autoPlay} loop={true} isHidden={selectedTab !== Tab.YourSubmission} />
                        <Video src={Feedback} muted={false} autoPlay={autoPlay} loop={true} isHidden={selectedTab !== Tab.Feedback} />
                        <div className={classes.Buttons}>
                            <div className={selectedTab === Tab.Demo ? [classes.ButtonSecondary, classes.ButtonPrimary].join(' ') : classes.ButtonPrimary}
                                 onClick={() => setSelectedTab(Tab.Demo)}>
                                {/*<i className="fa-light fa-circle-play" />*/}
                                Demo
                            </div>
                            <div className={selectedTab === Tab.YourSubmission ? [classes.ButtonSecondary, classes.ButtonPrimary].join(' ') : classes.ButtonPrimary}
                                 onClick={() => setSelectedTab(Tab.YourSubmission)}>
                                {/*<i className="fa-light fa-user" />*/}
                                Your submission
                            </div>
                            <div className={selectedTab === Tab.Feedback ? [classes.ButtonSecondary, classes.ButtonPrimary].join(' ') : classes.ButtonPrimary}
                                 onClick={() => setSelectedTab(Tab.Feedback)}>
                                {/*<i className="fa-light fa-video" />*/}
                                Feedback
                            </div>
                        </div>
                        <div className={classes.DrillTextSectionFeedback}>
                            <div className={classes.Coach}>
                                <img src={'https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/e/64/e64c6a04-c183-51f4-ab33-b1a2772be0d2/5d685ba313695.image.jpg'} />
                            </div>

                            {/*<div className={classes.DrillTextSubtitle}>Feedback</div>*/}
                            <div className={classes.DrillTextContentFeedback}>
                                <div>Hey good work! make sure you keep your head up. If you mess up that's a good thing! that means
                                    the drill is challenging you</div>
                                <div>Keep you head down</div>
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
