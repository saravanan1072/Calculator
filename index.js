let str = "";
let button = document.querySelectorAll(".button");

for (let i = 0; i < button.length; i++) {
  document.querySelectorAll(".button")[i].addEventListener("click", (e) => {
    if (e.target.innerText == "=") {
      str = eval(str);
      document.querySelector("input").value = str;
    } else if (e.target.innerText == "AC") {
      str = "";
      document.querySelector("input").value = str;
    } else if (e.target.innerText == "X") {
      str = str.slice(0, -1);
      document.querySelector("input").value = str;
    }
    else {
      str = str + e.target.innerText;
      document.querySelector("input").value = str;
    }
  });
}
