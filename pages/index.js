import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import CaseCardsLayout from '../components/CaseCardsLayout';
import { cardsImages } from '../assets/data/home-data';

const Home = () => {
    const leftColImages = cardsImages.filter((img) => img.col === 'left');
    const rightColImages = cardsImages.filter((img) => img.col === 'right');

    return (
        <div className={styles.container}>
            <Head>
                <title>Clone | Build in Amsterdam | Home</title>
                <meta name='description' content='buildinamsterdam clone' />
            </Head>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
            >
                <div className={styles.awards_container}>
                    <div className={styles.awards}>AWWWARDS</div>
                    <div className={styles.awards_details}>
                        E-commerce of the Year '17, '18, '19 & '20
                    </div>
                </div>
            </motion.div>

            <div className={styles.top}>
                <h1 className={styles.heading_container}>
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 60 }}
                        transition={{ delay: 0 }}
                    >
                        <div className={styles.heading}>we build</div>
                    </motion.div>
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 60 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className={styles.heading}>digital</div>
                    </motion.div>
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 60 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className={[styles.heading, styles.ml].join(' ')}>
                            flagship
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 60 }}
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
        </div>
    );
};

export default Home;
