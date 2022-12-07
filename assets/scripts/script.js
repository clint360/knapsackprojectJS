let addButtonElement = document.getElementById("add");
let status = document.getElementById("status");
let clicked = document.getElementById("clicked");
let inputData = document.querySelector('.input').value;
let state = document.getElementById("state")
let finInputData = parseInt(inputData.value);
 
document.querySelector('.input').addEventListener('click', () => {
  console.log(inputData)
})

function getData() {
  let weightCount = 0;
  let valueCount = 0;
  let sumOfWeights = 0;
  let sumOfValues = 0;

  addButtonElement.addEventListener("click", () => { 
    if (sumOfWeights >= finInputData) {
      addButtonElement.disabled = true;
      state.textContent = "KnapSack Full!";
      state.style = "background: red; animation: shake"
      addButtonElement.style = "display: none"
    }

    weightCount++;
    valueCount++;
    sumOfWeights += items[weightCount].weight;
    sumOfValues += items[valueCount].value;
    clicked.textContent = ''

    status.textContent = "Weight:" + " " + sumOfWeights + "kgs" + 
    "  " + "Value:" + " " + sumOfValues + "FCFA";    
    clicked.textContent += items[0].name + "; ";
});
}
