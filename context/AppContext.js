import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
    const [view, setView] = useState('');

    useEffect(() => {
        if (window.matchMedia('(max-width: 1024px)').matches) {
            setView('mobile');
        } else if (window.matchMedia('(max-width: 1440px)').matches) {
            setView('desktop');
        } else {
            setView('largeDesktop');
        }

        window
            .matchMedia('(max-width: 1024px)')
            .addEventListener('change', (e) => {
                if (e.matches) {
                    setView('mobile');
                } else {
                    setView('desktop');
                }
            });

        window
            .matchMedia('(max-width: 1440px)')
            .addEventListener('change', (e) => {
                if (e.matches) {
                    setView('desktop');
                } else {
                    setView('largeDesktop');
                }
            });
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    console.log(view);

    return (
        <AppContext.Provider
            value={{
                view,
                isMenuOpen,
                setIsMenuOpen,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
