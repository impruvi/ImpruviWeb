import classes from "./CurrentSubscriptionWarning.module.css";
import InfoBox from "../../../components/info-box/InfoBox";
import WarningBlue from "../../../assets/WarningBlue.png";
import {useCallback, useEffect, useState} from "react";
import useHttpClient from "../../../hooks/useHttpClient";
import Spinner from "../../../components/spinner/Spinner";
import moment from "moment";

const CurrentSubscriptionWarning = ({subscription}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [coach, setCoach] = useState();

    const {httpClient} = useHttpClient();

    const initialize = useCallback(async () => {
        setIsLoading(true);
        try {
            const coach = await httpClient.getCoach(subscription.plan.coachId);
            setCoach(coach)
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, [httpClient, subscription]);

    const getUpdateEffectiveDate = () => {
        return moment.unix(subscription.currentPeriodEndDateEpochMillis / 1000).format('dddd, MMMM Do, YYYY');
    }

    useEffect(() => {
        initialize();
    }, [initialize]);

    return (
        <div className={classes.InfoBoxWrapper}>
            <InfoBox icon={WarningBlue}>
                {isLoading && <Spinner />}
                {!isLoading && (
                    <div>
                        You currently have a subscription with {coach.firstName} {coach.lastName}.
                        Updating your subscription will take effect at the end of your current billing cycle
                        ({getUpdateEffectiveDate()}).
                    </div>
                )}
            </InfoBox>
        </div>
    );
}

export default CurrentSubscriptionWarning;