// Assignment code here
let userChoice = " ";
let passLowercase;
let passUppercase;
let passNumber;
let passSpecialCharacter;

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let character =['!', '"', '#', '$','%','&','(',')', '*','+', ',' ,'-','.','/',':',';','<','=','>','?','@','[',']','^','_','`', '{', '|','}','~'];
let number =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let capLetter = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function generatePassword() {
 userChoice = (prompt("How many characters would you like in your password? Choose between 8 and 128 characters"));
while(userChoice < 8 || userChoice > 128){
  window.alert("Invalid Length");
  userChoice= (prompt("How many characters would you like in your password? Choose between 8 and 128 characters"));
  }

 ;


  passLowercase = confirm('Do you want your password to contain lowercase letters?');
  passUppercase = confirm('Do you want your password to contain uppercase letters?');
  passNumber = confirm('Do you want your password to contain numbers?');
  passSpecialCharacter= confirm('Do you want your password to contain special characters?');
 
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


