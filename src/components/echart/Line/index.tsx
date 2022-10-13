import styles from "../index.module.less";
import Echart from "../index";
import React from "react";
import * as echarts from "echarts";
type EChartsOption = echarts.EChartsOption
const Line:React.FC<{data:EChartsOption}> = ({data})=>{
    return (
        <div className={styles.echarts_box}>
            <Echart data={data}></Echart>
        </div>
    )
}


export default Line
