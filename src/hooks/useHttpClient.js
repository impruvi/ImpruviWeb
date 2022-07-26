import React, {createContext, useContext, useMemo} from 'react';
import HttpClient from "../http-client/httpClient";
import useAuth from "./useAuth";

const HttpClientContext = createContext({});

export const HttpClientProvider = ({children}) => {

    const {token} = useAuth();

    const httpClient = new HttpClient(token);

    const memoedValue = useMemo(() => ({
        httpClient,
    }), [httpClient]);

    return (
        <HttpClientContext.Provider value={memoedValue}>
            {children}
        </HttpClientContext.Provider>
    )
}

export default function useHttpClient() {
    return useContext(HttpClientContext);
}
