import classes from './Plan.module.css';
import {useHistory} from "react-router-dom";
import SubmitButton from "../submit-button/SubmitButton";
import {hasPlayerCompletedQuestionnaire} from "../../util/playerUtil";

const Plan = ({player, plan, coach, isActive}) => {

    const history = useHistory();

    const navigateToPlan = () => {
        if (!hasPlayerCompletedQuestionnaire(player)) {
            history.push(`/coaches/${coach.coachId}/questionnaire`);
        } else {
            history.push(`/coaches/${coach.coachId}/product/${plan.stripeProductId}/price/${plan.stripePriceId}/checkout`);
        }
    }

    return (
        <div className={classes.Container}>
            <div className={classes.Title}>
                {plan.numberOfTrainings} Sessions<div className={classes.TitleInline}>/month</div>
            </div>
            <div className={classes.Pricing}>
                ${((plan.unitAmount / 100) / plan.numberOfTrainings).toFixed(0)}<div className={classes.PricingInline}>/session</div>
            </div>
            <div className={classes.PricingSub}>
                or ${Math.floor(plan.unitAmount / 100)} per month
            </div>
            <SubmitButton onClick={navigateToPlan} isDisabled={isActive}>
                {isActive ? 'Active' : 'Select'}
            </SubmitButton>
            <div className={classes.SubText}>
                Subscriptions renew automatically until cancelled. Cancel anytime.
            </div>
        </div>
    )
}

export default Plan;