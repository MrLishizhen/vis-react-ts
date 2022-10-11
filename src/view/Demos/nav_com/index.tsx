import styles from './index.module.less'
import React, {ReactElement, ReactDOM, ReactHTML, useState, useEffect} from 'react';
import svg from '../../../assets/demo/right.svg'
import nav from '../nav'
import {deepClone} from "../../../util/functions";

interface link {
    name?: string,
    link?: string,
    hot?: boolean,
    index: number,
    click: Function
}

interface menu {
    path: string,
    name: string,
    hot: boolean,
    index: number,
    children?: menu[]
}

const Link: React.FC<link> = (props) => {
    let {name = '', link = '', hot = false, index = 0, click} = props;
    return <div style={{paddingLeft: (index + 1) * 8}} onClick={() => click(name, link)}
                className={`${hot ? styles.hot : ''} ${styles.name}`}>{name}</div>
}

const Menu: React.FC<any> = (props) => {

    let {name = '柱状图', hot = false, children = '', click, index = 0} = props;
    return <>
        <div style={{paddingLeft: (index + 1) * 8}} className={styles.menu} onClick={() => click(name)}>
            <span className={styles._name}>{name}</span>
            <img className={hot ? styles.hot : ''} src={svg} alt=""/>
        </div>

        <div className={`${styles.menu_children} ${hot?styles.hot:''}`}>
            {children}
        </div>


    </>
}

const Nav_com: React.FC<{ getComponent: Function }> = (props) => {

    const [nav_list, set_nav_list] = useState<menu[]>([])

    useEffect(() => {
        set_nav_list(deepClone(nav));
    }, [])

    const setData = (list: menu[], name: string, menu: string) => {
        list.map((item) => {
            if (item.path && menu === 'link') {
                item.hot = false;
            }
            if (item.name === name) {
                if (menu === 'menu') {
                    item.hot = !item.hot;
                } else {
                    item.hot = true
                }
                return;
            } else if (item.children) {
                setData(item.children, name, menu)
            }
        })
    }
    const menu_click = (name: string) => {
        let data = nav_list;
        setData(data, name, 'menu')
        set_nav_list([...data])
    }
    const menu_link_click = (name: string, link: string) => {
        const {getComponent} = props;
        let data = nav_list;
        setData(data, name, 'link')
        set_nav_list([...data])
        getComponent(link);
    }
    const getMenu = (menu: menu[]): any => {
        return menu.map(item => {
            if (!item.children) {
                return <Link hot={item.hot} index={item.index} key={item.name} click={menu_link_click} link={item.path}
                             name={item.name}></Link>
            } else {
                return <Menu hot={item.hot} index={item.index} key={item.name} click={menu_click} name={item.name}>
                    {
                        getMenu(item.children)
                    }
                </Menu>
            }
        })
    }

    return (
        <nav>
            {
                getMenu(nav_list)
            }
        </nav>
    )
}
export default Nav_com;
