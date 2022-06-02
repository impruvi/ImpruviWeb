import Header from "../../components/header/Header";
import classes from './Landing.module.css';
import PhonePreview from '../../assets/Preview.png';
import {useHistory} from "react-router-dom";
import HowItWorks1 from '../../assets/img.png';
import HowItWorks2 from '../../assets/img_1.png';
import HowItWorks3 from '../../assets/img_2.png';

const Landing = () => {
    const history = useHistory();

    return (
        <div>
            <Header />
            <div className={classes.Container}>
                <div className={classes.Section}>
                    <div className={classes.MainLeft}>
                        <div className={classes.MainLeftInner}>
                            <div className={classes.Title}>
                                On-Demand Personalized Soccer Training
                            </div>
                            <div className={classes.Subtitle}>
                                Online and in-person training sessions designed by expert coaches for you.
                            </div>
                            <div className={classes.Buttons}>
                                <div className={classes.ButtonPrimary} onClick={() => history.push('/choosecoach')}>Get started</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.MainRight}>
                        <img src={PhonePreview} className={classes.PreviewImage}/>
                    </div>
                </div>
                <div className={classes.Section}>
                    <div className={classes.Steps}>
                        <div className={classes.SectionSubtitle}>
                            How it works
                        </div>

                        <div className={classes.Step}>
                            <div className={classes.Image}>
                                <img src={HowItWorks1} />
                            </div>
                            <div className={classes.HowItWorksTitle}>
                                Choose an expert coach
                            </div>
                            <div className={classes.HowItWorksContent}>
                                Meet with your coach and develop a <b>personalized at-home training plan</b>
                                designed for your needs.
                            </div>
                        </div>
                        <div className={classes.Step}>
                            <div className={classes.Image}>
                                <img src={HowItWorks2} />
                            </div>
                            <div className={classes.HowItWorksTitle}>
                                Train like a pro
                            </div>
                            <div className={classes.HowItWorksContent}>
                                <b>Watch videos</b> of your coach demonstrating the drills in your plan.
                                <b>Submit videos</b> of you completing each drill
                            </div>
                        </div>
                        <div className={classes.Step}>
                            <div className={classes.Image}>
                                <img src={HowItWorks3} />
                            </div>
                            <div className={classes.HowItWorksTitle}>
                                Improve your game
                            </div>
                            <div className={classes.HowItWorksContent}>
                                <b>Receive feedback</b> from your coach from each video you submit. Have the option
                                to <b>schedule in-person trainings</b> with your coach.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.Section}>
                    <div className={classes.FounderContainer}>
                        <div className={classes.MainLeft}>
                            <div className={classes.MainLeftInner}>
                                <div className={classes.SectionSubtitle}>
                                    Why Impruvi
                                </div>
                                <div className={classes.SectionContent}>
                                    As division 1 and professional athletes we know the training you do on your own
                                    sets you apart as a player and accelerates your growth.
                                </div>
                                <div className={classes.SectionContent}>
                                    Our solution optimizes this training while
                                    also providing you convenience and accountability along the way.
                                </div>
                            </div>
                        </div>
                        <div className={classes.MainRight}>
                            <div>
                                <img src={'https://dbukjj6eu5tsf.cloudfront.net/sidearm.sites/washington.sidearmsports.com/images/2018/9/14/UW_MSOC_SPU_147.JPG'} className={classes.FounderImage}/>
                            </div>
                            <div className={classes.Quote}>
                                Ryan Crowley - co-founder of Impruvi
                            </div>
                        </div>
                        <div className={classes.ButtonBottom}>
                            <div className={classes.Buttons}>
                                <div className={classes.ButtonPrimary} onClick={() => history.push('/choosecoach')}>Get started</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
