// ts需要引入，并且要是用.tsx后缀
import React from 'react'
import {createBrowserRouter,} from "react-router-dom";

const Layout = React.lazy(() => import('../layout'))
const Scale = React.lazy(() => import('../view/Scale'))
const routers = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path:'scale',
                element:<Scale/>
            }
        ]
    }
])

export default routers
