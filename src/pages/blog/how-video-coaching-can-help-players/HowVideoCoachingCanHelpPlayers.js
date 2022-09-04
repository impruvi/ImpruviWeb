import classes from '../Blog.module.css';
import SubmitButton from "../../../components/submit-button/SubmitButton";
import {useHistory} from "react-router-dom";
import {Helmet} from "react-helmet";
import React, {useEffect} from "react";

const HowVideoCoachingCanHelpPlayers = () => {

    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>How video coaching can help players - Impruvi</title>
                <meta name="description" content="Learn how video coaching can help you develop as a player."/>
            </Helmet>

            <div className={classes.Container}>
                <h1>How video coaching can help players</h1>
                <img src={'https://prod-impruvi-media-bucket.s3.us-west-2.amazonaws.com/blog/how-video-coaching-can-help-players/primary.jpeg'} />
                <h2>Training on your own is required for growth, but it’s hard to do it properly</h2>
                <div className={classes.Paragraph}>
                    As a youth soccer player, training on your own is a requirement for getting to the next level.
                </div>
                <div className={classes.Paragraph}>
                    However, training on your own properly is difficult. What drills should you do? How do you know if you are doing them correctly? Private training is great, but it is impossible to get enough of it to be meaningful.
                </div>
                <div className={classes.Paragraph}>
                    Our solution solves these problems. On the app, your coach will build you a training plan with drills custom picked for your development, and provide video analysis for each drill recording you submit back to them. Complete these trainings from your garage, backyard, or local park. Anywhere, anytime.
                </div>
                <h2>How does video coaching work?</h2>
                <ol className={classes.Paragraph}>
                    <li>
                        Choose an expert coach to work with. Your coach will build you a personalized training plan with videos for each drill in the plan.
                    </li>
                    <li>
                        Directly on the app, record yourself for 30 seconds completing each drill in your plan.
                    </li>
                    <li>
                        Within 24 hours, your coach will provide detailed video analysis of your submission.
                    </li>
                    <li>
                        Apply the feedback to your next training session or game.
                    </li>
                </ol>
                <h2>Convenience</h2>
                <div className={classes.Paragraph}>
                    It is no doubt that in-person private training and club training help you improve. But you can only do so much of it. It is not feasible to change your entire schedule and drive across the city for in-person sessions every day. Yet, players are often left wanting and needing more.
                </div>
                <div className={classes.Paragraph}>
                    With imprüvi, you will have access to top tier training and expert coaching anytime. Whether you train in your garage before school, or from a park while on vacation, imprüvi was designed for your convenience.
                </div>
                <h2>Who can benefit from video coaching?</h2>
                <div className={classes.Paragraph}>
                    Whether your dream is to make the A team or to play professionally, players from all levels can benefit from video coaching.
                </div>
                <div className={classes.Paragraph}>
                    Our expert coaches have played and coached at almost every level. They know exactly what it takes to help you achieve your goals.
                </div>
                <h2>Why our coaches?</h2>
                <div className={classes.Paragraph}>
                    Our collection of coaches have played and coached at almost every level. Whether you want to train on the app with your private coach who you know well, or with a current MLS or NWSL player, we’ve got you covered.
                </div>
                <div className={classes.ActionButtonContainer}>
                    <SubmitButton className={classes.ActionButton} onClick={() => history.push('/')}>
                        Start training today
                    </SubmitButton>
                </div>
            </div>
        </>
    );
}

export default HowVideoCoachingCanHelpPlayers;
