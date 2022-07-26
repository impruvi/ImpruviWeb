import classes from "./Details.module.css";
import {useEffect, useState} from "react";
import useHttpClient from "../../../../hooks/useHttpClient";

const Details = ({subscriptionPlan, nextPaymentDate}) => {

    const [coach, setCoach] = useState();

    const {httpClient} = useHttpClient();

    useEffect(() => {
        httpClient.getCoach(subscriptionPlan.coachId).then(setCoach);
    }, [httpClient, subscriptionPlan]);

    return (
        <div className={classes.Container}>
            <div className={classes.SectionLarge}>
                <div className={classes.SectionTitle}>Overview</div>
                <div className={classes.PlanHeader}>
                    <img src={coach?.headshot?.fileLocation} className={classes.Headshot}/>
                    <div>
                        <div>
                            {coach?.firstName} {coach?.lastName} {subscriptionPlan.type} plan
                        </div>
                        <div className={classes.SectionText}>
                            {subscriptionPlan.numberOfTrainings / 4} training per week ({subscriptionPlan.numberOfTrainings} per month)
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.SectionSmall}>
                <div className={classes.SectionTitle}>Next payment</div>
                <div className={classes.SectionText}>{nextPaymentDate}</div>
            </div>
            <div className={classes.SectionSmall}>
                <div className={classes.SectionTitle}>Total</div>
                <div className={classes.SectionText}>${(subscriptionPlan.unitAmount / 100).toFixed(2)}</div>
            </div>
        </div>
    )
}

export default Details;