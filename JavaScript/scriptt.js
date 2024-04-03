const inputData = document.querySelector("input");
const button = document.querySelector("button");
function convertFahrenheit ()
    { return inputData.value * 9/5 + 32};

    //this is the function which add the new space with the result
function addSpace(){
    const targetDiv = document.querySelector("#result-container");
    const fahrenheit = convertFahrenheit();
    const HTMLString = `
    <p id="${fahrenheit}">${inputData.value} Celsius grades, converted to fahrenheit are ${fahrenheit}</p>
    `
    targetDiv.innerHTML += HTMLString; 
}

//with this we click on the button to call the function above
button.addEventListener("click", addSpace);

