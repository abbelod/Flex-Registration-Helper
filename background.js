let reloadInterval = null;
let targetTabId = null;

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "START_MONITORING") {
    if (reloadInterval) return;

    targetTabId = msg.tabId;

    reloadInterval = setInterval(() => {
      chrome.tabs.reload(targetTabId);
    }, 20000); // 10 seconds
  }

  if (msg.action === "STOP_MONITORING") {
    clearInterval(reloadInterval);
    reloadInterval = null;
  }

  if (msg.action === "REGISTRATION_OPEN") {
    clearInterval(reloadInterval);
    reloadInterval = null;
  }
});
