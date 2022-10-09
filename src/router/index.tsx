// ts需要引入，并且要是用.tsx后缀
import React from 'react'
import {createBrowserRouter, Navigate} from "react-router-dom";

import Layout from '../layout'
const Scale = React.lazy(() => import('../view/Scale/index'))
const Demos = React.lazy(() => import('../view/Demos/index'));
export const routes = [
    {
        path: '/',
        element: <Navigate to='/scale' />
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path:'scale',
                element: <Scale/>
            },
            {
                path: 'demos',
                element: <Demos/>
            }
        ]
    }
    ];
const routers = [...routes]

export default routers
