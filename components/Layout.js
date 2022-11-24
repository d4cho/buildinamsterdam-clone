import React from 'react';
import Header from './Header';
import MenuButton from './MenuButton';
import styles from '../styles/Layout.module.css';
import { useAppContext } from '../context/AppContext';

const Layout = ({ children }) => {
    const { isMenuOpen } = useAppContext();

    return (
        <div className={styles.container}>
            <div
                className={[styles.testtest, isMenuOpen && styles.move_up].join(
                    ' '
                )}
            >
                <Header />
                {children}
            </div>
            <MenuButton />
            <div
                className={[styles.test, isMenuOpen && styles.grow_up].join(
                    ' '
                )}
            >
                test
            </div>
        </div>
    );
};

export default Layout;
