document.getElementById("startButton").addEventListener("click", startCountdown);

function startCountdown() {
  const targetDateInput = document.getElementById("targetDate").value;
  if (!targetDateInput) {
    alert("Please select a valid date and time.");
    return;
  }

  const targetDate = new Date(targetDateInput);
  const timer = setInterval(() => {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "<h2>Countdown Complete!</h2>";
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }, 1000);
}