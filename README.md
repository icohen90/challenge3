# Password Generator Starter Code
 After setting up the the project and downloading the files I started thinking how I can set up the program and decided to start with creating 4 arrays for each option the user  can choose.

```
var number = ["0", "1", "2","3", "4","5", "6", "7", "8", "9", "0"];
var lowercase = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "<", ">"];
```

Next step was to declare variable to confirm the users input from the one prompt and 4 confirm statements.
```
var confirmLength = "";
var confirmSpecial;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
```
<ol>
  <li>First thing was adding the if else statement to define the working conditions.</li>
  <li>The next four functions will perform a random index on their array.<li>
  <li>After that I created the randomPassword variable and used 4 if statements to check what which characters the user wanted in their password.</li>
  <li>The next part is to insure that in the password each character that is chosen occurs at least once and is added to the password variable. The important part here is that the userChoicess password gets incremented if the user chooses that specific character.</li>
  <li>The next part was the hardest part, how can you take 4 separate arrays and make a password out of it. I decided to create an empty array and if the user chose to add 
    that array type to their password it adds that array to the empty array.</li>
  <li>Finally, you need a for loop to to generate the password but since the password already has characters in it equal to userChoicess in the for loop you have to take the length of the password the user wants and subtract the userChoices variable depending on how many characters they chose.</li>
</ol>

```
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
  ```
The rest of the code in the javascript was provided in the starter files. 

Below are three images of the Password Generator website
<img src="https://github.com/icohen90/challenge3/blob/main/start.PNG">
<img src="https://github.com/icohen90/challenge3/blob/main/middle.PNG">
<img src="https://github.com/icohen90/challenge3/blob/main/end.PNG">

<a href="https://icohen90.github.io/challenge3/"> Password Generator</a>
