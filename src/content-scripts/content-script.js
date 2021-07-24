console.log("Hello from the content-script");

if (window.localStorage.getItem("test") === "this works") {
  let para = document.getElementsByTagName("p");
  for (i of para) {
    i.style["background-color"] = "#FF00FF";
  }
}

//import store from '../store'

const Locust = require("@buttercup/locust");

const speakeasy = require("speakeasy");
const secret = speakeasy.generateSecret({ length: 20 });
var token = speakeasy.totp({
  secret: "D7N6XSLLUZWVJGXQ",
});
console.log(token);

// if (store.state.isPasted === true) {
//   getLoginTarget().enterDetails(store.state.username, store.state.password);
//   let para = document.getElementsByTagName("p");
//   for (i of para) {
//     i.style["background-color"] = "#FF00FF";
//   }
//    store.commit("pasted");
// }

// chrome.storage.local.set({ key: "hey" }, function() {
//   console.log("Value is set to " + "hey");
// });
// chrome.storage.local.get(["key"], function(result) {
//   console.log("Value currently is " + result.key);
// });

let isPasted = false;
let username = "";
let password = "";

chrome.storage.onChanged.addListener((changes, namespace) => {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    if (key === "isPasted") {
      isPasted = newValue;
    }
    if (key === "username") {
      username = newValue;
    }
    if (key === "password") {
      password = newValue;
    }
    console.log(
      `Storage key "${key}" in namespace "${namespace}" changed.`,
      `Old value was "${oldValue}", new value is "${newValue}".`
    );
  }
 Locust.getLoginTarget().enterDetails(username, password);
});



console.log(window.localStorage.getItem("test"));
