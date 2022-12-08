import React from 'react'

export const Scale = React.lazy(() => import('../view/scale/index'));
export const Demos = React.lazy(() => import('../view/demo-charts/index'));
export const ReactDemo = React.lazy(() => import('@/view/react-demo/index'));
export const ReactDemoLogin = React.lazy(() => import('@/view/react-demo/login/index'))
export const Views = React.lazy(() => import('@/view/react-demo/views'))
export const Welcome = React.lazy(()=>import('@/view/react-demo/welcome'))
