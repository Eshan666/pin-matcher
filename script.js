console.log("File connected!");
generateButton = document.getElementById("generate-pin");
generatedValueField = document.getElementById("generated-value-field");
keypad = document.getElementById("keypad");
inputField = document.getElementById("input-field");
submit = document.getElementById("submit-btn");
success = document.getElementById("success");
error = document.getElementById("error");


generateButton.addEventListener("click", function generateValue(event) {
    event.preventDefault();
    generatedValueField.value = Math.round(Math.random() * 10000);

})


keypad.addEventListener("click", function (event) {
    event.preventDefault();
    number = event.target.innerText;

    if (isNaN(number) && number == 'C') {
        inputField.value = "";

    }
    else {
        previousnumber = inputField.value;
        number = previousnumber + number;
        inputField.value = number;
    }
})

let tryCount = 3;
actionLeft = document.getElementById("action");

actionLeftNumeric = parseInt(document.getElementById("action").innerText);

console.log(actionLeft);
console.log(actionLeftNumeric);
submit.addEventListener("click", function (event) {
    event.preventDefault();
    
    
    if (actionLeftNumeric> 0) {
        if (generatedValueField.value == inputField.value) {
            success.style.display = "block";
            error.style.display = "none";

        }
        else if (generatedValueField.value != inputField.value) {
            success.style.display = "none";
            error.style.display = "block";

        }
        inputField.value = "" ;
        actionLeftNumeric-- ;
        actionLeft.innerText = actionLeftNumeric ;

        

    }
    else if (actionLeftNumeric == 0) {
        console.log("exceded")


    }

    

})