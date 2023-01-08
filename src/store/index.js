import { createStore } from 'vuex'
import user from "./modules/user"
import route from "@/store/modules/route";
import getters from "@/store/getters";
import app from "@/store/modules/app";
export default createStore({
  state: {
    //友链列表
    linkData: []
  },
  getters,
  mutations: {
    //更新友链信息
    updateLinkData(state, data) {
      state.linkData = data
    }
  },
  actions: {

  },
  modules: {
    user,route,app
  }
})
