import Header from "../../components/header/Header";
import classes from './ChooseCoach.module.css';
import {useHistory} from "react-router-dom";
import Button from "../../components/button/Button";

const ChooseCoach = () => {
    const history = useHistory();

    return (
        <div>
            <Header />
            <div className={classes.List}>
                <div className={classes.Title}>
                    Choose your coach
                </div>
                <div className={classes.Item}>
                    <div className={classes.ImageContainer}>
                        <img src={'https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/washington.sidearmsports.com/images/2018/9/14/UW_MSOC_SPU_049.JPG'} />
                    </div>
                    <div className={classes.TextContainer}>
                        <div className={classes.Name}>
                            Luke Hauswirth
                        </div>
                        <div className={classes.Description}>
                            <span className={classes.Bold}>Rating:</span> 4.9/5
                        </div>
                        {/*<div className={classes.Description}>*/}
                        {/*    <span className={classes.Bold}>Time to provide feedback:</span> 4 hrs 26 min*/}
                        {/*</div>*/}
                        <div className={classes.Description}>
                            <span className={classes.Bold}>Position:</span> Central midfield
                        </div>
                        <div className={classes.Description}>
                            <span className={classes.Bold}>Experience:</span>
                            <div>4 years D1 at UW</div>
                            <div>Played professionally</div>
                        </div>
                        <div className={classes.Description}>
                            <span className={classes.Bold}>About Luke:</span>
                            Luke Hauswirth (born October 11, 1995) is an American soccer player who plays as a defender.
                        </div>
                        <div className={classes.Button}>
                            <Button text={'Select as coach'} route={'/questionnaire'} />
                            <div className={classes.Info}>
                                <i className="fa-regular fa-circle-info" />
                                Selecting Luke will notify him that you would like to begin training.
                                He will reach out to you to schedule your intro call. After the intro
                                call he will set up a schedule in your dashboard for you.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.Item}>
                    <div className={classes.ImageContainer}>
                        <img src={'https://static.hudl.com/users/prod/7326802_99ac78d47c744f259f66a5b89e4f4d7a.jpg'} />
                    </div>
                    <div className={classes.TextContainer}>
                        <div className={classes.Name}>
                            Henry Grein
                        </div>
                        <div className={classes.Description}>
                            <span className={classes.Bold}>Rating:</span> 4.9/5
                        </div>
                        {/*<div className={classes.Description}>*/}
                        {/*    <span className={classes.Bold}>Time to provide feedback:</span> 4 hrs 26 min*/}
                        {/*</div>*/}
                        <div className={classes.Description}>
                            <span className={classes.Bold}>Position:</span> Central midfield
                        </div>
                        <div className={classes.Description}>
                            <span className={classes.Bold}>Experience:</span>
                            <div>4 years D1 at UW</div>
                            <div>Played professionally</div>
                        </div>
                        <div className={classes.Description}>
                            <span className={classes.Bold}>About Henry: </span>
                            Henry has been working as a soccer coach for the last 8 years.
                            He loves working with kids and coaching the beautiful game.
                        </div>
                        <div className={classes.Button}>
                            <Button text={'Select as coach'} route={'/questionnaire'} />
                            <div className={classes.Info}>
                                <i className="fa-regular fa-circle-info" />
                                Selecting Luke will notify him that you would like to begin training.
                                He will reach out to you to schedule your intro call. After the intro
                                call he will set up a schedule in your dashboard for you.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ChooseCoach;
