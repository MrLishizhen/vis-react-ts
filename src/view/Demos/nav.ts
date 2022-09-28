const nav = [
    {
        path:'',
        name:'柱状图',
        hot:true,
        index:0,
        children:[
            {
                path:'../echart/bar',
                name:'柱状图1',
                index:1,
                hot:true,
            },{
                path:'',
                name:'变异柱状图',
                hot:false,
                index:1,
                children:[
                    {

                        path:'../echart/bar',
                        name:'柱状图2',
                        hot:false,
                        index:2
                    }
                ]
            }
        ]
    }
]

export default nav
