var userChoice = prompt("Which squad shall we send?[rock][paper][scissors]");
if(userChoice === rock) {
  userChoice = "Rock Squad"
}
if(userChoice === paper) {
  userChoice = "Paper Squad"
} else {
  userChoice = "Scissor Squad"
}
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "Rock Squad";
} else if(computerChoice <= 0.67) {
	computerChoice = "Paper Squad";
} else {
	computerChoice = "Scissor Squad";
} alert("The enemy general sent forth their" + computerChoice);
if(userChoice === computerChoice) {
  alert("tie")
}//this will be expanded upon
