import {useState} from "react";
import classes from "../CoachApplicationPopup.module.css";
import TextInput from "../../text-input/TextInput";
import SubmitButton from "../../submit-button/SubmitButton";
import useHttpClient from "../../../hooks/useHttpClient";
import {isValidEmail, isValidPhoneNumber} from "../../../util/authUtil";
import TextArea from "../../text-area/TextArea";

const Application = ({onComplete}) => {

    const {httpClient} = useHttpClient();

    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [experience, setExperience] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);
    const [isSubmissionErrorShowing, setIsSubmissionErrorShowing] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isValidFirstName = (firstName) => {
        return !!firstName && firstName.length > 0;
    }

    const isValidLastName = (lastName) => {
        return !!lastName && lastName.length > 0;
    }

    const isValidExperience = (experience) => {
        return !!experience && experience.length > 0;
    }

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

    const onPhoneNumberChange = (event) => {
        if (isValidPhoneNumber(event.target.value)) {
            const errors = validationErrors.filter(err => err !== 'phoneNumber');
            setPhoneNumber(event.target.value);
            setValidationErrors(errors);
        } else {
            setPhoneNumber(event.target.value);
        }
    };

    const onExperienceChange = (event) => {
        if (isValidExperience(event.target.value)) {
            const errors = validationErrors.filter(err => err !== 'experience');
            setExperience(event.target.value);
            setValidationErrors(errors);
        } else {
            setExperience(event.target.value);
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
        if (!isValidPhoneNumber(phoneNumber)) {
            errors.push('phoneNumber');
        }
        if (!isValidExperience(experience)) {
            errors.push('experience');
        }

        if (errors.length > 0) {
            setValidationErrors(errors);
        } else {
            setIsSubmitting(true);
            try {
                await httpClient.createCoachApplication({
                    email: email.trim(),
                    firstName: firstName.trim(),
                    lastName: lastName.trim(),
                    phoneNumber: phoneNumber,
                    experience: experience
                });
                onComplete();
            } catch (e) {
                setIsSubmissionErrorShowing(true);
            }
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <TextInput error={hasError('email') ? 'Please provide a valid email' : null}
                       label="Email"
                       icon="fas fa-envelope"
                       type="email"
                       value={email}
                       onChange={onEmailChange}
                       onKeyDown={handleKeyDown}
                       isDisabled={isSubmitting}/>
            <div className={classes.Section}>
                <div className={classes.SectionHalf}>
                    <TextInput error={hasError('firstName') ? 'Please provide the your first name' : null}
                               label="First name"
                               icon="fas fa-user"
                               value={firstName}
                               onChange={onFirstNameChange}
                               onKeyDown={handleKeyDown}
                               isDisabled={isSubmitting}/>
                </div>
                <div className={classes.SectionHalf}>
                    <TextInput error={hasError('lastName') ? 'Please provide the your last name' : null}
                               label="Last name"
                               icon="fas fa-user"
                               value={lastName}
                               onChange={onLastNameChange}
                               onKeyDown={handleKeyDown}
                               isDisabled={isSubmitting}/>
                </div>
            </div>

            <TextInput error={hasError('phoneNumber') ? 'Please provide a valid phone number' : null}
                       label="Phone number"
                       icon="fas fa-phone"
                       value={phoneNumber}
                       onChange={onPhoneNumberChange}
                       onKeyDown={handleKeyDown}
                       isDisabled={isSubmitting}/>
            <TextArea error={hasError('experience') ? 'Please provide the your experience' : null}
                      label="Experience"
                      value={experience}
                      onChange={onExperienceChange}
                      isDisabled={isSubmitting}/>
            <SubmitButton isSubmitting={isSubmitting}
                          onClick={submit}
                          isFullWidth={true}
                          disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </SubmitButton>
        </>
    )
}

export default Application;
