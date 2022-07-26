import {useState} from "react";
import AuthPopup from "../auth-popup/AuthPopup";
import useGlobalPopup from "../../hooks/useGlobalPopup";
import InitiateSignup from "./initiate-signup/InitiateSignup";
import CompleteSignup from "./complete-signup/CompleteSignup";
import Completed from "./completed/Completed";
import {useHistory} from "react-router-dom";
import AuthSubtitle from "../auth-subtitle/AuthSubtitle";

const tab = {
    InitiateSignup: 'InitiateSignup',
    CompleteSignup: 'CompleteSignup',
    Completed: 'Completed'
}

const SignupPopup = () => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [playerId, setPlayerId] = useState('');
    const [activeTab, setActiveTab] = useState(tab.InitiateSignup);

    const {setOpenPopup} = useGlobalPopup();

    const close = () => {
        setOpenPopup(null);
    }

    const onSetPlayerId = (playerId) => {
        setPlayerId(playerId);
        setActiveTab(tab.CompleteSignup);
    }

    const onViewAccount = () => {
        close();
        history.push('/account')
    }

    const getTitle = () => {
        if (activeTab === tab.Completed) {
            return 'Your account has been created'
        } else {
            return 'Sign up'
        }
    }

    const getSubtitle = () => {
        if (activeTab === tab.InitiateSignup) {
            return <AuthSubtitle />
        } else if (activeTab === tab.CompleteSignup) {
            return `Please enter the verification code that was sent to ${email}`;
        } else {
            return 'Your account has successfully been created!';
        }
    }

    return (
        <AuthPopup close={close} title={getTitle()} subtitle={getSubtitle()}>
            {activeTab === tab.InitiateSignup && <InitiateSignup setPlayerId={onSetPlayerId} email={email} setEmail={setEmail}/>}
            {activeTab === tab.CompleteSignup && <CompleteSignup playerId={playerId} onComplete={() => setActiveTab(tab.Completed)}/>}
            {activeTab === tab.Completed && <Completed onComplete={onViewAccount}/>}
        </AuthPopup>
    )
}

export default SignupPopup;