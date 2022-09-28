import React, {useEffect, useState} from 'react';
interface Component{
    link?:string,
}

const Component:React.FC<Component> = (props)=>{
    const {link=''} = props;
    const [Component_is,setComponent] = useState<React.ElementType>()
    useEffect(()=>{
        if(link){
            setComponent(React.lazy(() => import('../echart/Bar')))
        }
    },[])

    return (
            <>
                {
                    Component_is?<Component_is/>:''
                }
            </>
    )
}

export default Component;
