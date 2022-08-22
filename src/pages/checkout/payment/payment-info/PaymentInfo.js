import classes from "./PaymentInfo.module.css";
import PaymentMethod from "../../../../components/payment-method/PaymentMethod";
import RadioButton from "../../../../components/radio-button/RadioButton";
import Expand from "react-expand-animated";
import BasicTextInput from "../../../../components/basic-text-input/BasicTextInput";
import {CardElement} from "@stripe/react-stripe-js";

const cardElementOptions = {
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
}

const PaymentInfo = ({selectedPaymentMethod,
                     onSelectPaymentMethod,
                     paymentMethods,
                     isCreatingNewPaymentMethod,
                     onSelectCreateNewPaymentMethod,
                     nameOnCard,
                     setNameOnCard}) => {
    return (
        <>
            {paymentMethods.map(paymentMethod => (
                <div className={classes.PaymentMethodWrapper} onClick={() => onSelectPaymentMethod(paymentMethod)}>
                    <PaymentMethod paymentMethod={paymentMethod} />
                    <RadioButton isActive={!!selectedPaymentMethod && paymentMethod.paymentMethodId === selectedPaymentMethod.paymentMethodId} />
                </div>
            ))}
            {paymentMethods.length > 0 && (
                <div className={classes.PaymentMethodWrapper} onClick={onSelectCreateNewPaymentMethod}>
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
                        <CardElement options={cardElementOptions}/>
                    </div>
                </div>
            </Expand>
        </>
    )
}

export default PaymentInfo;