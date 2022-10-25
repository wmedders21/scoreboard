let homeScore = 0
let awayScore = 0

document.getElementById("home-score").textContent = homeScore
document.getElementById("away-score").textContent = awayScore

function awardHome(points) {
  homeScore += points
  document.getElementById("home-score").textContent = homeScore
}

function awardAway(points) {
  awayScore += points
  document.getElementById("away-score").textContent = awayScore
}

function deductHome() {
  if (homeScore > 0) {
    homeScore -= 1
    document.getElementById("home-score").textContent = homeScore;
  }
}

function deductAway() {
  if (awayScore > 0) {
    awayScore -= 1
    document.getElementById("away-score").textContent = awayScore;
  }
}

function reset() {
  homeScore = 0
  awayScore = 0
  document.getElementById("home-score").textContent = homeScore
  document.getElementById("away-score").textContent = awayScore
}
