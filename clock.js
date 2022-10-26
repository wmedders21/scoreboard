var ssBtn = document.getElementById("start-stop-btn")
var minutes = 7;
var seconds = 59;
var x;
var time;
var whoosh = new Audio('audio/whoosh.mp3');
var buzzer = new Audio('audio/buzzer.mp3');
var click = new Audio('audio/click.mp3');
var click2 = new Audio('audio/click_2.mp3');
var tick = new Audio('audio/tick.mp3');

ssBtn.addEventListener("click", startTime);

function startTime() {
  ssBtn.removeEventListener("click", startTime);
  ssBtn.addEventListener("click", stopTime);
  x = setInterval(function() {
    tick.play()
    time = document.getElementById("count-down").innerHTML = String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');
    seconds -= 1
    if (seconds < 0) {
      seconds = 59;
      minutes -= 1;
    }
    if (minutes == -1) {
      buzzer.play()
     clearInterval(x);
     document.getElementById("count-down").innerHTML = "00:00";
   }
 }, 1000)
}

function stopTime() {
  clearInterval(x)
  document.getElementById("count-down").innerHTML = time;
  ssBtn.removeEventListener("click", stopTime);
  ssBtn.addEventListener("click", startTime);
}

function resetClock() {
  clearInterval(x)
  minutes = 7;
  seconds = 59;
  document.getElementById("count-down").innerHTML = "08:00";
  ssBtn.removeEventListener("click", stopTime);
  ssBtn.addEventListener("click", startTime);
}
