// 外置的校验密码规则
export const validatePassword = (rule, value, callback) => {
    if (value.length < 6) {
        callback(new Error('密码不能少于6位'))
    } else {
        callback()
    }
}
