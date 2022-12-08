import Axios from '@/util/http'
interface userLogin {
    userName:string,
    password:string,
    isRM:boolean
}
interface setUser {
    userName:string,
    password:string,
    email:string,
}
export function userLogin(data:userLogin){
    return Axios({
        "url":'/login',
        "method":"POST",
        "data":data,
        "loading":true
    })
}
export function setUser(data:setUser){
    return Axios({
        "url":'/set_user',
        "method":"POST",
        "data":data,
        "loading":true
    })
}
