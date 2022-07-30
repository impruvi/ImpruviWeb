import classes from './Payment.module.css';
import SubmitButton from "../../../components/submit-button/SubmitButton";
import {useCallback, useEffect, useState} from "react";
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import useHttpClient from "../../../hooks/useHttpClient";
import {useHistory} from "react-router-dom";
import BasicTextInput from "../../../components/basic-text-input/BasicTextInput";
import PaymentMethod from "../../../components/payment-method/PaymentMethod";
import useAuth from "../../../hooks/useAuth";
import RadioButton from "../../../components/radio-button/RadioButton";
import Expand from "react-expand-animated";


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

    const submit = async () => {
        setHadSubmissionError(false);
        setIsSubmitting(true);

        try {
            let paymentMethodId;
            if (!isCreatingNewPaymentMethod) {
                paymentMethodId = selectedPaymentMethod.paymentMethodId;
            } else {
                const result = await stripe.createPaymentMethod({
                    type: 'card',
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: nameOnCard,
                    },
                });
                paymentMethodId = result.paymentMethod.id;
            }

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

    const onCreateNewPaymentMethodClick = () => {
        setIsCreatingNewPaymentMethod(true);
        setSelectedPaymentMethod(null);
    }

    const onPaymentMethodClick = (paymentMethod) => {
        setIsCreatingNewPaymentMethod(false);
        setSelectedPaymentMethod(paymentMethod);
    }

    useEffect(() => {
        initialize();
    }, [initialize]);


    return (
        <div>
            <div className={classes.Title}>
                Pay with card
            </div>
            <div className={classes.PaymentSectionToday}>
                <div>Total due today</div>
                <div>${Math.floor(plan.unitAmount / 100).toFixed(2)}</div>
            </div>

            <div className={classes.Form}>
                {paymentMethods.map(paymentMethod => (
                    <div className={classes.PaymentMethodWrapper} onClick={() => onPaymentMethodClick(paymentMethod)}>
                        <PaymentMethod paymentMethod={paymentMethod} />
                        <RadioButton isActive={!!selectedPaymentMethod && paymentMethod.paymentMethodId === selectedPaymentMethod.paymentMethodId} />
                    </div>
                ))}
                {paymentMethods.length > 0 && (
                    <div className={classes.PaymentMethodWrapper} onClick={onCreateNewPaymentMethodClick}>
                        Choose a different payment method
                        <RadioButton isActive={isCreatingNewPaymentMethod} />
                    </div>
                )}
                <Expand open={isCreatingNewPaymentMethod} duration={200}>
                    <div>
                        <div className={classes.InputLabel}>Name on card</div>
                        <BasicTextInput placeholder={'Name on card'}
                                        value={nameOnCard}
                                        onChange={setNameOnCard}/>
                        <div className={classes.InputLabel}>Card information</div>
                        <div className={classes.CardInputWrapper}>
                            <CardElement options={{
                                hidePostalCode: true,
                                iconStyle: "solid",
                                style: {
                                    base: {
                                        iconColor: "black",
                                        color: "black",
                                        fontWeight: 300,
                                        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                                        fontSize: "14px",
                                        "::placeholder": {
                                            color: "#bbb"
                                        },
                                    },
                                    invalid: {
                                        iconColor: "red",
                                        color: "red"
                                    }
                                }
                            }}/>
                        </div>
                    </div>
                </Expand>
                <div className={classes.SubmitButtonWrapper}>
                    <SubmitButton isSubmitting={isSubmitting}
                                  onClick={submit}
                                  isFullWidth={true}
                                  disabled={isSubmitting}>
                        {hasSubscription ? 'Update subscription' : 'Start subscription'}
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