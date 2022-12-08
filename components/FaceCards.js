import React from 'react';
import styles from '../styles/FaceCards.module.css';

const FaceCards = ({ faceData }) => {
    const { imgUrl, name, role } = faceData;

    return (
        <div className={styles.container}>
            <img src={imgUrl} alt={`${name}_${role}`} />
            <div className={styles.text_wrapper}>
                <p className={styles.name}>{name}</p>
                <p className={styles.dot}>·</p>
                <p className={styles.role}>{role}</p>
            </div>
        </div>
    );
};

export default FaceCards;
