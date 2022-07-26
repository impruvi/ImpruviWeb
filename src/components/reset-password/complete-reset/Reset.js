import TextInput from "../../text-input/TextInput";
import SubmitButton from "../../submit-button/SubmitButton";
import classes from "../../signup/SignupPopup.module.css";
import useHttpClient from "../../../hooks/useHttpClient";
import {useState} from "react";
import {isValidPassword} from "../../../util/authUtil";

const Reset = ({onComplete, email, code}) => {

    const {httpClient} = useHttpClient();

    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [isSubmissionErrorShowing, setIsSubmissionErrorShowing] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);


    const onPasswordChange = (event) => {
        if (isValidPassword(event.target.value)) {
            const errors = validationErrors.filter(err => err !== 'password');
            setPassword(event.target.value);
            setValidationErrors(errors);
        } else {
            setPassword(event.target.value);
        }
    };

    const onConfirmedPasswordChange = (event) => {
        if (isValidConfirmedPassword(event.target.value)) {
            const errors = validationErrors.filter(err => err !== 'confirmedPassword');
            setConfirmedPassword(event.target.value);
            setValidationErrors(errors);
        } else {
            setConfirmedPassword(event.target.value);
        }
    }

    const isValidConfirmedPassword = (confirmedPassword) => {
        return confirmedPassword === password;
    };

    const hasError = (error) => {
        return validationErrors.filter(err => err === error).length > 0;
    };

    const submit = async () => {
        setIsSubmissionErrorShowing(false);

        const errors = [];
        if (!isValidPassword(password)) {
            errors.push('password');
        }
        if (!isValidConfirmedPassword(confirmedPassword)) {
            errors.push('confirmedPassword');
        }

        if (errors.length > 0) {
            setValidationErrors(errors);
        } else {
            setIsSubmitting(true);
            try {
                await httpClient.resetPassword({email, password, code});
                onComplete();
            } catch (e) {
                setIsSubmissionErrorShowing(true);
            }
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <TextInput
                error={hasError('password') ? 'Please enter a password' : null}
                label="Password"
                icon="fas fa-lock"
                type="password"
                value={password}
                onChange={onPasswordChange}
                isDisabled={isSubmitting}/>
            <TextInput
                error={hasError('confirmedPassword') ? 'Passwords do not match' : null}
                label="Confirm password"
                icon="fas fa-lock"
                type="password"
                value={confirmedPassword}
                onChange={onConfirmedPasswordChange}
                isDisabled={isSubmitting}/>
            <SubmitButton isSubmitting={isSubmitting}
                          onClick={submit}
                          isFullWidth={true}
                          disabled={isSubmitting}>
                {isSubmitting ? 'Resetting...' : 'Reset'}
            </SubmitButton>
            {isSubmissionErrorShowing &&
                <div className={classes.Error}>
                    <i className="fas fa-exclamation-circle"/> An unexpected error occurred. Please try again.
                </div>
            }
        </>
    )
}

export default Reset;