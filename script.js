const author = document.querySelector("#author");
const calculation = document.querySelector("#calculation");
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length');
const color = document.querySelector('#color');

// define more constants and variables here
const btn_search = document.querySelector("#search");
const btn_reset = document.querySelector("#reset");


btn_toggle.onclick = () => {
  if(btn_toggle.innerText=="Display Calculation"){
      btn_toggle.innerText = "Display Author";
      let code = 630610757;
      let plus = length.value;
      let sum = code-plus;
      author.innerText = (sum).toString();
  }else{
      btn_toggle.innerText = "Display Calculation";
      author.innerText = "630610757 LAPASRADA KUMJULLA";
  }
}

// more codes for Search and Reset buttons here
btn_reset.onclick = () => {
  length.value =5;
} 

btn_search.onclick = () => {

}

const text = document.querySelector("#text");

// function searchWord() {
//   const num = length.value;
//   let word = word.length
//   let regExp = new RegExp(num, "gi");
//   text.innerHTML = (text.textContent).replace(regExp, "<mark>$&</mark>")


// }

