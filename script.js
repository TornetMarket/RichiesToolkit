// -----------------------
// Login Functionality (for index.html)
// -----------------------
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  if (username === 'swiping.cc' && password === 'admin') {
    window.location.href = 'main.html';
  } else {
    document.getElementById('errorMessage').innerText = 'Invalid username or password.';
  }
});

// -----------------------
// Main Page Functionality (for main.html)
// -----------------------

// Clock functionality: update every second in 12-hour format
function updateClock() {
  const clockDiv = document.getElementById('clock');
  if (clockDiv) {
    const now = new Date();
    let hours = now.getHours();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // convert hour '0' to '12'
    let hoursStr = hours.toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    clockDiv.textContent = hoursStr + ":" + minutes + ":" + seconds + " " + ampm;
  }
}
setInterval(updateClock, 1000);
updateClock();

// Popup and Connect button functionality
const connectButton = document.getElementById('connectButton');
const popup = document.getElementById('popup');

if (connectButton && popup) {
  connectButton.addEventListener('click', function() {
    popup.style.display = 'block';
    // Initialize popup with SSID input
    popup.innerHTML = `
      <h3>Enter SSID to handshake</h3>
      <input type="text" id="ssidInput" placeholder="SSID">
      <button id="ssidEnterButton">Enter</button>
    `;
    
    document.getElementById('ssidEnterButton').addEventListener('click', function() {
      const ssid = document.getElementById('ssidInput').value.trim();
      if (ssid === "") return; // Ignore if input is empty
      
      // Display initial handshake message
      popup.innerHTML = `<p>Attempting handshake on: "${ssid}"</p>`;
      
      // Array of messages to simulate the hacking process
      const messages = [
        "Captured target IP...",
        "Bypassing security protocols...",
        "Using proxy to infiltrate server...",
        "Cracking encryption...",
        "Establishing secure connection...",
        "Finalizing connection..."
      ];
      
      let index = 0;
      // Function to show each message sequentially
      function showNextMessage() {
        if (index < messages.length) {
          popup.innerHTML = `<p>${messages[index]}</p>`;
          index++;
          // Delay between messages (1.5 seconds)
          setTimeout(showNextMessage, 1500);
        } else {
          // After all messages, display final connected message with a Close button
          popup.innerHTML = `<p>Connected to: "${ssid}"</p><button id="closePopupButton">Close</button>`;
          document.getElementById('closePopupButton').addEventListener('click', function() {
            popup.style.display = 'none';
          });
        }
      }
      
      // Start showing messages after a brief pause
      setTimeout(showNextMessage, 1500);
    });
  });
}
