let inputElement = document.querySelector("#input");
let doneButtonElement = document.getElementById('add');
let resetButtonElement = document.getElementById('reset');
let selector = document.querySelector("#selected");
let display = document.getElementById('clicked');
let currentWeight = 0;
let currentValue = 0;
let statusOfCode;
let count = 0;
let j = 0;

function Knapsack() {
  document.querySelector("#max-w").textContent = inputElement.value
	if (inputElement.value == "") {
		inputElement.placeholder = "⚠️ Please Enter a value ";
		inputElement.style = " animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;"
	} else {
		selector.addEventListener("change", () => {
      j++
			if (currentWeight < inputElement.value) {

				display.innerHTML += j + ". " + selector.value + "<br>" ;
        selector.value.disabled = true
				for (let i = 0; i < itemValues.length; i++) {

					if (itemValues[i].name == selector.value) {
            selector.value.disabled = true
						currentWeight += itemValues[i].weight;
            currentValue  += itemValues[i].value;
					}
				}
				for (let i = 0; i < itemValues.length; i++) {

					if (itemValues[i].weight + currentWeight > (inputElement.value - 1)) {
						if (selector[i].value === itemValues[i].name) {
							selector[i].disabled = true;
              document.querySelector("#state").style = "background: red";

							if (selector[i].disabled === true) {
  
								count++;
							}
							if (count === itemValues.length) {
								
							}
						}
					}
				}
        if(currentWeight >= (inputElement.value)) {
          document.querySelector("#state").style = "background: red";
          selector.addEventListener('change', () => {document.querySelector(".items").style = "animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;";})
      }
				document.querySelector('#status').innerHTML = "Current Weight:" + " " + currentWeight + "<br>" + "Current Value:" + " " + currentValue + "XAF";
			}
		})
	}
}

let itemValues = [
  { name: "iPhone13", weight: 0.75, value: 500000 },
  { name: "Laptop", weight: 3, value: 250000 },
  { name: "HeadPhones", weight: 0.25, value: 2000 },
  { name: "Yams", weight: 1, value: 1500 },
  { name: "TeddyBear", weight: 0.5, value: 4000 },
  { name: "Mango", weight: 0.5, value: 1000 },
  { name: "iMac", weight: 3, value: 300000 },
  { name: "Pillow", weight: 0.5, value: 1500 },
  { name: "Corn", weight: 0.5, value: 500 },
  { name: "Horn", weight: 0.75, value: 1500 },
  { name: "Trumpet", weight: 2, value: 13500 },
  { name: "Shacker", weight: 0.5, value: 2000 },
  { name: "Mouse", weight: 0.5, value: 2000 },
  { name: "Keyboard", weight: 1, value: 2500 },
  { name: "RCHelicopter", weight: 1, value: 10000 },
  { name: "USB Cable", weight: 0.25, value: 1000 },
  { name: "BluetoothSpeaker", weight: 1.5, value: 5000 },
  { name: "GamePads", weight: 1, value: 2000 },
  { name: "PS4", weight: 3, value: 200000 },
  { name: "iPad", weight: 2, value: 150000 },
]

resetButtonElement.addEventListener("click", () => {window.location.reload()})