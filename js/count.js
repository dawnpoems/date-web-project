const countForm = document.querySelector(".count-form");
const countPrice = document.querySelector(".count-form__content__price");
const countReason = document.querySelector(".count-form__content__reason");
const countList = document.querySelector(".count-item");

let counts = [];

function saveCounts() {
  localStorage.setItem("counts", JSON.stringify(counts));
}

function deleteCount(event) {
  const li = event.target.parentElement;
  li.remove();
  counts = counts.filter((count) => count.id !== parseInt(li.id));
  saveCounts();
}

function paintCount(newCount) {
  const li = document.createElement("li");
  li.id = newCount.id;
  const priceSpan = document.createElement("span");
  priceSpan.innerText = newCount.price;
  const reasonSpan = document.createElement("span");
  reasonSpan.innerText = newCount.reason;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteCount);
  li.appendChild(priceSpan);
  li.appendChild(reasonSpan);
  li.appendChild(button);
  countList.appendChild(li);
}

function handleCountSubmit(event) {
  event.preventDefault();
  const newCountPrice = countPrice.value;
  const newCountReason = countReason.value;
  countPrice.value = "";
  countReason.value = "";
  const newCountObj = {
    price: newCountPrice,
    reason: newCountReason,
    id: Date.now(),
  };
  counts.push(newCountObj);
  paintCount(newCountObj);
  saveCounts();
}

// // 연관함수 참조하면서 다 넣어보기.

countForm.addEventListener("submit", handleCountSubmit);

const savedCounts = localStorage.getItem("counts");

let sumsum = 0;

if (savedCounts !== null) {
  const parsedCounts = JSON.parse(savedCounts);
  counts = parsedCounts;
  parsedCounts.forEach(paintCount);
  parsedCounts.forEach(calCount);
}

// let calnum = [];

function calCount(count) {
  pprice = count.price;
  sumsum = sumsum + parseInt(pprice);
  console.log(pprice);
  console.log(sumsum);
  // pprice.foreach((item) => {
  //   sumsum += item;
  // });
  // console.log(sumsum);
}
