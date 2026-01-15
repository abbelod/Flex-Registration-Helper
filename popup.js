document.getElementById("start").onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.runtime.sendMessage({
        action: "START_MONITORING",
        tabId: tabs[0].id
      });
    });
  };
  
  document.getElementById("stop").onclick = () => {
    chrome.runtime.sendMessage({ action: "STOP_MONITORING" });
  };
  