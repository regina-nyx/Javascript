
const diceNumbers = ["1", "2", "3", "4", "5", "6"];

function roll() {
  let randomIndex = Math.floor(Math.random() * (6));
  selectedNumber = diceNumbers[randomIndex];
  console.log (selectedNumber) 
}


diceNumbers2 = []

function roll2(){
   for(i=0; i<5; i++){
    number = Math.floor(Math.random() * (6))+1;
    diceNumbers2.push(number);
   }
  return diceNumbers2;
}
