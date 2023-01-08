export default {
    userInfo: (state) => state.user.userInfo,
    menuRoute: (state) => {
        return state.route.menuRoute.length ? state.route.menuRoute : [{
            path: '/profile',
            title: '个人中心',
            icon: 'user',
            children: []
        }]
    },
    sidebarOpened: (state) => state.app.sidebarOpened,
    tagsViewList: (state) => state.app.tagsViewList
}
