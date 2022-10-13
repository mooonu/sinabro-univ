const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date(); // 이걸 전역변수로 설정하면 함수 실행시 저장된 시간만 나온다.
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());
  const seconds = String(date.getSeconds());

  clock.innerText = `${hours.padStart(2, "0")}:${minutes.padStart(
    2,
    "0"
  )}:${seconds.padStart(2, "0")}`;
}

getClock();
setInterval(getClock, 1000);
