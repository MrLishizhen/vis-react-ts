import React, {useEffect, useState,Suspense} from 'react';
import styles from './index.module.less'
import {Outlet, useLocation} from "react-router-dom";
import {menu_data} from '@/store/react-demo/menu'
import {useAppSelector} from '@/store/hook'
import {time} from '@/util/functions'
import type {MenuProps} from 'antd'
import {
    Menu
} from 'antd'
import {useNavigate} from 'react-router-dom'

const Views: React.FC = () => {
    const menuData = useAppSelector((state) => [{
        label: '欢迎',
        key: 'welcome'
    }, ...state.menuSlice.menu])
    const navigate = useNavigate()
    let location = useLocation();
    const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>([])
    const menu_click: MenuProps['onClick'] = (e) => {
        navigate(`${e.key}`)
    }

    useEffect(() => {
        //截取/react-demo/views/ 后的内容
        let defaultSelectedKeys = location.pathname.slice(18)
        setDefaultSelectedKeys([defaultSelectedKeys])
    }, [location.pathname])

    return (
        <div className={styles.main}>
            <aside className={styles.aside}>
                <Menu
                    selectedKeys={[...defaultSelectedKeys]}
                    key={time}
                    onClick={menu_click}
                    mode="inline"
                    theme="dark"
                    items={menuData}
                />
            </aside>
            <section className={styles.section_right}>
                <header className={styles.headers}></header>
                <section className={styles.section}>
                    <Suspense fallback={<div style={{background: 'rgba(0,0,0,0)'}}>Loading...</div>}>
                        <Outlet></Outlet>
                    </Suspense>
                </section>
            </section>
        </div>
    );
};

export default Views;
