console.log("File connected!");
generateButton = document.getElementById("generate-pin");
generatedValueField = document.getElementById("generated-value-field");

generateButton.addEventListener("click", function generateValue(event){
    event.preventDefault();
    generatedValueField.value = Math.round(Math.random() * 10000);

})