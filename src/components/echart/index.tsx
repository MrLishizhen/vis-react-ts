import {useEffect, useRef} from "react";
// @ts-ignore
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption
const Chart_box = () => {
    const chart = useRef(null);

    useEffect(() => {
        const myChart = echarts.init(chart);
        const option: EChartsOption = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                }
            ]
        };

        option && myChart.setOption(option);
    }, [])

    return (
        <div ref={chart} style={{width: '100%', height: '100%'}}></div>
    )
}

export default Chart_box
