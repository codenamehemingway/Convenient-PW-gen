// Assignment code here

// setting Password variables
var abc = [
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
    "How many characters do you need your password to be?  Please choose between 8 and 128."
  );

  var num = confirm("Should your password include numbers?");

  var abc = confirm("How about lowercase letters?");

  var abc2 = confirm("Uppercase letters too?");

  var sym = confirm("Lastly, how about special characters?");

  var minimumCount = 8;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
