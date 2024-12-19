// Get the current date and time
function getCurrentTime() {
    const now = new Date();
    const days = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    return { days, hours, minutes, seconds };
  }
  
  // Update the clock display
  function updateClock() {
    const currentTime = getCurrentTime();
    document.getElementById("days").querySelector(".value").innerText = currentTime.days.toString().padStart(2, "0");
    document.getElementById("hours").querySelector(".value").innerText = currentTime.hours.toString().padStart(2, "0");
    document.getElementById("minutes").querySelector(".value").innerText = currentTime.minutes.toString().padStart(2, "0");
    document.getElementById("seconds").querySelector(".value").innerText = currentTime.seconds.toString().padStart(2, "0");
  }
  
  // Run the updateClock function every second
  setInterval(updateClock, 1000);
  
  // Initial update
  updateClock();