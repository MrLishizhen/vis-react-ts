// ts需要引入，并且要是用.tsx后缀
import React from 'react'
import {createBrowserRouter, Navigate, useNavigate, redirect} from "react-router-dom";

import Layout from '../layout'
import Empty from '@/view/empty'

const Scale = React.lazy(() => import('../view/scale/index'));
const Demos = React.lazy(() => import('../view/demo-charts/index'));
const ReactDemo = React.lazy(() => import('@/view/react-demo/index'));
const ReactDemoLogin = React.lazy(() => import('@/view/react-demo/login/index'))
const Views = React.lazy(() => import('@/view/react-demo/views'))

export const routes = [
    {
        path: '/',
        errorElement:<Empty/>,
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
                            }else{
                                console.log(456)
                            }
                        },
                        children: [
                            {}
                        ]
                    }
                ]
            }
        ]
    }
];
const routers = createBrowserRouter([...routes])

export default routers
