const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function updateClock() {
  const now = new Date();
  const hr = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const hrDeg = (hr + min / 60) * 30;
  const minDeg = (min + sec / 60) * 6;
  const secDeg = sec * 6;

  hour.style.transform = `translateX(-50%) rotate(${hrDeg}deg)`;
  minute.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
  second.style.transform = `translate(-50%, -50%) rotate(${secDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
