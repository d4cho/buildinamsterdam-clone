import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Contact.module.css';
import { motion } from 'framer-motion';
import CaseCardsLayout from '../components/CaseCardsLayout';
import { contactImages } from '../assets/data/contact-data';
import { useAppContext } from '../context/AppContext';
import SlidingText from '../components/SlidingText';

const Contact = () => {
    const { view } = useAppContext();
    const leftColImages = contactImages.filter((img) => img.col === 'left');
    const rightColImages = contactImages.filter((img) => img.col === 'right');

    const getHeadingHeight = () => {
        if (view === 'mobile') return 60;
        if (view === 'desktop') return 70;
        if (view === 'largeDesktop') return 120;
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Contact | Build in Amsterdam Clone</title>
                <meta name='description' content='buildinamsterdam clone' />
            </Head>

            <div className={styles.top}>
                <CaseCardsLayout
                    leftColImages={leftColImages}
                    rightColImages={rightColImages}
                />
            </div>

            <div className={styles.bottom}>
                <h1 className={styles.heading1}>Get in touch</h1>
                <div className={styles.us_container}>
                    <div>
                        <h2 className={styles.heading2}>write us</h2>
                        <div className={styles.sliding_text}>
                            <SlidingText text={'hello@buildinamsterdam.com'} />
                        </div>
                    </div>
                    <div>
                        <h2 className={styles.heading2}>call us</h2>
                        <div className={styles.sliding_text}>
                            <SlidingText text={'+31 (0)20 223 00 66'} />
                        </div>
                    </div>
                    <div>
                        <h2 className={styles.heading2}>join us</h2>
                        <div className={styles.sliding_text}>
                            <SlidingText text={'jobs.buildinamsterdam.com'} />
                        </div>
                    </div>
                    <div>
                        <h2 className={styles.heading2}>visit us</h2>
                        <div className={styles.sliding_text}>
                            <SlidingText
                                text={'Baarsjesweg 285-286 | 1058 AE Amsterdam'}
                            />
                        </div>
                    </div>
                    <div>
                        <h2
                            className={[
                                styles.heading2,
                                styles.custom_margin,
                            ].join(' ')}
                        >
                            follow us
                        </h2>
                        <ul className={styles.ul}>
                            <li className={styles.sliding_text}>
                                <SlidingText text={'Instagram'} />
                            </li>
                            <li className={styles.sliding_text}>
                                <SlidingText text={'Facebook'} />
                            </li>
                            <li className={styles.sliding_text}>
                                <SlidingText text={'Twitter'} />
                            </li>
                            <li className={styles.sliding_text}>
                                <SlidingText text={'LinkedIn'} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
