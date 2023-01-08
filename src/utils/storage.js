//获取回话存储
export const getSession = (key,type) => {

    let item=JSON.parse(sessionStorage.getItem(key))
    if (!item){
        item=type
    }
    return item
}
//设置会话存储值
export const setSession = (key, item) => {
    return setSession(key, item)
}


//获取回话存储
export const getLocal = (key, type) => {

    let item = JSON.parse(localStorage.getItem(key))
    if (String(item) === 'null') {
        item = type
    }
    return item
}

//设置会话存储值
export const setLocal = (key, item) => {
    return localStorage.setItem(key, JSON.stringify(item))
}
export const removeAllItem=()=>{
    localStorage.clear()
    sessionStorage.clear()
}
