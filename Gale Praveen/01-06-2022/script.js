const age = Number(prompt("enter your age: "));

const res = age >= 18 ? "YES" : "NO";

const eligible = document.querySelector('.eligible')
eligible.textContent = res;

const ans = document.querySelector(".math");
ans.innerHTML += `
abs:    ${Math.abs(8.5)}<br>
ceil:   ${Math.ceil(8.5)} <br>
floor:  ${Math.floor(8.5)}<br>
round:  ${Math.round(8.235)}<br>
exp:    ${Math.exp(8)}<br>
random: ${Math.random()}<br>
pi:     ${Math.PI}<br>
max:    ${Math.max(10,20)}<br>
min:    ${Math.min(10,20)}<br>
`

