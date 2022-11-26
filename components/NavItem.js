import React from 'react';
import { useAppContext } from '../context/AppContext';
import styles from '../styles/NavItem.module.css';
import Link from 'next/link';

const NavItem = ({ data }) => {
    const { view, setIsMenuOpen } = useAppContext();
    const { title, imgUrl, mobileImgUrl, linkTo } = data;

    return (
        <div className={styles.container} onClick={() => setIsMenuOpen(false)}>
            <Link href={linkTo}>
                <div className={styles.dot} />
                <div className={styles.title}>{title}</div>
                <div className={styles.image_container}>
                    <img
                        className={styles.image}
                        src={view === 'mobile' ? mobileImgUrl : imgUrl}
                        alt={title}
                    />
                </div>
            </Link>
        </div>
    );
};

export default NavItem;
