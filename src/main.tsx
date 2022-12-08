import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css';
import './index.css'
import router from './router'
import '@/util/mock/index'
import {RouterProvider} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
)
