import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  namespaced: true,

  modules: {},
});
