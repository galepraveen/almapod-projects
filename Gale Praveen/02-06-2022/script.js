const ans = Number(prompt('enter number between 0 - 6 '))

const day = document.querySelector('.day');

switch(ans) {
  case 0:
    day.textContent = "Sunday";
    break;
  case 1:
    day.textContent = "Monday";
    break;
  case 2:
     day.textContent = "Tuesday";
    break;
  case 3:
    day.textContent = "Wednesday";
    break;
  case 4:
    day.textContent = "Thursday";
    break;
  case 5:
    day.textContent = "Friday";
    break;
  case 6:
    day.textContent = "Saturday";
    break;
  default:
    day.textContent = "invalid day"
}

const items = ["apple", "banana", "kiwi", "orange"]

const forLoop = document.querySelector(".for")
for(let item of items){
  forLoop.innerHTML += `<p> ${item} </p>`
}

const whileLoop = document.querySelector(".while")
let i = 0
while(i < items.length){
  whileLoop.innerHTML += `<p> ${items[i]} </p>`
  i += 1
}

const doLoop = document.querySelector(".do-while")
i = 0;
do{
  doLoop.innerHTML += `<p> ${items[i]} </p>`
  i += 1
}while(i < items.length)

console.log("hello")
console.error("error")
console.warn("warning")