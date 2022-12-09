let addButtonElement = document.getElementById("add");
let status = document.getElementById("status");
let clicked = document.getElementById("clicked");
let inputData = document.querySelector(".input");
let state = document.getElementById("state");
let maxW = document.getElementById("max-w");
let data = parseInt(prompt("Input max weight"));
inputData.style = "display: none";
maxW.textContent = data;
inputData.value = data;
document.querySelector(".input").addEventListener("click", () => {
  console.log(inputData);
});

function getData() {
  let weightCount = 0;
  let valueCount = 0;
  let sumOfWeights = 0;
  let sumOfValues = 0;

  addButtonElement.addEventListener("click", () => {
    arr[weightCount].style = "display: none";
    weightCount++;
    valueCount++;
    sumOfWeights += items[weightCount].weight;
    sumOfValues += items[valueCount].value;
    clicked.textContent += items[weightCount].name + "; ";
    status.textContent =
      "Weight:" +
      " " +
      sumOfWeights +
      "kgs" +
      "  " +
      " Value:" +
      " " +
      sumOfValues +
      "FCFA";

    if (sumOfWeights >= data - 1) {
      addButtonElement.disabled = true;
      state.textContent = "KnapSack Full!   PRESS F5";
      state.style = "background: red; animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both; transform: translate3d(0, 0, 0); backface-visibility: hidden; perspective: 1000px";
      addButtonElement.addEventListener("click", () => {
        addButtonElement.style = "backround: red; animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both; ";
        state.style = "background: red; animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both; transform: translate3d(0, 0, 0); backface-visibility: hidden; perspective: 1000px";
      })
    }
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

arr = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
  item13,
  item14,
  item15,
  item16,
  item17,
  item18,
  item19,
  item20,
];

let items = [
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
];

getData();
