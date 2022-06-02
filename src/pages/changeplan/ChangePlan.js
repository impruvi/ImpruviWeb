import Header from "../../components/header/Header";
import classes from "../coachnotified/CoachNotified.module.css";
import Button from "../../components/button/Button";

const ChangePlan = () => {

    return (
        <div>
            <Header />
            <div className={classes.Container}>
                <div className={classes.Text}>
                    Meet with Henry to change your plan.
                </div>
                <Button text={'Notify Henry'} route={'/dashboardpendingpayment'} />
            </div>
        </div>
    );
}

export default ChangePlan;
