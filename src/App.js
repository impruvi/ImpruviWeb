import {withRouter} from 'react-router-dom';
import {HttpClientProvider} from "./hooks/useHttpClient";
import {GlobalPopupProvider} from "./hooks/useGlobalPopup";
import AppInner from "./AppInner";
import {AuthProvider} from "./hooks/useAuth";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js";
import {getStripePublishableKey} from "./env/env";

const stripePromise = loadStripe(getStripePublishableKey());

function App() {
    return (
        <Elements stripe={stripePromise}>
            <AuthProvider>
                <GlobalPopupProvider>
                    <HttpClientProvider>
                        <AppInner />
                    </HttpClientProvider>
                </GlobalPopupProvider>
            </AuthProvider>
        </Elements>
    );
}

export default withRouter(App);
