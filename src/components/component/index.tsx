import React, {useEffect, useState} from 'react';
// @ts-ignore
import * as echarts from 'echarts';
import styles from './index.module.less'
import {deepClone} from "../../util/functions";
import DATA from './data'

interface Component {
    link?: string,
}

type EChartsOption = echarts.EChartsOption


const modules = import.meta.glob('../echart/*/*')
const Component: React.FC<Component> = (props) => {
    const {link = ''} = props;
    const [Component_is, setComponent] = useState<React.ElementType>()
    const [select_data, set_select_data] = useState<EChartsOption>({});
    //获取component_is 组件
    useEffect(() => {
        const URL = '../echart/' + link + '/index.tsx'
        if (link) {
            const Com = React.lazy(modules[`${URL}`] as any)
            setComponent(Com);
            set_select_data(deepClone(DATA[link]));
        }
    }, [link])


    return (
        <div className={styles.com}>
            <div className={styles.top}>
                <select name="" id="">
                    <option value=""></option>
                </select>
            </div>
            <div className={styles.bom}>
                {
                    Component_is ? <Component_is/> : ''
                }

            </div>
        </div>
    )
}

export default Component;
