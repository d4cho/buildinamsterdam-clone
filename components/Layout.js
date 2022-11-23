import React from 'react';
import Header from './Header';
import MenuButton from './MenuButton';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <MenuButton />
            <div>{children}</div>
        </div>
    );
};

export default Layout;
