const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
function Deleat() {
    var display = document.getElementById("display");
    var currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}
