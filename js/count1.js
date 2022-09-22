const countForm = document.querySelector(".count-form");
const countPrice = document.querySelector(".count-form__content__price");
const countReason = document.querySelector(".count-form__content__reason");
const countList = document.querySelector(".count-item");
const totalcount = document.querySelector(".total__part__count");

function saveCounts() {
  localStorage.setItem("counts", JSON.stringify(counts));
}

function deleteCount(event) {
  const li = event.target.parentElement;
  li.remove();
  counts = counts.filter((count) => count.id !== parseInt(li.id));
  saveCounts();
  sumsum = 0;
  counts.forEach(calCount);
  paintcal();
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
  calCount(newCountObj);
  paintcal();
}

// // 연관함수 참조하면서 다 넣어보기.

countForm.addEventListener("submit", handleCountSubmit);

const savedCounts = localStorage.getItem("counts");

if (savedCounts !== null) {
  const parsedCounts = JSON.parse(savedCounts);
  counts = parsedCounts;
  parsedCounts.forEach(paintCount);
  parsedCounts.forEach(calCount);
  paintcal();
}

function calCount(count) {
  pprice = count.price;
  sumsum = sumsum + parseInt(pprice);
}

function paintcal() {
  totalcount.innerText = sumsum;
  paintTotalAll(sumsum, sumsum2);
}
