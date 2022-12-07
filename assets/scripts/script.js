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

const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");
const item6 = document.getElementById("item6");
const item7 = document.getElementById("item7");
const item8 = document.getElementById("item8");
const item9 = document.getElementById("item9");
const item10 = document.getElementById("item10");
const item11 = document.getElementById("item11");
const item12 = document.getElementById("item12");
const item13 = document.getElementById("item13");
const item14 = document.getElementById("item14");
const item15 = document.getElementById("item15");
const item16 = document.getElementById("item16");
const item17 = document.getElementById("item17");
const item18 = document.getElementById("item18");
const item19 = document.getElementById("item19");
const item20 = document.getElementById("item20");
