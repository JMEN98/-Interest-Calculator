const calculateBtn = document.getElementById("calculate-btn");
const result = document.getElementById("result");

let calculate = () =>{
const p = Number(document.getElementById("principal").value)
const r = Number(document.getElementById("rate").value)
const t = Number(document.getElementById("time").value)
const d = Number(document.getElementById("duration").value)
   let simpleInterest =
d == "year" ? (p * r * t) / 100 : (p * r * t) / 1200;
let amount = p + simpleInterest;


result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
<div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
<div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;

} 

calculateBtn.addEventListener("click", calculate);
window.addEventListener("load", calculate);