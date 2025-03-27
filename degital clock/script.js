const time = document.getElementById("time");
const timeformat = document.getElementById("timeformat");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(showtime, 1000);
});

const showtime = () => {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let secs = date.getSeconds();
  let milisecs = date.getMilliseconds();
  hr = hr % 12 || 12;

  if (date.getHours()>= 12) timeformat.innerText = "pm";
  else timeformat.innerText = "am";

  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (secs < 10) secs = "0" + secs;

  time.innerHTML = `${hr} : ${min} :${secs}`;
};
