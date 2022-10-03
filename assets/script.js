// Assignment code here
let userChoice = " ";
let passLowercase;
let passUppercase;
let passNumber;
let passSpecialCharacter;
//creates arrays holding all the characters available for the password
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let character =['!', '"', '#', '$','%','&','(',')', '*','+', ',' ,'-','.','/',':',';','<','=','>','?','@','[',']','^','_','`', '{', '|','}','~'];
let number =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let capLetter = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// function asking how many characters the password should be
function generatePassword() {
 userChoice = (prompt("How many characters would you like in your password? Choose between 8 and 128 characters"));
if(userChoice < 8 || userChoice > 128){
  window.alert("Invalid Length");
  userChoice= (prompt("How many characters would you like in your password? Choose between 8 and 128 characters"));
  };
  //prompts asking which characters they want included in the password
  passLowercase = confirm('Do you want your password to contain lowercase letters?');
  passUppercase = confirm('Do you want your password to contain uppercase letters?');
  passNumber = confirm('Do you want your password to contain numbers?');
  passSpecialCharacter= confirm('Do you want your password to contain special characters?');
 
 if(passLowercase !== true && passUppercase !== true && passNumber !== true && passSpecialCharacter !==true){
  window.alert("Must meet at least ONE of the criteria listed");
  passLowercase = confirm('Do you want your password to contain lowercase letters?');
  passUppercase = confirm('Do you want your password to contain uppercase letters?');
  passNumber = confirm('Do you want your password to contain numbers?');
  passSpecialCharacter= confirm('Do you want your password to contain special characters?');
 }
 //pushes user-selected criteria into a new array to be used for randomization
let passCriteria = [];
if (passLowercase === true){
  passCriteria.push(alphabet);
}
if (passUppercase === true){
  passCriteria.push(capLetter);
}
if(passNumber === true){
  passCriteria.push(number);
}
if(passSpecialCharacter === true){
  passCriteria.push(character);
}
console.log(passCriteria);
//randomizes selected characters into a password

  let passCode = [];
  for(let i = 0; i < userChoice; i++) {
    let choosearray = passCriteria[Math.floor(Math.random()*passCriteria.length)];
    console.log(choosearray);
    let code = choosearray[Math.floor(Math.random()*choosearray.length)];
    console.log(code);
    passCode.push(code);
    console.log(passCode);
   
  }
  //removes the commas in between the password
  return passCode.join('');
  
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


