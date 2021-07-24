console.log("Hello from the content-script");

 let para = document.getElementsByTagName("p");
 for (i of para) {
   i.style["background-color"] = "#FF00FF";
 }

import store from '../store'

//const Locust = require("@buttercup/locust");

// if (store.state.isPasted === true) {
//   getLoginTarget().enterDetails(store.state.username, store.state.password);
//   let para = document.getElementsByTagName("p");
//   for (i of para) {
//     i.style["background-color"] = "#FF00FF";
//   }
//    store.commit("pasted");
// }
localStorage.setItem("test", "works");
console.log(localStorage.getItem("test"));

 
