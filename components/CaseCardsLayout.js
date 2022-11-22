import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/CaseCardsLayout.module.css';
import { getTotalScrollable } from '../utils/functions';
import CaseCards from './CaseCards';

const CaseCardsLayout = ({ leftColImages, rightColImages }) => {
    const leftColRef = useRef();
    const rightColRef = useRef();

    const [percentToScroll, setPercentToScroll] = useState(0);
    const [colHeightDiff, setColHeightDiff] = useState(0);

    useEffect(() => {
        setColHeightDiff(
            leftColRef.current.offsetHeight - rightColRef.current.offsetHeight
        );

        const onScroll = () => {
            const rightColOffsetTop = rightColRef.current.offsetTop;
            const totalScrollableAfterEl =
                getTotalScrollable() - rightColOffsetTop;
            let scrolledAmount = window.pageYOffset;

            if (scrolledAmount >= rightColOffsetTop) {
                setPercentToScroll(
                    (scrolledAmount - rightColOffsetTop) /
                        totalScrollableAfterEl
                );
            } else {
                setPercentToScroll(0);
            }
        };

        window.addEventListener('scroll', onScroll);

        // clean up
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={styles.container}>
            <div ref={leftColRef} className={styles.left_col}>
                {leftColImages.map((imgData, idx) => {
                    return (
                        <div
                            key={'left' + idx}
                            className={styles.left_item_container}
                        >
                            <CaseCards imageData={imgData} />
                        </div>
                    );
                })}
            </div>
            <div
                ref={rightColRef}
                className={styles.right_col}
                style={{
                    translate: `0 ${percentToScroll * colHeightDiff}px`,
                }}
            >
                {rightColImages.map((imgData, idx) => {
                    return (
                        <div
                            key={'right' + idx}
                            className={styles.right_item_container}
                        >
                            <CaseCards imageData={imgData} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CaseCardsLayout;
