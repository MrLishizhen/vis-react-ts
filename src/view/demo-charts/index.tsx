import styles from './index.module.less'
import Component from '../../components/component'
import Nav_com from "./nav_com";
import {useState} from "react";

const Demos = () => {
    const [link,setLink] = useState('Bar')
    const getComponent = (val:string)=>{
        setLink(val)
    }
    return (
        <div className={styles.demo_box}>
            <main className={styles.main_box}>

                <Nav_com getComponent={(val:string)=>getComponent(val)}></Nav_com>
                <main>
                    <Component link={link}></Component>
                </main>
            </main>
        </div>
    )
}

export default Demos;
