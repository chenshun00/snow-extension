// This file is ran as a background script
console.log("Hello from background script!")

chrome.runtime.onMessage.addListener((request) => {
    console.log("Message received in background.js!", request);
});