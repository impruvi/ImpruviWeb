import classes from './QuestionnaireSlide.module.css';
import BasicTextInput from "../../../components/basic-text-input/BasicTextInput";
import {InputType} from "../../../constants/inputTypes.constants";
import {useState} from "react";
import useGlobalPopup, {popups} from "../../../hooks/useGlobalPopup";
import ActionButtons from "../action-buttons/ActionButtons";
import {isValidEmail, isValidPassword} from "../../../util/authUtil";
import useHttpClient from "../../../hooks/useHttpClient";

const InitiateSignup = ({firstName, lastName, setPlayerId, advance}) => {

    const {setOpenPopup} = useGlobalPopup();
    const {httpClient} = useHttpClient();

    const [validationErrors, setValidationErrors] = useState([]);
    const [isSubmissionErrorShowing, setIsSubmissionErrorShowing] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const isValidConfirmedPassword = (confirmedPassword) => {
        return confirmedPassword === password;
    };

    const onEmailChange = (email) => {
        if (isValidEmail(email)) {
            const errors = validationErrors.filter(err => err !== 'email');
            setEmail(email);
            setValidationErrors(errors);
        } else {
            setEmail(email);
        }
    };

    const onPasswordChange = (password) => {
        if (isValidPassword(password)) {
            const errors = validationErrors.filter(err => err !== 'password');
            setPassword(password);
            setValidationErrors(errors);
        } else {
            setPassword(password);
        }
    };

    const onConfirmedPasswordChange = (confirmedPassword) => {
        if (isValidConfirmedPassword(confirmedPassword)) {
            const errors = validationErrors.filter(err => err !== 'confirmedPassword');
            setConfirmedPassword(confirmedPassword);
            setValidationErrors(errors);
        } else {
            setConfirmedPassword(confirmedPassword);
        }
    }

    const hasError = (error) => {
        return validationErrors.filter(err => err === error).length > 0;
    };

    const submit = async () => {
        setIsSubmissionErrorShowing(false);

        const errors = [];
        if (!isValidEmail(email)) {
            errors.push('email');
        }
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
                const result = await httpClient.initiateSignUp({email, password, firstName, lastName});
                setPlayerId(result.playerId);
                advance();
            } catch (e) {
                setIsSubmissionErrorShowing(true);
            }
            setIsSubmitting(false);
        }
    }

    return (
        <div className={classes.Container}>
            <div className={classes.Title}>Create your account</div>
            <div className={classes.TextInputWrapper}>
                <BasicTextInput value={email}
                                error={hasError('email') ? 'Please provide a valid email address' : null}
                                onChange={onEmailChange}
                                placeholder={'Enter your email'}
                                type={InputType.Email}/>
            </div>
            <div className={classes.TextInputWrapper}>
                <BasicTextInput value={password}
                                error={hasError('password') ? 'Please enter a password' : null}
                                onChange={onPasswordChange}
                                placeholder={'Enter your password'}
                                type={InputType.Password}/>
            </div>
            <div className={classes.TextInputWrapper}>
                <BasicTextInput value={confirmedPassword}
                                error={hasError('confirmedPassword') ? 'Passwords do not match' : null}
                                onChange={onConfirmedPasswordChange}
                                placeholder={'Confirm your password'}
                                type={InputType.Password}/>
            </div>
            <ActionButtons primaryText={'Create account'}
                           onPrimaryClick={submit}
                           isPrimarySubmitting={isSubmitting}/>
            {isSubmissionErrorShowing &&
                <div className={classes.Error}>
                    <i className="fas fa-exclamation-circle"/> An account already exists with the given email.
                </div>
            }
            <div className={classes.Options}>
                <div className={classes.Option} onClick={() => setOpenPopup(popups.SignIn)}>
                    Already have an account? <span className={classes.LabelUnderline}>Sign in</span>
                </div>
            </div>
        </div>
    )
};

export default InitiateSignup;