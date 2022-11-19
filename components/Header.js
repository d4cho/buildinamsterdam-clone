import React from 'react';
import styles from '../styles/Header.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
    return (
        <div className={styles.container}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
            >
                <Link href={'/'}>
                    <div className={styles.logo}>BiA.</div>
                </Link>
            </motion.div>
        </div>
    );
};

export default Header;
