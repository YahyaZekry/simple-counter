let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

// console.log(btns);

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e);
    const style = e.currentTarget.classList;

    if (style.contains("increase")) {
      count++;
    } else if (style.contains("decrease")) {
      count--;
    } else if (style.contains("reset")) {
      count = 0;
    }

    value.textContent = count;

    if (count > 0) {
      value.style.color = "red";
    } else if (count < 0) {
      value.style.color = "blue";
    } else {
      value.style.color = "black";
    }
  });
});
