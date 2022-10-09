import {Outlet, NavLink} from "react-router-dom";
import styles from './index.module.less'

import React, {Suspense} from "react";


const Layout = () => {
    const routes = [
        {
            path:'scale',
            name:'SCALE模式'
        },
        {
            path:'demos',
            name:'DEMO'
        }
    ]

    return (
        <div className={styles.layout}>
            <header>
                <div className={styles.logo}></div>
                <div className={styles.nav}>
                    {
                        routes.map((u: any) => {
                            return <NavLink  style={({ isActive }) => {
                                return { color: isActive ? "#409eff" : "#333" }}} key={u.path} to={u.path}>{u.name}</NavLink>
                        })
                    }
                </div>
            </header>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet></Outlet>
                </Suspense>
            </main>
        </div>
    )
}

export default Layout
