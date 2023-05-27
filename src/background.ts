// console.log(chrome);
const whenInstalled = () => {
  console.log("installed");
  window.open("https://www.showwcase.com/devlopersabbir", "_blank");
};
chrome.runtime.onInstalled.addListener(whenInstalled);
