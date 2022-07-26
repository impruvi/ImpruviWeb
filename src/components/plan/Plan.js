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
                {plan.type}
            </div>
            <div className={classes.Pricing}>
                ${((plan.unitAmount / 100) / plan.numberOfTrainings).toFixed(0)}/training
            </div>
            <div className={classes.PricingSub}>
                or ${Math.floor(plan.unitAmount / 100)} per month
            </div>
            <div className={classes.Trainings}>
                {plan.numberOfTrainings} trainings per month
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