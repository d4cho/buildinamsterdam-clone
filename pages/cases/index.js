import React, { useRef, useState, useEffect } from 'react';
import styles from '../../styles/Cases.module.css';
import { getTotalScrollable } from '../../utils/functions';
import CaseCards from '../../components/CaseCards';
import { casesData } from '../../assets/data/cases-data';
import Filter from '../../components/Filter';
import { useAppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';

const Cases = () => {
    const { isFilterOpen, setIsFilterOpen, selectedFilter } = useAppContext();

    const leftColRef = useRef();
    const rightColRef = useRef();

    const [percentToScroll, setPercentToScroll] = useState(0);
    const [colHeightDiff, setColHeightDiff] = useState(0);

    const [leftColImages, setLeftColImages] = useState([]);
    const [rightColImages, setRightColImages] = useState([]);

    // filter casesData then divide into 2 columns
    useEffect(() => {
        let filteredCases = casesData.filter((imgData) =>
            imgData.filterBy.includes(selectedFilter)
        );
        let leftoverCases = casesData.filter(
            (imgData) => !imgData.filterBy.includes(selectedFilter)
        );

        let filteredOrderedCases = [...filteredCases, ...leftoverCases];

        let left = filteredOrderedCases.filter((imgData, idx) => {
            if ((idx + 1) % 2 !== 0) return imgData;
        });

        let right = filteredOrderedCases.filter((imgData, idx) => {
            if ((idx + 1) % 2 === 0) return imgData;
        });

        setLeftColImages(left);
        setRightColImages(right);
    }, [selectedFilter]);

    // for offset scrolling left and right columns
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
    }, [leftColImages, rightColImages]);

    return (
        <div className={styles.container}>
            <motion.div
                initial={{ y: 100, opacity: 0.5 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div
                    ref={leftColRef}
                    className={[
                        styles.left_col,
                        isFilterOpen && styles.move_left_col,
                    ].join(' ')}
                >
                    {leftColImages.map((imgData, idx) => {
                        return (
                            <div
                                key={'left' + idx}
                                className={styles.left_item_container}
                            >
                                <CaseCards
                                    imageData={imgData}
                                    isBlurred={
                                        selectedFilter
                                            ? !imgData.filterBy.includes(
                                                  selectedFilter
                                              )
                                            : false
                                    }
                                />
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            {/* filter starts */}
            <div
                className={[
                    styles.filter_container,
                    isFilterOpen && styles.filter_open,
                ].join(' ')}
            >
                <Filter onClose={() => setIsFilterOpen(false)} />
            </div>
            <button
                className={[
                    styles.filter_button,
                    isFilterOpen && styles.hide_filter_button,
                ].join(' ')}
                onClick={() => setIsFilterOpen(true)}
            >
                {`filter work ${selectedFilter && '(1)'}`}
            </button>
            {/* filter ends */}

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div
                    ref={rightColRef}
                    className={[
                        styles.right_col,
                        isFilterOpen && styles.move_right_col,
                    ].join(' ')}
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
                                <CaseCards
                                    imageData={imgData}
                                    isBlurred={
                                        selectedFilter
                                            ? !imgData.filterBy.includes(
                                                  selectedFilter
                                              )
                                            : false
                                    }
                                />
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
};

export default Cases;
