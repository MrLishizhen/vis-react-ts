import {Outlet, NavLink} from "react-router-dom";
import styles from './index.module.less'

import React, {Suspense, useEffect, useRef,} from "react";


const Layout = () => {
    const header = useRef(null);
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

    useEffect(()=>{
        let time = setTimeout(()=>{
            let {current} = header;
            // @ts-ignore
            current.style.height=0;
        },2000)

        const mousemove = (e:MouseEvent)=>{
            let {current} = header;
            if(e.clientY<30){
                // @ts-ignore
                current.style.height='60px';
            }else{
                // @ts-ignore
                current.style.height=0;
            }
        }
        document.body.addEventListener('mousemove',mousemove,false)
        return ()=>{
            clearTimeout(time);
            document.body.removeEventListener('mousemove',mousemove)
        }
    },[])
    return (
        <div className={styles.layout}>
            <header ref={header}>
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
