// ts需要引入，并且要是用.tsx后缀
import React from 'react'
import {createBrowserRouter,} from "react-router-dom";

const Layout = React.lazy(() => import('../layout'))
const Scale = React.lazy(() => import('../view/Scale'))
const Demos = React.lazy(()=> import('../view/Demos'));

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path:'scale',
                element:<Scale/>
            },
            {
                path:'demos',
                element:<Demos/>
            }
        ]
    }
])

export default routers
