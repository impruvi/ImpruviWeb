import useGlobalPopup, {popups} from "../../hooks/useGlobalPopup";
import AuthPopup from "../auth-popup/AuthPopup";
import InitiateReset from "./initiate-reset/InitiateReset";
import Reset from "./complete-reset/Reset";
import EnterCode from "./enter-code/EnterCode";
import {useState} from "react";
import Completed from "./completed/Completed";

const tab = {
    InitiateReset: 'InitiateReset',
    EnterCode: 'EnterCode',
    Reset: 'Reset',
    Completed: 'Completed'
}

const ResetPassword = () => {

    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [activeTab, setActiveTab] = useState(tab.InitiateReset);

    const {setOpenPopup} = useGlobalPopup();

    const close = () => {
        setOpenPopup(null);
    }

    const getTitle = () => {
        if (activeTab === tab.Completed) {
            return 'Your password has been reset'
        } else {
            return 'Reset password'
        }
    }

    const getSubtitle = () => {
        if (activeTab === tab.InitiateReset) {
            return 'Please enter your email address. You will receive a code to reset your password.';
        } else if (activeTab === tab.EnterCode) {
            return `Please enter the verification code that was sent to ${email}`;
        } else if (activeTab === tab.Reset) {
            return 'Enter your new password. Strong passwords include numbers, letters, and punctuation marks.';
        } else {
            return 'Sign in with your new password';
        }
    }

    return (
        <AuthPopup close={close} title={getTitle()} subtitle={getSubtitle()}>
            {activeTab === tab.InitiateReset && <InitiateReset onComplete={() => setActiveTab(tab.EnterCode)} email={email} setEmail={setEmail}/>}
            {activeTab === tab.EnterCode && <EnterCode onComplete={() => setActiveTab(tab.Reset)} email={email} code={code} setCode={setCode}/>}
            {activeTab === tab.Reset && <Reset onComplete={() => setActiveTab(tab.Completed)} email={email} code={code}/>}
            {activeTab === tab.Completed && <Completed onComplete={() => setOpenPopup(popups.SignIn)}/>}
        </AuthPopup>
    );
}

export default ResetPassword;