import React, {ChangeEvent, useEffect, useState} from 'react';
// @ts-ignore
import * as echarts from 'echarts';
import styles from './index.module.less'
import {deepClone} from "../../util/functions";
import DATA from './data'

type EChartsOption = echarts.EChartsOption
interface Component {
    link?: string,
}
interface Data {
    Bar:EChartsOption,
}

const modules = import.meta.glob('../echart/*/*')
const Component: React.FC<Component> = (props) => {
    const {link = ''} = props;
    const [key,setKey] = useState<string>("")
    const [Component_is, setComponent] = useState<React.ElementType>()
    const [select_data, set_select_data] = useState<EChartsOption>({});
    //获取component_is 组件
    useEffect(() => {
        const URL = '../echart/' + link + '/index.tsx'
        if (link) {
            const Com = React.lazy(modules[`${URL}`] as any)
            setComponent(Com);
            const data = deepClone(DATA[link as keyof Data]);
            set_select_data(data);

            setKey(Object.keys(data)[0])
        }
    }, [link])

    const selectChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        setKey(e.target.value)
        // console.log(e.target.value)
    }
    return (
        <div className={styles.com}>
            <div className={styles.top}>
                <select name="" id="" onChange={selectChange}>
                    {
                        Object.keys(select_data).map((u:string,index:number)=>{
                            return <option key={index} value={u}>{u}</option>
                        })
                    }
                </select>
            </div>
            <div className={styles.bom}>
                {
                    Component_is ? <Component_is data={select_data[key]}/> : ''
                }

            </div>
        </div>
    )
}

export default Component;
