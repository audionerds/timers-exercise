function logToPage(message) {
  const logElement = document.createElement("p");
  logElement.textContent = message;
  document.body.appendChild(logElement);
}

function countDown(time) {
  let timer = setInterval(function () {
    time--;
    if (time <= 0) {
      clearInterval(timer);
      console.log("DONE!");
      logToPage("DONE!");
    } else {
      console.log(time);
      logToPage(time);
    }
  }, 1000);
}

countDown(10); //execution
