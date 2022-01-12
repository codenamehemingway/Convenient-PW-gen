// Assignment code here

// setting Password variables
var abcLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var sym = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ",",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "^",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// button and prompt input variables:
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Prompts that come up after you click generate password
function generatePassword() {
  var passwordLength = prompt(
    "Please enter the number of characters you want for you new password.  Please choose between 8 and 128."
  );

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");

  var minimumCount = 8;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(pw) {
  document.getElementById("password").textContent = pw;
}
