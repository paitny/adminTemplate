import {createRouter, createWebHistory} from 'vue-router'
import userManage from './moudles/link'
import mv from './moudles/mv'
import articleManage from './moudles/article'
import swiper from "@/router/moudles/swiper";
const routes = [
    {
        path: "/",
        component: () => import("@/layout/index"),
        redirect: '/profile',
        children: [
            {
                path: "/profile",
                component: () => import("@/views/profile"),

                meta: {
                    title: '个人中心',
                    icon: "user"
                }
            }
        ]
    },
    {
        path: "/login",
        component: () => import("@/views/login")
    },
    {
        path: '/401',
        component: () => import('@/views/error-page/401'),
    },
    {
        path: '/404',
        component: () => import('@/views/error-page/404'),
    },
    {
        path: "/",
        component: () => import("@/layout/index"),
        children: [
            {
                path: "/feedback",
                component: () => import("@/views/ContactMessage"),

                meta: {
                    title: '反馈中心',
                    icon: "user"
                }
            }
        ]
    },
    {
        path: "/",
        component: () => import("@/layout/index"),
        children: [
            {
                path: "/userManage",
                component: () => import("@/views/User/UserManager"),

                meta: {
                    title: '用户管理',
                    icon: "user"
                }
            }
        ]
    },
    {
        path: "/",
        component: () => import("@/layout/index"),
        children: [
            {
                path: "/visitor",
                component: () => import("@/views/User/LatelyVisitor"),
                meta: {
                    title: '管理访客',
                    icon: "user"
                }
            }
        ]
    },

    articleManage,
    userManage,
    swiper,
    mv,



]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
