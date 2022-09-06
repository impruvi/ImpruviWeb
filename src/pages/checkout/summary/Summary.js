import classes from './Summary.module.css';
import RedCircleCheck from "../../../assets/RedCircleCheck.png";
import {PriceType} from "../../../model/priceType";

const Summary = ({coach, priceType}) => {

    const getSubtitle = () => {
        switch (priceType) {
            case PriceType.Subscription:
                return 'Monthly subscription';
            case PriceType.OneTimePurchase:
                return 'Training bundle';
            case PriceType.Trial:
                return 'Free trial';
        }
    }

    return (
        <div>
            <div className={classes.Title}>Summary</div>
            <div className={classes.Content}>
                <img src={coach.headshot.fileLocation} />
                <div>
                    <div className={classes.Name}>{coach?.firstName} {coach.lastName}</div>
                    <div className={classes.Description}>
                        {getSubtitle()}
                    </div>
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
