import useHttpClient from "../../../hooks/useHttpClient";
import {useCallback, useEffect, useState} from "react";
import classes from './PaymentMethods.module.css'
import Amex from "../../../assets/card-brands/Amex.png";
import CartesBancaires from "../../../assets/card-brands/CartesBancaires.jpeg";
import DinersClub from "../../../assets/card-brands/DinersClub.png";
import Discover from "../../../assets/card-brands/Discover.png";
import JCB from "../../../assets/card-brands/JCB.png";
import MasterCard from "../../../assets/card-brands/MasterCard.png";
import Visa from "../../../assets/card-brands/Visa.png";
import UnionPay from "../../../assets/card-brands/UnionPay.png";
import Spinner from "../../../components/spinner/Spinner";
import PaymentMethod from "../../../components/payment-method/PaymentMethod";


const getBrandImage = (brand) => {
    switch (brand) {
        case 'amex':
            return Amex;
        case 'cartes_bancaires':
            return CartesBancaires;
        case 'diners_club':
            return DinersClub;
        case 'discover':
            return Discover;
        case 'jcb':
            return JCB;
        case 'mastercard':
            return MasterCard;
        case 'visa':
            return Visa;
        case 'unionpay':
            return UnionPay;
    }
}


const PaymentMethods = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [paymentMethods, setPaymentMethods] = useState([]);

    const {httpClient} = useHttpClient();


    const getPaymentMethods = useCallback(async () => {
        setIsLoading(true);
        try {
            const pms = await httpClient.getPaymentMethods();
            setPaymentMethods(pms);
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, [httpClient]);

    useEffect(() => {
        getPaymentMethods();
    }, [getPaymentMethods]);


    return (
        <div>
            <div className={classes.Title}>Payment methods</div>
            {isLoading && (
                <Spinner />
            )}
            {!isLoading && (
                <>
                    {paymentMethods.length === 0 && (
                        <div>
                            You have no active payment methods
                        </div>
                    )}
                    {paymentMethods.length > 0 && (
                        <>
                            {paymentMethods.map(paymentMethod => (
                                <div className={classes.PaymentMethodWrapper}>
                                    <PaymentMethod paymentMethod={paymentMethod} />
                                </div>
                            ))}
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export default PaymentMethods;