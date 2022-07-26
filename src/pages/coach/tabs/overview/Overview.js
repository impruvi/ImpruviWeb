import classes from "./Overview.module.css";
import RedCircleCheck from "../../../../assets/RedCircleCheck.png";

const Overview = ({coach}) => {
    return (
        <div className={classes.Container}>
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

            <div className={classes.Title}>
                Biography
            </div>
            <pre>
                {coach.about}
            </pre>
        </div>

    )
}

export default Overview;