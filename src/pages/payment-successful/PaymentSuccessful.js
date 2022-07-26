import {useCallback, useEffect, useState} from "react";
import useHttpClient from "../../hooks/useHttpClient";
import {useParams} from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import AppStoreActionButton from "../../components/app-store-action-button/AppStoreActionButton";
import classes from './PaymentSuccessful.module.css';

const PaymentSuccessful = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [coach, setCoach] = useState();
    const [plan, setPlan] = useState();

    const {coachId, productId, priceId} = useParams();

    const {httpClient} = useHttpClient();

    const initialize = useCallback(async () => {
        setIsLoading(true);
        try {
            const [coach, plan] = await Promise.all([
                await httpClient.getCoach(coachId),
                await httpClient.getSubscriptionPlan({
                    stripeProductId: productId,
                    stripePriceId: priceId
                })
            ]);
            console.log(coach);
            setCoach(coach);
            setPlan(plan);
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, [httpClient, coachId, productId, priceId]);

    useEffect(() => {
        initialize();
    }, [initialize])

    return (
        <div className={classes.Container}>
            <div className={classes.Title}>Payment successful!</div>
            {isLoading && (
                <Spinner />
            )}
            {!isLoading && (
                <>
                    <div className={classes.Subtitle}>
                        Coach {coach.firstName} is working on your custom plan and will have it
                        loaded in the app within 24 hours.
                    </div>
                    <div className={classes.ActionButton}>
                        <AppStoreActionButton />
                    </div>
                </>
            )}
        </div>
    )
}

export default PaymentSuccessful;