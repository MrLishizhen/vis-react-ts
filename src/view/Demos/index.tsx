import styles from './index.module.less'
import Component from '../../components/component'
import Nav_com from "./nav_com";

const Demos = () => {

    return (
        <div className={styles.demo_box}>
            <header>

            </header>
            <main className={styles.main_box}>

                <Nav_com></Nav_com>
                <main>
                    <Component link={'bar'}></Component>
                </main>
            </main>
        </div>
    )
}

export default Demos;
