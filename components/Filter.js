import React from 'react';
import styles from '../styles/Filter.module.css';
import { filterData } from '../assets/data/filter-data';

const Filter = ({ isFilterOpen, onClose }) => {
    return (
        <div className={styles.container}>
            <div
                className={[
                    styles.content,
                    isFilterOpen && styles.content_open,
                ].join(' ')}
            >
                {filterData.map((category, idx) => {
                    return (
                        <section key={idx}>
                            <h2 className={styles.heading}>
                                {category.heading}
                            </h2>
                            <ul className={styles.list_wrapper}>
                                {category.items.map((item, itemIdx) => {
                                    return (
                                        <li
                                            key={itemIdx}
                                            className={styles.list_item}
                                        >
                                            <button className={styles.button}>
                                                <span>{item.title}</span>
                                                <span>{item.count}</span>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>
                    );
                })}
                <button onClick={onClose}>close</button>
            </div>
        </div>
    );
};

export default Filter;
