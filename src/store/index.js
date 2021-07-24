import { createStore } from "vuex";
import VuexWebExtensions from "vuex-webextensions";

export default createStore({
  plugins: [VuexWebExtensions()],
  state: {
    isLogged: false,
    isPasted: false,
    username: "",
    password: "",
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
      chrome.storage.local.set({ username: user.username }, function() {
        console.log("Value is set to " + user.username);
      });
      chrome.storage.local.set({ password: user.password }, function() {
        console.log("Value is set to " + user.password);
      });
      chrome.storage.local.set({ isPasted: true }, function() {
        console.log("Value is set to " + true);
      });
      state.password = user.password;
      state.isPasted = true;
    },
  },
  actions: {},
  modules: {},
});
