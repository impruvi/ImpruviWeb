import {Helmet} from "react-helmet";
import React, {useEffect} from "react";
import classes from "../Blog.module.css";
import SubmitButton from "../../../components/submit-button/SubmitButton";
import {useHistory} from "react-router-dom";

const ThePowerOfVideoInSports = () => {

    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>The power of video in sports - Impruvi</title>
                <meta name="description" content="How video in private soccer lessons can help players. Learn to leverage video and technology to master your sport."/>
            </Helmet>
            <div className={classes.Container}>
                <h1>How video coaching can help players</h1>
                <img src={'https://prod-impruvi-media-bucket.s3.us-west-2.amazonaws.com/blog/the-power-of-video-in-sports/primary.jpeg'}
                     alt={'How video in private soccer lessons can help players'}/>
                <div className={classes.Paragraph}>
                    There is no doubt that video technology has reshaped the fabric of our society.
                    The capturing, sending, and receiving of real time events has allowed people to transmit
                    information and knowledge across traditional geographic boundaries.
                </div>
                <div className={classes.Paragraph}>
                    We are just at the tip of the iceberg with the value this technology will bring us.
                </div>
                <div className={classes.Paragraph}>
                    This value is just now being realized in sport.
                </div>
                <div className={classes.Paragraph}>
                    Sports had long been thought of as a skill that must be learned in-person.
                </div>
                <div className={classes.Paragraph}>
                    The traditional school of thought was that in order to learn, your coach must be standing
                    over your shoulder and critiquing you in real time.
                </div>
                <div className={classes.Paragraph}>
                    Video technology has completely changed this belief. I can now go on my laptop, watch a
                    YouTube video, and learn the fundamentals of any sport.
                </div>
                <div className={classes.Paragraph}>
                    While a coach may not be required for learning the fundamentals of sport, it may be
                    required for becoming an expert.
                </div>
                <div className={classes.Paragraph}>
                    The utility that a coach can bring to a player is undeniable.
                </div>
                <div className={classes.Paragraph}>
                    At impruvi, our goal is to merge the value of coaching and video technology.
                    Harness this power by sending videos back and forth with your coach on our app,
                    and become an expert in anything.
                </div>
                <div className={classes.ActionButtonContainer}>
                    <SubmitButton className={classes.ActionButton} onClick={() => history.push('/')}>
                        Start training today
                    </SubmitButton>
                </div>
            </div>
        </>
    )
}

export default ThePowerOfVideoInSports;
