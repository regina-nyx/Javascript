let timesRolled = 0;
let gameScore = 0;
let availableAssignments = 6;


function roll() {
  if (timesRolled < 3) {
    updateDice();
    timesRolled++;
  }
}


function rollDice() {
  let output = [];
  for (i = 0; i < 5; i++) {
    output.push(Math.floor(Math.random() * (6)) + 1);
  }
  diceSound ()
  return output;
}




function updateDice() {
  rolledDice = rollDice();
  for (let i = 0; i < rolledDice.length; i++) {
    let source = document.getElementById("die" + i + "Image").src;
    if (source.includes("dieWhite")) {
      document.getElementById("die" + i + "Image").src = "/yahtzee/img/dice/dieWhite_border" + rolledDice[i] + ".png";
    }
  }
}


function toggleHold(diceSelect) {
  let source = document.getElementById("die" + diceSelect + "Image").src;
  if (source.includes("dieWhite")) {
    document.getElementById("die" + diceSelect + "Image").src = document.getElementById("die" + diceSelect + "Image").src.replace("dieWhite", "dieRed");
  } else {
    document.getElementById("die" + diceSelect + "Image").src = document.getElementById("die" + diceSelect + "Image").src.replace("dieRed", "dieWhite");
  }
}


function assign(selectedNumber) {
  let countOfValidDice = 0;
  let scoreForThisRound = 0;


  for (let heldDieSrc of getHeldDice()) {
    if (selectedNumber === getDieValue(heldDieSrc)) {
      countOfValidDice++;
    }
  }

  scoreForThisRound = selectedNumber * countOfValidDice;
  document.getElementById(selectedNumber + "Count").innerHTML = countOfValidDice;
  document.getElementById(selectedNumber + "Score").innerHTML = scoreForThisRound;
  gameScore += scoreForThisRound;
  document.getElementById("totalScore").innerHTML = gameScore;

  availableAssignments--;

  if (availableAssignments === 0) {
    setTimeout(gameOver, 500);
  }

  resetRoll();

}
function resetRoll() {
  let resetDice = [];
  for (let dieImage of document.querySelectorAll(".die > img")) {
    dieImage.src = "/yahtzee/img/dice/dieWhite_border0.png";
  }

  timesRolled = 0;
  return resetDice;
}

localStorage.getItem("pastScore");

function gameOver() {
  alert("Game Over! You your score is " + gameScore + ". Good job!");
alert("Your previous score was " +pastScore)
  newGame();
}

localStorage.setItem("pastScore", gameScore);


function newGame() {

  document.getElementById("1Count").innerHTML = '<button onclick="assign(1)">Assign</button>';
  document.getElementById("2Count").innerHTML = '<button onclick="assign(2)">Assign</button>';
  document.getElementById("3Count").innerHTML = '<button onclick="assign(3)">Assign</button>';
  document.getElementById("4Count").innerHTML = '<button onclick="assign(4)">Assign</button>';
  document.getElementById("5Count").innerHTML = '<button onclick="assign(5)">Assign</button>';
  document.getElementById("6Count").innerHTML = '<button onclick="assign(6)">Assign</button>';

  document.getElementById("1Score").innerHTML = 0;
  document.getElementById("2Score").innerHTML = 0;
  document.getElementById("3Score").innerHTML = 0;
  document.getElementById("4Score").innerHTML = 0;
  document.getElementById("5Score").innerHTML = 0;
  document.getElementById("6Score").innerHTML = 0;
document.getElementById("totalScore").innerHTML = 0;
}



function getHeldDice() {
  let heldDice = [];
  for (let die of document.querySelectorAll(".die > img")) {
    if (die.src.includes("Red")) {
      heldDice.push(die.src);
    }
  }
  return heldDice;
}

function getDieValue(imageSource) {
  return Number(imageSource.split("/img/")[1].replace(/[^0-9]/ig, ""));
}


function diceSound(){ 
  var diceRoll = new Audio("https://yahtzee.robotictheater.repl.co/diceroll.mp3");

diceRoll.play();}







