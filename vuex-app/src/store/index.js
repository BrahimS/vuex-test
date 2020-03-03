import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        task: "First task",
        description: "This is the first task ever",
        status: "active"
      },
      {
        id: 2,
        task: "Second task",
        description: "Thi is the second task",
        status: "hold"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
