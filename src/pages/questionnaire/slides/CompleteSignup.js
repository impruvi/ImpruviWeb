import classes from './QuestionnaireSlide.module.css';
import BasicTextInput from "../../../components/basic-text-input/BasicTextInput";
import {InputType} from "../../../constants/inputTypes.constants";
import {useState} from "react";
import ActionButtons from "../action-buttons/ActionButtons";
import useHttpClient from "../../../hooks/useHttpClient";

const CompleteSignup = ({playerId, onComplete, isSubmitting}) => {

    const {httpClient} = useHttpClient();

    const [validationErrors, setValidationErrors] = useState([]);
    const [isSubmissionErrorShowing, setIsSubmissionErrorShowing] = useState(false);
    const [isValidating, setIsValidating] = useState(false);
    const [code, setCode] = useState('');

    const isValidCode = (code) => {
        return !!code && code.length > 0;
    }

    const onCodeChange = (code) => {
        if (isValidCode(code)) {
            const errors = validationErrors.filter(err => err !== 'code');
            setCode(code);
            setValidationErrors(errors);
        } else {
            setCode(code);
        }
    };

    const hasError = (error) => {
        return validationErrors.filter(err => err === error).length > 0;
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
                const result = await httpClient.completeSignUp({playerId, code});
                onComplete(result.player, result.token);
            } catch (e) {
                setIsSubmissionErrorShowing(true);
            }
            setIsValidating(false);
        }
    }

    return (
        <div className={classes.Container}>
            <div className={classes.Title}>Enter verification code</div>
            <div className={classes.TextInputWrapper}>
                <BasicTextInput value={code}
                                error={hasError('code') ? 'Please enter your verification code' : null}
                                onChange={onCodeChange}
                                placeholder={'Enter code'}
                                type={InputType.Email}/>
            </div>
            <ActionButtons primaryText={'Verify'}
                           onPrimaryClick={validateVerificationCode}
                           isPrimarySubmitting={isValidating || isSubmitting}
                           shouldShowSecondary={false}/>
            {isSubmissionErrorShowing &&
                <div className={classes.Error}>
                    <i className="fas fa-exclamation-circle"/> The code you entered is invalid.
                </div>
            }
        </div>
    )
}

export default CompleteSignup;