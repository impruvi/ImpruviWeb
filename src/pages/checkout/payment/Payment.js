import classes from './Payment.module.css';
import SubmitButton from "../../../components/submit-button/SubmitButton";
import {useCallback, useEffect, useState} from "react";
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import useHttpClient from "../../../hooks/useHttpClient";
import {useHistory} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import PaymentInfo from "./payment-info/PaymentInfo";


const Payment = ({plan, coach, hasSubscription}) => {

    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();
    const {httpClient} = useHttpClient();
    const {playerId} = useAuth();

    const [isLoading, setIsLoading] = useState(true);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState();
    const [isCreatingNewPaymentMethod, setIsCreatingNewPaymentMethod] = useState(false);
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [nameOnCard, setNameOnCard] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hadSubmissionError, setHadSubmissionError] = useState(false);

    const initialize = useCallback(async () => {
        if (!playerId) {
            return;
        }

        setIsLoading(true);
        try {
            const paymentMethods = await httpClient.getPaymentMethods();
            console.log('paymentMethods', paymentMethods);
            setPaymentMethods(paymentMethods);
            if (paymentMethods.length > 0) {
                setSelectedPaymentMethod(paymentMethods[0]);
                setIsCreatingNewPaymentMethod(false);
            } else {
                setIsCreatingNewPaymentMethod(true);
            }
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, [httpClient, playerId]);

    const getOrCreatePaymentMethodId = async () => {
        if (plan.isTrial && plan.unitAmount === 0) {
            return '';
        }

        if (!isCreatingNewPaymentMethod) {
            return selectedPaymentMethod.paymentMethodId;
        } else {
            const result = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement),
                billing_details: {
                    name: nameOnCard,
                },
            });
            return result.paymentMethod.id;
        }
    }

    const submit = async () => {
        setHadSubmissionError(false);
        setIsSubmitting(true);

        try {
            const paymentMethodId = await getOrCreatePaymentMethodId();
            await httpClient.createSubscription({
                paymentMethodId: paymentMethodId,
                coachId: coach.coachId,
                stripePriceId: plan.stripePriceId,
                stripeProductId: plan.stripeProductId
            });

            if (hasSubscription) {
                history.push(`/coaches/${coach.coachId}/product/${plan.stripeProductId}/price/${plan.stripePriceId}/updated`)
            } else {
                history.push(`/coaches/${coach.coachId}/product/${plan.stripeProductId}/price/${plan.stripePriceId}/created`)
            }
        } catch (e) {
            console.error(e);
            setHadSubmissionError(true);
        }

        setIsSubmitting(false);
    }

    const onSelectCreateNewPaymentMethod = () => {
        setIsCreatingNewPaymentMethod(true);
        setSelectedPaymentMethod(null);
    }

    const onSelectPaymentMethod = (paymentMethod) => {
        setIsCreatingNewPaymentMethod(false);
        setSelectedPaymentMethod(paymentMethod);
    }

    const getButtonText = (hasSubscription, isTrial) => {
        if (isTrial) {
            return 'Start trial';
        }

        return hasSubscription ? 'Update subscription' : 'Start subscription'
    }

    useEffect(() => {
        initialize();
    }, [initialize]);

    const isFreeTrial = plan.unitAmount === 0 && plan.isTrial;

    return (
        <div>
            <div className={classes.Title}>
                {isFreeTrial ? 'Start your free trial' : 'Pay with card'}
            </div>
            <div className={classes.PaymentSectionToday}>
                <div>Total due today</div>
                <div>${Math.floor(plan.unitAmount / 100).toFixed(2)}</div>
            </div>

            <div className={classes.Form}>
                {!isFreeTrial && (
                    <PaymentInfo
                        selectedPaymentMethod={selectedPaymentMethod}
                        onSelectPaymentMethod={onSelectPaymentMethod}
                        paymentMethods={paymentMethods}
                        isCreatingNewPaymentMethod={isCreatingNewPaymentMethod}
                        onSelectCreateNewPaymentMethod={onSelectCreateNewPaymentMethod}
                        nameOnCard={nameOnCard}
                        setNameOnCard={setNameOnCard}
                    />
                )}
                <div className={classes.SubmitButtonWrapper}>
                    <SubmitButton isSubmitting={isSubmitting}
                                  onClick={submit}
                                  isFullWidth={true}
                                  disabled={isSubmitting}>
                        {getButtonText(hasSubscription, plan.isTrial)}
                    </SubmitButton>
                </div>
                {hadSubmissionError && (
                    <div className={classes.Error}>
                        An unexpected error occurred. Please try again.
                    </div>
                )}
            </div>
            <div className={classes.SubText}>
                By clicking "Start subscription" you agree to our
                &nbsp;<span onClick={() => history.push('/terms')}>Terms</span>&nbsp;
                and authorize this recurring charge
            </div>
            <div className={classes.SubText}>
                Your subscription will begin today. Cancel anytime by visiting the Subscriptions page in your account.
            </div>
        </div>
    )
}

export default Payment;