import {useCallback, useEffect, useState} from "react";
import useHttpClient from "../../hooks/useHttpClient";
import {useParams} from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import AppStoreActionButton from "../../components/app-store-action-button/AppStoreActionButton";
import classes from './SubscriptionUpdated.module.css';
import useAuth from "../../hooks/useAuth";
import moment from "moment";

const SubscriptionUpdated = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [coach, setCoach] = useState();
    const [currentSubscription, setCurrentSubscription] = useState();

    const {coachId, action} = useParams();

    const {httpClient} = useHttpClient();
    const {playerId} = useAuth();

    const initialize = useCallback(async () => {
        if (!playerId) {
            return;
        }
        setIsLoading(true);
        try {
            if (action === 'created') {
                const [coach] = await Promise.all([
                    httpClient.getCoach(coachId)
                ]);
                setCoach(coach);
            } else {
                const [coach, subscription] = await Promise.all([
                    httpClient.getCoach(coachId),
                    httpClient.getSubscription(playerId)
                ]);
                setCoach(coach);
                setCurrentSubscription(subscription);
            }
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, [httpClient, coachId, playerId, action]);

    const getUpdateEffectiveDate = () => {
        return moment.unix(currentSubscription.currentPeriodEndDateEpochMillis / 1000).format('dddd, MMMM Do, YYYY');
    }

    useEffect(() => {
        initialize();
    }, [initialize]);

    return (
        <div className={classes.Container}>
            <div className={classes.Title}>{action === 'created' ? 'Payment successful!' : 'Subscription successfully updated!'}</div>
            {isLoading && (
                <Spinner />
            )}
            {!isLoading && (
                <>
                    <div className={classes.Subtitle}>
                        {action === 'created'
                            ? `Coach ${coach.firstName} is working on your custom plan and will have it loaded in the app within 24 hours.`
                            : `Your new subscription will take effect at the end of the current billing cycle (${getUpdateEffectiveDate()}).`}

                    </div>
                    <div className={classes.ActionButton}>
                        <AppStoreActionButton />
                    </div>
                    <div className={classes.Info}>
                        Once in the app, use your account credentials to log in
                    </div>
                </>
            )}
        </div>
    )
}

export default SubscriptionUpdated;