const display = document.getElementById("display")
let displayvalue = '';
function appendvalue(input){
    if(displayvalue ===0 && input !== '.' ){
        displayvalue = input
    }
    else{
        displayvalue += input;
    }
    display.innerText = displayvalue
}

function earseElement(){
    displayvalue = 0;
    display.innerText = displayvalue;
}

function calculate(){
    try{
        displayvalue = eval(displayvalue);
        display.innerText = displayvalue;
    }
    catch{
        display.innerText="error";
    }
}