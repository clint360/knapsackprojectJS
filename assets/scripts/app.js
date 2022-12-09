let inputElement = document.querySelector("#weight");
let doneButtonElement = document.getElementById('done');
let resetButtonElement = document.querySelector('.reset');
let selector = document.getElementById("items");
let display = document.getElementById('showscreen');
let currentWeight = 0;
let statusOfCode;
let count = 0;

function Knapsack() {
	if (inputElement.value == "") {
		inputElement.placeholder = "⚠️ Please Enter a value ";
		inputElement.style = " animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;"
	} else {
		selector.addEventListener("change", () => {

			if (currentWeight < inputElement.value) {

				display.innerHTML += selector.value + " ";

				for (let i = 0; i < itemValues.length; i++) {

					if (itemValues[i].name == selector.value) {

						currentWeight += itemValues[i].weight;
					}
				}
				for (let i = 0; i < itemValues.length; i++) {

					if (itemValues[i].weight + currentWeight > inputElement.value) {

						if (selector[i].value == itemValues[i].name) {

							selector[i].disabled = true;

							if (selector[i].disabled == true) {

								count++;
							}
							if (count == itemValues.length) {

								document.querySelector("#showscreen").style.background = "red";
								document.querySelector("#showscreen").style.color = "#fff";
							}
						}
					}
				}
				document.querySelector('#calc').innerHTML = "Current Weight is:" + " " + currentWeight;
			}
		})
	}

	resetButtonElement.addEventListener("click", () => {

	})


}

let itemValues = [
	{ name: "item 1", weight: 3, value: 300 },
	{ name: "item 2", weight: 1, value: 100 },
	{ name: "item 3", weight: 2, value: 400 },
	{ name: "item 4", weight: 1, value: 500 },
	{ name: "item 5", weight: 5, value: 700 },
	{ name: "item 6", weight: 4, value: 800 },
	{ name: "item 7", weight: 3, value: 500 },
	{ name: "item 8", weight: 2, value: 250 },
]
