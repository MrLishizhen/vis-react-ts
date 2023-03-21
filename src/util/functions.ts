export let deepClone = (obj:any)=>{
    //判断是对象还是数组
    let objClone:any = Array.isArray(obj)?[]:{};
    //判断obj是一个对象
    if(obj && typeof obj ==="object"){
        //遍历obj的key值
        for(let key in obj){
            //确认拿到的不是obj继承来的属性
            if(obj.hasOwnProperty(key)){
                //如果说obj的属性或者方法也是一个对象的话
                if(obj[key] && typeof obj[key] === "object"){
                    //调用自身，把key值传进去
                    objClone[key] = deepClone(obj[key]);
                }else{
                    //说明仅仅是个属性
                    objClone[key] = obj[key];
                }
            }
        }
    }
    //return 拷贝后的对象
    return objClone;
}

export const time = new Date().getTime()
