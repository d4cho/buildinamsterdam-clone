import React, { useState, useEffect } from 'react';
import styles from '../../styles/CaseDetails.module.css';
import { casesData } from '../../assets/data/cases-data';
import Header from '../../components/Header';
import { useAppContext } from '../../context/AppContext';

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
    const { scrollDir, setScrollDir } = useAppContext();

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const scrollEvent = () => {
            const main = document.querySelector('#main');
            const currentScrollPosition = main.scrollTop;

            if (currentScrollPosition > scrollPosition) {
                setScrollDir('down');
            } else {
                setScrollDir('up');
            }

            setScrollPosition(currentScrollPosition);
        };

        main.addEventListener('scroll', scrollEvent);

        return () => main.removeEventListener('scroll', scrollEvent);
    }, [scrollPosition]);

    const getLogoColor = (caseId) => {
        switch (caseId) {
            case 'suitsupply':
                return '#fff';

            default:
                return '#000';
        }
    };

    const {
        url,
        title,
        desc,
        infoPage,
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
        page11,
        page12,
        page13,
        page14,
        page15,
        page16,
        page17,
        page18,
        page19,
    } = caseData;

    return (
        <div className={styles.container}>
            <main className={styles.main} id='main'>
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

                {/* info page */}
                <div className={styles.info_page}>
                    <div className={styles.info_page_top_container}>
                        <h2>{infoPage.heading1}</h2>
                        <p>{infoPage.desc1}</p>
                        <p>{infoPage.desc2}</p>
                        <a target='_blank' href={infoPage.redirectUrl}>
                            <div>visit platform</div>
                        </a>
                    </div>
                    <div className={styles.info_page_bottom_container}>
                        <div>
                            <h3>{infoPage.heading2}</h3>
                            <ul>
                                {infoPage.heading2List.map((item, idx) => {
                                    return (
                                        <li key={idx}>{`${item} ${
                                            idx !==
                                                infoPage.heading2List.length -
                                                    1 && '·'
                                        } `}</li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div>
                            <h3>{infoPage.heading3}</h3>
                            <ul>
                                {infoPage.heading3List.map((item, idx) => {
                                    return (
                                        <li key={idx}>{`${item} ${
                                            idx !==
                                                infoPage.heading3List.length -
                                                    1 && '·'
                                        } `}</li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* page 1 */}
                <div className={styles.scroll_snap_wrapper}>
                    <img
                        className={styles.fullscreen_image}
                        src={page1.imageUrl}
                        alt={page1.alt}
                    />
                </div>

                {/* page 2 */}
                <div className={styles.scroll_snap_wrapper}>
                    <img
                        className={styles.fullscreen_image}
                        src={page2.imageUrl}
                        alt={page2.alt}
                    />
                    <div className={styles.abs_pos_text_wrapper}>
                        <h2>{page2.heading}</h2>
                        <p>{page2.desc}</p>
                    </div>
                </div>

                {/* page 3 */}
                <div className={styles.only_centered_text}>
                    <div className={styles.only_centered_text_text_wrapper}>
                        <h2>{page3.heading}</h2>
                        <p>{page3.desc}</p>
                    </div>
                </div>

                {/* page 4 */}
                <div className={styles.video_portrait_centered}>
                    <div
                        className={styles.video_portrait_centered_video_wrapper}
                    >
                        <video
                            className={styles.video_portrait_centered_video}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={page4.videoUrl} type='video/mp4' />
                        </video>
                    </div>
                </div>

                {/* page 5 */}
                <div className={styles.scroll_snap_wrapper}>
                    <img
                        className={styles.fullscreen_image}
                        src={page5.imageUrl}
                        alt={page5.alt}
                    />
                    <div className={styles.abs_pos_text_wrapper}>
                        <h2>{page5.heading}</h2>
                        <p>{page5.desc}</p>
                    </div>
                </div>

                {/* page 6 */}
                <div className={styles.video_fullscreen}>
                    <div className={styles.video_fullscreen_video_wrapper}>
                        <video
                            className={styles.video_fullscreen_video}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={page6.videoUrl} type='video/mp4' />
                        </video>
                    </div>
                    <div className={styles.abs_pos_text_wrapper}>
                        <h2>{page6.heading}</h2>
                        <p>{page6.desc}</p>
                    </div>
                </div>

                {/* page 7 */}
                <div className={styles.scroll_snap_wrapper}>
                    <img
                        className={styles.fullscreen_image}
                        src={page7.imageUrl}
                        alt={page7.alt}
                    />
                </div>

                {/* page 8 */}
                <div
                    className={styles.video_portrait_centered}
                    style={{ backgroundColor: 'rgb(45, 46, 44)' }}
                >
                    <div
                        className={styles.video_portrait_centered_video_wrapper}
                    >
                        <video
                            className={styles.video_portrait_centered_video}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={page8.videoUrl} type='video/mp4' />
                        </video>
                    </div>
                    <div
                        className={[
                            styles.abs_pos_text_wrapper,
                            styles.abs_text_left,
                        ].join(' ')}
                    >
                        <h2>{page8.heading}</h2>
                        <p>{page8.desc}</p>
                    </div>
                </div>

                {/* page 9 */}
                <div className={styles.video_portrait_centered}>
                    <div
                        className={styles.video_portrait_centered_video_wrapper}
                    >
                        <video
                            className={styles.video_portrait_centered_video}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={page9.videoUrl} type='video/mp4' />
                        </video>
                    </div>
                </div>

                {/* page 10 */}
                <div className={styles.scroll_snap_wrapper}>
                    <img
                        className={styles.fullscreen_image}
                        src={page10.imageUrl}
                        alt={page10.alt}
                    />
                    <div className={styles.abs_pos_text_wrapper}>
                        <h2>{page10.heading}</h2>
                        <p>{page10.desc}</p>
                    </div>
                </div>

                {/* page 11 */}
                <div className={styles.scroll_snap_wrapper}>
                    <img
                        className={styles.fullscreen_image}
                        src={page11.imageUrl}
                        alt={page11.alt}
                    />
                    <div
                        className={[
                            styles.abs_pos_text_wrapper,
                            styles.abs_text_left,
                        ].join(' ')}
                    >
                        <h2>{page11.heading}</h2>
                        <p>{page11.desc}</p>
                    </div>
                </div>

                {/* page 12 */}
                <div className={styles.only_centered_text}>
                    <div className={styles.only_centered_text_text_wrapper}>
                        <h2>{page12.heading}</h2>
                        <p>{page12.desc}</p>
                    </div>
                </div>

                {/* page 13 */}
                <div className={styles.video_fullscreen}>
                    <div className={styles.video_fullscreen_video_wrapper}>
                        <video
                            className={styles.video_fullscreen_video}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={page13.videoUrl} type='video/mp4' />
                        </video>
                    </div>
                    <div className={styles.abs_pos_text_wrapper}>
                        <h2>{page13.heading}</h2>
                        <p>{page13.desc}</p>
                    </div>
                </div>

                {/* page 14 */}
                <div className={styles.video_fullscreen}>
                    <div className={styles.video_fullscreen_video_wrapper}>
                        <video
                            className={styles.video_fullscreen_video}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={page14.videoUrl} type='video/mp4' />
                        </video>
                    </div>
                    <div className={styles.abs_pos_text_wrapper}>
                        <h2>{page14.heading}</h2>
                        <p>{page14.desc}</p>
                    </div>
                </div>

                {/* page 15 */}
                <div className={styles.scroll_snap_wrapper}>
                    <img
                        className={styles.fullscreen_image}
                        src={page15.imageUrl}
                        alt={page15.alt}
                    />
                </div>

                {/* page 16 */}
                <div
                    className={styles.video_portrait_centered}
                    style={{ backgroundColor: 'rgb(45, 46, 44)' }}
                >
                    <div
                        className={styles.video_portrait_centered_video_wrapper}
                    >
                        <video
                            className={styles.video_portrait_centered_video}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={page16.videoUrl} type='video/mp4' />
                        </video>
                    </div>
                    <div
                        className={[
                            styles.abs_pos_text_wrapper,
                            styles.abs_text_left,
                        ].join(' ')}
                    >
                        <h2>{page16.heading}</h2>
                        <p>{page16.desc}</p>
                    </div>
                </div>

                {/* page 17 */}
                <div className={styles.only_centered_text}>
                    <div className={styles.only_centered_text_text_wrapper}>
                        <h2>{page17.heading}</h2>
                        <p>{page17.desc}</p>
                    </div>
                </div>

                {/* page 18 */}
                <div className={styles.scroll_snap_wrapper}>
                    <img
                        className={styles.fullscreen_image}
                        src={page18.imageUrl}
                        style={{ objectPosition: '70% 44%' }}
                        alt={page18.alt}
                    />
                </div>

                {/* page 19 */}
                <div className={styles.video_fullscreen}>
                    <div className={styles.video_fullscreen_video_wrapper}>
                        <video
                            className={styles.video_fullscreen_video}
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={page19.videoUrl} type='video/mp4' />
                        </video>
                    </div>
                </div>

                {/* last page */}
                <div className={styles.scroll_snap_wrapper}>
                    <h1>{caseId + ' testtest'}</h1>
                </div>
            </main>
        </div>
    );
};

export default CaseDetails;
