const bottomEl = document.querySelector(".bottom");
const balanceEl = document.querySelector(".balance");
let balanceValue = 2500;
let html = "";
const itemArray = [
  {
    itemName: "one",
    itemPrice: 970,
  },
  {
    itemName: "two",
    itemPrice: 1500,
  },
  {
    itemName: "three",
    itemPrice: 2000,
  },
  {
    itemName: "four",
    itemPrice: 1200,
  },
  {
    itemName: "five",
    itemPrice: 1100,
  },
  {
    itemName: "six",
    itemPrice: 1050,
  },
  {
    itemName: "seven",
    itemPrice: 950,
  },
  {
    itemName: "eight",
    itemPrice: 1220,
  },
  {
    itemName: "nine",
    itemPrice: 1080,
  },
  {
    itemName: "ten",
    itemPrice: 1300,
  },
  {
    itemName: "eleven",
    itemPrice: 850,
  },
  {
    itemName: "twelve",
    itemPrice: 1480,
  },
];
balanceEl.textContent = balanceValue;
function htmlGenerator() {
  html = itemArray
    .map((el) => {
      return `<div class="card">
        <div class="card-name">${el.itemName}</div>
        <div class="card-price">${el.itemPrice}</div>
        <button class="btn" disabled>BUY</button>
        </div>`;
    })
    .join("");
}
htmlGenerator();
bottomEl.insertAdjacentHTML("beforeend", html);
// selecting card price
// console.log(bottomEl);
function comparingPrice() {
  const cardPriceEl = document.querySelectorAll(".card-price");
  cardPriceEl.forEach((el) => {
    el.textContent > balanceValue
      ? (el.classList.add("red"), (el.nextElementSibling.disabled = true))
      : (el.classList.add("green"), (el.nextElementSibling.disabled = false));
  });
}
comparingPrice();
const btnEl = document.querySelectorAll(".btn");
// adding click event to buy cards
function eventAdder() {
  btnEl.forEach(function (el) {
    el.addEventListener("click", function (e) {
      balanceValue = balanceValue - e.target.previousElementSibling.textContent;
      balanceEl.textContent = balanceValue;
      console.log(balanceValue);
      // console.log(e.target);
      comparingPrice();
    });
  });
}
eventAdder();
