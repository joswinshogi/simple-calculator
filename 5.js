let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2

let sumEl = document.getElementById("sum-el")
function add(){
    let result = num1+num2
    sumEl.textContent= "Sum = " + result

}
let substractEl = document.getElementById("substract-el")
function substract(){
    let result = num1-num2
    substractEl.textContent= "Difference = " + result
}
let divideEl = document.getElementById("divide-el")
function divide(){
    let result = num1/num2
    divideEl.textContent= "Division = " +result

}
let multiplyEl = document.getElementById("multiply-el")
function multiply(){
    let result = num1*num2
    multiplyEl.textContent="Multiplication  = " +result
}