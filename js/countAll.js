const allSpan = document.querySelector(".total__all span");
const allCount = document.querySelector(".total__all__count");

let counts = [];
let sumsum = 0;
let sumsum2 = 0;

function paintTotalAll(sumsum, sumsum2) {
  if ((sumsum == 0) & (sumsum2 == 0)) {
    allSpan.innerText = "총 정산";
    allCount.innerText = "금액을 입력해주세요";
  } else if (sumsum == sumsum2) {
    allSpan.innerText = "와우 신기해라!!";
    allCount.innerText = "둘이 똑같이 냈어유!";
  } else if (sumsum > sumsum2) {
    allSpan.innerText = "밍구가 → 멩구에게";
    allCount.innerText = Math.abs(sumsum - sumsum2) / 2 + " 만큼 주세요~";
  } else {
    allSpan.innerText = "멩구가 → 밍구에게";
    allCount.innerText = Math.abs(sumsum - sumsum2) / 2 + " 만큼 주세요~";
  }
}

const body = document.body;
const main = document.getElementById("main-screen");

function handleResize() {
  const width = window.innerWidth;
  if (width > 1000) {
    main.style.flexDirection = "row";
    main.style.alignItems = "flex-start";
  } else {
    main.style.flexDirection = "column";
    main.style.alignItems = "center";
  }
}

window.addEventListener("resize", handleResize);
handleResize();
