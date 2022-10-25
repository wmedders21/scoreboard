
function startTime() {
  var minutes = [...Array(15).keys()].reverse()
  var seconds = [...Array(60).keys()].reverse()
  var minuteCount = 0
  var secondCount = 0
  var x = setInterval(function() {
    document.getElementById("count-down").innerHTML = String(minutes[minuteCount]).padStart(2, '0') + ":" + String(seconds[secondCount]).padStart(2, '0');
    secondCount += 1
    if (secondCount == 59) {
      minuteCount += 1;
      secondCount = 0;
    }
    if (minuteCount == 15) {
     clearInterval(x);
     document.getElementById("count-down").innerHTML = "00:00";
   }
 }, 1000)
}
