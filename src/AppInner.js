import classes from "./App.module.css";
import {matchPath, Route, Switch, useLocation} from "react-router-dom";
import Checkout from "./pages/checkout/Checkout";
import ChoosePlan from "./pages/choose-plan/ChoosePlan";
import Questionnaire from "./pages/questionnaire/Questionnaire";
import Coach from "./pages/coach/Coach";
import FindCoach from "./pages/find-coach/FindCoach";
import HowItWorks from "./pages/how-it-works/HowItWorks";
import Contact from "./pages/contact/Contact";
import BecomeACoach from "./pages/become-a-coach/BecomeACoach";
import Landing from "./pages/landing/Landing";
import useGlobalPopup, {popups} from "./hooks/useGlobalPopup";
import SigninPopup from "./components/signin/SigninPopup";
import SignupPopup from "./components/signup/SignupPopup";
import ResetPassword from "./components/reset-password/ResetPassword";
import Account from "./pages/account/Account";
import NavigationBar from "./components/navigation/NavigationBar";
import Terms from "./pages/terms/Terms";
import SubscriptionUpdated from "./pages/subscription-updated/SubscriptionUpdated";


const AppInner = () => {

    const location = useLocation();
    const {openPopup} = useGlobalPopup();

    return (
        <div className={classes.App}>
            <NavigationBar mode={matchPath(location.pathname, {
                path: '/coaches/:coachId',
                exact: true
            }) ? 'dark' : 'light'}/>
            <Switch>
                <Route path="/terms" component={Terms} />
                <Route path="/account" component={Account} />
                <Route path="/coaches/:coachId/product/:productId/price/:priceId/checkout" component={Checkout} />
                <Route path="/coaches/:coachId/product/:productId/price/:priceId/:action" component={SubscriptionUpdated} />
                <Route path="/coaches/:coachId/choose-plan" component={ChoosePlan} />
                <Route path="/coaches/:coachId/questionnaire" component={Questionnaire} />
                <Route path="/coaches/:coachId" component={Coach} />
                <Route path="/find-coach" component={FindCoach} />
                <Route path="/how-it-works" component={HowItWorks} />
                <Route path="/contact" component={Contact} />
                <Route path="/become-a-coach" component={BecomeACoach} />
                <Route path="/" component={Landing} />
            </Switch>

            {openPopup === popups.SignIn && <SigninPopup />}
            {openPopup === popups.SignUp && <SignupPopup />}
            {openPopup === popups.ResetPassword && <ResetPassword />}
        </div>
    )
}

export default AppInner;