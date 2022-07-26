import classes from './Summary.module.css';
import RedCircleCheck from "../../../assets/RedCircleCheck.png";

const Summary = ({coach, plan}) => {
    return (
        <div>
            <div className={classes.Title}>Summary</div>
            <div>
                <div className={classes.Name}>
                    Subscribe to {coach?.firstName}'s {plan?.type} plan.
                </div>
                <div className={classes.Description}>
                    {plan.numberOfTrainings} trainings for the next month
                </div>
            </div>
            <div className={classes.Bullets}>
                <div className={classes.Bullet}>
                    <img src={RedCircleCheck} />
                    Customized at home training plan
                </div>
                <div className={classes.Bullet}>
                    <img src={RedCircleCheck} />
                    Personalized notes for each drill
                </div>
                <div className={classes.Bullet}>
                    <img src={RedCircleCheck} />
                    Expert feedback for each drill you submit
                </div>
                <div className={classes.Bullet}>
                    <img src={RedCircleCheck} />
                    Drill bank and progress tracking
                </div>
            </div>
        </div>
    )
}

export default Summary;