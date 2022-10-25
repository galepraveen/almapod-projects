let num1 = Number(prompt("enter first number: "))
let num2 = Number(prompt("enter second number: "))

let sum = `<p> sum is <b>${num1 + num2}</b> </p>`
let sub = `<p> sub is <b>${num1 - num2}</b> </p>`
let mul = `<p> mul is <b>${num1 * num2}</b> </p>`
let div = `<p> div is <b>${num1 / num2}</b> </p>`

const arithm = document.querySelector('.arithmetic')
arithm.innerHTML += sum
arithm.innerHTML += sub
arithm.innerHTML += mul
arithm.innerHTML += div

const comp = document.querySelector(".comparision");
comp.innerHTML += `<p> Equal or not: <b>${num1 === num2}</b> </p>`

const logic = document.querySelector(".logic")
logic.innerHTML += `<p>Greater or not: <b>${num1 >= num2}</b> </p>`

const type = document.querySelector(".type")
type.innerHTML += `<p> Type of first number is : <b> ${typeof(num1)}</b> </p>`
type.innerHTML += `<p> Type of second number is : <b> ${typeof(num2)}</b> </p>`