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
var abc2 = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
  var allChars = [];
  // password conditions include a prompt or confirm and boolean if/else
  var passwordLength = prompt(
    "How many characters do you need your password to be?  Please choose between 8 and 128."
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "Password must be between 8 and 128 characters long! Please start over."
    );
  }
  // attempting arrays found on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  else {
    if (confirm("Should your password include numbers?")) {
      Array.prototype.push.apply(num);
    }
    if (confirm("How about lowercase letters?")) {
      Array.prototype.push.apply(abc);
    }
    if (confirm("Uppercase letters too?")) {
      Array.prototype.push.apply(abc2);
    }
    if (confirm("Lastly, how about special characters?")) {
      Array.prototype.push.apply(sym);
    } else {
      for (var i = 0; i < passwordLength; i++) {
        var random = Math.floor(Math.random() * allChars.length);
        password += allChars[random];
      }
    }
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
