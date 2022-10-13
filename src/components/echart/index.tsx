import React, {useEffect, useRef} from "react";
// @ts-ignore
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption
const Chart_box: React.FC<{ data: EChartsOption }> = (props) => {

    const {data = {}} = props;
    const myChart = useRef<any>(null);
    let option: EChartsOption = {};

    const resizeAll = () => {
        myChart.current.resize()
    }

    useEffect(() => {
        if (myChart.current) {
            window.removeEventListener('resize', resizeAll, false)
            myChart.current.dispose(document.getElementById('chart'));
        }
        const chart: HTMLElement | null = document.getElementById('chart')
        if (chart) {

            myChart.current = echarts.init(chart);

            option = data;
            option && myChart.current.setOption(option, true);
            window.addEventListener('resize', resizeAll, false)
        }
    }, [data])
    return (
        <div id='chart' style={{width: '100%', height: '100%'}}></div>
    )
}

export default Chart_box
