const nav = [
    {
        path:'',
        name:'柱状图',
        hot:true,
        index:0,
        children:[
            {
                path:'Bar',
                name:'柱状图1',
                index:1,
                hot:true,
            }
        ]
    },
    {
        path:'',
        name:'折线图',
        hot:false,
        index:0,
        children:[
            {
                path:'Line',
                name:'折线图1',
                index:1,
                hot:false,
            }
        ]
    }
]

export default nav
