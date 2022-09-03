// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){ 
  // to be done
//   GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
  console.log("in generate password");

//variables
var passwordLength;
var includeLc;
var possiblePasswordChars = "0123456789!@#$%^&*()";
var lower="abcdefghijklmno";

//seris of prompts
//prompt for password length 
passwordLength = parseInt(window.prompt("passwordLength between 8 and 128"))
console.log("passwordLength = ", passwordLength);
if (passwordLength < 8 || passwordLength > 128 ){
  alert("Password Length must be between 8 and 128. Please try again.");
  return("password not generated. Try again.");
}

// prompt the user if they want to use lowercase in password

includeLc = window.confirm ("Click okay to include lowercase in password.");
console.log("includeLc = ", includeLc);
if (includeLc){
  possiblePasswordChars += lower;
  console.log("possiblePasswordChars = ", possiblePasswordChars);
}


// prompt the user if they want to use sepcial characters 

possiblePasswordChars = window.confirm ("Click okay to inculde special characters in password.")
console.log("possiblePasswordChars = ", possiblePasswordChars);
if (possiblePasswordChars){
   includeLc += characters;
   console.log("includeLc = ", includeLc);

}


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
