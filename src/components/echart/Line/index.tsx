import styles from "../index.module.less";
import Echart from "../index";
import React from "react";
import * as echarts from "echarts";
type EChartsOption = echarts.EChartsOption
interface option {
    option:EChartsOption
}

const Line:React.FC<{data:option}> = ({data})=>{
    return (
        <div className={styles.echarts_box}>
            <Echart data={data.option}></Echart>
        </div>
    )
}


export default Line
