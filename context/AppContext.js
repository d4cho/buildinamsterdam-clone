import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
    const [isMobileView, setIsMobileView] = useState(true);

    useEffect(() => {
        setIsMobileView(window.matchMedia('(max-width: 1024px)').matches);

        window
            .matchMedia('(max-width: 1024px)')
            .addEventListener('change', (e) => setIsMobileView(e.matches));
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <AppContext.Provider
            value={{
                isMobileView,
                isMenuOpen,
                setIsMenuOpen,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
