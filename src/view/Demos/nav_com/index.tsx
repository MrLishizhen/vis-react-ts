import styles from './index.module.less'
import React, {ReactElement, ReactDOM, ReactHTML, useState, useEffect} from 'react';
import svg from '../../../assets/demo/right.svg'
import nav from '../nav'

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
            <span className={styles.name}>{name}</span>
            <img className={hot ? styles.hot : ''} src={svg} alt=""/>
        </div>

        <div className={`${styles.menu_children} ${hot?styles.hot:''}`}>
            {children}
        </div>


    </>
}

const Nav_com: React.FC<{ getComponent: Function }> = (props) => {

    const [nav_list, set_nav_list] = useState<menu[]>([])
    const deepClone = (obj:any)=>{
        //判断是对象还是数组
        let objClone:any = Array.isArray(obj)?[]:{};
        //判断obj是一个对象
        if(obj && typeof obj ==="object"){
            //遍历obj的key值
            for(let key in obj){
                //确认拿到的不是obj继承来的属性
                if(obj.hasOwnProperty(key)){
                    //如果说obj的属性或者方法也是一个对象的话
                    if(obj[key] && typeof obj[key] === "object"){
                        //调用自身，把key值传进去
                        objClone[key] = deepClone(obj[key]);
                    }else{
                        //说明仅仅是个属性
                        objClone[key] = obj[key];
                    }
                }
            }
        }
        //return 拷贝后的对象
        return objClone;
    }
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
