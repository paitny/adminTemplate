import {getLocal, setLocal} from "@/utils/storage";
import getRoutePool from "@/assets/js/handleData";

export default {
    namespaced: true,
    state: () => {
        return {
            sidebarOpened: getLocal("__sidebarOpened__"),
            tagsViewList: getLocal('__tagsViewList__', [])
        }
    },
    actions: {
        addTagsViewList(context, tag) {
            const routePool = getRoutePool()
            const isFindRoute = routePool.find(item => item.path === tag.path)
            if (!isFindRoute) return
            // 存在 继续判断在 tagsViewList中存不存在
            const isFindTag = context.state.tagsViewList.find(item => item.path === tag.path)

            // 不存在 则添加
            if (!isFindTag) {
                const arr = context.state.tagsViewList.concat(tag)
                context.commit('storeAddTagsViewList', arr)
                setLocal('__tagsViewList__', arr)
            }
        },
        removeTagsViewList(context, {type, index}) {
            let arr = context.state.tagsViewList.concat()
            switch (type) {
                case 'index':
                    // 删自己
                    arr.splice(index, 1)
                    break;
                case 'other':
                    // 删除自己之外的其他
                    arr = arr.splice(index, 1)
                    break;
                case 'right':
                    // 删除右侧所有
                    arr.splice(index + 1)
                    break;
            }
            setLocal('__tagsViewList__', arr)
            context.commit('storeAddTagsViewList', arr)
        }
    },
    mutations: {
        changeSidebarOpened(state) {
            state.sidebarOpened = !state.sidebarOpened
            setLocal("__sidebarOpened__", state.sidebarOpened)

        },
        storeAddTagsViewList(state, list) {
            state.tagsViewList = list
        }
    }
}
