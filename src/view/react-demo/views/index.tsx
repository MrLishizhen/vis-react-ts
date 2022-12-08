import React, { useState } from 'react';
import styles from './index.module.less'
import {Outlet} from "react-router-dom";

const Views: React.FC = () => {

    return (
        <div className={styles.main}>
            <aside className={styles.aside}>

            </aside>
            <section className={styles.section_right}>
                <header className={styles.headers}></header>
                <section className={styles.section}>
                    <Outlet></Outlet>
                </section>
            </section>
        </div>
    );
};

export default Views;
