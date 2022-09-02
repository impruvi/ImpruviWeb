import ReactGA from "react-ga4";
import {shouldReportUserSessions} from "../env/env";

class GoogleAnalyticsClient {
    sendGeneralEvent(action) {
        if (shouldReportUserSessions()) {
            const fieldObject = {
                hitType: "event",
                eventCategory: "general",
                eventAction: action,
            };
            ReactGA.send(fieldObject);
        }
    }

    sendPurchaseSubscriptionEvent(value) {
        if (shouldReportUserSessions()) {
            const fieldObject = {
                hitType: "event",
                eventCategory: "subscription",
                eventAction: "purchase",
                value: value
            };
            ReactGA.send(fieldObject);
        }
    }
}

export default GoogleAnalyticsClient;
