import {withRouter} from 'react-router-dom';
import {HttpClientProvider} from "./hooks/useHttpClient";
import {GlobalPopupProvider} from "./hooks/useGlobalPopup";
import AppInner from "./AppInner";
import {AuthProvider} from "./hooks/useAuth";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js";
import {getStripePublishableKey, shouldReportUserSessions} from "./env/env";
import { datadogRum } from '@datadog/browser-rum';
import ReactGA from "react-ga4";
import {GoogleAnalyticsClientProvider} from "./hooks/useGoogleAnalyticsClient";

ReactGA.initialize("G-82QGHMLMMY");

if (shouldReportUserSessions()) {
    datadogRum.init({
        applicationId: 'e3c81fd6-ae7a-4cdf-84b7-870cf845b7ab',
        clientToken: 'pub47e0f94d03391043d2e6a8ef582b41f3',
        site: 'datadoghq.com',
        service:'impruvi',
        env:'prod',
        // Specify a version number to identify the deployed version of your application in Datadog
        version: '1.0.0',
        sampleRate: 100,
        premiumSampleRate: 100,
        trackInteractions: true,
        defaultPrivacyLevel:'mask-user-input'
    });

    datadogRum.startSessionReplayRecording();
}

const stripePromise = loadStripe(getStripePublishableKey());

function App() {
    return (
        <Elements stripe={stripePromise}>
            <AuthProvider>
                <GlobalPopupProvider>
                    <HttpClientProvider>
                        <GoogleAnalyticsClientProvider>
                            <AppInner />
                        </GoogleAnalyticsClientProvider>
                    </HttpClientProvider>
                </GlobalPopupProvider>
            </AuthProvider>
        </Elements>
    );
}

export default withRouter(App);
