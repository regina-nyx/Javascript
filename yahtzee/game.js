let rolledDice = [0, 0, 0, 0, 0];
let timesRolled = 0;
let gameScore = 0;


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

//ADD SCORE FUNCTION
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


  /*------------------------------------------------------------------------------------
  CLASS 8 HOMEWORK
    Add functionality to reset the game after the numbers have been assigned so that the user can roll another round.
      
      1. Reset the dice to be blank and white
        ***HINT*** -- Look at the for loop in the getHeldDice function for how I selected all the die images, can you use something similar to reset all the die?
        The src value of a reset die would be "/yahtzee/img/dice/dieWhite_border0.png"
  
      2.  Reset the timesRolled variable to 0;
  ------------------------------------------------------------------------------------*/
function resetDice() {
  let resetDice = [];
    if (scoreForThisRound > 0) {
       document.getElementById("die" + i + "Image").src = "/yahtzee/img/dice/dieWhite_border0.png";
    }
  }
  return resetDice;
}

function resetRoll() {
  let resetRoll = [];
    if (scoreForThisRound > 0) {
       let (timesRolled =0)
  }
}

//******************************************
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





