var userChoice = prompt("Which squad shall we send?[rock][paper][scissors]");
switch(userChoice) {
  case "rock":
    alert("You sent forth Rock Platoon.");
    userChoice = 0;
    break;
  case "paper"
    alert("You sent forth Paper Brigade.");
    userChoice = 1;
    break;
  case "scissors":
    alert("You sent forth Scissors Squad.");
    userChoice = 2;
}
          
var computerChoice = Math.floor(Math.random() * 3);
switch(computerChoice) {
  case 0:
    alert("The enemy General sent forth their Rock Platoon.");
    break;
  case 1:
    alert("The enemy General sent forth their Paper Brigade.");
    break;
  case 2:
    alert("The enemy General sent forth their Scissors Squad.");
}

var whoWon = userChoice - computerChoice;
switch(whoWon) {
  case 0:
    alert("A Cease-Fire was issued.");
    break;
  case -1:
    alert("You called for a tactical retreat.");
    break;
  case -2:
    alert("The enemy was defeated.");
    break;
  case 1:
    alert("The enemy surrendered.");
    break;
  case 2:
    alert("Your army was needed at another location. RETREAT!");
}
