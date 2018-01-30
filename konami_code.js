const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// var keysCaught = [];
// var konamiCodeEntered = false;
var correctKeysCounter = 0;  // index into code array and counts # of correct key entries

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', eventHandler)

}

function eventHandler(event) {
  if (parseInt(event.which) === code[correctKeysCounter]) { // seeing if equal to next key in code
    correctKeysCounter++;
    if (correctKeysCounter === code.length) {
        window.alert("Congrats --- you entered the Konami Code correctly.");
        correctKeysCounter = 0; // reset to try again
   }
 } else {
   correctKeysCounter = 0; // wrong key - reset and start looking again
 }
  //alert("handler called");
}

//  init();
