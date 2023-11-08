// ---------- confirmation modal
const modal = document.querySelector(".confirmation-modal")
const openBtn = document.querySelector(".reserve-now")
const backBtn = document.getElementById("modal-close")
const confirmBtn = document.getElementById("modal-confirm")

//open the modal
openBtn.onclick = function() {
    modal.classList.toggle('hidden')
}
//close the modal on back button
backBtn.onclick = function() {
    modal.classList.toggle('hidden')
}
//close modal when clicking outside it
window.addEventListener('click', function(event) {
    if (event.target === modal) (
        modal.classList.toggle('hidden')
    )
})
//confirm and go to succes.html
confirmBtn.addEventListener("click", function() {
    window.location.href = "success.html"
});

// ---------- Screensaver

function updateDateTime() {
    const now = new Date();

    //format time as hour:minute
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const timeString = `${hours}:${minutes}`

    // Format the date as weekday, date month"
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const dateString = now.toLocaleDateString('en-US', options);

    document.getElementById('screensaver-time').textContent = timeString;
    document.getElementById('screensaver-date').textContent = dateString;
}

updateDateTime();

setInterval(updateDateTime, 60000);
// Function to activate the screensaver
function displayFlex() {
    screensaver.style.display = 'flex';
}
function activateScreensaver() {
    updateDateTime();
    console.log("Activating screensaver"); // Debugging line
    screensaver.style.opacity = '1';
  }
  
  function displayNone() {
    screensaver.style.display = 'none';
  }
  // Function to hide the screensaver
  function deactivateScreensaver() {
    console.log("Deactivating screensaver"); // Debugging line
    screensaver.style.opacity = '0';
    resetTimer(); // Reset the timer when the screensaver is deactivated
  }
  
  
  // Resets the inactivity timer
  function resetTimer() {
    console.log("Resetting timer"); // Debugging line
    timer = setTimeout(displayFlex, 2000)
    timer = setTimeout(activateScreensaver, 5000); // Set the time for 5 seconds for testing
}
  
  // Adding back the screensaver click event listener
  screensaver.addEventListener('click', () => {
    console.log("Click detected on screensaver, deactivating screensaver"); // Debugging line
    deactivateScreensaver();
    displayNone();
  });
  
  // Initialize the timer when the page loads
  window.onload = resetTimer;
  