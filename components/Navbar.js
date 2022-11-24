import React from 'react';
import { useAppContext } from '../context/AppContext';
import styles from '../styles/Navbar.module.css';
import NavItem from './NavItem';
import { navData } from '../assets/data/nav-data';

const Navbar = () => {
    const { isMenuOpen, setIsMenuOpen } = useAppContext();

    return (
        <>
            {isMenuOpen && (
                <div
                    className={styles.backdrop}
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
            <nav
                className={[
                    styles.container,
                    isMenuOpen && styles.nav_open,
                ].join(' ')}
            >
                <div
                    className={[
                        styles.nav_items_wrapper,
                        isMenuOpen && styles.show_nav_items,
                    ].join(' ')}
                >
                    <div className={styles.nav_flex}>
                        {navData.map((navItem, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    <NavItem data={navItem} />
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
