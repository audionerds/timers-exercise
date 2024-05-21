function randomGame() {
  let num;
  let times = 0;
  let timer = setInterval(function () {
    num = Math.random();
    times++;
    if (num > 0.75) {
      clearInterval(timer);
      console.log("It took " + times + " try/tries.");
    }
  }, 1000);
}

randomGame(); //execution
