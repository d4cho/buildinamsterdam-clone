import React from 'react';
import { useAppContext } from '../context/AppContext';
import styles from '../styles/NavItem.module.css';

const NavItem = ({ data }) => {
    const { view } = useAppContext();
    const { title, imgUrl, mobileImgUrl } = data;

    return (
        <div className={styles.container}>
            <div className={styles.dot} />
            <div className={styles.title}>{title}</div>
            <div className={styles.image_container}>
                <img
                    className={styles.image}
                    src={view === 'mobile' ? mobileImgUrl : imgUrl}
                    alt={title}
                />
            </div>
        </div>
    );
};

export default NavItem;
