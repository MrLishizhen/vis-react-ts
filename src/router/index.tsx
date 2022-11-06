// ts需要引入，并且要是用.tsx后缀
import React from 'react'
import {createBrowserRouter, Navigate} from "react-router-dom";

import Layout from '../layout'

const Scale = React.lazy(() => import('../view/Scale/index'));
const Demos = React.lazy(() => import('../view/Demos/index'));
import Home from '../view/Home'

export const routes = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            // {
            //     path: '/',
            //     element: <Navigate to='/scale' />
            // },
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'scale',
                element: <Scale/>
            },
            {
                path: 'demos',
                element: <Demos/>
            }
        ]
    }
];
const routers = createBrowserRouter([...routes])

export default routers
