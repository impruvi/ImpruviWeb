import React, {useEffect} from "react";
import classes from "../Blog.module.css";
import {Helmet} from "react-helmet";
import SubmitButton from "../../../components/submit-button/SubmitButton";
import {useHistory} from "react-router-dom";

const SpeedAndAgilityInSoccer = () => {

    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Speed and agility in soccer - Impruvi</title>
                <meta name="description" content="Learn how working on your speed and agility can make you a better soccer player."/>
            </Helmet>
            <div className={classes.Container}>
                <h1>Speed and agility in soccer</h1>
                <img src={'https://prod-impruvi-media-bucket.s3.us-west-2.amazonaws.com/blog/speed-and-agility-in-soccer/primary.png'}
                     alt={'Speed and agility in soccer'}/>
                <div className={classes.Paragraph}>
                    One often overlooked factor in improving a soccer player’s game is working on speed and agility.
                    Unlike many other sports, one rarely uses purely linear sprinting in a soccer game. In order to be
                    effective on the field, a player must have the ability to move in all directions with quickness and
                    fluidity. Drilling speed and agility can translate directly to success on the field, especially
                    at the youth level.
                </div>

                <h2>Do I need a speed and agility coach?</h2>
                <div className={classes.Paragraph}>
                    Having a speed and agility coach is not required for improvement, but it sure does help. Technique
                    is one of the most important aspects in speed and agility. You can work all day long on an agility
                    ladder, but if you don’t have the proper technique, you won’t actually get faster.
                </div>
                <div className={classes.Paragraph}>
                    A good speed and agility coach will not only be able to give you drills to work on, but will teach
                    you the proper technique for each drill. Do you want to experience expert speed and agility coaching?
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

export default SpeedAndAgilityInSoccer;
