import React, { useState } from 'react';
import styles from './index.module.less'

const Views: React.FC = () => {

    return (
        <div className={styles.main}>
            <aside className={styles.aside}>

            </aside>
            <section className={styles.section_right}>
                <header className={styles.headers}></header>
                <section className={styles.section}></section>
            </section>
        </div>
    );
};

export default Views;
