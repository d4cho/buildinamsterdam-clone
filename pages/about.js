import React, { useRef, useEffect, useState, useMemo } from 'react';
import styles from '../styles/About.module.css';
import { aboutData } from '../assets/data/about-data';
import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SlidingText from '../components/SlidingText';
import ResponsiveCardsLayout from '../components/ResponsiveCardsLayout';
import { useAppContext } from '../context/AppContext';

const About = () => {
    const { view } = useAppContext();
    const sec1Height = view === 'mobile' ? 830 : 388;
    const { sectionOneImages, sectionFiveData, sectionSixData } = aboutData;

    const section1Ref = useRef();
    const section3Ref = useRef();

    const [section2Ref, inView] = useInView({
        /* Optional options */
        // triggerOnce: true,
        // rootMargin: '0px 0px',
    });

    const [sec1ScrollPercent, setSec1ScrollPercent] = useState(0);
    const [sec3ScrollPercent, setSec3ScrollPercent] = useState(0);

    // section 1 scroll animation
    useEffect(() => {
        const onScroll = () => {
            const sec1OffsetTop = section1Ref.current.offsetTop; // distance of ref div from top
            const scrolledAmount = window.pageYOffset; // scrolled Y distance
            if (
                scrolledAmount >= sec1OffsetTop && // ref div is at top of screen
                scrolledAmount - sec1OffsetTop < sec1Height // only set scroll % during height of ref div
            ) {
                setSec1ScrollPercent(
                    (scrolledAmount - sec1OffsetTop) / sec1Height
                );
            }
        };

        window.addEventListener('scroll', onScroll);

        // clean up
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // section 3 scroll animation
    useEffect(() => {
        const onScroll = () => {
            const sec3OffsetTop = section3Ref.current.offsetTop; // distance of ref div from top
            const scrolledAmount = window.pageYOffset; // scrolled Y distance
            if (
                scrolledAmount >= sec3OffsetTop && // ref div is at top of screen
                scrolledAmount - sec3OffsetTop < 900 // only set scroll % during height of ref div
            ) {
                setSec3ScrollPercent((scrolledAmount - sec3OffsetTop) / 900);
            }
        };

        window.addEventListener('scroll', onScroll);

        // clean up
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={styles.container}>
            {/* section 1 */}
            <section className={styles.section1}>
                <div className={styles.intro_text_wrapper}>
                    <p className={styles.intro_text}>
                        We are Build in Amsterdam. We are a branding agency
                        specialised in e-commerce.
                    </p>
                </div>
                <div
                    className={styles.relative_img_container}
                    ref={section1Ref}
                >
                    <div className={styles.sticky_img_container}>
                        <div
                            className={styles.sliding_img_mover}
                            style={{
                                translate: `${
                                    -sec1ScrollPercent * sec1Height
                                }px 0`,
                            }}
                        >
                            <div className={styles.sliding_img_grid}>
                                {sectionOneImages.map((img, idx) => (
                                    <div
                                        className={styles.sliding_img_wrapper}
                                        key={idx}
                                    >
                                        <img
                                            className={styles.sliding_img}
                                            src={img.imgUrl}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 2 */}
            <section className={styles.section2}>
                <div
                    className={styles.section2_indicator}
                    ref={section2Ref}
                ></div>
                <div className={styles.section2_flex_wrapper}>
                    <div className={styles.section2_text_wrapper}>
                        <p
                            className={[
                                styles.initial_top_p,
                                inView && styles.final_top_p,
                            ].join(' ')}
                        >
                            We believe our industry
                        </p>
                        <p
                            className={[
                                styles.initial_bottom_p,
                                inView && styles.final_bottom_p,
                            ].join(' ')}
                        >
                            while buying decisions
                        </p>
                    </div>
                    <div className={styles.section2_text_wrapper}>
                        <p
                            className={[
                                styles.initial_top_p,
                                inView && styles.final_top_p,
                            ].join(' ')}
                        >
                            is blinded by numbers,
                        </p>
                        <p
                            className={[
                                styles.initial_bottom_p,
                                inView && styles.final_bottom_p,
                            ].join(' ')}
                        >
                            are driven by emotion.
                        </p>
                    </div>
                </div>
            </section>

            {/* section 3 */}
            <section className={styles.section3}>
                <div className={styles.section3_wrapper} ref={section3Ref}>
                    <div className={styles.section3_sticky}>
                        <div
                            style={{
                                transform: `translateX(${
                                    sec3ScrollPercent * 510 >= 255
                                        ? sec3ScrollPercent * -510 +
                                          510 * (1 - sec3ScrollPercent)
                                        : 0
                                }px) translateZ(0px)`,
                            }}
                        >
                            <div className={styles.section3_flex}>
                                <div
                                    style={{
                                        top: '100%',
                                        left: '-70vw',
                                        width: '90vw',
                                        opacity: `${sec3ScrollPercent * 2}`,
                                        transform: `translateX(${
                                            sec3ScrollPercent * 510 >= 255
                                                ? sec3ScrollPercent * 510 -
                                                  510 * (1 - sec3ScrollPercent)
                                                : 0
                                        }px) translateY(${
                                            (1 - sec3ScrollPercent * 2) * 200 >=
                                            0
                                                ? (1 - sec3ScrollPercent * 2) *
                                                  200
                                                : 0
                                        }%) translateZ(0px)`,
                                    }}
                                >
                                    <div
                                        className={styles.section3_text_wrapper}
                                    >
                                        <div className={styles.section3_text}>
                                            By combining strategy, branding &
                                            e-commerce, we build digital
                                            flagship stores that go beyond logic
                                            & redefine conversion.
                                        </div>
                                        <div className={styles.section3_link}>
                                            <a href='#'>
                                                <SlidingText
                                                    text={'read manifesto'}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.section3_images_wrapper}>
                                    <div
                                        className={styles.section3_image_div}
                                        style={{
                                            opacity: 1,
                                            transform: `translateX(0%) translateY(0px) scale(${
                                                -sec3ScrollPercent + 1.5 >= 1
                                                    ? -sec3ScrollPercent + 1.5
                                                    : 1
                                            }) translateZ(0px)`,
                                        }}
                                    >
                                        <img
                                            src='/images/about/section3-1.webp'
                                            alt='mammut'
                                        />
                                        <div
                                            className={
                                                styles.image_text_wrapper
                                            }
                                            style={{
                                                opacity: `${
                                                    sec3ScrollPercent >= 0.4
                                                        ? 1
                                                        : 0
                                                }`,
                                            }}
                                        >
                                            <span
                                                className={styles.image_title}
                                            >
                                                Mammut
                                            </span>
                                            <span className={styles.image_dot}>
                                                {' '}
                                                ·{' '}
                                            </span>
                                            <span className={styles.image_desc}>
                                                Moved by mountains
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className={styles.section3_image_div}
                                        style={{
                                            opacity: `${sec3ScrollPercent * 2}`,
                                            transform: `translateX(${
                                                (1 - sec3ScrollPercent * 2) *
                                                    50 >=
                                                0
                                                    ? (1 -
                                                          sec3ScrollPercent *
                                                              2) *
                                                      50
                                                    : 0
                                            }%) translateY(${
                                                (1 - sec3ScrollPercent * 2) *
                                                    120 >=
                                                0
                                                    ? (1 -
                                                          sec3ScrollPercent *
                                                              2) *
                                                      120
                                                    : 0
                                            }%) scale(1) translateZ(0px)`,
                                        }}
                                    >
                                        <img
                                            src='/images/about/section3-2.webp'
                                            alt='moooi'
                                        />
                                        <div
                                            className={
                                                styles.image_text_wrapper
                                            }
                                            style={{
                                                opacity: `${
                                                    sec3ScrollPercent >= 0.4
                                                        ? 1
                                                        : 0
                                                }`,
                                            }}
                                        >
                                            <span
                                                className={styles.image_title}
                                            >
                                                Mooi
                                            </span>
                                            <span className={styles.image_dot}>
                                                {' '}
                                                ·{' '}
                                            </span>
                                            <span className={styles.image_desc}>
                                                Multi-sensory flagship store
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                        className={styles.section3_image_div}
                                        style={{
                                            opacity: `${sec3ScrollPercent * 2}`,
                                            transform: `translateX(${
                                                (1 - sec3ScrollPercent * 2) *
                                                    50 >=
                                                0
                                                    ? (1 -
                                                          sec3ScrollPercent *
                                                              2) *
                                                      50
                                                    : 0
                                            }%) translateY(${
                                                (1 - sec3ScrollPercent * 2) *
                                                    120 >=
                                                0
                                                    ? (1 -
                                                          sec3ScrollPercent *
                                                              2) *
                                                      120
                                                    : 0
                                            }%) scale(1) translateZ(0px)`,
                                        }}
                                    >
                                        <img
                                            src='/images/about/section3-3.webp'
                                            alt='suitsupply'
                                        />
                                        <div
                                            className={
                                                styles.image_text_wrapper
                                            }
                                            style={{
                                                opacity: `${
                                                    sec3ScrollPercent >= 0.4
                                                        ? 1
                                                        : 0
                                                }`,
                                            }}
                                        >
                                            <span
                                                className={styles.image_title}
                                            >
                                                Suitsupply
                                            </span>
                                            <span className={styles.image_dot}>
                                                {' '}
                                                ·{' '}
                                            </span>
                                            <span className={styles.image_desc}>
                                                Creative partnership
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 4 */}
            <section className={styles.section4}>
                <div className={styles.section4_text_wrapper}>
                    <p>
                        We are an international team of 40+ passionate
                        designers, developers, brand strategists & data
                        analysts.
                    </p>
                    <div>
                        <a href='#'>
                            <SlidingText text={'join the team'} />
                        </a>
                    </div>
                </div>
                <ResponsiveCardsLayout />
            </section>

            {/* section 5 - our expertise */}
            <section className={styles.section5}>
                <header className={styles.section5_header}>
                    <h2>our expertise</h2>
                </header>
                <div className={styles.section5_list_wrapper}>
                    {sectionFiveData.map((item, idx) => (
                        <li key={idx}>
                            <h2>{item.heading}</h2>
                            <ul className={styles.section5_ul}>
                                {item.list.map((listItem, index) => (
                                    <li key={index}>{listItem}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </div>
            </section>

            {/* section 6 - stats & facts */}
            <section className={styles.section6}>
                <header className={styles.section6_header}>
                    <h2>stats&facts</h2>
                </header>
                <div className={styles.section6_list_wrapper}>
                    {sectionSixData.map((item, idx) => (
                        <li key={idx}>
                            <p>{item.number}</p>
                            <div className={styles.section6_text_wrapper}>
                                <p>{item.text}</p>
                                {item.link && (
                                    <a href='#'>
                                        <SlidingText text={item.link} />
                                    </a>
                                )}
                            </div>
                        </li>
                    ))}
                </div>
            </section>

            {/* section 7 - last page */}
            <section className={styles.section7}>
                <div className={styles.section7_wrapper}>
                    <div className={styles.section7_text_wrapper}>
                        <h2>Join us</h2>
                        <a href='#'>
                            <SlidingText text={'reach out'} />
                        </a>
                    </div>
                </div>
                <div className={styles.section7_wrapper}>
                    <div className={styles.section7_text_wrapper}>
                        <h2>Work with us</h2>
                        <a href='#'>
                            <SlidingText text={'introduce yourself'} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
