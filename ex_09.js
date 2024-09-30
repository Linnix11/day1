var values = [
  "Arthur", 
    Math.random() * 5,
    Math.floor(Math.random() * (50 - 40 + 1) + 40),
    Math.random() < 0.5,
    "42"
];

var input_var = values[Math.floor(Math.random() * values.length)];

function displayThisText(str) {
    const outDiv = document.getElementById("out"); 
    if (outDiv.innerHTML !== '')
        outDiv.innerHTML += "<br>"; 
    outDiv.innerHTML += str; 
}


let type;

if (typeof input_var === 'string') {
    type = 'String'; 
} else if (typeof input_var === 'boolean') {
    type = 'Boolean'; 
} else if (Number.isInteger(input_var)) {
    type = 'Integer'; 
} else if (typeof input_var === 'number') {
    type = 'Float'; 
}


displayThisText(`La valeur de la variable est '${input_var}'`);
displayThisText(`Son type est '${type}'`);


if (input_var === "42") {
    displayThisText("It is the meaning of life.");
}
