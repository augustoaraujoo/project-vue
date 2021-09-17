import { createStore } from "vuex";

export default createStore({
  strict:true,
  state: {
    user: {
      first_name: "jonys",
      last_name: "snow",
      email: "jon@gmail.com",
    },
  },
  /*Mutation
  this.$store.commit('saveFirstName',this.myName);*/
  mutations: {
    saveFirstName(state, payload) {
      state.user.first_name = payload;
    },
  },
  /* action
  this.$store.dispatch('saveFirstName',this.myName);
  Mutation*/
  actions: {
    saveFirstName(context, payload) {
      context.commit("saveFirstName", payload);
    },
  },
  modules: {},
});
