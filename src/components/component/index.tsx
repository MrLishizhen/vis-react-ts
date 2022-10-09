import React, {useEffect, useState} from 'react';
interface Component{
    link?:string,
}
const modules = import.meta.glob('../echart/*/*')
const Component:React.FC<Component> = (props)=>{
    const {link=''} = props;
    const [Component_is,setComponent] = useState<React.ElementType>()

    useEffect(()=>{
        const URL = '../echart/'+link+'/index.tsx'
        if(link){
            const Com = React.lazy(modules[`${URL}`] as any)
            setComponent(Com)
        }
    },[link])

    return (
            <>
                {
                    Component_is?<Component_is/>:''
                }
            </>
    )
}

export default Component;
