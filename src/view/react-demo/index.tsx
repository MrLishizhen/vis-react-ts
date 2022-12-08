import {Outlet} from "react-router-dom";
import styles from './index.module.less'
export default function ReactDemo(){
    return (
        <div className={styles.react_demo}>
            <Outlet></Outlet>
        </div>
    )
}
