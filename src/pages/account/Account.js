import {Redirect, Route, Switch, useHistory, useLocation} from "react-router-dom";
import Profile from "./profile/Profile";
import Subscription from "./subscription/Subscription";
import PaymentMethods from "./payment-methods/PaymentMethods";
import classes from './Account.module.css';
import useAuth from "../../hooks/useAuth";
import FrequentlyAskedQuestions from "./faq/FrequentlyAskedQuestions";

const NavigationOption = ({path, text}) => {

    const history = useHistory();
    const location = useLocation();

    const isActive = location.pathname === path;

    return (
        <div className={isActive ? [classes.NavOption, classes.NavOptionActive].join(' ') : classes.NavOption} onClick={() => history.push(path)}>
            {text}
        </div>
    )
}

const Account = () => {

    const history = useHistory();
    const {signOut} = useAuth();

    const onSignout = () => {
        signOut();
        history.push('/');
    }

    return (
        <div className={classes.Container}>
            <div className={classes.Navigation}>
                <NavigationOption path={'/account/profile'} text={'Profile'}/>
                <NavigationOption path={'/account/subscription'} text={'Subscription'}/>
                <NavigationOption path={'/account/payment-methods'} text={'Payment methods'}/>
                <NavigationOption path={'/account/faq'} text={'FAQ'}/>
                <div className={classes.NavOption} onClick={onSignout}>Logout</div>
            </div>
            <div className={classes.Content}>
                <Switch>
                    <Route path="/account/profile" component={Profile}/>
                    <Route path="/account/subscription" component={Subscription}/>
                    <Route path="/account/payment-methods" component={PaymentMethods}/>
                    <Route path="/account/faq" component={FrequentlyAskedQuestions} />
                    <Redirect to="/account/profile" />
                </Switch>
            </div>
        </div>
    )
}

export default Account;