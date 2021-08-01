browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("Hello from the background");
  chrome.storage.local.set({ isPasted: false }, function() {
    console.log("Value is set to " + false);
  });
  chrome.storage.local.set({ username: null }, function() {
    console.log("Value is set to " + null);
  });
  chrome.storage.local.set({ password: null }, function() {
    console.log("Value is set to " + null);
  });
  // chrome.storage.local.set({ isLogged: null }, function() {
  //     console.log("Value is set to " + null);
  //   });
  window.localStorage.setItem("isLogged", null);
  browser.tabs.executeScript({
    file: "content-script.js",
  });
});



chrome.storage.local.get(["isPasted"], function(result) {
  if (result.isPasted === true) {
    let para = document.getElementsByTagName("p");
    for (i of para) {
      i.style["background-color"] = "#FF00FF";
    }
    console.log("isPasted works ");
    chrome.storage.local.set({ isPasted: false }, function() {
      console.log("Value is set to " + false);
    });
  }
});

window.localStorage.setItem("display", false);
window.localStorage.setItem("test", "this works");
