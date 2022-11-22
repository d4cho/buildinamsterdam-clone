import React from 'react';
import styles from '../styles/CaseCards.module.css';
import Image from 'next/image';

const CaseCards = ({ imageData }) => {
    const { url, title, desc, textColorOverride } = imageData;

    return (
        <div className={styles.container}>
            <Image
                src={url}
                alt={title}
                fill={true}
                sizes='(max-width: 768px) 100%,
                100%'
                style={{ objectFit: 'cover' }}
            />
            <div className={styles.text_wrapper}>
                <div
                    className={styles.text}
                    style={textColorOverride && { color: textColorOverride }}
                >
                    <span className={styles.title}>{title}</span>
                    <span className={styles.separator}>&nbsp;·&nbsp;</span>
                    <span className={styles.desc}>{desc}</span>
                </div>
            </div>
        </div>
    );
};

export default CaseCards;
