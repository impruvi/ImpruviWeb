import {withRouter} from 'react-router-dom';
import {HttpClientProvider} from "./hooks/useHttpClient";
import {GlobalPopupProvider} from "./hooks/useGlobalPopup";
import AppInner from "./AppInner";
import {AuthProvider} from "./hooks/useAuth";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js";

const publishableKey = 'pk_test_51LIhrlKA3EgJIYsfVJurg7PFSoPWLJFvBENrldRRY0PsNt5qzl6ehLOIJnxvjFrWiuioKmJpWHh2q4n8xt6GSbcD00vlDDHGn3';
const stripePromise = loadStripe(publishableKey);

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
