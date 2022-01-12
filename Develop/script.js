// Assignment code here

// setting variables
var abcUpper = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var sym = "!#$%&()*+,-./:;<=>?@^[]^_`{|}~";

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
