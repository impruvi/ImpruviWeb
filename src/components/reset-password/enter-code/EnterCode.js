import TextInput from "../../text-input/TextInput";
import SubmitButton from "../../submit-button/SubmitButton";
import {useState} from "react";
import useHttpClient from "../../../hooks/useHttpClient";
import classes from "../ResetPassword.module.css";

const EnterCode = ({onComplete, email, code, setCode}) => {

    const {httpClient} = useHttpClient();

    const [validationErrors, setValidationErrors] = useState([]);
    const [isSubmissionErrorShowing, setIsSubmissionErrorShowing] = useState(false);
    const [isValidating, setIsValidating] = useState(false);


    const isValidCode = (code) => {
        return !!code && code.length > 0;
    }

    const onCodeChange = (event) => {
        if (isValidCode(event.target.value)) {
            const errors = validationErrors.filter(err => err !== 'code');
            setCode(event.target.value);
            setValidationErrors(errors);
        } else {
            setCode(event.target.value);
        }
    };

    const hasError = (error) => {
        return validationErrors.filter(err => err === error).length > 0;
    };

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            await validateVerificationCode();
        }
    };

    const validateVerificationCode = async () => {
        setIsSubmissionErrorShowing(false);

        const errors = [];
        if (!isValidCode(code)) {
            errors.push('code');
        }

        if (errors.length > 0) {
            setValidationErrors(errors);
        } else {
            setIsValidating(true);
            try {
                await httpClient.validatePasswordResetCode({email, code});
                onComplete();
            } catch (e) {
                setIsSubmissionErrorShowing(true);
            }
            setIsValidating(false);
        }
    }

    return (
        <>
            <TextInput error={hasError('code') ? 'Please enter your verification code' : null}
                       label="Enter code"
                       value={code}
                       onChange={onCodeChange}
                       onKeyDown={handleKeyDown}
                       isDisabled={setIsValidating}/>

            <SubmitButton isSubmitting={isValidating}
                          onClick={validateVerificationCode}
                          isFullWidth={true}
                          disabled={isValidating}>
                {isValidating ? 'Verifying...' : 'Verify'}
            </SubmitButton>
            {isSubmissionErrorShowing &&
                <div className={classes.Error}>
                    <i className="fas fa-exclamation-circle"/> The code you entered is invalid.
                </div>
            }
        </>
    )
}

export default EnterCode;