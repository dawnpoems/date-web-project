const count2Form = document.querySelector(".count2-form");
const count2Price = document.querySelector(".count2-form__content__price");
const count2Reason = document.querySelector(".count2-form__content__reason");
const count2List = document.querySelector(".count2-item");
const total2count = document.querySelector(".total2__part__count");

let counts2 = [];

function saveCounts2() {
  localStorage.setItem("counts2", JSON.stringify(counts2));
}

function deleteCount2(event) {
  const li = event.target.parentElement;
  li.remove();
  counts2 = counts2.filter((count) => count.id !== parseInt(li.id));
  saveCounts2();
  sumsum2 = 0;
  counts2.forEach(calCount2);
  paintcal2();
}

function paintCount2(newCount) {
  const li = document.createElement("li");
  li.id = newCount.id;
  const priceSpan = document.createElement("span");
  priceSpan.innerText = newCount.price;
  const reasonSpan = document.createElement("span");
  reasonSpan.innerText = newCount.reason;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteCount2);
  li.appendChild(priceSpan);
  li.appendChild(reasonSpan);
  li.appendChild(button);
  count2List.appendChild(li);
}

function handleCountSubmit2(event) {
  event.preventDefault();
  const newCountPrice = count2Price.value;
  const newCountReason = count2Reason.value;
  count2Price.value = "";
  count2Reason.value = "";
  const newCountObj = {
    price: newCountPrice,
    reason: newCountReason,
    id: Date.now(),
  };
  counts2.push(newCountObj);
  paintCount2(newCountObj);
  saveCounts2();
  calCount2(newCountObj);
  paintcal2();
}

// // 연관함수 참조하면서 다 넣어보기.

count2Form.addEventListener("submit", handleCountSubmit2);

const savedCounts2 = localStorage.getItem("counts2");

if (savedCounts2 !== null) {
  const parsedCounts = JSON.parse(savedCounts2);
  counts2 = parsedCounts;
  parsedCounts.forEach(paintCount2);
  parsedCounts.forEach(calCount2);
  paintcal2();
}

function calCount2(count) {
  pprice = count.price;
  sumsum2 = sumsum2 + parseInt(pprice);
}

function paintcal2() {
  total2count.innerText = sumsum2;
  paintTotalAll(sumsum, sumsum2);
}
