import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import CaseCardsLayout from '../components/CaseCardsLayout';
import { cardsImages } from '../assets/data/home-data';
import { useAppContext } from '../context/AppContext';

const Home = () => {
    const { view } = useAppContext();
    const leftColImages = cardsImages.filter((img) => img.col === 'left');
    const rightColImages = cardsImages.filter((img) => img.col === 'right');

    const getHeadingHeight = () => {
        if (view === 'mobile') return 60;
        if (view === 'desktop') return 70;
        if (view === 'largeDesktop') return 120;
    };

    return (
        <motion.div
            className={styles.container}
            initial={{ backgroundColor: '#f2efe6' }}
            animate={{ backgroundColor: '#fff' }}
            transition={{ delay: 2.2 }}
        >
            <Head>
                <title>Home | Build in Amsterdam Clone</title>
                <meta name='description' content='buildinamsterdam clone' />
            </Head>

            <motion.div
                className={styles.awards_container}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
            >
                <div className={styles.awards}>AWWWARDS</div>
                <div className={styles.awards_details}>
                    E-commerce of the Year '17, '18, '19 & '20
                </div>
            </motion.div>

            <div className={styles.top}>
                <h1 className={styles.heading_container}>
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: getHeadingHeight(view) }}
                        transition={{ delay: 0 }}
                    >
                        <div className={styles.heading}>we build</div>
                    </motion.div>
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: getHeadingHeight(view) }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className={styles.heading}>digital</div>
                    </motion.div>
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: getHeadingHeight(view) }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className={[styles.heading, styles.ml].join(' ')}>
                            flagship
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: getHeadingHeight(view) }}
                        transition={{ delay: 1.2 }}
                    >
                        <div className={styles.heading}>stores</div>
                    </motion.div>
                </h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                >
                    <div className={styles.text_container}>
                        <div className={styles.text}>
                            We believe our industry is blinded by big numbers.
                            While buying decisions are based on emotion.
                        </div>
                        <div className={styles.link_container}>
                            <div className={styles.dot}></div>
                            <Link className={styles.link} href={'/about'}>
                                about us
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className={styles.bottom}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                >
                    <CaseCardsLayout
                        leftColImages={leftColImages}
                        rightColImages={rightColImages}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Home;
