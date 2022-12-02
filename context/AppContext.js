import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
    const [view, setView] = useState('');

    useEffect(() => {
        if (window.matchMedia('(max-width: 1024px)').matches) {
            setView('mobile');
        } else if (window.matchMedia('(max-width: 2000px)').matches) {
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
            .matchMedia('(max-width: 2000px)')
            .addEventListener('change', (e) => {
                if (e.matches) {
                    setView('desktop');
                } else {
                    setView('largeDesktop');
                }
            });
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const [selectedFilter, setSelectedFilter] = useState('');

    const router = useRouter();
    const [isCaseDetailPage, setIsCaseDetailPage] = useState(false);
    const [caseId, setCaseId] = useState('');
    useEffect(() => {
        const caseId = router.query.caseId;
        if (caseId) {
            setIsCaseDetailPage(true);
            setCaseId(caseId);
        } else {
            setIsCaseDetailPage(false);
            setCaseId('');
        }
    }, [router.query.caseId]);

    const [scrollDir, setScrollDir] = useState('');

    return (
        <AppContext.Provider
            value={{
                view,
                isMenuOpen,
                setIsMenuOpen,
                isFilterOpen,
                setIsFilterOpen,
                selectedFilter,
                setSelectedFilter,
                isCaseDetailPage,
                caseId,
                scrollDir,
                setScrollDir,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
