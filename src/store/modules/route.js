import {getLocal, setLocal} from "@/utils/storage";
import {getRoute} from "@/api/menuRoute";

export default {
    namespaced: true,
    state: () => {
        return {
            menuRoute: getLocal('__menuRoute__', [])
        }
    },
    actions:{
        getMenuRoute(context) {
           getRoute().then(({data})=>{
              let arr= JSON.parse(JSON.stringify(data));
               context.commit('storeRoute',arr)
               setLocal("__menuRoute__",arr)
           })
        }
    },
    mutations: {
        storeRoute(state, menuRoute) {
            state.menuRoute = menuRoute
        }
    }
}
