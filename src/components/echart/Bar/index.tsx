import styles from '../index.module.less'
import React from 'react';
import Echart from '../index'
// @ts-ignore
import * as echarts from 'echarts';
type EChartsOption = echarts.EChartsOption


const Bar:React.FC<{data:EChartsOption}> = ({data})=>{
    return (
        <div className={styles.echarts_box}>
            <Echart data={data}></Echart>
        </div>
    )
}

export default Bar
