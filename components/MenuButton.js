import React, { useState } from 'react';
import styles from '../styles/MenuButton.module.css';
import { motion } from 'framer-motion';

const MenuButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
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
    );
};

export default MenuButton;
