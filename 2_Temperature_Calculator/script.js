let inputData = document.getElementsByTagName('input');
let outputField = document.getElementById('convertedOutput');
let inData = document.getElementById('temperature-input');


const displayOutput = (value) => {
    outputField.innerText = value;
    console.log("Output is ", value);
}

const toDegree = () => {
if (inputData != null) {
		let degree = parseInt(inputData[0].value);
		console.log(degree, " Degree is ", degree, " Ferenheit");
		displayOutput(degree);
		sampleAdd();
	}
	else {
		alert("Input a Correct Number");
	}
}

const toFerenheit = () => { 
if (inputData != null) {
		let degree = parseInt(inputData[0].value);
		let ferenheit = parseInt((degree * (9 / 5)) + 32);
		console.log(degree, " Degree is ", ferenheit, " Ferenheit");
		displayOutput(ferenheit);
	}
	else {
		alert("Input a Correct Number");
	}
}

const toKelvin = () => { 
if (inputData != null) {
		let degree = parseInt(inputData[0].value);
		let kelvin = parseInt(degree + 273);
		console.log(degree, " Degree is ", kelvin, " Ferenheit");
		displayOutput(kelvin);
	}
	else {
		alert("Input a Correct Number");
	}
}

const sampleAdd = () => {
	alert(inData.value);
}
