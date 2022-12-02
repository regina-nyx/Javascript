let heldDice=[0,0,0,0,0];
let rolledDice=[0,0,0,0,0];


function roll() {
  updateDice();
}


function rollDice(){
  let output = [];
  for (i = 0; i < 5; i++) {
    output.push(Math.floor(Math.random() * (6)) + 1);
  }
  return output;
}


function updateDice() {
  rolledDice = rollDice();
  for(let i = 0; i < rolledDice.length; i++) {
    document.getElementById("die"+i+"Image").src="/yahtzee/img/dice/dieWhite_border"+rolledDice[i]+".png"; 
  }
}



function toggleHold (diceSelect){
   document.getElementById("die"+diceSelect+"Image").src = document.getElementById("die"+diceSelect+"Image").src.replace("dieWhite", "dieRed");
}

function toggleHold (diceSelect)
{
var t = document.getElementById("die"+diceSelect+"Image");
if(t.value=="ON"){
      t.value="OFF";}
elseif(t.value=="OFF"){
      t.value="ON";}
}