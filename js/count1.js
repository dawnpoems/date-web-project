const countForm = document.querySelector(".count-form");
const countPrice = document.querySelector(".count-form__content__price");
const countReason = document.querySelector(".count-form__content__reason");
const countList = document.querySelector(".count-item");
const totalcount = document.querySelector(".total__part__count");

const openClose = document.querySelector(".open-and-close");
const openCloseName = document.querySelector(".open-and-close__name");
const openCloseIcon = document.querySelector(".open-and-close__icon");

function handleOpenClose() {
  if (countList.style.display === "none") {
    countList.style.display = "block";
    openCloseName.innerText = "전체항목 닫기";
    openCloseIcon.innerText = "➖";
  } else {
    countList.style.display = "none";
    openCloseName.innerText = "전체항목 열기 (열어야 볼수있어요!)";
    openCloseIcon.innerText = "➕";
  }
}

openClose.addEventListener("click", handleOpenClose);

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
  const div = document.createElement("div");
  const priceSpan = document.createElement("span");
  priceSpan.innerText = newCount.price;
  const reasonSpan = document.createElement("span");
  reasonSpan.innerText = newCount.reason;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteCount);
  div.appendChild(priceSpan);
  div.appendChild(reasonSpan);
  li.appendChild(div);
  li.appendChild(button);
  countList.prepend(li);
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
