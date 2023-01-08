export default
{
    path: '/swiperMg',
    component: () => import('@/layout'),
    redirect: '/swiperMg/swiperManage',
    name: 'swiper',
    meta: {
        title: '文章',
        icon: 'article'
    },
    children: [
        {
            path: 'swiperAdd',
            component: () => import('@/views/SwiperManage/SwiperAdd'),
            meta: {
                title: '添加轮播图',
                icon: 'article-ranking'
            },
        },
        {
            path: 'swiperManage',
            component: () => import('@/views/SwiperManage/SwiperManager'),
            meta: {
                title: '管理轮播图',
                icon: 'article-create'
            },
        }
    ]
}
