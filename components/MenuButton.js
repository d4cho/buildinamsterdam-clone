import React, { useState } from 'react';
import styles from '../styles/MenuButton.module.css';
import { motion } from 'framer-motion';

const MenuButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <motion.div
                className={[
                    styles.container,
                    isMenuOpen ? styles.blue : styles.orange,
                ].join(' ')}
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4, ease: 'easeIn', delay: 2.2 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <nav>
                    <button className={styles.button}></button>
                </nav>
            </motion.div>
            <motion.div
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4, ease: 'easeIn', delay: 2.2 }}
            >
                <svg
                    viewBox='0 0 500 500'
                    className={[
                        styles.curve,
                        isMenuOpen ? '' : styles.curve_text_animation,
                    ].join(' ')}
                >
                    <path
                        id='curve'
                        d='M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97'
                        fill='transparent'
                    />
                    <text width='500'>
                        <textPath href='#curve'>
                            {isMenuOpen ? 'Close' : 'Menu'}
                        </textPath>
                    </text>
                </svg>
            </motion.div>
        </>
    );
};

export default MenuButton;
