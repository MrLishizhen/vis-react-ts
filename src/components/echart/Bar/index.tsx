import styles from '../index.module.less'
import React from 'react';
import Echart from '../index'
// @ts-ignore
import * as echarts from 'echarts';
type EChartsOption = echarts.EChartsOption
interface option {
    option:EChartsOption
}

const Bar:React.FC<{data:option}> = ({data})=>{
    // console.log(data)
    return (
        <div className={styles.echarts_box}>
            <Echart data={data.option}></Echart>
        </div>
    )
}

export default Bar
