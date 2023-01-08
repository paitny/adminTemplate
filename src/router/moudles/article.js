export default
{
    path: '/articleMg',
    component: () => import('@/layout'),
    redirect: '/articleMg/articleManage',
    name: 'article',
    meta: {
        title: '文章',
        icon: 'article'
    },
    children: [
        {
            path: 'articleAdd',
            component: () => import('@/views/ArticleManage/ArticleAdd'),
            meta: {
                title: '添加文章',
                icon: 'article-ranking'
            },
        },
        {
            path: 'articleManage',
            component: () => import('@/views/ArticleManage/ArticleManager'),
            meta: {
                title: '管理文章',
                icon: 'article-create'
            },
        }
    ]
}
