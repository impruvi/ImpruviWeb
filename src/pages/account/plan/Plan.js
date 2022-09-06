import useHttpClient from "../../../hooks/useHttpClient";
import {useCallback, useEffect, useState} from "react";
import classes from './Plan.module.css';
import moment from 'moment';
import CancelPopup from "./cancel/CancelPopup";
import SubmitButton from "../../../components/submit-button/SubmitButton";
import WarningBlue from '../../../assets/WarningBlue.png';
import ChangePopup from "./change/ChangePopup";
import Spinner from "../../../components/spinner/Spinner";
import useAuth from "../../../hooks/useAuth";
import InfoIcon from '../../../assets/InfoBlue.png'
import Details from "./details/Details";
import {useHistory} from "react-router-dom";
import InfoBox from "../../../components/info-box/InfoBox";
import {PriceType} from "../../../model/priceType";

const Plan = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [player, setPlayer] = useState();
    const [isCancelling, setIsCancelling] = useState(false);
    const [isReactivating, setIsReactivating] = useState(false);
    const [isChangePlanPopupOpen, setIsChangePlanPopupOpen] = useState(false);
    const [isCancelPopupOpen, setIsCancelPopupOpen] = useState(false);
    const [subscription, setSubscription] = useState();
    const [queuedSubscriptionPlan, setQueuedSubscriptionPlan] = useState();

    const {httpClient} = useHttpClient();
    const {playerId} = useAuth();
    const history = useHistory();

    const initialize = useCallback(async () => {
        if (!playerId) {
            return;
        }
        setIsLoading(true);
        try {
            const [player, subscription] = await Promise.all([
                httpClient.getPlayer(playerId),
                httpClient.getSubscription(playerId),
            ]);
            setPlayer(player);
            setSubscription(subscription);
            setQueuedSubscriptionPlan(player.queuedSubscription);
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, [httpClient, playerId]);

    const cancel = async () => {
        setIsCancelling(true);
        try {
            await httpClient.cancelSubscription();
            await initialize();
            setIsCancelPopupOpen(false);
        } catch (e) {
            console.log(e);
        }
        setIsCancelling(false);
    }

    const reactivate = async () => {
        setIsReactivating(true);
        try {
            await httpClient.reactivateSubscription();
            await initialize();
        } catch (e) {
            console.log(e);
        }
        setIsReactivating(false);
    }

    const isCancelled = () => {
        return subscription.cancelAtEndOfPeriod && !player.queuedSubscription;
    }

    const isTrial = () => {
        return subscription.plan.type === PriceType.Trial;
    }

    const planEndDate = () => {
        return moment.unix(subscription.currentPeriodEndDateEpochMillis / 1000).format('dddd, MMMM Do, YYYY');
    }

    const getPlanTypeDisplayText = () => {
        switch (subscription.plan.type) {
            case PriceType.Subscription:
                return 'Subscription plan';
            case PriceType.Trial:
                return 'Free trial';
            case PriceType.OneTimePurchase:
                return 'Training bundle'
        }
    }

    useEffect(() => {
        initialize();
    }, [initialize]);

    return (
        <div>
            <div className={classes.Title}>Plan</div>
            <div className={classes.Content}>
                {isLoading && (
                    <Spinner />
                )}
                {!isLoading && (
                    <>
                        {!subscription && (
                            <div className={classes.NoSubscription}>
                                <div className={classes.NoSubscriptionText}>
                                    You don't have any active plan
                                </div>
                                <SubmitButton onClick={() => history.push('/coaches')} className={classes.ButtonPrimary}>
                                    Get started for free
                                </SubmitButton>
                            </div>
                        )}
                        {subscription && (
                            <>
                                <div className={classes.Subtitle}>
                                    {getPlanTypeDisplayText()}
                                    {isCancelled() && !isTrial() && (
                                        <div className={classes.Badge}>Cancelled</div>
                                    )}
                                </div>
                                {isCancelled() && !isTrial() && (
                                    <InfoBox icon={WarningBlue}>
                                        <div>
                                            Your plan is paid until {planEndDate()}. After
                                            this date you will lose access to content on the app.
                                        </div>
                                    </InfoBox>
                                )}
                                {(!isCancelled() || isTrial()) && (
                                    <Details coachId={subscription.plan.coachId}
                                             priceType={subscription.plan.type} 
                                             numberOfTrainings={subscription.plan.numberOfTrainings}
                                             unitAmount={subscription.plan.unitAmount}
                                             nextPaymentDate={planEndDate()}/>
                                )}
                                {!!queuedSubscriptionPlan && (
                                    <InfoBox icon={InfoIcon}>
                                        <div className={classes.InfoBoxText}>
                                            Your plan is set to update upon the next billing cycle to the following plan:
                                        </div>
                                        <Details coachId={queuedSubscriptionPlan.coachId}
                                                 priceType={queuedSubscriptionPlan.type}
                                                 numberOfTrainings={queuedSubscriptionPlan.numberOfTrainings}
                                                 unitAmount={queuedSubscriptionPlan.numberOfTrainings * queuedSubscriptionPlan.unitAmountPerTraining}
                                                 nextPaymentDate={planEndDate()}/>
                                    </InfoBox>
                                )}
                                <div className={classes.ActionButtons}>
                                    {!isCancelled() && (
                                        <SubmitButton className={classes.ActionButtonSecondary}
                                                      onClick={() => setIsChangePlanPopupOpen(true)}>
                                            Change
                                        </SubmitButton>
                                    )}
                                    {!isCancelled() && subscription.plan.type === PriceType.Subscription && (
                                        <SubmitButton className={classes.ActionButtonSecondary}
                                                      onClick={() => setIsCancelPopupOpen(true)}>
                                            Cancel
                                        </SubmitButton>
                                    )}
                                    {isCancelled() && subscription.plan.type === PriceType.Subscription && (
                                        <>
                                            <SubmitButton className={classes.ActionButton}
                                                          onClick={reactivate}
                                                          isSubmitting={isReactivating}
                                                          isDisabled={isReactivating}>
                                                Re-activate subscription
                                            </SubmitButton>
                                        </>
                                    )}
                                </div>
                            </>
                        )}
                    </>
                )}
            </div>

            {isCancelPopupOpen && (
                <CancelPopup nextPaymentDate={planEndDate()}
                             close={() => setIsCancelPopupOpen(false)}
                             cancelSubscription={cancel}
                             isCancelling={isCancelling}/>
            )}
            {isChangePlanPopupOpen && (
                <ChangePopup close={() => setIsChangePlanPopupOpen(false)}/>
            )}
        </div>
    )
}

export default Plan;
