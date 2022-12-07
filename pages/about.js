import React, { useRef, useEffect, useState, useMemo } from 'react';
import styles from '../styles/About.module.css';
import { aboutData } from '../assets/data/about-data';
import { motion, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const { sectionOneImages } = aboutData;

    const section1Ref = useRef();

    const [section2Ref, inView] = useInView({
        /* Optional options */
        // triggerOnce: true,
        // rootMargin: '0px 0px',
    });

    console.log(inView);

    const [sec1ScrollPercent, setSec1ScrollPercent] = useState(0);

    // section 1 scroll animation
    useEffect(() => {
        const onScroll = () => {
            const sec1OffsetTop = section1Ref.current.offsetTop; // distance of ref div from top
            const scrolledAmount = window.pageYOffset; // scrolled Y distance
            if (
                scrolledAmount >= sec1OffsetTop && // ref div is at top of screen
                scrolledAmount - sec1OffsetTop < 830 // only set scroll % during height of ref div
            ) {
                setSec1ScrollPercent((scrolledAmount - sec1OffsetTop) / 830);
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
                                translate: `${-sec1ScrollPercent * 830}px 0`,
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
        </div>
    );
};

export default About;
