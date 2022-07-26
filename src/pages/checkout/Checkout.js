import classes from './Checkout.module.css';
import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import useHttpClient from "../../hooks/useHttpClient";
import Summary from "./summary/Summary";
import Payment from "./payment/Payment";
import Spinner from "../../components/spinner/Spinner";
import CurrentSubscriptionWarning from "./current-subscription-warning/CurrentSubscriptionWarning";
import useAuth from "../../hooks/useAuth";

const Checkout = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [plan, setPlan] = useState();
    const [coach, setCoach] = useState();
    const [currentSubscription, setCurrentSubscription] = useState();

    const {playerId} = useAuth();
    const {coachId, productId, priceId} = useParams();
    const {httpClient} = useHttpClient();

    const initialize = useCallback(async () => {
        if (!coachId || !productId || !priceId || !playerId) {
            return;
        }
        setIsLoading(true);
        try {
            const [subscription, coach, plan] = await Promise.all([
                httpClient.getSubscription(),
                httpClient.getCoach(coachId),
                httpClient.getSubscriptionPlan({
                    stripeProductId: productId,
                    stripePriceId: priceId,
                })
            ]);

            setCurrentSubscription(subscription);
            setCoach(coach);
            setPlan(plan);
        } catch (e) {
            console.log('had an error here');
        }
        setIsLoading(false);
    }, [httpClient, coachId, productId, priceId, playerId])

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
                <Spinner />
            )}
            {!isLoading && (
                <div className={classes.Content}>
                    {!!currentSubscription && (
                        <CurrentSubscriptionWarning subscription={currentSubscription}/>
                    )}
                    <div className={classes.Left}>
                        <Summary coach={coach} plan={plan}/>
                    </div>
                    <div className={classes.Right}>
                        <Payment coach={coach} plan={plan} hasSubscription={!!currentSubscription}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Checkout;