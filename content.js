CONFIG.MAKE_URL;
// Wait 3 seconds after page load
setTimeout(() => {
    const pageText = document.body.textContent;
  
    if (pageText.includes("Confirm Registration")) {
      // Registration is open!
      const alarm = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
      alarm.loop = true;
      alarm.play();
  
      alert("REGISTRATION IS OPEN!");
  
      // Optional: send webhook
      fetch(CONFIG.MAKE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: "Registration is OPEN",
          time: new Date().toISOString()
        })
      });
    } else {
      console.log("Registration still not active.");
    }
  }, 3000); // ⏳ wait 3 seconds
  