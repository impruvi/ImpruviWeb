import useAuth from "../../../hooks/useAuth";
import HeadshotChip from "../../../components/headshot-chip/HeadshotChip";
import BasicTextInput from "../../../components/basic-text-input/BasicTextInput";
import {useCallback, useEffect, useRef, useState} from "react";
import classes from './Profile.module.css';
import SubmitButton from "../../../components/submit-button/SubmitButton";
import useHttpClient from "../../../hooks/useHttpClient";
import Image from '../../../model/Image';
import Spinner from "../../../components/spinner/Spinner";

const Profile = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [player, setPlayer] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [headshot, setHeadshot] = useState();
    const [isSaving, setIsSaving] = useState(false);
    const [isSubmissionErrorShowing, setIsSubmissionErrorShowing] = useState(false);


    const {playerId} = useAuth();
    const {httpClient} = useHttpClient();
    const imageInputRef = useRef();


    const save = async () => {
        setIsSubmissionErrorShowing(false);
        setIsSaving(true);
        try {
            const newPlayer = await httpClient.updatePlayer({
                ...player,
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                email: email.trim(),
                headshot
            });
            setPlayer(newPlayer);
        } catch (e) {
            console.log(e);
            setIsSubmissionErrorShowing(true);
        }
        setIsSaving(false);
    }

    const handleUploadedImage = (e) => {
        const [file] = e.target.files;
        if (file) {
            console.log(file);
            const reader = new FileReader();
            reader.onload = (event) => {
                setHeadshot(new Image(file, event.target.result, true));
            };
            reader.readAsDataURL(file);
        }
    }

    const getPlayer = useCallback(async () => {
        if (!playerId) {
            return;
        }
        setIsLoading(true);
        try {
            const player = await httpClient.getPlayer(playerId);
            setPlayer(player);
            setFirstName(player.firstName);
            setLastName(player.lastName);
            setEmail(player.email);
            if (!!player?.headshot?.fileLocation) {
                setHeadshot(new Image(null, player.headshot.fileLocation, false, player.headshot.uploadDateEpochMillis))
            }
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }, [httpClient, playerId])

    useEffect(() => {
        getPlayer();
    }, [getPlayer]);

    return (
        <div className={classes.Container}>
            <div className={classes.Title}>Profile</div>
            {isLoading && (
                <Spinner />
            )}
            {!isLoading && (
                <>
                    <div className={classes.HeadshotContainer}>
                        <HeadshotChip image={!!headshot ? headshot.src : null} firstName={player?.firstName} lastName={player?.lastName} size={100}/>
                        <div className={classes.ChangeHeadshot} onClick={() => imageInputRef.current.click()}>Change photo</div>
                        <input ref={imageInputRef} type="file" accept={['.png', '.jpg']} multiple={false} onChange={e => {
                            handleUploadedImage(e);
                            imageInputRef.current.value = '';
                        }}/>

                    </div>
                    <div className={classes.TextInputWrapper}>
                        <BasicTextInput value={firstName} onChange={setFirstName} placeholder={'Enter your first name'}/>
                    </div>
                    <div className={classes.TextInputWrapper}>
                        <BasicTextInput value={lastName} onChange={setLastName} placeholder={'Enter your last name'}/>
                    </div>
                    <div className={classes.TextInputWrapper}>
                        <BasicTextInput value={email} onChange={setEmail} placeholder={'Enter your last email'}/>
                    </div>

                    <SubmitButton onClick={save}
                                  className={classes.SaveButton}
                                  isSubmitting={isSaving}
                                  isDisabled={isSaving}>
                        Save
                    </SubmitButton>
                    {isSubmissionErrorShowing &&
                        <div className={classes.Error}>
                            <i className="fas fa-exclamation-circle"/> An unexpected error occurred. Please try again.
                        </div>
                    }
                </>
            )}
        </div>
    )
}

export default Profile;
