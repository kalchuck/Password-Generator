/*alert messages
alert ("Input following password criteria");
alert ("Length (must be between 8 and 128 characters)");
alert ("input Special characters");
alert ("input Numeric characters");
alert ("input Lowercase characters");
alert ("input Uppercase characters");





// function generatePassword(passwordLength) {
//     var numberChars = "0123456789";
//     var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var lowerChars = "abcdefghijklmnopqrstuvwxyz";
//     var allChars = numberChars + upperChars + lowerChars;
//     var randPasswordArray = Array(passwordLength);
//     randPasswordArray[0] = numberChars;
//     randPasswordArray[1] = upperChars;
//     randPasswordArray[2] = lowerChars;
//     randPasswordArray = randPasswordArray.fill(allChars, 3);
//     return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
//   }
  
// function shuffleArray(array) {
// for (var i = array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//  var temp = array[i];
// array[i] = array[j];
// array[j] = temp;
//  }
// return array;
// }

// document.getElementById("p").value = generatePassword();

// alert(generatePassword(12));



//generate random password
var Password = {
 
    _pattern : /[a-zA-Z0-9_\-\+\.]/,
    
    
    _getRandomByte : function()
    {
      
      if(window.crypto && window.crypto.getRandomValues) 
      {
        var result = new Uint8Array(1);
        window.crypto.getRandomValues(result);
        return result[0];
      }
      else if(window.msCrypto && window.msCrypto.getRandomValues) 
      {
        var result = new Uint8Array(1);
        window.msCrypto.getRandomValues(result);
        return result[0];
      }
      else
      {
        return Math.floor(Math.random() * 256);
      }
    },
    
    generate : function(length)
    {
      return Array.apply(null, {'length': length})
        .map(function()
        {
          var result;
          while(true) 
          {
            result = String.fromCharCode(this._getRandomByte());
            if(this._pattern.test(result))
            {
              return result;
            }
          }        
        }, this)
        .join('');  
    }    
      
  }



//function to copy password to clipboard
function copyPassword(){

document.getElementById("p").select();

document.execCommand("Copy");
alert("Password copied to clipboard!");

 }
*/

//User input and variable declaration


var passwordLength = prompt("Input password Length (must be between 8 and 128 characters)");
var specialChars = confirm("Would you like Special characters in your password");
var numericChars = confirm("Would you like Numeric characters in your password");
var lowerChars = confirm("Would you like Lowercase characters in your password");
var upperChars = confirm("Would you like Uppercase characters in your password"); 



// var inputValue = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

// var passwordLength = prompt("Input password Length (must be between 8 and 128 characters)");
var password = function inputChar (passwordLength, specialChars) {
var letters = /^[0-9a-zA-Z]+$/;
if(.str.match(letters))
{
  alert("Your input accepted");
//  document.form1.text1.focus();
//  return true;
}
else
{
  alert('Please enter valid input');
//  return false;
}
}

console.log inputCheck(5);



for (var i = 0; i < passwordLength; i++) {
  var num = Math.random();
  var char = lowerLetters[num];
}




/*var pwLength = passwordLength;
var spChars = "!@#$%^&*()_+/[\w ]+$/";
var nuChars = 1234567890;
var loChars = "abcdefghijklmnopqrstuvwxyz";
var upChars = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";



  // values are identical


    var input =