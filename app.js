let input = document.querySelector("#pass");
let btn = document.querySelector("#check");
let para = document.querySelector("#para");

btn.addEventListener("click", () => {
  let value = input.value;

  if (value.length > 0) {
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
  if (value.length < 4) {
    para.innerText = "Password is : Weak";
    para.style.color = "#ff5925";
  } else if (value.length >= 4 && value.length < 8) {
    para.innerText = "Password is: Medium";
    para.style.color = "yellow";
  } else if (value.length >= 8) {
    para.innerText = "Password is: Strong";
    para.style.color = "#26d730";
  }
});
