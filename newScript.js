
function getRandomPassword() {
    var bigArray = [];
    var passwordPrompt = prompt("Please choose a number between 8 and 128 to determine the amount of characters in your password");
    var numberOfTimes = parseInt(passwordPrompt);
    if (numberOfTimes < 8 || numberOfTimes > 128) {
      alert("Please choose a number between 8 and 128")
  
    }
    else {
      var password = "";
      var specialCharYes = confirm("Would you like special characters in your password?");
      if (specialCharYes === true) {
        bigArray.push("@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".");
      }
      var numCharYes = confirm("Would you like numbers in your password?");
      if (numCharYes === true) {
        bigArray.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
      }
      var lowerCharYes = confirm("Would you like lower case letters in your password?");
      if (lowerCharYes === true) {
        bigArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
      }
      var upperCharYes = confirm("Would you like upper case letters in your password?");
      if (upperCharYes === true) {
        bigArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
      }
  
      // this is just to see if I have all the items in the bigArray
      console.log(bigArray);
  
  
  
      //this generates a password of the length of characters from the available characters
      for (var i = 0; i < numberOfTimes; i++) {
        var passwordChar = getRandomChar();
        password = password + passwordChar;
  
      }
      console.log(password);
  
      return password;
    }
  
    function getRandomChar(x) {
      var randomIndex = Math.floor(Math.random() * bigArray.length);
      var randomQ = bigArray[randomIndex];
  
      return randomQ;
    }
  }
  
  var generatePassword = document.getElementById("generate-password");
  generatePassword.addEventListener("click", function () {
    var randomPassword = getRandomPassword();
    var securePasswordElement = document.getElementById("text");
    securePasswordElement.innerHTML = randomPassword;
  });
  
  // get the copy to clipboard button
  var copyToClipboardButton = document.getElementById("copy-to-clipboard");
  
  // make the webpage "listen" to when the user clicks the button, and do something in response
  copyToClipboardButton.addEventListener("click", function () {
    // this function creates an "input" HTML element and sets its text to the text we want to copy, and then copies from it
    // (we never actually add it to the screen)
    
    // Create the input
    var copyArea = document.createElement("input");
  
    // Set the text of the input
    var mySecurePasswordElement = document.getElementById("text");
    var mySecurePasswordText = mySecurePasswordElement.innerHTML;
    copyArea.value = mySecurePasswordText;
  
    // We can add a temporary "input" element to our HTML to enable copying functionality (this doesn't seem to work on a "span" element)
    document.body.appendChild(copyArea);
  
    // this is like selecting all the text in the input box with ctrl+A (or highlighting it all)
    copyArea.select();
    // Make the webpage do the actual copy (same as if I pressed ctrl+C on the selected text from above)
    document.execCommand('copy');
  
    // But we have to remember to remove the "input" HTML element, so our page still looks nice and pretty
    document.body.removeChild(copyArea);
  });