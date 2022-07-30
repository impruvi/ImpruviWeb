import TextInput from "../../text-input/TextInput";
import SubmitButton from "../../submit-button/SubmitButton";
import classes from "../SignupPopup.module.css";
import useGlobalPopup, {popups} from "../../../hooks/useGlobalPopup";
import useHttpClient from "../../../hooks/useHttpClient";
import {useState} from "react";
import {isValidEmail, isValidPassword} from "../../../util/authUtil";

const InitiateSignup = ({setPlayerId, email, setEmail}) => {

    const {httpClient} = useHttpClient();

    const {setOpenPopup} = useGlobalPopup();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [isSubmissionErrorShowing, setIsSubmissionErrorShowing] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isValidFirstName = (firstName) => {
        return !!firstName && firstName.length > 0;
    }

    const isValidLastName = (lastName) => {
        return !!lastName && lastName.length > 0;
    }

    const isValidConfirmedPassword = (confirmedPassword) => {
        return confirmedPassword === password;
    };

    const onFirstNameChange = (event) => {
        if (isValidFirstName(event.target.value)) {
            const errors = validationErrors.filter(err => err !== 'firstName');
            setFirstName(event.target.value);
            setValidationErrors(errors);
        } else {
            setFirstName(event.target.value);
        }
    }

    const onLastNameChange = (event) => {
        if (isValidLastName(event.target.value)) {
            const errors = validationErrors.filter(err => err !== 'lastName');
            setLastName(event.target.value);
            setValidationErrors(errors);
        } else {
            setLastName(event.target.value);
        }
    }

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

    const onConfirmedPasswordChange = (event) => {
        if (isValidConfirmedPassword(event.target.value)) {
            const errors = validationErrors.filter(err => err !== 'confirmedPassword');
            setConfirmedPassword(event.target.value);
            setValidationErrors(errors);
        } else {
            setConfirmedPassword(event.target.value);
        }
    }

    const hasError = (error) => {
        return validationErrors.filter(err => err === error).length > 0;
    };

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            await submit();
        }
    };

    const submit = async () => {
        setIsSubmissionErrorShowing(false);

        const errors = [];
        if (!isValidFirstName(firstName)) {
            errors.push('firstName');
        }
        if (!isValidLastName(firstName)) {
            errors.push('lastName');
        }
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
            } catch (e) {
                setIsSubmissionErrorShowing(true);
            }
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <TextInput error={hasError('firstName') ? 'Please provide the player\'s first name' : null}
                       label="Player's first name"
                       icon="fas fa-user"
                       value={firstName}
                       onChange={onFirstNameChange}
                       onKeyDown={handleKeyDown}
                       isDisabled={isSubmitting}/>
            <TextInput error={hasError('lastName') ? 'Please provide the player\'s last name' : null}
                       label="Player's last name"
                       icon="fas fa-user"
                       value={lastName}
                       onChange={onLastNameChange}
                       onKeyDown={handleKeyDown}
                       isDisabled={isSubmitting}/>
            <TextInput error={hasError('email') ? 'Please provide a valid email' : null}
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
            <TextInput
                error={hasError('confirmedPassword') ? 'Passwords do not match' : null}
                label="Confirm password"
                icon="fas fa-lock"
                type="password"
                value={confirmedPassword}
                onChange={onConfirmedPasswordChange}
                onKeyDown={handleKeyDown}
                isDisabled={isSubmitting}/>

            <SubmitButton isSubmitting={isSubmitting}
                          onClick={submit}
                          isFullWidth={true}
                          disabled={isSubmitting}>
                {isSubmitting ? 'Signing up...' : 'Sign up'}
            </SubmitButton>
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
        </>
    )
}

export default InitiateSignup;