let num1 = Number(prompt("enter first number: "))
let num2 = Number(prompt("enter second number: "))

const add = (a,b) => a + b;
const sub = (a,b) => a - b;
const mul = (a,b) => a * b;
const div = (a,b) => a / b;
const mod = (a,b) => a % b;
const expo = (a,b) => a * a;


const res = document.querySelector('.res');

res.innerHTML += `
<p> add is <b> ${add(num1, num2)}</b> </p>
<p> sub is <b> ${sub(num1, num2)}</b> </p>
<p> mul is <b> ${mul(num1, num2)}</b> </p>
<p> div is <b> ${div(num1, num2)}</b> </p>
<p> mod is <b> ${mod(num1, num2)}</b> </p>
<p> expo of ${num1} is <b> ${expo(num1, num2)}</b> </p>
`