import classes from './WhyImpruvi.module.css';
import AccountabilityIcon from '../../../assets/why-impruvi-icons/Accountability.png';
import ConvenienceIcon from '../../../assets/why-impruvi-icons/Convenience.png';
import ImprovementIcon from '../../../assets/why-impruvi-icons/Improvement.png';
import PersonalizedIcon from '../../../assets/why-impruvi-icons/Personalized.png';
import SubmitButton from "../../../components/submit-button/SubmitButton";
import {useHistory} from "react-router-dom";

const WhyImpruvi = () => {

    const history = useHistory();

    return (
        <div className={classes.Container}>
            <div className={classes.Content}>
                <div className={classes.ContentInner}>
                    <h2>Training on your own is required for growth. <span className={classes.Highlight}>Let's optimize it</span></h2>
                    <SubmitButton className={classes.ActionButton} onClick={() => history.push('/coaches')}>
                        Get started
                    </SubmitButton>

                    <div className={classes.Sections}>
                        <h3>Our value</h3>
                        <div className={classes.Section}>
                            <h4>
                                <img src={PersonalizedIcon} className={classes.Icon}/>
                                Expert coaching
                            </h4>
                            <div>
                                Our unique collection of coaches will help you acheive your goals. Want to learn what it
                                takes to get a scholarship? Go pro? Our coaches have been there, done that
                            </div>
                        </div>
                        <div className={classes.Section}>
                            <h4>
                                <img src={ConvenienceIcon} className={classes.Icon}/>
                                Convience
                            </h4>
                            <div>
                                No more waiting in traffic to get in a great training session. Train from anywhere, at anytime.
                            </div>
                        </div>
                        <div className={classes.Section}>
                            <h4>
                                <img src={ImprovementIcon} className={classes.Icon}/>
                                Custom training
                            </h4>
                            <div>
                                When you train on your own, you should be working on specific drills that help your development.
                                Your coach will identify exactley what you need and build you a custom training plan.
                            </div>
                        </div>
                        <div className={classes.Section}>
                            <h4>
                                <img src={AccountabilityIcon} className={classes.Icon}/>
                                Accountability
                            </h4>
                            <div>
                                Receive notifications to complete trainings in order to stay consistent with your plan
                            </div>
                        </div>
                        <SubmitButton className={classes.ActionButton} onClick={() => history.push('/blog')}>
                            Learn more
                        </SubmitButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyImpruvi;
