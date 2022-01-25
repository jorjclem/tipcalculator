let bill= Number (prompt ("What is your bill?"))
let total_bill = Number (bill * 0.07) + bill
let tip = Number (total_bill * 0.05)
let final_bill = Number (total_bill + tip)
document.body.innerHTML= final_bill