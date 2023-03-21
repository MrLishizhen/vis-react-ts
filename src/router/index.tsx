// ts需要引入，并且要是用.tsx后缀
import React, {useEffect, useState, ComponentType} from 'react'
import {createBrowserRouter, Navigate, redirect, RouterProvider} from "react-router-dom";
import {useAppSelector, useAppDispatch} from '@/store/hook'
import Scale from '../view/scale/index';
import Demos from '../view/demo-charts/index';
import ReactDemo from '@/view/react-demo/index';
import ReactDemoLogin from '@/view/react-demo/login/index'
import Views from  '@/view/react-demo/views'
import Welcome from '@/view/react-demo/views/welcome'
import {menu_data, thunk_get_menu} from '@/store/react-demo/menu'

import Layout from '../layout'
import Empty from '@/view/empty'

interface routes {
    path: string,
    errorElement?: any,
    element?: any,
    children?: routes[],
    loader?: any
}

export const routes = [
    {
        path: '/',
        errorElement: <Empty/>,
        element: <Navigate to='/react-demo/login'/>,
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'scale',
                element: <Scale/>
            },
            {
                path: 'demos',
                element: <Demos/>
            },
            {
                path: 'react-demo',
                element: <ReactDemo/>,
                children: [
                    {
                        path: 'views',
                        element: <Navigate to='/react-demo/views/welcome'/>,
                    },
                    {
                        path: 'login',
                        element: <ReactDemoLogin/>,
                        loader: async () => {
                            const local = sessionStorage.getItem('userInfo') || 0;
                            if (local) {
                                return redirect('/react-demo/views')
                            }
                        },
                    },
                    {
                        path: 'views',
                        element: <Views/>,
                        loader: async () => {
                            const local = sessionStorage.getItem('userInfo') || 0;
                            if (local === 0) {
                                return redirect('/react-demo/login')
                            } else {
                                console.log(456)
                            }
                        },
                        children: [
                            {
                                path: 'welcome',
                                element: <Welcome/>
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
const modules = import.meta.glob('@/view/react-demo/views/*/*.tsx') as Record<string, () => Promise<{ default: ComponentType<any> }>>
export const LazyDOM = (link: string) => {
    const DOM = React.lazy(modules[`/src/view/react-demo/views/${link}/index.tsx`])
    return DOM ? <DOM/> : ''
}

export default function RouterElement() {
    const menu = useAppSelector(menu_data)
    const [gloal_routers, setGloalRouters] = useState<routes[]>([...routes])
    const routers = createBrowserRouter([...gloal_routers])
    const dispatch = useAppDispatch()
    useEffect(() => {
        const setMenu = async () => {
            let react_demo_children: routes[] = []
            menu.length === 0 ? dispatch(await thunk_get_menu({userName: 'admin'})) : ''
            if (menu.length > 0) {
                react_demo_children = [...menu.map((item: { key: string }) => {
                    return {
                        path: item.key,
                        element: LazyDOM(item.key)
                    }
                })]
            } else {
                react_demo_children = []
            }
            setGloalRouters([
                {
                    path: '/',
                    errorElement: <Empty/>,
                    element: <Navigate to='/react-demo/login'/>,
                },
                {
                    path: '/',
                    element: <Layout/>,
                    children: [
                        {
                            path: 'scale',
                            element: <Scale/>
                        },
                        {
                            path: 'demos',
                            element: <Demos/>
                        },
                        {
                            path: 'react-demo',
                            element: <ReactDemo/>,
                            children: [
                                {
                                    path: 'views',
                                    element: <Navigate to='/react-demo/views/welcome'/>,
                                },
                                {
                                    path: 'login',
                                    element: <ReactDemoLogin/>,
                                    loader: async () => {
                                        const local = sessionStorage.getItem('userInfo') || 0;
                                        if (local) {
                                            return redirect('/react-demo/views')
                                        }
                                    },
                                },
                                {
                                    path: 'views',
                                    element: <Views/>,
                                    loader: async () => {
                                        const local = sessionStorage.getItem('userInfo') || 0;
                                        if (local === 0) {
                                            return redirect('/react-demo/login')
                                        } else {
                                        }
                                    },
                                    children: [{
                                        path: 'welcome',
                                        element: <Welcome/>
                                    },
                                        ...react_demo_children
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ])
        }
        setMenu()

    }, [menu])

    return (
        <>
            <RouterProvider router={routers}></RouterProvider>
        </>
    )
}

// export default routers
