// Assignment code here
var number = ["0", "1", "2","3", "4","5", "6", "7", "8", "9", "0"];
var lowercase = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "<", ">"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Variable Declarations
var confirmLength = "";
var confirmSpecial;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;

// Starts the generatePassword function to prompt user how many characters they would like
function generatePassword(){
  var confirmLength = prompt("How many characters would you like your password to contain?");

  if(confirmLength >=8 && confirmLength<=128){
    var confirmSpecial = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumber = confirm("Click OK to confirm if you would like to include numbers");
    var confirmUppercase = confirm("Click OK to confirm if you would like to include uppercase letters");
    var confirmLowercase = confirm("Click OK to confirm if you would like to include lowercase letters");

  function getLowercase() {
      return lowercase[Math.floor(Math.random() * lowercase.length)];
  }
  
  function getUppercase() {
      return uppercase[Math.floor(Math.random() * uppercase.length)];
  }
  
  function getNumber() {
      return number[Math.floor(Math.random() * number.length)];
  }
  
  function getSymbol() {
      return special[Math.floor(Math.random() * special.length)];
  }

  var randomPassword = "";
  
      if (confirmUppercase) {
          randomPassword += getUppercase();
      }
  
      if (confirmLowercase) {
          randomPassword += getLowercase();
      }
  
      if (confirmNumber) {
          randomPassword += getNumber();
      }
  
      if (confirmSpecial) {
          randomPassword += getSymbol();
      }


    //creates an empty array. If statements take each single array and creates one array called passwordCharacters
    var passwordCharacters = [];
    var userChoices = 0;

    if(confirmSpecial){
      passwordCharacters = passwordCharacters.concat(special);
      userChoices++;
    }
    if(confirmNumber){
      passwordCharacters = passwordCharacters.concat(number);
      userChoices++;
    }
    if(confirmUppercase){
      passwordCharacters = passwordCharacters.concat(uppercase);
      userChoices++;
    }
    if(confirmLowercase){
      passwordCharacters = passwordCharacters.concat(lowercase);
      userChoices++;
    }

    console.log(userChoices);

    //creates password variable that adds each item in the array to the randomPassword
    for(var i=0; i < confirmLength-userChoices; i++){
      randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      console.log(randomPassword)
    }
    return randomPassword;

  }else{
    alert("Password length must be between 8-128 characters. Try Again!");
    var confirmLength = prompt("How many characters would you like your password to contain?");
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
