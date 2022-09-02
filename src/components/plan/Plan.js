import classes from './Plan.module.css';
import {useHistory} from "react-router-dom";
import SubmitButton from "../submit-button/SubmitButton";
import {hasPlayerCompletedQuestionnaire} from "../../util/playerUtil";
import useGoogleAnalyticsClient from "../../hooks/useGoogleAnalyticsClient";

const Plan = ({player, plan, coach, isActive}) => {

    const history = useHistory();
    const {gaClient} = useGoogleAnalyticsClient();

    const navigateToPlan = () => {
        if (!hasPlayerCompletedQuestionnaire(player)) {
            history.push(`/coaches/${coach.coachId}/questionnaire`);
        } else {
            gaClient.sendGeneralEvent("plan_chosen");
            history.push(`/coaches/${coach.coachId}/product/${plan.stripeProductId}/price/${plan.stripePriceId}/checkout`);
        }
    }

    return (
        <div className={classes.Container}>
            {plan.isTrial && (
                <div className={classes.TrialBanner}>
                    Trial
                </div>
            )}
            <div className={classes.Content}>
                <div className={classes.Title}>
                    {plan.numberOfTrainings} {plan.numberOfTrainings > 1 ? 'Sessions' : 'Session'}<div className={classes.TitleInline}>
                    {plan.isTrial ? '' : '/month'}
                </div>
                </div>
                {plan.unitAmount > 0 && (
                    <>
                        <div className={classes.Pricing}>
                            ${((plan.unitAmount / 100) / plan.numberOfTrainings).toFixed(0)}<div className={classes.PricingInline}>/session</div>
                        </div>
                        <div className={classes.PricingSub}>
                            or ${Math.floor(plan.unitAmount / 100)}
                            {plan.isTrial ? '' : ' per month'}
                        </div>
                    </>
                )}
                {plan.unitAmount === 0 && (
                    <>
                        <div className={classes.Pricing}>
                            Free
                        </div>
                        <div className={classes.PricingSub}>
                            Available for one month after your trial begins
                        </div>
                    </>
                )}
                <SubmitButton onClick={navigateToPlan} isDisabled={isActive}>
                    {isActive ? 'Active' : 'Select'}
                </SubmitButton>
                <div className={classes.SubText}>
                    {plan.isTrial
                        ? 'After you trial expires you will need to update your plan.'
                        : 'Subscriptions renew automatically until cancelled. Cancel anytime.'}
                </div>
            </div>
        </div>
    )
}

export default Plan;
