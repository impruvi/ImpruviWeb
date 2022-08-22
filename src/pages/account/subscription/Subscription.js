import useHttpClient from "../../../hooks/useHttpClient";
import {useCallback, useEffect, useState} from "react";
import classes from './Subscription.module.css';
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

const Subscription = () => {

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
            if (!!player.queuedSubscription) {
                const subscriptionPlan = await httpClient.getSubscriptionPlan({
                    stripeProductId: player.queuedSubscription.stripeProductId,
                    stripePriceId: player.queuedSubscription.stripePriceId,
                });
                setQueuedSubscriptionPlan(subscriptionPlan);
            } else {
                setQueuedSubscriptionPlan(null);
            }
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, [httpClient, playerId]);

    const cancelSubscription = async () => {
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

    const reactivateSubscription = async () => {
        setIsReactivating(true);
        try {
            await httpClient.reactivateSubscription();
            await initialize();
        } catch (e) {
            console.log(e);
        }
        setIsReactivating(false);
    }

    const isSubscriptionCancelled = () => {
        return subscription.cancelAtEndOfPeriod && !player.queuedSubscription;
    }

    const isTrialSubscription = () => {
        return subscription.plan.isTrial;
    }

    const getNextPaymentDate = () => {
        if (!!queuedSubscriptionPlan && !isTrialSubscription()) {
            return '-'
        }

        return moment.unix(subscription.currentPeriodEndDateEpochMillis / 1000).format('dddd, MMMM Do, YYYY');
    }

    useEffect(() => {
        initialize();
    }, [initialize]);

    return (
        <div>
            <div className={classes.Title}>Subscription</div>
            <div className={classes.Content}>
                {isLoading && (
                    <Spinner />
                )}
                {!isLoading && (
                    <>
                        {!subscription && (
                            <div className={classes.NoSubscription}>
                                <div className={classes.NoSubscriptionText}>
                                    You don't have any active subscription
                                </div>
                                <SubmitButton onClick={() => history.push('/find-coach')} className={classes.ButtonPrimary}>
                                    Choose a coach
                                </SubmitButton>
                            </div>
                        )}
                        {subscription && (
                            <>
                                <div className={classes.Subtitle}>
                                    {subscription.plan.type}
                                    {isSubscriptionCancelled() && !isTrialSubscription() && (
                                        <div className={classes.Badge}>Cancelled</div>
                                    )}
                                </div>
                                {isSubscriptionCancelled() && !isTrialSubscription() && (
                                    <InfoBox icon={WarningBlue}>
                                        <div>
                                            Your subscription is paid until {getNextPaymentDate()}. After
                                            this date you will lose access to content on the app.
                                        </div>
                                    </InfoBox>
                                )}
                                {(!isSubscriptionCancelled() || isTrialSubscription()) && (
                                    <Details subscriptionPlan={subscription.plan}
                                             nextPaymentDate={getNextPaymentDate()}/>
                                )}
                                {!!queuedSubscriptionPlan && (
                                    <InfoBox icon={InfoIcon}>
                                        <div className={classes.InfoBoxText}>
                                            Your subscription is set to update upon the next billing cycle to the following plan:
                                        </div>
                                        <Details subscriptionPlan={queuedSubscriptionPlan}
                                                 nextPaymentDate={getNextPaymentDate()}/>
                                    </InfoBox>
                                )}
                                <div className={classes.ActionButtons}>
                                    {(!isSubscriptionCancelled() || isTrialSubscription()) && (
                                        <SubmitButton className={classes.ActionButtonSecondary}
                                                      onClick={() => setIsChangePlanPopupOpen(true)}>
                                            Change
                                        </SubmitButton>
                                    )}
                                    {!isSubscriptionCancelled() && !isTrialSubscription() && (
                                        <SubmitButton className={classes.ActionButtonSecondary}
                                                      onClick={() => setIsCancelPopupOpen(true)}>
                                            Cancel
                                        </SubmitButton>
                                    )}
                                    {isSubscriptionCancelled() && !isTrialSubscription() && (
                                        <>
                                            <SubmitButton className={classes.ActionButton}
                                                          onClick={reactivateSubscription}
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
                <CancelPopup nextPaymentDate={getNextPaymentDate()}
                             close={() => setIsCancelPopupOpen(false)}
                             cancelSubscription={cancelSubscription}
                             isCancelling={isCancelling}/>
            )}
            {isChangePlanPopupOpen && (
                <ChangePopup close={() => setIsChangePlanPopupOpen(false)}/>
            )}
        </div>
    )
}

export default Subscription;