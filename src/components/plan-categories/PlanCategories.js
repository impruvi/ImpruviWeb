import classes from "./PlanCategories.module.css";
import {useCallback, useEffect, useState} from "react";
import useHttpClient from "../../hooks/useHttpClient";
import useAuth from "../../hooks/useAuth";
import {
    getOneTimePurchasePlans,
    getSubscriptionPlans,
    getTrialPlan,
    hasUsedTrialPlan
} from "../../util/subscriptionUtil";
import SubmitButton from "../submit-button/SubmitButton";
import {hasPlayerCompletedQuestionnaire} from "../../util/playerUtil";
import useGoogleAnalyticsClient from "../../hooks/useGoogleAnalyticsClient";
import {useHistory} from "react-router-dom";

const PlanCategories = ({player, coach}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [activeSubscription, setActiveSubscription] = useState();
    const [trailPlan, setTrialPlan] = useState();
    const [oneTimePurchasePlans, setOneTimePurchasePlans] = useState([]);
    const [subscriptionPlans, setSubscriptionPlans] = useState([]);
    const [hasUsedTrial, setHasUsedTrial] = useState(false);

    const history = useHistory();
    const {httpClient} = useHttpClient();
    const {gaClient} = useGoogleAnalyticsClient();
    const {playerId} = useAuth();

    const initialize = useCallback(async () => {
        setIsLoading(true);
        try {
            let subscriptionHistory = []
            if (!!playerId) {
                const [subscription, subscriptions] = await Promise.all([
                    httpClient.getSubscription(playerId),
                    httpClient.getSubscriptionHistory(playerId)
                ])
                setActiveSubscription(subscription);
                subscriptionHistory = subscriptions;
            }

            const trialPlan = getTrialPlan(coach.pricingPlans);
            const oneTimePurchasePlans = getOneTimePurchasePlans(coach.pricingPlans);
            const subscriptionPlans = getSubscriptionPlans(coach.pricingPlans);

            setTrialPlan(trialPlan);
            setSubscriptionPlans(subscriptionPlans);
            setOneTimePurchasePlans(oneTimePurchasePlans);
            setHasUsedTrial(hasUsedTrialPlan(trialPlan, subscriptionHistory));
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, [httpClient, coach, playerId]);

    const navigateToPlan = () => {
        if (!hasPlayerCompletedQuestionnaire(player)) {
            history.push(`/coaches/${coach.slug}/questionnaire`);
        } else {
            // gaClient.sendGeneralEvent("plan_chosen");
            // history.push(`/coaches/${coach.coachId}/product/${plan.stripeProductId}/price/${plan.stripePriceId}/checkout`);
        }
    }

    useEffect(() => {
        initialize();
    }, [initialize]);

    return (
        <div className={classes.Container}>
            {!!trailPlan && (
                <div className={classes.Plan}>
                    <div className={classes.PlanMain}>
                        <div className={classes.Title}>
                            Free trial
                        </div>
                        <div className={classes.Seperator}/>
                        <div className={classes.Price}>
                            FREE
                        </div>
                    </div>
                    <div className={classes.BulletsWrapper}>
                        <ul className={classes.Bullets}>
                            <li>{trailPlan.numberOfTrainings} trainings with feedback</li>
                        </ul>
                    </div>
                    <SubmitButton className={classes.ActionButton} onClick={navigateToPlan}>
                        Start trial
                    </SubmitButton>
                </div>
            )}
            {!!oneTimePurchasePlans && oneTimePurchasePlans.length > 0 && (
                <div className={classes.Plan}>
                    <div className={classes.PlanMain}>
                        <div className={classes.Title}>
                            One time purchase
                        </div>
                        <div className={classes.Seperator}/>
                        <div className={classes.Price}>
                            ${Math.round(oneTimePurchasePlans[0].unitAmountPerTraining / 100)} <span className={classes.PriceSubscript}>/training</span>
                        </div>
                    </div>
                    <div className={classes.BulletsWrapper}>
                        <ul className={classes.Bullets}>
                            <li>Purchase anywhere from 1 to 20 trainings</li>
                        </ul>
                    </div>
                    <SubmitButton className={classes.ActionButton} onClick={navigateToPlan}>
                        Get started
                    </SubmitButton>
                </div>
            )}
                {!!subscriptionPlans && subscriptionPlans.length > 0 && (
                <div className={classes.Plan}>
                    <div className={classes.PlanMain}>
                        <div className={classes.Title}>
                            Subscription
                        </div>
                        <div className={classes.Seperator}/>
                        <div className={classes.Price}>
                            ${Math.round(subscriptionPlans[0].unitAmountPerTraining / 100)} <span className={classes.PriceSubscript}>/training</span>
                        </div>
                    </div>
                    <div className={classes.BulletsWrapper}>
                        <ul className={classes.Bullets}>
                            <li>Purchase anywhere from 1 to 20 trainings per month</li>
                            <li>Your subscription will auto renew at the end of each month until cancelled.</li>
                        </ul>
                    </div>
                    <SubmitButton className={classes.ActionButton} onClick={navigateToPlan}>
                        Get started
                    </SubmitButton>
                </div>
            )}
        </div>
    )
}

export default PlanCategories;
