import React from 'react';
import styles from '../../styles/CaseDetails.module.css';
import { casesData } from '../../assets/data/cases-data';
import Header from '../../components/Header';
import Link from 'next/link';

// Generates `/cases/1`, `/cases/2`, ...
export const getStaticPaths = async () => {
    const paths = casesData.map((item) => {
        return {
            params: {
                caseId: item.caseId,
            },
        };
    });

    return {
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    };
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps = async (context) => {
    const caseId = context.params.caseId;
    const caseData = casesData.filter((item) => item.caseId === caseId)[0];

    return {
        // Passed to the page component as props
        props: { caseId: caseId, caseData: caseData },
    };
};

const CaseDetails = ({ caseId, caseData }) => {
    const getLogoColor = (caseId) => {
        switch (caseId) {
            case 'suitsupply':
                return '#fff';

            default:
                return '#000';
        }
    };

    console.log(caseData);

    const {
        url,
        title,
        desc,
        page1,
        page2,
        page3,
        page4,
        page5,
        page6,
        page7,
        page8,
        page9,
        page10,
    } = caseData;

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {/* main page */}
                <div className={styles.main_page}>
                    <Header logoColor={getLogoColor(caseId)} delay={0} />
                    <img
                        className={styles.main_page_image}
                        src={url}
                        alt={title}
                    />
                    <footer className={styles.main_page_footer}>
                        <span className={styles.main_page_title}>{title}</span>
                        <span className={styles.main_page_separator}>
                            &nbsp;·&nbsp;
                        </span>
                        <span className={styles.main_page_desc}>{desc}</span>
                    </footer>
                </div>

                {/* page 1 */}
                <div className={styles.page1}>
                    <div className={styles.page1_top_container}>
                        <h2>{page1.heading1}</h2>
                        <p>{page1.desc1}</p>
                        <p>{page1.desc2}</p>
                        <a target='_blank' href={page1.redirectUrl}>
                            <div>visit platform</div>
                        </a>
                    </div>
                    <div className={styles.page1_bottom_container}>
                        <div>
                            <h3>{page1.heading2}</h3>
                            <ul>
                                {page1.heading2List.map((item, idx) => {
                                    return (
                                        <li key={idx}>{`${item} ${
                                            idx !==
                                                page1.heading2List.length - 1 &&
                                            '·'
                                        } `}</li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div>
                            <h3>{page1.heading3}</h3>
                            <ul>
                                {page1.heading3List.map((item, idx) => {
                                    return (
                                        <li key={idx}>{`${item} ${
                                            idx !==
                                                page1.heading3List.length - 1 &&
                                            '·'
                                        } `}</li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* page 2 */}
                <div className={styles.page2}>
                    <img
                        className={styles.page2_image}
                        src={page2.imageUrl}
                        alt={page2.alt}
                    />
                </div>

                {/* page 3 */}
                <div className={styles.page3}>
                    <img
                        className={styles.page3_image}
                        src={page3.imageUrl}
                        alt={page3.alt}
                    />
                    <div className={styles.page3_text_wrapper}>
                        <h2>{page3.heading}</h2>
                        <p>{page3.desc}</p>
                    </div>
                </div>

                {/* page 4 */}
                <div className={styles.page4}>
                    <div className={styles.page4_text_wrapper}>
                        <h2>{page4.heading}</h2>
                        <p>{page4.desc}</p>
                    </div>
                </div>

                {/* page 5 */}
                <div className={styles.page5}>
                    <div className={styles.page5_video_wrapper}>
                        <video
                            className={styles.page5_video}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={page5.videoUrl} type='video/mp4' />
                        </video>
                    </div>
                </div>

                {/* page 6 */}
                <div className={styles.page6}>
                    <img
                        className={styles.page6_image}
                        src={page6.imageUrl}
                        alt={page6.alt}
                    />
                    <div className={styles.page6_text_wrapper}>
                        <h2>{page6.heading}</h2>
                        <p>{page6.desc}</p>
                    </div>
                </div>

                {/* page 7 */}
                <div className={styles.page7}>
                    <div className={styles.page7_video_wrapper}>
                        <video
                            className={styles.page7_video}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={page7.videoUrl} type='video/mp4' />
                        </video>
                    </div>
                    <div className={styles.page7_text_wrapper}>
                        <h2>{page7.heading}</h2>
                        <p>{page7.desc}</p>
                    </div>
                </div>

                {/* page 8 */}
                <div className={styles.page8}>
                    <img
                        className={styles.page8_image}
                        src={page8.imageUrl}
                        alt={page8.alt}
                    />
                </div>

                {/* page 9 */}
                <div className={styles.page9}>
                    <div className={styles.page9_video_wrapper}>
                        <video
                            className={styles.page9_video}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={page9.videoUrl} type='video/mp4' />
                        </video>
                    </div>
                    <div className={styles.page9_text_wrapper}>
                        <h2>{page9.heading}</h2>
                        <p>{page9.desc}</p>
                    </div>
                </div>

                {/* page 10 */}
                <div className={styles.page10}>
                    <div className={styles.page10_video_wrapper}>
                        <video
                            className={styles.page10_video}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={page10.videoUrl} type='video/mp4' />
                        </video>
                    </div>
                </div>

                {/* last page */}
                <div className={styles.page1}>
                    <h1>{caseId + ' testtest'}</h1>
                </div>
            </main>
        </div>
    );
};

export default CaseDetails;
