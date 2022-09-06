import classes from "./Details.module.css";
import {useEffect, useState} from "react";
import useHttpClient from "../../../../hooks/useHttpClient";
import HeadshotChip from "../../../../components/headshot-chip/HeadshotChip";
import {PriceType} from "../../../../model/priceType";

const Details = ({coachId, priceType, numberOfTrainings, unitAmount, nextPaymentDate}) => {

    const [coach, setCoach] = useState();

    const {httpClient} = useHttpClient();

    useEffect(() => {
        httpClient.getCoach(coachId).then(setCoach);
    }, [httpClient, coachId]);

    return (
        <div className={classes.Container}>
            <div className={classes.SectionLarge}>
                <div className={classes.SectionTitle}>Overview</div>
                <div className={classes.PlanHeader}>
                    <HeadshotChip image={coach?.headshot?.fileLocation} firstName={coach?.firstName} lastName={coach?.lastName}/>
                    <div className={classes.Overview}>
                        <div>
                            {coach?.firstName} {coach?.lastName}
                        </div>
                        <div className={classes.SectionText}>
                            {numberOfTrainings} trainings {priceType === PriceType.Subscription ? 'per month' : ''}
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.SectionSmall}>
                <div className={classes.SectionTitle}>{priceType === PriceType.Subscription ? 'Next payment' : 'Expires'}</div>
                <div className={classes.SectionText}>{nextPaymentDate}</div>
            </div>
            <div className={classes.SectionSmall}>
                <div className={classes.SectionTitle}>Total</div>
                <div className={classes.SectionText}>${(unitAmount / 100).toFixed(2)}</div>
            </div>
        </div>
    )
}

export default Details;
