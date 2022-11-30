import React, { useState } from 'react';
import styles from '../styles/MenuButton.module.css';
import { motion } from 'framer-motion';
import { useAppContext } from '../context/AppContext';

const MenuButton = () => {
    const {
        isMenuOpen,
        setIsMenuOpen,
        isFilterOpen,
        setIsFilterOpen,
        selectedFilter,
    } = useAppContext();
    const [touched, setTouched] = useState(false);

    const handleMouseLeave = () => {
        setTimeout(() => {
            setTouched(false);
        }, 300);
    };

    const renderText = () => {
        let text;
        if (isFilterOpen) {
            text = 'Close';
            if (selectedFilter) {
                text = 'Apply';
            }
            return text;
        }

        if (isMenuOpen) {
            return 'Close';
        }

        return 'Menu';
    };

    const getColorClass = () => {
        if (isMenuOpen || (isFilterOpen && selectedFilter)) return styles.blue;
        return styles.orange;
    };

    const handleButtonClick = () => {
        if (isFilterOpen) {
            setIsFilterOpen(false);
        } else {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    return (
        <div
            className={styles.container}
            onMouseEnter={() => setTouched(true)}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className={[styles.wrapper, getColorClass()].join(' ')}
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeIn', delay: 2.2 }}
                onClick={handleButtonClick}
            >
                <nav>
                    <button className={styles.button}></button>
                </nav>
            </motion.div>
            <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeIn', delay: 2.2 }}
            >
                <svg
                    viewBox='0 0 500 500'
                    className={[
                        styles.curve,
                        // mobile
                        isMenuOpen || isFilterOpen
                            ? styles.menu_open
                            : styles.curve_text_animation,
                        // desktop
                        isMenuOpen
                            ? ''
                            : touched
                            ? styles.exit
                            : styles.initial,
                    ].join(' ')}
                >
                    <path
                        id='curve'
                        d='M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97'
                        fill='transparent'
                    />
                    <text width='500'>
                        <textPath
                            href='#curve'
                            style={{
                                fill: isMenuOpen ? '#fff' : '#000',
                            }}
                        >
                            {renderText()}
                        </textPath>
                    </text>
                </svg>
            </motion.div>
        </div>
    );
};

export default MenuButton;
