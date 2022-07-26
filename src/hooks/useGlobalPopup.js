import React, {createContext, useContext, useMemo} from 'react';
import {useState} from "react";

const GlobalPopupContext = createContext({});

export const popups = {
    SignIn: 'SignIn',
    SignUp: 'SignUp',
    ResetPassword: 'ResetPassword',
}

export const GlobalPopupProvider = ({children}) => {

    const [openPopup, setOpenPopup] = useState();

    const memoedValue = useMemo(() => ({
        openPopup,
        setOpenPopup,
    }), [openPopup, setOpenPopup]);

    return (
        <GlobalPopupContext.Provider value={memoedValue}>
            {children}
        </GlobalPopupContext.Provider>
    )
}

export default function useGlobalPopup() {
    return useContext(GlobalPopupContext);
}
