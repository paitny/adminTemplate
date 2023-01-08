import SvgIcon from "@/components/SvgIcon"

const svgRequire = require.context('./svg', false, /\.svg$/) // 返回require函数
svgRequire.keys().forEach(icon => {
    svgRequire(icon) // 完成webpack资源注册
});
export default (app) => {
    app.component('svg-icon', SvgIcon)
}
