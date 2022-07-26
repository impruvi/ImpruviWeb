import classes from "./PaymentMethod.module.css";
import Amex from "../../assets/card-brands/Amex.png";
import CartesBancaires from "../../assets/card-brands/CartesBancaires.jpeg";
import DinersClub from "../../assets/card-brands/DinersClub.png";
import Discover from "../../assets/card-brands/Discover.png";
import JCB from "../../assets/card-brands/JCB.png";
import MasterCard from "../../assets/card-brands/MasterCard.png";
import Visa from "../../assets/card-brands/Visa.png";
import UnionPay from "../../assets/card-brands/UnionPay.png";

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

const PaymentMethod = ({paymentMethod}) => {
    return (
        <div className={classes.Container}>
            <img src={getBrandImage(paymentMethod.brand)} />
            <div className={classes.CardNumber}>**** **** **** {paymentMethod.last4}</div>
            <div className={classes.ExpirationDate}>Expires {paymentMethod.expMonth}/{paymentMethod.expYear}</div>
        </div>
    )
}

export default PaymentMethod;
