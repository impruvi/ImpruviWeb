import useGlobalPopup from "../../hooks/useGlobalPopup";
import AuthPopup from "../auth-popup/AuthPopup";
import {useState} from "react";
import Application from "./application/Application";
import Completed from "./completed/Completed";

const tab = {
    Apply: 'Apply',
    Completed: 'Completed'
}

const CoachApplicationPopup = () => {

    const [activeTab, setActiveTab] = useState(tab.Apply);

    const {setOpenPopup} = useGlobalPopup();

    const close = () => {
        setOpenPopup(null);
    }

    return (
        <AuthPopup close={close}
                   title={activeTab === tab.Apply ? 'Join imprüvi as a coach' : ''}
                   subtitle={activeTab === tab.Apply ? 'Tell us about yourself and we will get back to you within 24 hours' : ''}>
            {activeTab === tab.Apply && <Application onComplete={() => setActiveTab(tab.Completed)}/>}
            {activeTab === tab.Completed && <Completed />}
        </AuthPopup>
    )
}

export default CoachApplicationPopup;
