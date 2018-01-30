// const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65] - uses deprecated event.which values

const code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight",  "ArrowLeft", "ArrowRight", "b", "a"]  // use correct event.key values instead of deprecated event.which values

// var keysCaught = [];
// var konamiCodeEntered = false;
var correctKeysCounter = 0;

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', eventHandler)

}

function eventHandler(event) {
  console.log("event detail is: " + event.detail + "; event which is: " + event.which + "; event location is: " + event.location + "; event key is: " + event.key + "; event char is: " + event.char);
  if (event.key === code[correctKeysCounter]) { // seeing if equal to next key in code
    correctKeysCounter++;
    if (correctKeysCounter === code.length) {
        alert("Congrats --- you entered the Konami Code correctly.");
        correctKeysCounter = 0; // reset to try again
   }
} else {
    correctKeysCounter = 0; // reset and start looking again
}
  //alert("handler called");
}

init();
