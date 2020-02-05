// select element from the DOM
const button = document.getElementById("btn");

// add event "click" event listner to the button.
// the function passed in will be invoked when the event happens
button.addEventListener("click", function() {
    console.log("Clicked");
});