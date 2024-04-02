const inputData = document.querySelector("input");
const button = document.querySelector("button");
function convertFahrenheit ()
    { return inputData.value * 9/5 + 32};

    
function addSpace(){
    const targetDiv = document.querySelector("#result-container");
    const fahrenheit = convertFahrenheit();
    const HTMLString = `
    <p id="${fahrenheit}">${inputData.value} fahrenheit grades, converted to Celsius are ${fahrenheit}</p>
    `
    targetDiv.innerHTML += HTMLString; 
}

button.addEventListener("click", addSpace);

