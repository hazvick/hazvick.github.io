let button = document.querySelectorAll("button").forEach(button=>{
    button.addEventListener("click", print)
})

// defining variables
let screen = document.getElementsByClassName("screen")[0];//skärmen aktiveras!
let equal = document.getElementById("equal");
let clear = document.getElementById("clearScreen");

// button activation
clear.addEventListener("click", clearScreen);//activates the clear button
equal.addEventListener("click", calculate);//activates the calculate button
clear.addEventListener("click", clearScreen);//activates the clear button

// prints value
function print() {
    screen.value=screen.value+ this.value;
}

// calculates input
function calculate() { 
    screen.value=eval(screen.value);
}

// clears input/output
function clearScreen() { 
    screen.value="";
}
