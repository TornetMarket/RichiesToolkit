document.addEventListener("DOMContentLoaded", function() {
    const passwordModal = document.getElementById("password-modal");
    const mainContent = document.getElementById("main-content");
    const submitButton = document.getElementById("password-submit");
    const passwordInput = document.getElementById("password-input");
    const errorMessage = document.getElementById("error-message");
  
    // Function to check the password
    function checkPassword() {
      const enteredPassword = passwordInput.value;
      // Updated password to "swiping.cc"
      if (enteredPassword === "swiping.cc") {
        passwordModal.classList.add("hidden");
        mainContent.classList.remove("hidden");
      } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
        passwordInput.value = "";
        // Clear the error message after 2 seconds
        setTimeout(() => {
          errorMessage.textContent = "";
        }, 2000);
      }
    }
  
    submitButton.addEventListener("click", checkPassword);
    passwordInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        checkPassword();
      }
    });
  
    // Navigation handling
    const navHome = document.getElementById("nav-home");
    const navScripts = document.getElementById("nav-scripts");
    // (navFiles remains unimplemented for now)
  
    // Define content for Home and Scripts panels
    const homeContent = `
      <div class="container" id="description-panel">
        <p>
          Welcome to Richie's Toolkit, designed for cyber security experts who know what they're doing and need access to powerful, underground tools that aren't available on the mainstream market.
        </p>
        <p>
          Tornet is not responsible for the use of this toolkit. Any actions taken using these tools are your own responsibility; Tornet is not liable for any misuse.
        </p>
      </div>
      <div class="container" id="terms-panel">
        <h2>Terms and Conditions</h2>
        <p>
          <strong>Terms and Conditions:</strong> By using this site, you acknowledge that you are accessing advanced tools and features. Unauthorized usage or misuse of these tools may have legal consequences. Use at your own risk.
        </p>
      </div>
    `;
  
    const scriptsContent = `
      <div class="container" id="scripts-panel">
        <button class="payload-btn">Grab IP</button>
        <button class="payload-btn">Ping IP</button>
        <button class="payload-btn">Infect Network</button>
        <button class="payload-btn">SSID Flood</button>
        <button class="payload-btn">Evil SSID</button>
        <button class="payload-btn">Bluetooth Flood</button>
        <button class="payload-btn">Evil Bluetooth</button>
        
      </div>
    `;
  
    // Function to set the active nav item
    function setActiveNav(selectedId) {
      const navItems = document.querySelectorAll(".navbar li");
      navItems.forEach(item => {
        if (item.id === selectedId) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }
  
    // Event listener for Home nav item
    navHome.addEventListener("click", () => {
      setActiveNav("nav-home");
      document.getElementById("content-panels").innerHTML = homeContent;
    });
  
    // Event listener for Scripts nav item
    navScripts.addEventListener("click", () => {
      setActiveNav("nav-scripts");
      document.getElementById("content-panels").innerHTML = scriptsContent;
    });
  });
  