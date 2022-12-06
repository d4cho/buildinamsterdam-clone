import React from 'react';
import styles from '../styles/SlidingText.module.css';

const SlidingText = ({ text }) => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>{text}</div>
            <div className={styles.dot}></div>
        </div>
    );
};

export default SlidingText;
