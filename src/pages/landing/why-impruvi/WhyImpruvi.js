import classes from './WhyImpruvi.module.css';
import AccountabilityIcon from '../../../assets/why-impruvi-icons/Accountability.png';
import ConvenienceIcon from '../../../assets/why-impruvi-icons/Convenience.png';
import ImprovementIcon from '../../../assets/why-impruvi-icons/Improvement.png';
import PersonalizedIcon from '../../../assets/why-impruvi-icons/Personalized.png';

const WhyImpruvi = () => {


    return (
        <div className={classes.Container}>
            <div className={classes.ContainerInner}>
                <div className={classes.Title}>Why Impruvi?</div>
                <div className={classes.Section}>
                    <img src={PersonalizedIcon} />
                    <div>
                        <div className={classes.SectionTitle}>Personalized coaching</div>
                        <div>
                            Your coach will build you a custom plan tailored to your
                            exact needs, providing expert feedback each step along
                            the way
                        </div>
                    </div>
                </div>
                <div className={classes.Section}>
                    <img src={AccountabilityIcon} />
                    <div>
                        <div className={classes.SectionTitle}>Accountability</div>
                        <div>
                            Receive notifications to complete trainings in order to stay consistent to your plan.
                        </div>
                    </div>
                </div>
                <div className={classes.Section}>
                    <img src={ConvenienceIcon} />
                    <div>
                        <div className={classes.SectionTitle}>Convenience</div>
                        <div>
                            Improve your game from anywhere, anytime.
                        </div>
                    </div>
                </div>
                <div className={classes.Section}>
                    <img src={ImprovementIcon} />
                    <div>
                        <div className={classes.SectionTitle}>Improvement</div>
                        <div>
                            Interact with your coach to track your progress and see real improvement in your game.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyImpruvi;