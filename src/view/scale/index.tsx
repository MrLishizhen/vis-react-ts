import { useEffect, useRef, useState  } from 'react'
import styles from './index.module.less'

const Scale = () => {
    const scale_box= useRef<any>(null)
    const scale = 1
    const designDraftWidth = 1920; //设计稿的宽度
    const designDraftHeight = 960; //设计稿的高度
    const handleScreenAuto = () => {
        
        //根据屏幕的变化适配的比例
        const scale =
            document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight
                ? document.documentElement.clientWidth / designDraftWidth
                : document.documentElement.clientHeight / designDraftHeight;
        //缩放比例
        scale_box.current.style.transform = `scale(${scale}) translate(0px, 0px)`;
    };
    useEffect(() => {
        handleScreenAuto();
        window.onresize = () => handleScreenAuto();
        return () => {
            window.onresize = null;
        }
    })
    return (
        <div className={styles.scale}>
            <div className={styles.scale_box} ref={scale_box} style={{width:designDraftWidth,height:designDraftHeight}}></div>
        </div>
    )
}

export default Scale;
