// ts需要引入，并且要是用.tsx后缀
import React from 'react'
import {createBrowserRouter, Navigate, useNavigate, redirect} from "react-router-dom";
import {
    Scale,
    Demos,
    ReactDemo,
    ReactDemoLogin,
    Views,
    Welcome
} from './com_store'
import Layout from '../layout'
import Empty from '@/view/empty'

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
                                path:'welcome',
                                element:<Welcome />
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
const routers = createBrowserRouter([...routes])

export default routers
