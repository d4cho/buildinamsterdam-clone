import React from 'react';
import styles from '../styles/NavItem.module.css';

const NavItem = ({ data }) => {
    const { title, imgUrl } = data;

    return (
        <div className={styles.container}>
            <div className={styles.dot} />
            <div className={styles.title}>{title}</div>
            <div className={styles.image_container}>
                <img className={styles.image} src={imgUrl} alt={title} />
            </div>
        </div>
    );
};

export default NavItem;
