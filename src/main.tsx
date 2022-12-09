import React, {Suspense} from 'react'
import {Provider} from 'react-redux'
import store from '@/store/store'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css';
import './index.css'
import router from './router'
import '@/util/mock/index'
import {RouterProvider} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
        </Provider>

    </React.StrictMode>
)
