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

