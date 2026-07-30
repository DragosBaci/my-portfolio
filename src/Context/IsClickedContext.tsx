import React, { createContext, useContext, useMemo, useState, ReactNode } from 'react';

interface IsClickedContextProps {
    isClicked: boolean;
    updateIsClicked: (newData: boolean) => void;
}

const IsClickedContext = createContext<IsClickedContextProps | undefined>(undefined);

interface IsClickedProviderProps {
    children: ReactNode;
}

const IsClickedProvider: React.FC<IsClickedProviderProps> = ({ children }) => {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    // A fresh object here would re-render every consumer on each provider render,
    // even when `isClicked` has not changed. `setIsClicked` is already stable.
    const value = useMemo(() => ({ isClicked, updateIsClicked: setIsClicked }), [isClicked]);

    return <IsClickedContext.Provider value={value}>{children}</IsClickedContext.Provider>;
};

const useIsClickedContext = (): IsClickedContextProps => {
    const context = useContext(IsClickedContext);
    if (!context) {
        throw new Error('useIsClickedContext must be used within a IsClickedProvider');
    }
    return context;
};

export { IsClickedProvider, useIsClickedContext };
