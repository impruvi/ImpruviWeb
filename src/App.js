import classes from './App.module.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import ChangePlan from "./pages/changeplan/ChangePlan";
import Content from "./pages/content/Content";
import Demo from "./pages/demo/Demo";
import Landing from "./pages/landing/Landing";
import DashboardPendingIntro from "./pages/dashboardpendingintro/DashboardPendingIntro";
import Signin from "./pages/signin/Signin";
import ChooseCoach from "./pages/choosecoach/ChooseCoach";
import CoachNotified from "./pages/coachnotified/CoachNotified";
import ContentLocked from "./pages/contentlocked/ContentLocked";
import Dashboard from "./pages/dashboard/Dashboard";
import MySubmission from "./pages/mysubmission/MySubmission";
import PremadePlan from "./pages/premadeplan/PremadePlan";
import Signup from "./pages/signup/Signup";
import DashboardPendingPayment from "./pages/dashboardpendingpayment/DashboardPendingPayment";
import HowItWorks from "./pages/howitworks/HowItWorks";
import Questionnaire from "./pages/questionnaire/Questionnaire";
import {VisitedProvider} from "./hooks/useVisited";
import ContentAfter from "./pages/contentafter/ContentAfter";
import Pricing from "./pages/pricing/Pricing";

function App() {
  return (
      <VisitedProvider>
        <div className={classes.App}>
          <Switch>
            <Route path="/changeplan" component={ChangePlan} />
            <Route path="/choosecoach" component={ChooseCoach} />
            <Route path="/coachnotified" component={CoachNotified} />
            <Route path="/content" component={Content} />
            <Route path="/contentafter" component={ContentAfter} />
            <Route path="/contentlocked" component={ContentLocked} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/demo" component={Demo} />
            <Route path="/mysubmission" component={MySubmission} />
            <Route path="/dashboardpendingintro" component={DashboardPendingIntro} />
            <Route path="/dashboardpendingpayment" component={DashboardPendingPayment} />
            <Route path="/premadeplan" component={PremadePlan} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/howitworks" component={HowItWorks} />
            <Route path="/questionnaire" component={Questionnaire} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </div>
      </VisitedProvider>
  );
}

export default withRouter(App);
