import React, {createContext, useContext, useMemo, useState} from 'react';

const VisitedContext = createContext({});

export const VisitedProvider = ({children}) => {
    const [hasVisited, setHasVisited] = useState(false);

    const memoedValue = useMemo(() => ({
        hasVisited,
        setHasVisited,
    }), [hasVisited, setHasVisited]);

    return (
        <VisitedContext.Provider value={memoedValue}>
            {children}
        </VisitedContext.Provider>
    )
}

export default function useVisited() {
    return useContext(VisitedContext);
}
