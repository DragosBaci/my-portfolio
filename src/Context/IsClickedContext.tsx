import React, { createContext, useContext, useState, ReactNode } from 'react';

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

    const updateIsClicked = (newData: boolean) => {
        setIsClicked(newData);
    };

    return <IsClickedContext.Provider value={{ isClicked, updateIsClicked }}>{children}</IsClickedContext.Provider>;
};

const useIsClickedContext = (): IsClickedContextProps => {
    const context = useContext(IsClickedContext);
    if (!context) {
        throw new Error('useIsClickedContext must be used within a IsClickedProvider');
    }
    return context;
};

export { IsClickedProvider, useIsClickedContext };
