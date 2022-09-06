import classes from './Checkout.module.css';
import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import useHttpClient from "../../hooks/useHttpClient";
import Summary from "./summary/Summary";
import Payment from "./payment/Payment";
import Spinner from "../../components/spinner/Spinner";
import CurrentSubscriptionWarning from "./current-subscription-warning/CurrentSubscriptionWarning";
import useAuth from "../../hooks/useAuth";
import useGoogleAnalyticsClient from "../../hooks/useGoogleAnalyticsClient";
import {convertSlugToPriceType} from "../../model/priceType";

const Checkout = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [coach, setCoach] = useState();
    const [currentSubscription, setCurrentSubscription] = useState();

    const {playerId} = useAuth();
    const {slug, priceType} = useParams();
    const {httpClient} = useHttpClient();
    const {gaClient} = useGoogleAnalyticsClient();

    const initialize = useCallback(async () => {
        if (!slug || !playerId) {
            return;
        }
        setIsLoading(true);
        try {
            const [subscription, coach] = await Promise.all([
                httpClient.getSubscription(playerId),
                httpClient.getCoachBySlug(slug),
            ]);

            setCurrentSubscription(subscription);
            setCoach(coach);
        } catch (e) {
            console.log('had an error here');
        }
        setIsLoading(false);
    }, [httpClient, slug, playerId])

    useEffect(() => {
        initialize()
    }, [initialize]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes.Container}>
            <div className={classes.Title}>Checkout</div>
            {isLoading && (
                <div className={classes.SpinnerContainer}>
                    <Spinner />
                </div>
            )}
            {!isLoading && (
                <div className={classes.Content}>
                    {!!currentSubscription && (
                        <CurrentSubscriptionWarning subscription={currentSubscription}/>
                    )}
                    <div className={classes.Left}>
                        <Summary coach={coach}
                                 priceType={convertSlugToPriceType(priceType)}/>
                    </div>
                    <div className={classes.Right}>
                        <Payment coach={coach}
                                 hasSubscription={!!currentSubscription}
                                 priceType={convertSlugToPriceType(priceType)}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Checkout;
