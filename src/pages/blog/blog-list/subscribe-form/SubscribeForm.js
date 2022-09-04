import classes from "./SubscribeForm.module.css";
import SubmitButton from "../../../../components/submit-button/SubmitButton";
import BasicTextInput from "../../../../components/basic-text-input/BasicTextInput";
import useHttpClient from "../../../../hooks/useHttpClient";
import React, {useState} from "react";
import {isValidEmail} from "../../../../util/authUtil";
import useGoogleAnalyticsClient from "../../../../hooks/useGoogleAnalyticsClient";

const SubscribeForm = () => {

    const [email, setEmail] = useState('');
    const [hasError, setHasError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasSubscribed, setHasSubscribed] = useState(false);

    const {httpClient} = useHttpClient();
    const {gaClient} = useGoogleAnalyticsClient();

    const subscribe = async () => {
        if (!isValidEmail(email)) {
            setHasError(true);
            return;
        }
        setHasError(false);
        setIsSubmitting(true);

        try {
            gaClient.sendGeneralEvent("email_list_subscription");
            await httpClient.subscribeToEmailList(email);
        } catch (e) {
            setHasError(false);
        }
        setIsSubmitting(false);
        setEmail('');
        setHasSubscribed(true);
    }

    return (
        <div className={classes.Container}>
            <div className={classes.Title}>
                Subscribe via email
            </div>
            <div className={classes.DividerContainer}>
                <div className={classes.Divider}/>
            </div>
            <div className={classes.Label}>
                Email address
            </div>
            <BasicTextInput className={classes.TextInput}
                            onChange={setEmail}
                            value={email}/>
            {hasError && (
                <div className={classes.Error}>
                    There seems to be something wrong with your email address.
                </div>
            )}
            <SubmitButton className={classes.ActionButton}
                          onClick={subscribe}
                          isSubmitting={isSubmitting}
                          isDisabled={hasSubscribed}>
                {!hasSubscribed && (
                    <>
                        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                    </>
                )}
                {hasSubscribed && (
                    <>
                        Subscribed <span className={classes.CheckIcon}><i className="fas fa-check"/></span>
                    </>
                )}
            </SubmitButton>

            <div className={classes.SubText}>
                We're committed to your privacy. Impruvi uses the information you provide to us to contact you
                about our relevant content, products, and services. You may unsubscribe from these communications
                at any time. For more information, check out our <a href={'/privacy'}>privacy policy.</a>
            </div>
        </div>
    )
}

export default SubscribeForm;
