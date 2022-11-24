import React from 'react';
import Header from './Header';
import MenuButton from './MenuButton';
import styles from '../styles/Layout.module.css';
import { useAppContext } from '../context/AppContext';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    const { isMenuOpen } = useAppContext();

    return (
        <div className={styles.container}>
            <div
                className={[
                    styles.page_content,
                    isMenuOpen && styles.move_up,
                ].join(' ')}
            >
                <Header />
                {children}
            </div>
            <MenuButton />
            <Navbar />
        </div>
    );
};

export default Layout;
