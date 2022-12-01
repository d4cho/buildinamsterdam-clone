import React from 'react';
import styles from '../../styles/CaseDetails.module.css';
import { casesData } from '../../assets/data/cases-data';
import Header from '../../components/Header';

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

    return {
        // Passed to the page component as props
        props: { caseId: caseId },
    };
};

const CaseDetails = (props) => {
    const { caseId } = props;

    const getLogoColor = (caseId) => {
        switch (caseId) {
            case 'suitsupply':
                return '#fff';

            default:
                return '#000';
        }
    };

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.test1}>
                    <Header logoColor={getLogoColor(caseId)} delay={0} />
                    <h1>{caseId + ' 1'}</h1>
                </div>
                <div className={styles.test2}>
                    <h1>{caseId + ' 2'}</h1>
                </div>
                <div className={styles.test3}>
                    <h1>{caseId + ' 3'}</h1>
                </div>
                <div className={styles.test1}>
                    <h1>{caseId + ' 4'}</h1>
                </div>
                <div className={styles.test2}>
                    <h1>{caseId + ' 5'}</h1>
                </div>
                <div className={styles.test3}>
                    <h1>{caseId + ' 6'}</h1>
                </div>

                <div className={styles.testtest}>
                    <h1>{caseId + ' testtest'}</h1>
                </div>
            </main>
        </div>
    );
};

export default CaseDetails;
