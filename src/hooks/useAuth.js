import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import HttpClient from "../http-client/httpClient";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    const [isLoadingAuth, setIsLoadingAuth] = useState(true);
    const [token, setToken] = useState();
    const [playerId, setPlayerId] = useState();


    const getFromStorage = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return;
        }

        setToken(token);
        const playerId = localStorage.getItem('playerId');
        setPlayerId(playerId);

        const httpClient = new HttpClient();
        if (!!playerId) {
            const player = await httpClient.getPlayer(playerId);
            if (player === null) {
                await signOut();
            }
        }

    }

    const onSetToken = async (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    }

    const onSetPlayerId = async (playerId) => {
        setPlayerId(playerId);
        localStorage.setItem('playerId', playerId);
    }

    const signOut = async () => {
        try {
            localStorage.removeItem('token');
            localStorage.removeItem('playerId');
            setToken(undefined);
            setPlayerId(undefined)
        } catch(exception) {
            console.error('An unexpected error occurred', exception);
        }
    }

    useEffect(() => {
        getFromStorage().then(() => setIsLoadingAuth(false));
    }, []);

    const memoedValue = useMemo(() => ({
        isLoadingAuth,
        token,
        playerId,
        setToken: onSetToken,
        setPlayerId: onSetPlayerId,
        signOut: signOut
    }), [isLoadingAuth, token, playerId, onSetPlayerId, onSetToken, signOut]);

    return (
        <AuthContext.Provider value={memoedValue}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return useContext(AuthContext);
}
