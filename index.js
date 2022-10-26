let homeScore = 0
let awayScore = 0

document.getElementById("home-score").textContent = homeScore
document.getElementById("away-score").textContent = awayScore

function awardHome(points) {
  click.play()
  homeScore += points
  document.getElementById("home-score").textContent = homeScore
}

function awardAway(points) {
  click.play()
  awayScore += points
  document.getElementById("away-score").textContent = awayScore
}

function deductHome() {
  if (homeScore > 0) {
    click2.play()
    homeScore -= 1
    document.getElementById("home-score").textContent = homeScore;
  }
}

function deductAway() {
  if (awayScore > 0) {
    click2.play()
    awayScore -= 1
    document.getElementById("away-score").textContent = awayScore;
  }
}

function reset() {
  whoosh.play()
  homeScore = 0;
  awayScore = 0;
  document.getElementById("home-score").textContent = homeScore;
  document.getElementById("away-score").textContent = awayScore;
  resetClock();
}
