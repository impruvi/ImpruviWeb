import classes from "./Disclaimer.module.css";
import {PriceType} from "../../../../model/priceType";
import {useHistory} from "react-router-dom";

const Disclaimer = ({priceType, selectedPlan}) => {

    const history = useHistory();

    if (priceType === PriceType.Trial) {
        return (
            <>
                <div className={classes.SubText}>
                    By clicking "Start trial" you agree to our
                    &nbsp;<span onClick={() => history.push('/terms')}>Terms</span>&nbsp;
                </div>
                <div className={classes.SubText}>
                    Your trial training sessions will expire one month after your trial begins.
                </div>
            </>
        )
    } else if (priceType === PriceType.Subscription) {
        return (
            <>
                <div className={classes.SubText}>
                    By clicking "Start subscription" you agree to our
                    &nbsp;<span onClick={() => history.push('/terms')}>Terms</span>&nbsp;
                    and authorize this recurring charge
                </div>
                <div className={classes.SubText}>
                    Cancel anytime by visiting the Subscriptions page in your account.
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={classes.SubText}>

                    By clicking "Purchase {selectedPlan.numberOfTrainings} training{selectedPlan.numberOfTrainings > 1 ? 's' : ''}" you agree to our
                    &nbsp;<span onClick={() => history.push('/terms')}>Terms</span>&nbsp;
                    and authorize this charge
                </div>
                <div className={classes.SubText}>
                    Your training sessions will expire one month your plan begins.
                </div>
            </>
        )
    }
}

export default Disclaimer;
