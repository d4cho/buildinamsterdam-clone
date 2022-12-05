import React, { useState, useEffect } from 'react';
import styles from '../../styles/CaseDetails.module.css';
import { casesData } from '../../assets/data/cases-data';
import Header from '../../components/Header';
import { useAppContext } from '../../context/AppContext';
import ErrorPage from 'next/error';
import NotFoundPage from '../404';

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
    try {
        const caseId = context.params.caseId;
        const caseData = casesData.filter((item) => item.caseId === caseId)[0];
        const nextCaseId = caseData.nextCaseId;
        const nextCaseData = casesData.filter(
            (item) => item.caseId === nextCaseId
        )[0];
        const {
            title: nextCaseTitle,
            url: nextCaseImgUrl,
            objectPosition: nextCaseObjectPosition,
        } = nextCaseData;

        return {
            // Passed to the page component as props
            props: {
                caseId: caseId,
                caseData: caseData,
                nextCaseTitle: nextCaseTitle,
                nextCaseImgUrl: nextCaseImgUrl,
                nextCaseObjectPosition: nextCaseObjectPosition,
            },
        };
    } catch (error) {
        return {
            props: {
                notFound: true,
            },
        };
    }
};

const CaseDetails = ({
    caseId,
    caseData,
    nextCaseTitle,
    nextCaseImgUrl,
    nextCaseObjectPosition,
    notFound,
}) => {
    if (notFound) {
        return <NotFoundPage />;
    }

    const { setScrollDir } = useAppContext();

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const main = document.querySelector('#main');
        const scrollEvent = () => {
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

    const { url, title, desc, objectPosition, infoPage, pages, nextCaseId } =
        caseData;

    const renderPageType = (pageInfo) => {
        const { type } = pageInfo;

        switch (type) {
            case 'fullscreen-image':
            case 'fullscreen-image-with-text':
                return (
                    <div className={styles.scroll_snap_wrapper}>
                        <img
                            className={styles.fullscreen_image}
                            src={pageInfo.imageUrl}
                            alt={pageInfo.alt}
                            style={{
                                ...(pageInfo.objectPosition && {
                                    objectPosition: pageInfo.objectPosition,
                                }),
                            }}
                        />
                        {pageInfo.heading && pageInfo.desc && (
                            <div
                                className={[
                                    styles.abs_pos_text_wrapper,
                                    pageInfo?.textPosition === 'left' &&
                                        styles.abs_text_left,
                                ].join(' ')}
                            >
                                <h2>{pageInfo.heading}</h2>
                                <p>{pageInfo.desc}</p>
                            </div>
                        )}
                    </div>
                );

            case 'centered-text':
                return (
                    <div className={styles.only_centered_text}>
                        <div className={styles.only_centered_text_text_wrapper}>
                            <h2>{pageInfo.heading}</h2>
                            <p>{pageInfo.desc}</p>
                        </div>
                    </div>
                );

            case 'portrait-video':
            case 'portrait-video-with-text':
                return (
                    <div
                        className={styles.video_portrait_centered}
                        style={{
                            ...(pageInfo.backgroundColor && {
                                backgroundColor: pageInfo.backgroundColor,
                            }),
                            ...(pageInfo.backgroundImage && {
                                backgroundImage: `url(${pageInfo.backgroundImage})`,
                            }),
                        }}
                    >
                        <div
                            className={
                                styles.video_portrait_centered_video_wrapper
                            }
                        >
                            <video
                                className={styles.video_portrait_centered_video}
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source
                                    src={pageInfo.videoUrl}
                                    type='video/mp4'
                                />
                            </video>
                        </div>
                        {pageInfo.heading && pageInfo.desc && (
                            <div
                                className={[
                                    styles.abs_pos_text_wrapper,
                                    styles.abs_text_left,
                                ].join(' ')}
                            >
                                <h2>{pageInfo.heading}</h2>
                                <p>{pageInfo.desc}</p>
                            </div>
                        )}
                    </div>
                );

            case 'fullscreen-video':
            case 'fullscreen-video-with-text':
                return (
                    <div className={styles.video_fullscreen}>
                        <div className={styles.video_fullscreen_video_wrapper}>
                            <video
                                className={styles.video_fullscreen_video}
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source
                                    src={pageInfo.videoUrl}
                                    type='video/mp4'
                                />
                            </video>
                        </div>
                        {pageInfo.heading && pageInfo.desc && (
                            <div className={styles.abs_pos_text_wrapper}>
                                <h2>{pageInfo.heading}</h2>
                                <p>{pageInfo.desc}</p>
                            </div>
                        )}
                    </div>
                );

            default:
                break;
        }
    };

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
                        style={{
                            ...(objectPosition && {
                                objectPosition: objectPosition,
                            }),
                        }}
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
                <div
                    className={styles.info_page}
                    style={{
                        ...(infoPage.backgroundColor && {
                            backgroundColor: infoPage.backgroundColor,
                        }),
                    }}
                >
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
                                            infoPage.heading2List.length - 1
                                                ? '·'
                                                : ''
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
                                            infoPage.heading3List.length - 1
                                                ? '·'
                                                : ''
                                        } `}</li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* pages */}
                {pages.map((pageInfo, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            {renderPageType(pageInfo)}
                        </React.Fragment>
                    );
                })}

                {/* last page */}
                <div
                    className={styles.scroll_snap_wrapper}
                    style={{ backgroundColor: '#000' }}
                >
                    <img
                        className={styles.main_page_image}
                        src={nextCaseImgUrl}
                        alt={nextCaseTitle}
                        style={{
                            opacity: 0.5,
                            ...(nextCaseObjectPosition && {
                                objectPosition: nextCaseObjectPosition,
                            }),
                        }}
                    />
                    <div className={styles.last_page_text_wrapper}>
                        <div className={styles.next_up_wrapper}>
                            {`Next up - ${nextCaseTitle}`}
                        </div>
                        <a href={`/cases/${nextCaseId}`}>explore</a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CaseDetails;
