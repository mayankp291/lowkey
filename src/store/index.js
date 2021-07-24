import { createStore } from "vuex";
import VuexWebExtensions from "vuex-webextensions";

export default createStore({
  plugins: [VuexWebExtensions()],
  state: {
    isLogged: false,
    isPasted: false,
    username: "",
    password: ""
  },
  mutations: {
    login(state) {
      state.isLogged = true;
    },
    logout(state) {
      state.isLogged = false;
    },
    pasted(state) {
      state.isPasted = false;
    },
    copydata(state, user) {
      state.username = user.username;
      localStorage.setItem("username", user.username);
      localStorage.setItem("password", user.password);
      state.password = user.password;
      state.isPasted = true;
    },
  },
  actions: {},
  modules: {},
});

