import TextInput from "../../text-input/TextInput";
import SubmitButton from "../../submit-button/SubmitButton";
import classes from "../ResetPassword.module.css";
import useHttpClient from "../../../hooks/useHttpClient";
import {useState} from "react";
import {isValidEmail} from "../../../util/authUtil";

const InitiateReset = ({onComplete, email, setEmail}) => {

    const {httpClient} = useHttpClient();

    const [validationErrors, setValidationErrors] = useState([]);
    const [isSubmissionErrorShowing, setIsSubmissionErrorShowing] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onEmailChange = (event) => {
        if (isValidEmail(event.target.value)) {
            const errors = validationErrors.filter(err => err !== 'email');
            setEmail(event.target.value);
            setValidationErrors(errors);
        } else {
            setEmail(event.target.value);
        }
    };

    const hasError = (error) => {
        return validationErrors.filter(err => err === error).length > 0;
    };

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            await initiatePasswordReset();
        }
    };

    const initiatePasswordReset = async () => {
        setIsSubmissionErrorShowing(false);

        const errors = [];
        if (!isValidEmail(email)) {
            errors.push('email');
        }

        if (errors.length > 0) {
            setValidationErrors(errors);
        } else {
            setIsSubmitting(true);
            try {
                await httpClient.initiatePasswordReset({email});
                onComplete();
            } catch (e) {
                setIsSubmissionErrorShowing(true);
            }
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <TextInput error={hasError('email') ? 'You must specify a valid email' : null}
                       label="Email"
                       icon="fas fa-envelope"
                       type="email"
                       value={email}
                       onChange={onEmailChange}
                       onKeyDown={handleKeyDown}
                       isDisabled={isSubmitting}/>

            <SubmitButton isSubmitting={isSubmitting}
                          onClick={initiatePasswordReset}
                          isFullWidth={true}
                          disabled={isSubmitting}>
                {isSubmitting ? 'Sending email...' : 'Send email'}
            </SubmitButton>
            {isSubmissionErrorShowing &&
                <div className={classes.Error}>
                    <i className="fas fa-exclamation-circle"/> No account exists with the provided email.
                </div>
            }
        </>
    )
}

export default InitiateReset;