import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/CaseCardsLayout.module.css';
import { getTotalScrollable } from '../utils/functions';

const CaseCardsLayout = () => {
    const leftColRef = useRef();
    const rightColRef = useRef();
    const colHeightDiff =
        leftColRef.current.offsetHeight - rightColRef.current.offsetHeight;

    const [percentToScroll, setPercentToScroll] = useState(0);

    useEffect(() => {
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
                <div className={styles.left_item_container}>img</div>
                <div className={styles.left_item_container}>img</div>
                <div className={styles.left_item_container}>img</div>
                <div className={styles.left_item_container}>img</div>
                <div className={styles.left_item_container}>img</div>
                <div className={styles.left_item_container}>img</div>
                <div className={styles.left_item_container}>img</div>
                <div className={styles.left_item_container}>img</div>
                <div className={styles.left_item_container}>img</div>
            </div>
            <div
                ref={rightColRef}
                className={styles.right_col}
                style={{
                    translate: `0 ${percentToScroll * colHeightDiff}px`,
                }}
            >
                <div className={styles.right_item_container}>img</div>
                <div className={styles.right_item_container}>img</div>
                <div className={styles.right_item_container}>img</div>
                <div className={styles.right_item_container}>img</div>
                <div className={styles.right_item_container}>img</div>
                <div className={styles.right_item_container}>img</div>
                <div className={styles.right_item_container}>img</div>
                <div className={styles.right_item_container}>img</div>
            </div>
        </div>
    );
};

export default CaseCardsLayout;
