import classes from './SigninPopup.module.css';
import {useState} from "react";
import TextInput from "../text-input/TextInput";
import {isValidEmail, isValidPassword} from "../../util/authUtil";
import AuthPopup from "../auth-popup/AuthPopup";
import useGlobalPopup, {popups} from "../../hooks/useGlobalPopup";
import useHttpClient from "../../hooks/useHttpClient";
import useAuth from "../../hooks/useAuth";
import SubmitButton from "../submit-button/SubmitButton";
import AuthSubtitle from "../auth-subtitle/AuthSubtitle";


const SigninPopup = () => {

    const {httpClient} = useHttpClient();
    const {setToken, setPlayerId} = useAuth();

    const {setOpenPopup} = useGlobalPopup();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [isSubmissionErrorShowing, setIsSubmissionErrorShowing] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            await submit();
        }
    };

    const onEmailChange = (event) => {
        if (isValidEmail(event.target.value)) {
            const errors = validationErrors.filter(err => err !== 'email');
            setEmail(event.target.value);
            setValidationErrors(errors);
        } else {
            setEmail(event.target.value);
        }
    };

    const onPasswordChange = (event) => {
        if (isValidPassword(event.target.value)) {
            const errors = validationErrors.filter(err => err !== 'password');
            setPassword(event.target.value);
            setValidationErrors(errors);
        } else {
            setPassword(event.target.value);
        }
    };

    const hasError = (error) => {
        return validationErrors.filter(err => err === error).length > 0;
    };

    const close = () => {
        setOpenPopup(null);
    }

    const submit = async () => {
        setIsSubmissionErrorShowing(false);

        const errors = [];
        if (!isValidEmail(email)) {
            errors.push('email');
        }
        if (!isValidPassword(password)) {
            errors.push('password');
        }

        if (errors.length > 0) {
            setValidationErrors(errors);
        } else {
            setIsSubmitting(true);
            try {
                const result = await httpClient.signIn({email, password});
                setToken(result.token);
                setPlayerId(result.player.playerId);
                close();
            } catch (e) {
                setIsSubmissionErrorShowing(true);
            }
            setIsSubmitting(false);
        }
    }

    return (
        <AuthPopup close={close} title={'Player sign in'} subtitle={<AuthSubtitle />}>
            <TextInput error={hasError('email') ? 'You must specify a valid email' : null}
                       label="Email"
                       icon="fas fa-envelope"
                       type="email"
                       value={email}
                       onChange={onEmailChange}
                       onKeyDown={handleKeyDown}
                       isDisabled={isSubmitting}/>
            <TextInput
                error={hasError('password') ? 'Please enter a password' : null}
                label="Password"
                icon="fas fa-lock"
                type="password"
                value={password}
                onChange={onPasswordChange}
                onKeyDown={handleKeyDown}
                isDisabled={isSubmitting}/>
            <SubmitButton isSubmitting={isSubmitting}
                          onClick={submit}
                          isFullWidth={true}
                          disabled={isSubmitting}>
                {isSubmitting ? 'Signing in...' : 'Sign in'}
            </SubmitButton>
            {isSubmissionErrorShowing &&
                <div className={classes.Error}>
                    <i className="fas fa-exclamation-circle"/> Invalid email/password combination.
                </div>
            }
            <div className={classes.Options}>
                <div className={classes.Option}>
                    Forgot password? <span className={classes.LabelUnderline} onClick={() => setOpenPopup(popups.ResetPassword)}>Reset password</span>
                </div>
                <div className={classes.Option}>
                    Don't have an account? <span className={classes.LabelUnderline} onClick={() => setOpenPopup(popups.SignUp)}>Sign up</span>
                </div>
            </div>
        </AuthPopup>
    )
}

export default SigninPopup;