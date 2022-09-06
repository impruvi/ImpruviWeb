import classes from './Payment.module.css';
import SubmitButton from "../../../components/submit-button/SubmitButton";
import {useCallback, useEffect, useState} from "react";
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import useHttpClient from "../../../hooks/useHttpClient";
import {useHistory} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import PaymentInfo from "./payment-info/PaymentInfo";
import Dropdown from "../../../components/dropdown/Dropdown";
import {PriceType} from "../../../model/priceType";
import Disclaimer from "./disclaimer/Disclaimer";

const getPricingPlanDropdownItems = (coach, priceType) => {
    return coach.pricingPlans
        .filter(plan => plan.type === priceType)
        .sort((p1, p2) => p1.numberOfTrainings - p2.numberOfTrainings)
        .map(plan => {
            return {
                value: plan,
                label: plan.numberOfTrainings
            }
        });
}

const Payment = ({priceType, coach, hasSubscription}) => {

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
    const [selectedPlan, setSelectedPlan] = useState(getPricingPlanDropdownItems(coach, priceType)[0].value);
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

    const getOrCreatePaymentMethodId = async () => {
        if (priceType === PriceType.Trial) {
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
                subscriptionPlanRef: selectedPlan,
            });

            if (hasSubscription) {
                history.push(`/coaches/${coach.slug}/product/${selectedPlan.stripeProductId}/price/${selectedPlan.stripePriceId}/updated`)
            } else {
                history.push(`/coaches/${coach.slug}/product/${selectedPlan.stripeProductId}/price/${selectedPlan.stripePriceId}/created`)
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

    const getButtonText = () => {
        switch (priceType) {
            case PriceType.Subscription:
                return hasSubscription ? 'Update subscription' : 'Start subscription';
            case PriceType.OneTimePurchase:
                return `Purchase ${selectedPlan.numberOfTrainings} training${selectedPlan.numberOfTrainings > 1 ? 's' : ''}`;
            case PriceType.Trial:
                return 'Start trial';
        }
    }

    useEffect(() => {
        initialize();
    }, [initialize]);

    return (
        <div>
            <div className={classes.Title}>
                {priceType === PriceType.Trial ? 'Start your free trial' : 'Pay with card'}
            </div>
            <div className={classes.NumberOfTrainings}>
                <div className={classes.NumberOfTrainingsLabel}>Number of trainings {priceType === PriceType.Subscription ? 'per month' : ''}</div>
                <Dropdown options={getPricingPlanDropdownItems(coach, priceType)}
                          defaultOption={selectedPlan}
                          onSelect={setSelectedPlan}/>
            </div>
            <div className={classes.AmountDue}>
                <div>Total due today</div>
                {!!selectedPlan && (
                    <div>${Math.floor(selectedPlan.unitAmountPerTraining * selectedPlan.numberOfTrainings / 100).toFixed(2)}</div>
                )}
            </div>

            <div className={classes.Form}>
                {priceType !== PriceType.Trial && (
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
                        {getButtonText()}
                    </SubmitButton>
                </div>
                {hadSubmissionError && (
                    <div className={classes.Error}>
                        An unexpected error occurred. Please try again.
                    </div>
                )}
            </div>
            <Disclaimer priceType={priceType} selectedPlan={selectedPlan}/>
        </div>
    )
}

export default Payment;
