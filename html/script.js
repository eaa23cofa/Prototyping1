//redirects to time reservation when clicking a button
document.querySelectorAll(".grid-item").forEach(function(element) {
    element.onclick = function() {
        location.href = "reservation-confirmation.html"
    }
})
//choose and reserve a washing machine
document.querySelectorAll(".reserve").forEach(function(element) {
    element.addEventListener('click', function() {
        this.classList.toggle("reserved")

        if (this.textContent === "RESERVE") {
            this.textContent = "RESERVED";
        } else {
            this.textContent = "RESERVE";
        }
    })
})


//loading screen
window.addEventListener('load', function() {
    // When the page has loaded, hide the loading overlay
    var loading = document.getElementById('loading');
    loading.style.display = 'none';
  });
  



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
window.addEventListener('click', function(outside) {
    if (outside.target === modal) {
        modal.classList.toggle('hidden')
    }
})


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('confirm-button')) {
        goToSuccess()
    }
})

function goToSuccess() {
    window.location.href = "success.html"
}

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
    screensaver.style.opacity = '1';
  }
  
  function displayNone() {
    screensaver.style.display = 'none';
  }
  function deactivateScreensaver() {
    screensaver.style.opacity = '0';
    resetTimer(); // Reset the timer when the screensaver is deactivated
  }
  
  // Resets the timer
  function resetTimer() {
    timer = setTimeout(displayFlex, 19000)
    timer = setTimeout(activateScreensaver, 20000);
}
  
  // Adding back the screensaver click event listener
  screensaver.addEventListener('click', () => {
    deactivateScreensaver();
    displayNone();
  });
  
  window.onload = resetTimer;

  
  