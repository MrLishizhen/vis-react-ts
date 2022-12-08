import {Outlet, NavLink, useNavigate, useLocation} from "react-router-dom";
import {ColumnHeightOutlined} from '@ant-design/icons'
import styles from './index.module.less'

import React, {Suspense, useEffect, useRef, useState,} from "react";
interface routes {
    path:string,
    name:string,
    hot:boolean
}

const Layout = () => {
    const header = useRef<HTMLDivElement>(null);
    const [iconPosition, setIconPosition] = useState<boolean>(true)
    const location = useLocation();
    const navigate = useNavigate();
    const [routes, setRoutes] = useState<routes[]>([
        {
            path: 'react-demo/login',
            name: 'react-demo',
            hot: false
        },
        {
            path: 'scale',
            name: 'SCALE模式',
            hot: false
        },
        {
            path: 'demos',
            name: 'demoCharts',
            hot: false
        }
    ])
    // const navigate = useNavigate();
    // useEffect(()=>{
    //     const local = sessionStorage.getItem('userInfo')||0;
    //     let data = routes.find(u=>u.name==='react-demo');
    //     if(local){
    //         data?data.path='react-demo/views':''
    //     }else{
    //         data?data.path='react-demo/login':''
    //     }
    // },[])

    useEffect(() => {
        let time = setTimeout(() => {
            let {current} = header;
            (current as HTMLDivElement).style.top = '-40px';
        }, 2000)
        const mousemove = (e: MouseEvent) => {
            let {current} = header;
            if (e.clientY < 60) {
                (current as HTMLDivElement).style.top = '10px';
            } else {
                (current as HTMLDivElement).style.top = '-40px';
            }
        }
        document.body.addEventListener('mousemove', mousemove, false)
        return () => {
            clearTimeout(time);
            document.body.removeEventListener('mousemove', mousemove)
        }
    }, [])
    // useEffect(() => {
    //     let time = setTimeout(() => {
    //         let { current } = header;
    //         (current as HTMLDivElement).style.height = '0';
    //         (current as HTMLDivElement).style.borderColor = 'rgba(0,0,0,0)';
    //     }, 2000)
    //
    //     const mousemove = (e: MouseEvent) => {
    //         let {current} = header;
    //         if (e.clientY < 60) {
    //             (current as HTMLDivElement).style.height = '60px';
    //             (current as HTMLDivElement).style.borderColor = '#e0e0e0';
    //         } else {
    //             (current as HTMLDivElement).style.height = '0';
    //             (current as HTMLDivElement).style.borderColor = 'rgba(0,0,0,0)';
    //         }
    //     }
    //     document.body.addEventListener('mousemove', mousemove, false)
    //     return () => {
    //         clearTimeout(time);
    //         document.body.removeEventListener('mousemove', mousemove)
    //     }
    // }, [])
    useEffect(() => {
        const {pathname} = location
        let data = routes.map((u) => {
            if (pathname.indexOf(u.path) != -1 || pathname.indexOf(u.name) != -1) {
                u.hot = true;
            } else {
                u.hot = false;
            }
            return {...u};
        })
        setRoutes(data)
    }, [location.pathname])
    const iconClick = () => {
        setIconPosition(!iconPosition)
    }
    const tabClick = (u:routes) => {
        navigate(u.path)
    }

    return (
        <div className={styles.layout}>
            <div className={styles.icons} ref={header} onClick={() => iconClick()}>
                <ColumnHeightOutlined/>
            </div>
            <header
                style={{
                    // display: iconPosition ? 'flex' : 'none',
                    height: iconPosition ? '60px' : '0px',
                    borderWidth: iconPosition ? '1px' : '0'
                }}>
                <div className={styles.logo}></div>
                <div className={styles.nav}>
                    {
                        routes.map((u) => {
                            return <div className={styles.nav_item} key={u.path} onClick={() => tabClick(u)}
                                        style={{color: u?.hot ? "#409eff" : "#333"}}>{u.name}</div>
                        })
                    }
                    {/* react-router 跳转方式 */}
                    {/*{*/}
                    {/*    routes.map((u: any) => {*/}
                    {/*        return <NavLink style={({isActive}) => {*/}
                    {/*            return {color: isActive ? "#409eff" : "#333"}*/}
                    {/*        }} key={u.path} to={u.path}>{u.name}</NavLink>*/}
                    {/*    })*/}
                    {/*}*/}
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
