import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import classes from './CoachNotified.module.css';

const CoachNotified = () => {

    return (
        <div>
            <Header />
            <div className={classes.Container}>
                <div className={classes.SectionLeft}>
                    <div>
                        <div className={classes.Title}>Luke Hauswirth</div>
                        <div className={classes.Resume}>
                            <div className={classes.ResumePoint}>All pac-12</div>
                            <div className={classes.ResumePoint}>Second best player of his generation</div>
                            <div className={classes.ResumePoint}>Most tap-ins in a season</div>
                            <div className={classes.ResumePoint}>Penalty merchant</div>
                        </div>
                    </div>
                    <div className={classes.Submit}>
                        <Button text={'Select as coach'} route={'/questionnaire'} />
                        <div className={classes.Info}>
                            <i className="fa-regular fa-circle-info" />
                            Selecting Luke will notify him that you would like to begin training.
                            He will reach out to you to schedule your intro call. After the intro
                            call he will set up a schedule in your dashboard for you.
                        </div>
                    </div>
                </div>
                <div className={classes.SectionRight}>
                    <img src={'https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/washington.sidearmsports.com/images/2018/9/14/UW_MSOC_SPU_049.JPG'} />
                </div>
            </div>
        </div>
    );

}

export default CoachNotified;
