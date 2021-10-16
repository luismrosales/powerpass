// Assignment code here
var characters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "+"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var lengthOf = prompt(
    "Select a number between 8 and 128 for the length of your password!"
  );
  if (!lengthOf || lengthOf < 8 || lengthOf > 128) {
    alert("Enter a number between 8 and 128!");
    return "Click button to try again";
  }
  selectedOption = [];

  var addCharacter = confirm("Would you like to add special characters?");
  if (addCharacter) {
    selectedOption = selectedOption.concat(characters);
  }
  var addLowerCase = confirm("Would you like to add lower case letters?");
  if (addLowerCase) {
    selectedOption = selectedOption.concat(lowerCase);
  }
  var addUpperCase = confirm("Would you like to add upper case letters?");
  if (addUpperCase) {
    selectedOption = selectedOption.concat(upperCase);
  }
  var addNumbers = confirm("Would you like to add numbers?");
  if (addNumbers) {
    selectedOption = selectedOption.concat(numbers);
  }

  var generatedPassword = "";
  for (var i = 0; i < lengthOf; i++) {
    var special = selectedOption[Math.floor(Math.random() * lengthOf)];
    generatedPassword = generatedPassword.concat(special);
  }

  return generatedPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
