import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import HttpClient from "../http-client/httpClient";
import {datadogRum} from '@datadog/browser-rum';
import {shouldReportUserSessions} from "../env/env";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    const [isLoadingAuth, setIsLoadingAuth] = useState(true);
    const [token, setToken] = useState();
    const [playerId, setPlayerId] = useState();


    const setDataDogUser = (player) => {
        if (!shouldReportUserSessions()) {
            return;
        }

        if (!!player) {
            datadogRum.setUser({
                id: player.playerId,
                name: `${player.firstName} ${player.lastName}`,
                email: player.email,
            });
        } else {
            datadogRum.removeUser();
        }
    }

    const getFromStorage = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return;
        }

        setToken(token);
        const playerId = localStorage.getItem('playerId');
        onSetPlayerId(playerId);
    }

    const onSetToken = async (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    }

    const onSetPlayerId = async (playerId) => {
        setPlayerId(playerId);
        localStorage.setItem('playerId', playerId);

        const httpClient = new HttpClient();
        if (!!playerId) {
            const player = await httpClient.getPlayer(playerId);
            if (player === null) {
                await signOut();
            } else {
                setDataDogUser(player);
            }
        }
    }

    const signOut = async () => {
        try {
            localStorage.removeItem('token');
            localStorage.removeItem('playerId');
            setToken(undefined);
            setPlayerId(undefined);
            setDataDogUser(undefined);
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
