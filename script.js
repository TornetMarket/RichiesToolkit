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
    const navFiles = document.getElementById("nav-files");
    // (navFiles remains unimplemented for now)
  
    // Define content for Home and Scripts panels
    const homeContent = `
        <div class="container" id="description-panel">
              <h2>Main</h2>
            <p>
              Welcome to Richie's Toolkit, designed for cyber security experts who know what they're doing and need access to powerful, underground tools that aren't available on the mainstream market.
            </p>
            <p>
                This toolkit is built by the founders of the luxurious Silk Road marketplace. Powered by Tornet Market, also known as Tornet, Richie's Toolkit was developed for those in need of a more sophisticated playground. It serves as a haven for elite cybersecurity specialists looking to explore and push the boundaries of ethical hacking and pentesting with unparalleled efficiency.
              </p>
          </div>

         <div class="container" id="terms-panel">
            <h2>Terms and Conditions</h2>
            <p>
              By using this site, you acknowledge that you are accessing advanced tools and features. Unauthorized usage or misuse of these tools may have legal consequences. Use at your own risk.
            </p>
            <p>
              - Any unauthorized access, penetration testing, or exploitation of systems without permission is illegal.
            </p>
            <p>
              - The developers of Richie's Toolkit are not responsible for any criminal activities conducted using these tools.
            </p>
            <p>
              - By accessing this toolkit, you agree that you are solely responsible for your actions and any consequences that arise.
            </p>
          </div>

         <div class="container" id="updates-panel">
              <h2>Updates</h2>
              <p><strong>02/25/25:</strong> Added Rootkit Features</p>
              <p><strong>02/18/25:</strong> Improved Payload Encryption</p>
              <p><strong>02/10/25:</strong> Enhanced GUI and UI responsiveness</p>
              <p><strong>02/01/25:</strong> Initial Toolkit Release</p>
           </div>
        </div>
    `;
  
    const scriptsContent = `
      <div class="container" id="scripts-panel">
        <h1>Hacking</h1>
        <button class="payload-btn">Grab IP</button>
        <button class="payload-btn">Ping IP</button>
        <button class="payload-btn">Infect Network</button>
        <button class="payload-btn">SSID Flood</button>
        <button class="payload-btn">Evil SSID</button>
        <button class="payload-btn">Bluetooth Flood</button>
        <button class="payload-btn">Evil Bluetooth</button>
        
      </div>

      <div class="container" id="scripts-panel">
        <h1>Rootkit</h1>
        <button class="payload-btn">Upload Rootkit</button>
        <button class="payload-btn">Infiltrate Network</button>
        <button class="payload-btn">Flood Network</button>
        <button class="payload-btn">Network Details</button>
        <button class="payload-btn">Network Traffic</button>
        
      </div>

      <div class="container" id="scripts-panel">
        <h1>Misc</h1>
        <button class="payload-btn">Take Note</button>
        <button class="payload-btn">Upload Message</button>
        
      </div>
    `;

    const filesContent = `
      <div class="container" id="scripts-panel">
        <h1>FILES/DOWNLOADS/TOR</h1>
        <button class="payload-btn">View Notes</button>
        
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

    // Event listener for Scripts nav item
    navFiles.addEventListener("click", () => {
        setActiveNav("nav-files");
        document.getElementById("content-panels").innerHTML = filesContent;
    });
  });
  
