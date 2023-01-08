import {checkAdmin, checkLogin, login, logout} from "@/api/login";
import {ElMessage} from "element-plus";
import {getLocal, removeAllItem, setLocal} from "@/utils/storage";
import router from "@/router";
export default {
    //命名控件
    namespaced: true,
    state: () => {
        return {
            userInfo: getLocal('__userInfo__', {})
        }
    },

    actions: {
        loginFn(context, userInfo) {
            login(userInfo)
                .then(({data}) => {
                    if (!data.code) {
                        ElMessage({
                            showClose: true,
                            message: data.msg,
                            type: 'success',
                            grouping: true,
                        })
                        //修改stateUserInfo
                       let data2= JSON.parse(JSON.stringify(data.data));
                        context.commit('storeUserInfo', data2)
                        setLocal('__userInfo__', data2)

                        context.dispatch('route/getMenuRoute', null, {root: true})
                        //路由跳转
                        router.replace("/profile")

                    } else {
                        ElMessage({
                            showClose: true,
                            message: data.msg,
                            type: 'error',
                            grouping: true,
                        })
                    }
                })
        },
        logoutFn(context) {
            logout().then(({data}) => {
                if (!data.code) {
                    context.commit("storeUserInfo", {})
                    removeAllItem()
                    router.replace("/login")
                    ElMessage({
                        showClose: true,
                        message: data.msg,
                        type: 'success',
                        grouping: true,
                    })

                } else {
                    ElMessage({
                        showClose: true,
                        message: data.msg,
                        type: 'success',
                        grouping: true,
                    })
                }
            }).catch(err => {
                ElMessage({
                    showClose: true,
                    message: err,
                    type: 'error',
                    grouping: true,
                })
            })
        },
        checkLoginFn(context) {
            return new Promise((res, rej) => {
                checkLogin().then(({data}) => {
                    if (!data.code) {
                       // 已登录
                        context.commit('storeUserInfo', data.data)
                        setLocal('__userInfo__', data.data)
                    }
                    res(data.code)
                }).catch(err => {
                    rej(err)
                })
            })
        }
    },
    mutations: {
        storeUserInfo(state, userInfo) {
            state.userInfo = userInfo
        }
    },
}
