import Header from "../../components/header/Header";
import classes from "./PremadePlan.module.css";
import Button from "../../components/button/Button";

const  PremadePlan = () => {

    return (
        <div>
            <Header />
            <div className={classes.Container}>
                <div className={classes.Text}>
                    It looks like you are doing in person sessions with Henry and he
                    has already come up with a recommended plan
                </div>
                <div className={classes.Buttons}>
                    <Button text={'Go to Henry\'s plan'} route={'/dashboardpendingpayment'} />
                    <Button text={'Choose a new coach'} route={'/choosecoach'} />
                </div>
            </div>
        </div>
    );
}

export default  PremadePlan;
