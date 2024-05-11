let display = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

//Array.from isse koi bhi chiz ko array banasakte
let buttonsArray = Array.from(buttons);
let string = "";
//foreach ki madad  sae hum nae sab btn ko varaiable bna diya
buttonsArray.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == 'DEL') {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else if (e.target.innerHTML == 'AC') {
      string = "";
      display.value = string;
    } else if (e.target.innerHTML == '=') {
      string = eval(string);
      display.value = string;

    } else {
      string += e.target.innerHTML;
      display.value = string;
    }
  });
});
