import classes from "./App.module.css";
import {matchPath, Route, Switch, useLocation} from "react-router-dom";
import Checkout from "./pages/checkout/Checkout";
import ChoosePlan from "./pages/choose-plan/ChoosePlan";
import Questionnaire from "./pages/questionnaire/Questionnaire";
import Coach from "./pages/coach/Coach";
import FindCoach from "./pages/find-coach/FindCoach";
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
import CoachApplicationPopup from "./components/coach-application/CoachApplicationPopup";
import Blog from "./pages/blog/Blog";

const AppInner = () => {

    const location = useLocation();
    const {openPopup} = useGlobalPopup();

    return (
        <div className={classes.App}>
            <NavigationBar
                mode={matchPath(location.pathname, {
                    path: '/coaches/:slug',
                    exact: true
                }) ? 'dark' : 'light'}
                sticky={!!matchPath(location.pathname, {
                    path: '/blog',
                    exact: false
                })}/>
            <Switch>
                <Route path="/terms" component={Terms} />
                <Route path="/privacy" component={Terms} />
                <Route path="/account" component={Account} />
                <Route path="/coaches/:slug/product/:productId/price/:priceId/:action" component={SubscriptionUpdated} />
                <Route path="/coaches/:slug/checkout/:priceType" component={Checkout} />
                <Route path="/coaches/:slug/choose-plan" component={ChoosePlan} />
                <Route path="/coaches/:slug/questionnaire" component={Questionnaire} />
                <Route path="/coaches/:slug" component={Coach} />
                <Route path="/coaches" component={FindCoach} />
                <Route path="/contact" component={Contact} />
                <Route path="/become-a-coach" component={BecomeACoach} />
                <Route path="/blog" component={Blog} />
                <Route path="/" component={Landing} />
            </Switch>

            {openPopup === popups.SignIn && <SigninPopup />}
            {openPopup === popups.SignUp && <SignupPopup />}
            {openPopup === popups.ResetPassword && <ResetPassword />}
            {openPopup === popups.CoachApplication && <CoachApplicationPopup />}
        </div>
    )
}

export default AppInner;
