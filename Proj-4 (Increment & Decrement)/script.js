    let countFive = 0;

      const countFiveDisplay = document.getElementById("countFive");
      const increaseFiveBtn = document.getElementById("increaseFiveBtn");

      increaseFiveBtn.addEventListener("click", function () {
        countFive = countFive + 5;
        countFiveDisplay.textContent = countFive;
      });
    let subFive = 100;

    const subFiveDisplay = document.getElementById("subFive");
    const decreaseFiveBtn = document.getElementById("decreaseFiveBtn");

    decreaseFiveBtn.addEventListener("click", function() {
    subFive = subFive - 5;
    subFiveDisplay.innerText = subFive;
});