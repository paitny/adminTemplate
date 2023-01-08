export default
{
    path: '/mv',
    component: () => import('@/layout/index'),
    redirect: '/mv/mvManage',
    name: 'course',
    meta: {
        title: '视频',
        icon: 'role'
    },
    children: [
        {
            path: 'mvAdd',
            component: () => import('@/views/VideoManage/VideoAdd'),
            meta: {
                title: '添加视频',
                icon: 'personnel-info'
            },
        },
        {
            path: 'mvManage',
            component: () => import('@/views/VideoManage/VideoManager'),
            meta: {
                title: '管理视频',
                icon: 'link'
            },
        }
    ]
}
